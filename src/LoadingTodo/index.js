import React from "react";
import react192 from'../assets/react192.png'

import './LoadingTodo.css'

function LoadingTodo(){
    return(
        <div className="loading-container"><img className="spin" src={react192}/>
        
        <p className="loading-p">Cargando, viejo cansón, me tiene mamado...</p></div>
        )
}

export {LoadingTodo}