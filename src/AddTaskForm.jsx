import { useState } from 'react'

export function AddTaskForm({ onNewTask }) {
  const [taskName, setTaskName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = taskName.trim()
    if (!trimmed) return

    onNewTask(trimmed)
    setTaskName('')
  }

  return (
    <form className="flex gap-3" onSubmit={handleSubmit}>
      <input
        placeholder="New task name"
        aria-label="New task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
      />
      <button
        type="submit"
        className="rounded-md bg-sky-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        Add task
      </button>
    </form>
  )
}

