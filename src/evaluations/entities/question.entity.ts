import { QuestionType } from "../enums/question-type.enum";


export class Question {

  question: string;

  description: string;

  type: QuestionType;

  options?: string[];
}
