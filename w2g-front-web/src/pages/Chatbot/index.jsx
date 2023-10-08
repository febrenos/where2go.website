import React, { useState } from 'react'
import {TitlePage, Menu} from '../../components/index';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <main>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
                <TitlePage text={"Chatbot"}/>
            </div>
        </main>
        </>
    )
}