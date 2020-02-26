import React, {useState, useEffect} from 'react';
import Axios from 'axios';


const Frase = ({frase}) => {
  return (
    <div className="frase">
        <h1>{frase.quote}</h1>
        <p>{frase.author}</p>
    </div>
  )
}

const App = () => {

  const [frase, setfrase] = useState({})

  const consultarApi = async () =>{
    const resultado = await Axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    

    setfrase(resultado.data[0])
  } 

  useEffect(
    () => {
      consultarApi()
    }
  ,[])

  console.log('frase', frase)

  return (
   <div className="contenedor">
     <Frase frase={frase}/>
     <button
     onClick={consultarApi}
     >Generar frase nueva</button>
   </div>
  );
};

export default App;