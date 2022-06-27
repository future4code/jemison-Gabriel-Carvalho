import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <a href={props.link} target="_blank">
                <p>{ props.texto }</p>
            </a>
        </div>

    )
}

export default ImagemButton;