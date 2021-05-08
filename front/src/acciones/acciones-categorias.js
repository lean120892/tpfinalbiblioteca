import React, { useState, useEffect } from 'react';
import axios from 'axios';


// La funsion ConsultarLibros()  devuelve un arreglo con todos los libros
 function ConsultarCategorias(){

    const [categorias, setcategorias] = useState([])

  
      useEffect(async ()=>{
            try{
              const respuesta = await axios.get('http://localhost:3000/categoria')
              setcategorias(respuesta.data)

            }
            catch(e){
              //setError('No recivo datos desde el servidor')
            }
      },[] )

   return(
       categorias
   );
}

  async function  EliminarCategoria (categoriaId){
 // console.log(categoriaId)
     
    try {
        await axios.delete(`http://localhost:3000/categoria/${categoriaId}`)
        alert("categoria eliminada")
       ConsultarCategorias()
       
    } catch  {
     
    }


}

async function AgregarCategoria (categoria) {
  
  try{
      let res = await axios.post('http://localhost:3000/categoria', categoria)                            
          if( res.status === 200) {
              alert("categoria añadida", res.request.response)
              
          }
  } catch (error){ 
      let mensajeDeError = Object.values(error.response.data)
      alert(mensajeDeError)
  }  

}

export{ConsultarCategorias, EliminarCategoria, AgregarCategoria }