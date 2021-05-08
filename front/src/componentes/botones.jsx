import React, { Component,Fragment,useState } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom' // Para realizar ruteo


 function Boton(props){
    const {history} = props;
   
const boton = ()=>
           {
                let opcion ;
                switch (props.accion){
                    case 'push': 
                    opcion = history.push(props.url)
                    
                    break;
                    case 'back': 
                   opcion = history.goBack()
                    
                    break;
                    case 'forward': 
                   opcion = history.goForward()
                    
                    break;

                    //No funciona
                    case 'toDo': 
                    opcion = props.funcion
                   
                    
                    break;
                }
                return(opcion)
                
            }
           

    return(
        <Fragment> 
           
        <button className = {props.className} onClick = {boton}  >{props.nombre}</button>
        
        </Fragment>
    )


}

export default withRouter(Boton)
