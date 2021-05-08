

import React, { Component,Fragment,useState } from 'react';
import Boton from '../componentes/botones'

export default function Encabezado(props){


    return(

        <Fragment>
            <h1> {props.titulo}</h1>
            <Boton nombre = "Regresar" accion = 'back'   />
            <Boton nombre = "Inicio" accion = 'push'  url = '/' />
            <Boton nombre = "Personas" accion = 'push' url = '/personas' />
            <Boton nombre = "Categorias" accion = 'push'  url = '/categoria' />
            <Boton nombre = "Libros" accion = 'push'  url = '/libros' />
            <Boton nombre = "Siguiente" accion = 'forward'   />

            <hr/>
           

            
        </Fragment>
    )
}