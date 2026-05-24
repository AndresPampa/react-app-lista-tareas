import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {

  //obtener las tareas guardadas en el localStorage
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];

  //Establecer el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  //gUARDANDO EL ESTADO DENTRO DE LOCAL STORAGE
  useEffect(() =>{
    //Codigo Del efecto
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]); //Tareas es la dependencia del efecto


  //acceder a la variable de localStorage mostrarCompletadas
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === 'null'){
    configMostrarCompletadas = true;
  }else{
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  //El estado de mostrar completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() =>{
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);


  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostrarCompletadas={mostrarCompletadas}/>
    </div>
  );
}

export default App;
