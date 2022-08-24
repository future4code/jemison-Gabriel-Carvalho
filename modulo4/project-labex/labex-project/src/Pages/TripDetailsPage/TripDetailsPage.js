import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';


function TripDetailsPage () {
    useProtectedPage();
    return(
        <div>
            <h1>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</h1>
            <button>Aprovar</button>
            <button>Reprovar</button>

        </div>
    )
}

export default TripDetailsPage;