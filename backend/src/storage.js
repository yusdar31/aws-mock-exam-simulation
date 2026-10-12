// Compatibility exports; all bank operations use the transactional store.
export {
  readQuestions,
  insertQuestions as writeQuestions,
} from "./database.js";
