import { useState } from "react";

export default function TesteState(){
    const [aluno, setAluno] = useState("Rodrigo")

    return(
        <>
            <h1>(☞ﾟヮﾟ)☞  ☜(⌒▽⌒)☞  ☜(ﾟヮﾟ☜)</h1>
            <h2> (☞ﾟヮﾟ)☞  ☜(⌒▽⌒)☞  ☜(ﾟヮﾟ☜) </h2>
            <h3> (☞ﾟヮﾟ)☞  ☜(⌒▽⌒)☞  ☜(ﾟヮﾟ☜) </h3>
            <p>Aluno ༼ つ ◕_◕ ༽つ: {aluno}</p>
            <button onClick={()=>setAluno("Maria")}>Mudar (┬┬﹏┬┬)</button>
        </>
    )

}