import fetch from 'node-fetch';
import { ITodo } from '../types/Todo';

interface QueryParams {
  id: number
}
export default async function(_: any, { id }: QueryParams): Promise<ITodo> {
  const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const res = await req.json();
  return res;
}