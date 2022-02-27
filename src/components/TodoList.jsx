import React, { useEffect, useState } from "react";
import Accordion from "./Acordeon/Accordion";
import Formulario from "./Formulario";
import Todo from "./Todo";
import VencimientoTarea from "./VencimientoTarea";

const TodoList = () => {
  // estado que controla todas las tareas , para almacenarlas
  // la inicializamos con un array vacio

  const [todos, setTodos] = useState([]);

  //almacenamiento en el localStorage

  useEffect(() =>{
    if(localStorage.getItem('tareas')){
      setTodos(JSON.parse(localStorage.getItem('tareas')))
    }
  },[]);

  useEffect(() =>{
    localStorage.setItem('tareas', JSON.stringify(todos))
  },[todos])

  // funsion para agregar tareas nuevas a nuestro estado inicial

  const agregarTodo = (todo) => {
    console.log(todo);
    setTodos((old) => [...old, todo]);
  };

  // eliminar tarea creamo la funcion con el metodo filter que nos filtra y saca la tarea que buscamos por id
  // y nos devuelve el array o ojeto sin dicho item o objeto
  const eliminarTarea = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const completarTarea = (id) => {
    // recorro con una funcion map item por item pregunto si el item.id es igual al id que le paso
    // entonces devuelvo entre llaves ya que es un objeto una copia del item que es un objeto
    // pero modificando su estado a lo contrario que se encuentre si no es verdadero revuelvo el item

    const toggleTarea = todos.map((item) =>
      item.id === id ? { ...item, estado: !item.estado } : item
    );

    // con la siguienta llamda del estado remplazo el estado con lo ya editado qye seria mi constante del recorrido
    setTodos(toggleTarea);
  };

  // pasamos la fncion como props a nuestro pormulario lo hacemos agregando una propiedad a dicho formulario
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Formulario agregarTodo={agregarTodo} />
          </div>
          <div className="col-sm-8">
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            {todos.map((item, index) => (
                 <Accordion 
                 key={item.id}
                 todo={item}
                 index={index}
                 eliminarTarea={eliminarTarea}
                 completarTarea={completarTarea}
                 />
            ))}
           </div>
           
           <div className="row">
             {todos.map((item, index) => (
               <VencimientoTarea 
               key={item.id}
               index={index}
               todo={item}/>
             ))}
           
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
