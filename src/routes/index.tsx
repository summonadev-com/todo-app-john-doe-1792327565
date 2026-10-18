import { createFileRoute } from '@tanstack/react-router';
import { useTodos } from '@/hooks/useTodos';
import { TodoForm } from '@/components/TodoForm';
import { TodoList } from '@/components/TodoList';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { todos, add, toggle, edit, remove, clearCompleted } = useTodos();
  const remaining = todos.filter((t) => !t.done).length;
  const hasDone = todos.some((t) => t.done);

  return (
    <div className="mx-auto w-full max-w-xl px-4 py-12 sm:py-20">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Todo</h1>
        <p className="mt-1 text-sm text-neutral-500">
          {remaining === 0 ? 'All caught up' : `${remaining} task${remaining === 1 ? '' : 's'} remaining`}
        </p>
      </header>
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
        <TodoForm onAdd={add} />
        <div className="mt-4">
          <TodoList todos={todos} onToggle={toggle} onEdit={edit} onRemove={remove} />
        </div>
        {hasDone && (
          <button onClick={clearCompleted} className="mt-4 text-xs text-neutral-500 underline-offset-4 hover:underline">
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
}
