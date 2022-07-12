import React from "react";
import {NaoFormado} from '../NaoFormou/NaoFormouStyle'

function NaoFormou (){
    return(
        <NaoFormado>
            <div>
                
                <label>Por que você não terminou um curso de graduação?</label>
                <input />

            </div>

            <div>
                <p>Você fez algum curso complementar?</p>
                <select>
                    <option>Curso Técnico</option>
                    <option>Cursos de Inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
            </div>
        </NaoFormado>
    )
}

export default NaoFormou;