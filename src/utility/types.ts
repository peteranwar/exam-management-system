
export type TAnswer = {
    title: string,
    isCorrect: boolean,
    description?: string,
    id?: string

}

export type TQuestion = {
    quesTitle: string,
    answers: TAnswer[],
    quesDesc?: string,
    id?: string

}

export type TExam = {
    examTitle: string,
    questions: TQuestion[],
    examDesc?: string,
    id?: string
}