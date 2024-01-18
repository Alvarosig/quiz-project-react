export interface Root {
    response_code: number
    results: QuestionData[]
}

export interface QuestionData {
    type: string
    difficulty: string
    category: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}