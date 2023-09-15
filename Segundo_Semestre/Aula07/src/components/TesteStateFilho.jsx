export default function TesteStateFilho(props){

   return(
      <>
         <p>Valor do State: {props.valorState}</p>
         <button onClick={props.aumentar}>Aumentar Filho</button>
      </>
   )

}