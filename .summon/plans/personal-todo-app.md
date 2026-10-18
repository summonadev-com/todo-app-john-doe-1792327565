---
status: implemented
title: Personal minimal todo app with due dates
---

1. Add a Todo type in `src/types/todo.ts` (id, title, done, optional due date, created time). Outcome: shared type for the app.
2. Create `src/hooks/useTodos.ts` to manage the list (add, toggle, edit, delete, clear completed) and save it to the browser's local storage so tasks persist. Outcome: tasks survive page reloads.
3. Add `src/lib/dates.ts` with helpers to format due dates ("Today", "Tomorrow", "Mar 5") and detect overdue items. Outcome: friendly date labels.
4. Build components in `src/components/`:
   - `TodoForm.tsx`: text input plus optional date picker and Add button.
   - `TodoItem.tsx`: checkbox, title (strikethrough when done), due-date label (red when overdue), delete button, inline edit on double click.
   - `TodoList.tsx`: renders items, sorted with unfinished first, then by due date; shows an empty-state message.
   Outcome: full add/complete/edit/delete flow.
5. Update `src/routes/index.tsx` to compose a centered, narrow card layout with heading, remaining-task count, form, list and a "Clear completed" button. Outcome: the home page is the todo app.
6. Update `src/routes/__root.tsx` and `src/styles/global.css` for a clean minimal look: light neutral background, generous whitespace, one subtle accent colour, simple system font, and responsive spacing for mobile. Outcome: polished, minimal styling.
7. Verify it builds and typechecks, then save. Outcome: working app.
