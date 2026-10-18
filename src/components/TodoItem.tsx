import { useState } from 'react';
import type { Todo } from '@/types/todo';
import { formatDue, isOverdue } from '@/lib/dates';

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onRemove: (id: string) => void;
};

export function TodoItem({ todo, onToggle, onEdit, onRemove }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);
  const overdue = !todo.done && isOverdue(todo.due);

  function save() {
    const t = draft.trim();
    if (t) onEdit(todo.id, t);
    else setDraft(todo.title);
    setEditing(false);
  }

  return (
    <li className="group flex items-center gap-3 py-3">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        className="h-4 w-4 accent-indigo-600"
      />
      <div className="min-w-0 flex-1">
        {editing ? (
          <input
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={save}
            onKeyDown={(e) => {
              if (e.key === 'Enter') save();
              if (e.key === 'Escape') {
                setDraft(todo.title);
                setEditing(false);
              }
            }}
            className="w-full rounded border border-indigo-300 px-2 py-0.5 text-sm outline-none"
          />
        ) : (
          <span
            onDoubleClick={() => setEditing(true)}
            title="Double-click to edit"
            className={`block truncate text-sm ${todo.done ? 'text-neutral-400 line-through' : 'text-neutral-800'}`}
          >
            {todo.title}
          </span>
        )}
        {todo.due && (
          <span className={`text-xs ${overdue ? 'font-medium text-red-500' : 'text-neutral-400'}`}>
            {overdue ? 'Overdue · ' : ''}
            {formatDue(todo.due)}
          </span>
        )}
      </div>
      <button
        onClick={() => onRemove(todo.id)}
        aria-label="Delete task"
        className="text-neutral-300 hover:text-red-500 sm:opacity-0 sm:group-hover:opacity-100"
      >
        ✕
      </button>
    </li>
  );
}
