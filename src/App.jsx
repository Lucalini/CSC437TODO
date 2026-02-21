import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import { AddTaskForm } from './AddTaskForm.jsx'
import { TodoItem } from './TodoItem.jsx'
import { Modal } from './Modal.jsx'

const MY_INITIAL_TASK_LIST = [
  { id: 'todo-0', name: 'Eat', isComplete: true },
  { id: 'todo-1', name: 'Sleep', isComplete: false },
  { id: 'todo-2', name: 'Repeat', isComplete: false },
]

function App() {
  const [taskList, setTaskList] = useState(MY_INITIAL_TASK_LIST)
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false)

  function addTask(name) {
    const newTask = { id: nanoid(), name, isComplete: false }
    const taskListClone = [...taskList, newTask]
    setTaskList(taskListClone)
    setIsAddTaskModalOpen(false)
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
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-900">To do</h1>
        <button
          type="button"
          className="rounded-md bg-sky-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
          onClick={() => setIsAddTaskModalOpen(true)}
        >
          Add Task
        </button>
      </div>

      <Modal
        headerLabel="Add a task"
        isOpen={isAddTaskModalOpen}
        onCloseRequested={() => setIsAddTaskModalOpen(false)}
      >
        <AddTaskForm onNewTask={addTask} />
      </Modal>

      <section className="space-y-3">
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
