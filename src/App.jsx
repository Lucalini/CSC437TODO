import './App.css'
import { AddTaskForm } from './AddTaskForm.jsx'
import { TodoItem } from './TodoItem.jsx'

function App() {
  return (
    <main className="m-4 max-w-xl space-y-6">
      <AddTaskForm />

      <section className="space-y-3">
        <h1 className="text-xl font-bold text-slate-900">To do</h1>
        <ul className="space-y-2">
          <TodoItem name="Eat" isComplete={false} />
          <TodoItem name="Sleep" isComplete={true} />
          <TodoItem name="Repeat" isComplete={false} />
        </ul>
      </section>
    </main>
  )
}

export default App
