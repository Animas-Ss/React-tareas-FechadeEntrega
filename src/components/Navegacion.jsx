import React from 'react';

const Navegacion = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark mb-3 ">
                <div className="container d-flex">
                    <a className="navbar-brand mb-0" href="#">
                        Crear Tareas
                    </a>
                    <div className='text-center text-white navbar-nav mx-auto'>
                        <blockquote className='blockquote'>Registro de Tareas</blockquote>
                        <figcaption className='blockquote-footer bg-dark'>Sosa, Sebastian</figcaption>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navegacion;