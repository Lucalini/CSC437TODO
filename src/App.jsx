import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import { AddTaskForm } from './AddTaskForm.jsx'
import { TodoItem } from './TodoItem.jsx'

const MY_INITIAL_TASK_LIST = [
  { id: 'todo-0', name: 'Eat', isComplete: true },
  { id: 'todo-1', name: 'Sleep', isComplete: false },
  { id: 'todo-2', name: 'Repeat', isComplete: false },
]

function App() {
  const [taskList, setTaskList] = useState(MY_INITIAL_TASK_LIST)

  function addTask(name) {
    const newTask = { id: nanoid(), name, isComplete: false }
    const taskListClone = [...taskList, newTask]
    setTaskList(taskListClone)
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, isComplete: !task.isComplete }
      } else {
        return task
      }
    })
    setTaskList(updatedTasks)
  }

  function deleteTask(id) {
    const updatedTasks = taskList.filter((task) => task.id !== id)
    setTaskList(updatedTasks)
  }

  return (
    <main className="m-4 max-w-xl space-y-6">
      <AddTaskForm onNewTask={addTask} />

      <section className="space-y-3">
        <h1 className="text-xl font-bold text-slate-900">To do</h1>
        <ul className="space-y-2">
          {taskList.map((task) => (
            <TodoItem
              key={task.id}
              id={task.id}
              name={task.name}
              isComplete={task.isComplete}
              onToggleComplete={toggleTaskCompleted}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
