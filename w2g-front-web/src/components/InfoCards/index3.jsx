import React from 'react'
import Processos from '../../img/processosSeletivos.png'
import './InfoCards.css'

export function InfoCard3(){
    return(
        <div className="about">
            <h3>Sobre Processos seletivos</h3>
            <img src={Processos} alt="processos Seletivos"/>
            <p>Todo processo seletivo estara disponivel apos as inscricoes que sera feita da forma mais pratica possivel com 1 click podendo adicionar um texto sobre si, porem as informacoes do perfil ja estarao linkadas</p>
        </div>
    )
}