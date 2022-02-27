import React, { useState, useEffect, useRef } from "react";
import "./Accordion.css";
import Chevron from "./chevron.svg";

export default function Accordion({
  todo,
  index,
  eliminarTarea,
  completarTarea,
}) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
      <span className="boton-indice"><div className="indi">{index + 1}</div></span>
        <span>
          {todo.nombre}
        </span>
        <div className="boton-aco">{todo.fecha}</div>
        <div className="boton-aco">{todo.estado ? "Finalizado" : "Pendiente"}</div>
        <div className="boton-aco">{todo.prioridad && "Prioridad"}</div>
        <div className="accordion-icon">
          <img className={toggle ? "active" : undefined} src={Chevron} />
        </div>
      </button>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <p aria-hidden={toggle ? "true" : "false"}>{todo.descripcion}</p>
        <div className="footer-carta">
        <div className="btn-group">
          
          <button
            className="btn btn-primary"
            onClick={() => eliminarTarea(todo.id)}
          >
            Eliminar
          </button>
          
          <button className="btn btn-primary">Editar</button>
          
          <button
            className="btn btn-primary "
            onClick={() => completarTarea(todo.id)}
          >
            Completar
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
