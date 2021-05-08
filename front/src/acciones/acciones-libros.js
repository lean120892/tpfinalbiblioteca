import React, { useState, useEffect } from 'react';
import axios from 'axios';


// La funsion ConsultarLibros()  devuelve un arreglo con todos los libros
 function ConsultarLibros(){

    const [libros, setlibros] = useState([])

  
      useEffect(async ()=>{
            try{
              const respuesta = await axios.get('http://localhost:3000/libro')
              setlibros(respuesta.data)

            }
            catch(e){
              //setError('No recivo datos desde el servidor')
            }
      },[] )

   return(
       libros
   );
}
async function  EliminarLibro (libroId){
  console.log(libroId)
     
    try {
        await axios.delete(`http://localhost:3000/libro/${libroId}`)
        alert("Libro eliminado")
       ConsultarLibros()
       
    } catch (error) {
      /*
        alert(Object.values(error.response.data))
        console.log(error.response)
       */
    }


}

async function AgregarLibro (libro) {
  
  try{
      let res = await axios.post('http://localhost:3000/libro', libro)                            
          if( res.status === 200) {
              alert("libro añadido", res.request.response)
              
          }
  } catch (error){ 
      let mensajeDeError = Object.values(error.response.data)
      alert(mensajeDeError)
  }  

}

export{ConsultarLibros, EliminarLibro, AgregarLibro }