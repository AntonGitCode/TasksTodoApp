import React from "react";
import TodoList from "./Todo/TaskList";
import Context from "./context";
import NewTaskForm from "./Todo/AddTask";
import Footer from "./Todo/Footer";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: "completed", title: "Completed Task" },
    { id: 2, completed: "editing", title: "Editing Task" },
    { id: 3, completed: "active", title: "Active Task" },
  ]);

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTask(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: "active",
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onCreate={addTask} />
        </header>
        <section className="main">
          {todos.length ? <TodoList todos={todos} /> : <p> List is empty</p>}
          {<Footer todos={todos} />};
        </section>
      </section>
    </Context.Provider>
  );
}

export default App;
