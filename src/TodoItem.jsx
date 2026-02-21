import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export function TodoItem({ name, isComplete }) {
  return (
    <li className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-3 py-2">
      <label className="flex flex-1 items-center gap-3 text-slate-900">
        <input
          type="checkbox"
          className="h-4 w-4 accent-sky-600"
          checked={isComplete}
          disabled
        />
        <span className={isComplete ? 'text-slate-400 line-through' : ''}>
          {name}
        </span>
      </label>

      <button
        type="button"
        className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 active:bg-slate-200 active:text-slate-900"
        aria-label={`Delete ${name}`}
      >
        <FontAwesomeIcon icon={faTrash} title={`Delete ${name}`} />
      </button>
    </li>
  )
}

