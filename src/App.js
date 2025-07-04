import React, { useEffect, useState }  from "react";
import { Routes, Route, Link} from "react-router-dom"

/* Componentes vista App */

const App = () => {
    return(
    <Routes>
      <Route path="/" element={<inicio/>} />
      <Route path="/Perfil" element={<Perfil/>} />
      <Route path="/Perfil/Academica" element={<Academico/>} />



      </Routes>


    <h1>waaaa</h1>
    <p>Inicio de aplicación</p>

      
      


    )
}







export default App;
