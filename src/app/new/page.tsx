import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server" // experimental function @ 13.4, see nextconfig

  const title = data.get('title')?.valueOf()

  if (typeof title !== 'string' || !title) {
    throw new Error('invalid title')
  }

  await prisma.todo.create({
    data: {title, complete: false }
  })

  redirect('/')
}

export default function Page() {
  return (
    <>
      <header>
        <h1>New Todo</h1>
        <Link href="/">Back to Homepage</Link>
      </header>

      <form action={createTodo}>
        <input type="text" name="title" placeholder="new task title" required />
        <button>create task</button>
      </form>
    </>
  );
}
