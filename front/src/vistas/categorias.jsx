import React, { Component,Fragment,useState,useParams } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom' // Para realizar ruteo
import {ConsultarCategorias, EliminarCategoria, AgregarCategoria} from '../acciones/acciones-categorias' 
import Encabezado from '../componentes/encabezado'
import NuevaCategoria from '../componentes/nuevacategoria'
//import CampoDato from '../componentes/campo-imput'

export default function Categorias(){
   

    const misCategorias = ConsultarCategorias();
    console.log(misCategorias);


   


    return(
        <Fragment> 
            <Encabezado titulo="Categorias"></Encabezado>
          
            

            <table>
                <thead>
                <tr>
                  
                  <th>Lista de Categorias</th>
              </tr>
                    <tr>
                  
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {misCategorias.map(unaCategoria => (
                        <tr key={unaCategoria.id}>
                            <td>{unaCategoria.nombre}</td>
                            <td><button type ="button" onClick= { ()=>EliminarCategoria(unaCategoria.id) }>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

          <NuevaCategoria></NuevaCategoria>

           
  
            
        </Fragment>

        

    );
}