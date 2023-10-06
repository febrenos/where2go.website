import React, { useState } from 'react'
import {TitlePage, Header} from '../../components/index';

export default function ToPlan() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <main>
            <Header isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
                <TitlePage Title={"Planejar"}/>
            </div>
        </main>
        </>
    )
}