import React from 'react';
import TodoList from './components/TodoList';
import Navegacion from './components/Navegacion';

const App = () => {
  return (
    <>
       <Navegacion />
       <div className="container-sm">
        <TodoList />
        </div>
    </>
  );
};

export default App;