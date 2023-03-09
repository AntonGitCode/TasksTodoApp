import React, { Component } from "react";
import Task from "./Task";

export default class TaskList extends Component {
  render() {
    const { todos, onDeleted, onToggleDone, statusFilter } = this.props;

    let filteredArray = [...todos];

    if (statusFilter === "active")
      filteredArray = todos.filter((el) => el.completed === "active");
    if (statusFilter === "completed")
      filteredArray = todos.filter((el) => el.completed === "completed");

    const elements = filteredArray.map((todo) => {
      const { id } = todo;

      return (
        <Task
          todo={todo}
          onDeleted={() => onDeleted(id)}
          key={id}
          onToggleDone={() => onToggleDone(id)}
        />
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}
