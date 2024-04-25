import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo}) {

    
  return (
    <ul className="list">
      {todos.length === 0 && 'No todos'}
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />;
      })}
    </ul>
  );
}
