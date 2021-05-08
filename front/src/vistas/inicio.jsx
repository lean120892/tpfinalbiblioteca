import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' // Para realizar ruteo
import Encabezado from '../componentes/encabezado'

import Formulario from '../componentes/formulario'


export default function Inicio(){


    return(


        <Fragment> 

            <Encabezado titulo = " Bienvenidos a Biblioteca virtual"/>
            
            <Formulario></Formulario>
        


        </Fragment>

        

    );
}