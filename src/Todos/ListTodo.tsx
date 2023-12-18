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
        </tr>
      </thead>
      <tbody>
        {props.todos.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <input type="checkbox" checked={item.isCompleted} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
