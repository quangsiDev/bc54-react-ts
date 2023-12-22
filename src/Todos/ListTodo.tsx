import React from "react";
import { I_PropsList } from "./interface";

export default function ListTodo(props: I_PropsList) {
  return (
    <table className="table container">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Is Completed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <input
                  onClick={() => {
                    props.handleToggleChecked(item.id);
                  }}
                  type="checkbox"
                  checked={item.isCompleted}
                />
              </td>
              <td>
                <button
                  onClick={() => {
                    props.handleDelete(item.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
