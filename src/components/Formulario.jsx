import React, { useState } from 'react';
import Swal from 'sweetalert2'; // libreria apra las alertas
import { v4 as uuidv4 } from 'uuid'; // para crear id { v4 as uuidv4 } de esta manera renombramos a esta libreria
import logo from "../simpsons.jpg";
import { useFormulario } from './hooks/useFormulario';

// pasamos agregar tarea como propiedad (props) colocamos la llave apra desestructurarlo y no tenes que poner props.gregarTodo
const Formulario = ({agregarTodo}) => {
   
  // estado inicial de nuestra aplicaion ... inicializamos con array vacios en la mayoria y otros con valores predeterminados
  //creamos el inicial estado y se lo damos al useState
  const initialState = {
    nombre: '',
    descripcion: '',
    fecha: '',
    estado: 'pendiente',
    prioridad: false
  }
  
  // le pasamos el estado inicial al estado o podemos colocarlo adentro como un array vacio
  //const [todo, setTodo] = useState(initialState); 

  //esta desestrucracion viene del hook creado en el archivo use formulario
  const [inputs, handleChange, reset] = useFormulario(initialState)

  // de esta forma si destructuramos el objeto todo nos ahorramos codigo abajo no ponemos todo.nombre, todo.descripcion ya solo ponemos nombre o descripcion 
  // destructuring de nuestro objeto todo(todo es un objeto que contiene todos nuestros datos de los imputs
  //const {nombre, descripcion, estado, prioridad} = todo ; 

  const {nombre, descripcion, estado, prioridad, fecha} = inputs ;

  //handleSubmit nos permite evitar el comportamiento por default de la carga del formulario 
  // la letra (e) reprecenta el evento donde se gaurda todos los datos del dom
  const handleSubmit = (e) =>{

    e.preventDefault();
    // VALIDADECION si el campo esta vacio todo.nombre hace referencia al campo con el nombrado con el name: nombre
    // la funsion trim() de java scrip es para que no tenga encuenta los espacios en blanco osea no sean considerados como caracteres
    if(!nombre.trim()){

      e.target[0].focus();// para hacer focus en el error aplicamos la funcion focus() el e.target[0] determina que elemento vamos a haver focus 

      // esto es apra poder hacer la alerta de error con import Swal from 'sweetalert2';
      return Swal.fire({
        title: "ERROR",
        text: "NOMBRE OBLIGATORIO",
        icon: "error"
      })
    }

    if(!descripcion.trim()){
      
      e.target[1].focus();// para hacer focus en el error hacemos focus en el elemento que determinamos en el array

      // esto es apra poder hacer la alerta de error con import Swal from 'sweetalert2';
      return Swal.fire({
        title: "ERROR",
        text: "DESCRIPCION OBLIGATORIO",
        icon: "error"
      })
    }

      // esto es apra poder hacer la alerta de EXITO , ERROR, INFO ETC con import Swal from 'sweetalert2';
      // este ultimo va sin return ya que me genera que el programa salga y no siga con la siguiente instruccion que es
      //para guardar la tarea en mi estado principal
      Swal.fire({
        title: "BIEN HECHO",  
        text: "TAREA CARGADA CON EXITO",
        icon: "success"
      })
     
    agregarTodo({
      nombre: nombre, // esto es igual a poner solamente nombre equivale a (nombre: nombre)
      descripcion: descripcion,// asi para todas los otros valores
      estado: estado === 'pendiente' ? false : true, // para despues poder pintar la tarea mejor en el dom
      prioridad: prioridad,
      fecha: fecha,
      id: uuidv4()                       //Date.now() // nos devuelve la fehca con milesimas de segundos podemos usar uuID para poder usarlo
    })
    //console.log(todo);
    //setTodo(initialState)

    reset();
  } 


  return (
    <>
        <div className="card card text-dark bg-warning mb-3 w-75">
        <img src={logo} className="card-img" alt="..."/>
        <div className="card-img-overlay">
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Titulo</label>
            <input 
            type="text"
            name='nombre'
            className="form-control mb-2"
            placeholder='Ingrese tarea'
            onChange={handleChange}
            value={nombre}
            />
            <label htmlFor="descripcion">Descripcion</label>
            <textarea 
            name='descripcion'
            className="form-control mb-2"
            placeholder='Ingrese tarea'
            onChange={handleChange}
            value={descripcion}
            ></textarea>

            <select
            name="estado" 
            className="form-control mb-2"
            onChange={handleChange}
            value={estado}
            >
                <option value="pendiente"> Pendiente</option>
                <option value="completado"> Completado</option>
            </select>
            <div className="form-check">
                    <input
                        type="checkbox"
                        name="prioridad"
                        id="idCheckbox"
                        checked={prioridad}
                        onChange={handleChange}
                        className="form-check-input mb-2"
                    />
                    <label htmlFor="idCheckbox" className="form-check-label">
                        Dar prioridad
                    </label>
                </div>
                <div className="card-footer bg-transparent border-success ">
                <input
                 type="date"
                 name='fecha'
                 value={fecha}
                 onChange={handleChange}
                 className="form-control"/>

                <button 
                type="submit" 
                className="btn btn-primary"
                >
                Enviar
                </button>

                </div>
             
        </form>
        </div>
        </div>
    </>
  );
};

export default Formulario;