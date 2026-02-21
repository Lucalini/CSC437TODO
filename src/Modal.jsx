import { useRef } from 'react'

export function Modal({ headerLabel, isOpen, onCloseRequested, children }) {
  const dialogRef = useRef(null)

  if (!isOpen) return null

  function handleOverlayClicked(e) {
    if (!dialogRef.current) return
    if (!dialogRef.current.contains(e.target)) {
      onCloseRequested?.()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
      onClick={handleOverlayClicked}
    >
      <div
        ref={dialogRef}
        className="w-full max-w-lg rounded-lg bg-white shadow-xl"
      >
        <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <div className="text-base font-semibold text-slate-900">
            {headerLabel}
          </div>
          <button
            type="button"
            aria-label="Close"
            className="rounded-md px-2 py-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 active:bg-slate-200 active:text-slate-900"
            onClick={onCloseRequested}
          >
            X
          </button>
        </header>

        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

