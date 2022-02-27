import React from "react";

const Todo = ({ todo, index, eliminarTarea, completarTarea }) => {
  // const {id, nombre, descripcion, estado , prioridad} = todo; // destructuring para no escribir todo.nombre etc
  return (
    <>
      <tr>
        <th> {index + 1}</th>
        <th> {todo.nombre}</th>
        <th> {todo.descripcion}</th>
        <th> {todo.estado ? 'Finalizado' : 'Pendiente'} </th>
        <th> {todo.prioridad && 'Prioridad'} </th>
        <th>
          <button className="btn btn-primary me-2" onClick={() => eliminarTarea(todo.id)}>Eliminar</button>
          <button className="btn btn-primary me-2">Editar</button>
          <button className="btn btn-primary" onClick={() => completarTarea(todo.id)}>Completar</button>
        </th>
      </tr>
    </>
  );
};

export default Todo;
