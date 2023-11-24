import '../media.css';
import React, { useState } from 'react';

 function MediaN(){
    const [dolar, Setdolar] = useState('')
   
   
    const [real, Setvalor] = useState('')

    const calcularMedia = () => {
        const resultado = Number(dolar) * 4.90
        Setvalor(resultado)

      
    }

    return(
        <div className='rodrigo'>
         <p id='dolar'>Digite o valor do dolar</p>
         <input type="number" value={dolar} onChange={(e) => Setdolar(e.target.value)} placeholder="Digite o dolar" /> <br /><br />
       
       

         <br /><br /><button onClick={calcularMedia}>Converter</button>
            {real !== null && <p>Valor: {real}</p>}
        </div>
    )

 }
 export default MediaN;