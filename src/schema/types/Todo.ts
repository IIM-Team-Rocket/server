import { gql } from "apollo-server-express";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todo = gql`
  type Todo {
    userId: Int
    id: Int
    title: String
    completed: Boolean
  }
`

export default Todo