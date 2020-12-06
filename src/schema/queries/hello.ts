interface QueryParams  {
  name?: string
}

export default function hello(_: any, { name = 'john' }: QueryParams): string {
  return `Hello ${name}`;
}
