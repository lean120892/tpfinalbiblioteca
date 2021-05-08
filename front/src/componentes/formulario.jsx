

import React, { Component,Fragment,useState } from 'react';

const Formulario = () =>{

    const [datos, setDatos] = useState({
        nombre:'',
        categoria:'',
        descripcion:''
    })

    const leerEstado =  (e)=>{
        console.log(e.target.value)
        setDatos({
       
            ...datos,
            [e.target.name] : e.target.value 
           
        })
    }
    const enviarDatos = (e)=>{
        
    }


    return(
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit = {enviarDatos}>
                <input type="text" placeholder = "Nombre" name="nombre" onChange={leerEstado} />
                <button type = "submit">Enviar</button>
            </form>
        </Fragment>
    );

}

export default Formulario