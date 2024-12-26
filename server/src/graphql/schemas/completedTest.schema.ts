import { gql } from 'apollo-server';


export const completedTestSchema = gql`
    type CompletedTest {
        id: ID!
        user: User! # Пользователь, который прошел тест
        test: Test! # Тест, который был пройден
        right: Int! # Количество правильных ответов
        wrong: Int! # Количество неправильных ответов
    }
`