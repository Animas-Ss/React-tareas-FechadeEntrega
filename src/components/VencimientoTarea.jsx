import React, { useEffect, useRef, useState } from "react";
import "./VencimientoTareas.css";

const VencimientoTarea = ({ todo, index }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    // esta linea cguarda en una variable la fecha ingresada con el input de fecha
    // luego la concatenamos con el tiempo ya que el input solo nos da la fecha
    // una vez hecho  esto vamos a empezar a desarrollar la funcion para el cronometro de fecha de entrega
    // para concatenar la fecha obtenida y un tiempode terminado usamos se puede usar el backtick ` para crear cadenas interpoladas
    const countdownDate = new Date(`${todo.fecha}, 00:00:00`).getTime();

    interval = setInterval(() => {
      // guardamos la fecha actual en una variable llamada now
      //luego de esto restamos ambas variables ,
      //usamos la funsion getTime() para que ambos datos esten en el mismo formato
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // guardamos en distintas variables el dia , la hora, minutos y segundos
      // realizamos las opetaciones matematicas ya que el resultadod e la resta esta en milisegundos

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //frenar el tiempo

        clearInterval(interval.current);
      } else {
        // actualizar el tiempo
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  // componente de guardado

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
        <div className="col-sm-4">
          <div className="card text-dark bg-info mb-3">
            <div className="card-header">
              <div className="accordion">
                <span className="boton-indice">
                  <div className="indi">{index + 1}</div>
                </span>
                <span>Fecha de entrega</span>
              </div>
            </div>
            <div className="card-body">
              <div className="card-text">
                <div className="tiempo-con">
                  <div>
                    <section>
                      <p>{timerDays}</p>
                      <p>
                        <small>Dias</small>
                      </p>
                    </section>
                    <span>:</span>
                    <section>
                      <p>{timerHours}</p>
                      <p>
                        <small>Hrs</small>
                      </p>
                    </section>
                    <span>:</span>
                    <section>
                      <p>{timerMinutes}</p>
                      <p>
                        <small>Min.</small>
                      </p>
                    </section>
                    <span>:</span>
                    <section>
                      <p>{timerSeconds}</p>
                      <p>
                        <small> Seg.</small>
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default VencimientoTarea;
