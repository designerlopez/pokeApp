import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {

  const {id}=useParams()

  useEffect(() => {
    const URL=`https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  
    
  }, [])
  
  


  return (
    <main>
      pokemon {id}
    </main>
  )
}

export default Pokemon