import React from 'react';
import {Formado} from '../SeFormou/SeFormouStyle';


function SeFormou (props){
    const {handleFormou} = props;
    
    return(
        <Formado>
            
            <div>
                <label>Qual o curso?</label>
                <input />
            </div>

            <div>
                <label>Qual a unidade de ensino?</label>
                <input />
            </div>

        </Formado>
    )
}

export default SeFormou;