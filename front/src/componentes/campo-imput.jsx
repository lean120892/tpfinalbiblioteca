import React, { Component,Fragment,useState } from 'react';


export default function CampoDato (props){

    const  [dato, setDato] =useState(null);
   
    function LeerDato(val){
       
        setDato(val.target.value);
       
    }  

    return(

      <Fragment>
             <input className={props.className} type={props.type} onChange ={LeerDato}/>
             {dato}
      </Fragment>
   
    )


}

