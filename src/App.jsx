import { useState, useEffect } from 'react';


function App() {
  const [unidades, setUnidades] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3003/unidades")
      .then((resposta)=>{return resposta.json()})
      .then((conteudo)=>{setUnidades(conteudo)})
  },[])
    console.log(unidades)
  return (
    <>
      Esta funcionando
    </>
  )
}

export default App
