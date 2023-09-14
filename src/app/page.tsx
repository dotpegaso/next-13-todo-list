import { prisma } from "@/db";
import Link from "next/link";

import { TodoItem } from "@/components/TodoItem";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: {id}, data: { complete }})
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <>
      <header>
        <h1>Todos</h1>
        <Link href="/new">New Todo</Link>
      </header>

      <ul>
        {todos.map(todo => <TodoItem key={todo.id} toggleTodo={toggleTodo} {...todo} />)}
      </ul>
    </>
  );
}
