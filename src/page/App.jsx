import React, { useState, useEffect } from "react"
import axios from "axios"
import '../page/AppStyles.css'

export default function App () {
  // estado do react
const [dados, setDados] = useState([])

// função assicrona
const getDados = async () => {
const Dados = await axios.get('https://rickandmortyapi.com/api/character')
setDados(Dados.data.results)
console.log(Dados)
}

useEffect(()=>{
getDados()


},[])

  return(
    <>
<h1>API Rick e Morty </h1>
  {dados.map((item)=> (
<figure>
  <div>
  <img src={item.image} alt="" />
  </div>
  <figcaption>{item.name}</figcaption>
 
</figure>






  ))}

    </>
  )
}
