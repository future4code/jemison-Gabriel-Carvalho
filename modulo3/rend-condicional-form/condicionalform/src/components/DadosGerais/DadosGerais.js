import React, {useState} from "react";
import { Principal, Titulo, Form } from "./DadosGeraisStyle";


function DadosGerais (){
    
    // lógica

    const [valores, setValores] = useState();  

    return(
        
        <Principal>
                
            
            <div>
                <Titulo>Dados Cadastrais</Titulo>
            </div>
                
            <Form>
                <div className="nome">
                    {/* nome */}
                    <label>Nome:</label>
                    <input 
                        placeholder="Seu nome"
                    />
                </div>

                <div className="idade">
                    {/* idade */}
                    <label>Idade:</label>
                    <input 
                    
                    />
                </div>
                
                <div className="email">
                    {/* email */}
                    <label>Email:</label>
                    <input 
                        placeholder="meuemail123@exemplo.com"
                    />
                </div>

                <div>
                    <p>Qual o seu grau de escolaridade?</p>
                    <select name="opcoes" value={valores} onChange={mudar => setValores(mudar.target.value)} >
                        <option value={0}>Ensino Médio Incompleto</option>
                        <option value={1}>Ensino Médio Completo</option>
                        <option value={2}>Ensino Superior Incompleto</option>
                        <option value={3}>Ensino Superior Completo</option>
                    </select>
                </div>
                
                <div className="botao1">
                        <button >Enviar</button>
                </div>  
                

            

                
            </Form>
           
            

        </Principal>
    )
}

export default DadosGerais;