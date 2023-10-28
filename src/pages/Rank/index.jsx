import React, { useState } from 'react'
import { Menu, TitlePage, GridItems } from '../../components/index'
import { StyledContentLogged } from '../../style';

const list = {
    nickname:'Guest Neurotrix',
    listName:'Iniciante',
    score:0,
    nextScore:0,
    travelledDistance: 0,
    achievements:[{
        title:'Ouro',
        size:'big', 
        score:300, 
        description:'Simplesmente Incrível! Você é Ouro', 
        typeScore:'points',
        color:'#d29f1e'
    },
    {
        title:'Prata',
        size:'big', 
        score:200, 
        description:'Muito bom! Você alcancou o nível é nível Prata', 
        typeScore:'points',
        color:'#939393'
    },
    {
        title:'Bronze',
        size:'big', 
        score:100, 
        description:'bom! Você alcancou o nível é nível Bronze', 
        typeScore:'points',
        color:'#d4660b'
    },
    {
        title:'Iniciante',
        size:'big',
        score:0,
        description:'Bem vindo! Conquiste trofeús', 
        typeScore:'points',
        color:'#26252a'
    },
    {
        title:'Natureza', 
        size:'small', 
        score:0, 
        description:'Viagens com natureza', 
        typeScore:'days',
    },
    {
        title:'Culiária', 
        size:'small', 
        score:0, 
        description:'Viagens com culinária', 
        typeScore:'days',
    },
    {
        title:'Aventura', 
        size:'medium', 
        score:0, 
        description:'Viagens com natureza', 
        typeScore:'days',
    },
    {
        title:'Esporte', 
        size:'small', 
        score:0, 
        description:'Viagens com Esporte', 
        typeScore:'days'
    },
    {
        title:'Classico', 
        size:'small', 
        score:0, 
        description:'locais clássicos', 
        typeScore:'days'
    },
    {
        title:'Dia', 
        size:'small', 
        score:0, 
        description:'Locais visitados de dia', 
        typeScore:'days'
    },
    {
        title:'Noite', 
        size:'small', 
        score:0, 
        description:'Locais visitados de noite', 
        typeScore:'days'
    },
    {
        title:'Tech', 
        size:'small', 
        score:0, 
        description:'Locais com tecnologia visitados ', 
        typeScore:'days'
    },
    {
        title:'Amigos', 
        size:'small', 
        score:0, 
        description:'Locais com amigos', 
        typeScore:'days'
    },
    {
        title:'Musica', 
        size:'small', 
        score:0, 
        description:'Locais com musica', 
        typeScore:'days'
    },
    {
        title:'Água', 
        size:'small', 
        score:0, 
        description:'Locais com água', 
        typeScore:'days'
    },
    {
        title:'Frio', 
        size:'small', 
        score:0, 
        description:'Locais frios visitados', 
        typeScore:'days'
    },
    {
        title:'Quente', 
        size:'medium',
        score:0, 
        description:'Locais quentes visitados', 
        typeScore:'days'
    },
    {
        title:'Evento', 
        size:'small', 
        score:0, 
        description:'Eventos visitados', 
        typeScore:'days'
    },
    {
        title:'Viagem', 
        size:'small', 
        score:0, 
        description:'Viagens realizadas', 
        typeScore:'days'
    },
    {
        title:'Urbano', 
        size:'small', 
        score:0, 
        description:'Locais urbanos visitados', 
        typeScore:'days'
    },
    {
        title:'Desertico', 
        size:'small', 
        score:0, 
        description:'Locais Desertico visitados', 
        typeScore:'days'
    },
    {
        title:'Air', 
        size:'small', 
        score:0, 
        description:'Aventura nas alturas', 
        typeScore:'days'
    },
    {
        title:'Show', 
        size:'small', 
        score:0, 
        description:'shows visitados', 
        typeScore:'days'
    }]
}


export default function Rank() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Rank"}/>
            <StyledContentLogged>
                <GridItems list={list}/>
            </StyledContentLogged>
            </div>
        </>
    )
}