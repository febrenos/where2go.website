import React, { useState } from 'react'
import { Btn, TimeLine, Header, CardApresentation, TitlePage } from '../../components/index'
import './style.css'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <main>
            <Header isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
                <TitlePage Title={"Home"}/>
                <Btn text="BtnSmall" borderColor={"#0c899f"} size="sm"/>
                <Btn text="BtnMedium" borderColor={"#0c9f1e"} size="md"/>
                <Btn text="BtnLarge" size="lg" disabled/>
                <TimeLine steps={7} finished={6}/>
                {/* <SelectBtns>TEst</SelectBtns> */}
                <CardApresentation text="Get Started"/>
            </div>
        </main>
        </>
    )
}