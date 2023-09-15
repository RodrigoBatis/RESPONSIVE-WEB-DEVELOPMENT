import { useState } from "react";
import TesteStateFilho from "./TesteStateFilho";

export default function TesteState2(){

   const [valorState, setValorState] = useState(5)
   let valorVariavel = 5

   let aumentar = () =>{
      setValorState(valorState + 5)
      valorVariavel += 5
   }

   let diminuir = () => {
      if (valorState == 0){
         alert("Valor Chegou a 0 adicione para remover!!")
      }else{
         setValorState(valorState - 5)
         valorVariavel += 5
      }
      
   }

   return(
      <>
         <p>Valor State: {valorState} ※</p>
         <p>Valor Variavel: {valorVariavel} ⁜</p>
         <button onClick={aumentar}>Aumentar (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</button>
         <button onClick={diminuir}>Diminuir (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</button>
         <TesteStateFilho valorState={valorState} aumentar={aumentar}/>
      </>
   )

}