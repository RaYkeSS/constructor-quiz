import { gql } from 'apollo-server';


export const userAnswerSchema = gql`
    type UserAnswer {
        id: ID!
        user: User! # Пользователь, ответивший на вопрос
        answer: Answer! # Ответ, который дал пользователь
        value: String # Значение ответа для текстовых вопросов
    }
`