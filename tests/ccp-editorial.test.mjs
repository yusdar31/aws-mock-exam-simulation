import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { normalizeQuestion, questionIssues } from '../backend/src/services/questionSchema.js';
const bank=JSON.parse(readFileSync('src/data/banks/ccp-id.json','utf8'));
const reviewed=bank.filter(q=>q.status==='approved');
test('CCP retains stable IDs, short reviewed prompts and complete publishable questions after editorial fixes',()=>{
  assert.equal(bank.length,395);
  assert.equal(reviewed.length,138);
  assert.equal(new Set(bank.map(q=>q.id)).size,bank.length);
  assert.equal(reviewed.filter(q=>q.difficulty==='foundational').length,35);
  for(const q of reviewed){
    assert.deepEqual(questionIssues(normalizeQuestion(q)),[],q.id);
    assert.ok(q.prompt.length<=600,q.id);
    assert.ok(q.version>=4,q.id);
    assert.ok(q.options.every(o=>!/(?:\bwith\b|\bwithout\b|\bonly\b|\balways\b|\bguaranteed\b|\bremove\b|\bdisable\b)/i.test(o.text)),q.id);
  }
});
test('revised foundation questions test concepts instead of syntax and give distinct option-specific explanations',()=>{
  for(const q of reviewed.filter(q=>q.difficulty==='foundational')){
    assert.ok(!/aws:|AssumeRole|64.000|IOPS|0\.0\.0\.0|redrive policy/.test(q.prompt),q.id);
    assert.equal(new Set(Object.values(q.optionExplanations)).size,4,q.id);
    assert.equal(q.verifiedAt,'2026-10-22');
  }
});
