import React, { Component,Fragment,useState } from 'react';
import {AgregarCategoria} from '../acciones/acciones-categorias'

export default function NuevaCategoria(params) {
    
    const  [dato, setDato] = useState(null);

  
    function LeerDato(val){
       
        setDato(val.target.value);
        //console.log(dato)
       
    }  
    function AgregarDato (){
        AgregarCategoria(dato)
       //console.log("Se agrego un dato")

    }

    return(
        <Fragment>
            
            <h3> ACA SE AGREGAN LAS CATEGORIAS</h3>
            <input type="text" placeholder ="Ingrsar Categoria" onChange = {LeerDato} />
            <button onClick = {AgregarDato}>Agregar</button>
        </Fragment>
            
      
      
   
    )
    
}