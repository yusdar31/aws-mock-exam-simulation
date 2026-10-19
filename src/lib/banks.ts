import type { ExamType, Language, Question } from "../types";
const cache = new Map<string, Promise<Question[]>>();
const loaders = {
  "ccp-id": () => import("../data/banks/ccp-id.json"),
  "ccp-en": () => import("../data/banks/ccp-en.json"),
  "saa-id": () => import("../data/banks/saa-id.json"),
  "saa-en": () => import("../data/banks/saa-en.json"),
  "gcp-ace-id": () => import("../data/banks/gcp-ace-id.json"),
};
export function loadBank(
  examType: ExamType,
  lang: Language,
): Promise<Question[]> {
  const key = `${examType}-${lang}` as keyof typeof loaders;
  if (!Object.hasOwn(loaders, key)) return Promise.resolve([]);
  if (!cache.has(key))
    cache.set(
      key,
      loaders[key]()
        .then((module) => module.default as Question[])
        .catch((error) => {
          cache.delete(key);
          throw error;
        }),
    );
  return cache.get(key)!;
}
