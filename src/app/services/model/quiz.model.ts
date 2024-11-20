export interface QuizModel {
  type: boolean;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answer: string[];
}
