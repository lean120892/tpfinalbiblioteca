import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' // Para realizar ruteo
import Encabezado from '../componentes/encabezado'

import {ConsultarLibros,EliminarLibro, AgregarLibro} from '../acciones/acciones-libros'

export default function Libros(){
   

    const misLibros = ConsultarLibros();
    console.log(misLibros);


    return(
        <Fragment> 
            <Encabezado titulo="Libros"></Encabezado>
            

            <table>
                <thead>
                <tr>
                  
                  <th>Lista de Libros</th>
              </tr>
                    <tr>
                  
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {misLibros.map(unLibro => (
                        <tr key={unLibro.id}>
                            <td>{unLibro.nombre}</td>
                            <td>{unLibro.descripcion}</td>
                            <td><button type ="button" onClick= { ()=>EliminarLibro(unLibro.id) }>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
  
            
        </Fragment>

        

    );
}