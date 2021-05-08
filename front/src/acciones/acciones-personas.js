import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function ConsultarPersonas(){

    const [personas, setpersonas] = useState([])

  
      useEffect(async ()=>{
            try{
              const respuesta = await axios.get('http://localhost:3000/persona')
              setpersonas(respuesta.data)

            }
            catch(e){
              //setError('No recivo datos desde el servidor')
            }
      },[] )

   return(
      personas
   );
}