import React from "react";
import {NaoFormado} from '../NaoFormou/NaoFormouStyle'

function NaoFormou (props){

    const {handleNaoFormado} = props;

    return(
        <NaoFormado onClick={handleNaoFormado}>
            <div>
                
                <label>Por que você não terminou um curso de graduação?</label>
                <input type="text"/>

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