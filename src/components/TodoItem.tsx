"use client"

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, isChecked: boolean) => void
}

export function TodoItem({id, title, complete, toggleTodo}: TodoItemProps){
  return (
    <li>
      <input id={id} type="checkbox" defaultChecked={complete} 
      onChange={event => toggleTodo(id, event.target.checked)}/>
      <label htmlFor={id}>{title}</label>
    </li>
  )
}