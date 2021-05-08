import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' // Para realizar ruteo
import Encabezado from '../componentes/encabezado'

import ConsultarPersonas from '../acciones/acciones-personas'

export default function Personas(){
   

    const misPersonas = ConsultarPersonas();
    console.log(misPersonas);


    return(
        
        <Fragment> 
            <Encabezado titulo="Personas"></Encabezado>
            <div><h1>HOLA PERSONAS</h1></div>
            <div>
                {
                misPersonas.map( unaPersona=>(<div>{unaPersona.nombre}</div>))
                }
            </div>
           
  
            
        </Fragment>

        

    );
  
}