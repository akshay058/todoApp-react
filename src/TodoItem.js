import React from "react";

export default function TodoItem({
  todo,
  onDeleteHandler,
  onEditHandler,
  handleCompleted,
}) {
  return (
    <div className="row mt-2 w-75">
      <div className="col-sm-4   col-lg-5 col-xl-4 fs-4 text-start ms-5">
        <span className="me-2" onClick={() => handleCompleted(todo)}>
          {todo.completed ? (
            <i className="fa-regular fa-square-check"></i>
          ) : (
            <i className="fa-regular fa-hourglass-half fa-sm pe-1"></i>
          )}
        </span>
        {todo.text}{" "}
      </div>
      <button
        className="col-2 offset-sm-1 offset-lg-1 offset-xl-1 btn btn-info me-3"
        onClick={() => {
          onEditHandler(todo.id, todo.text);
        }}
      >
        Edit
      </button>
      <button
        className="col-2 col-lg-2 col-xl-2 btn btn-danger"
        onClick={() => onDeleteHandler(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}
