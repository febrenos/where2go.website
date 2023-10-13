import React, { useState } from 'react';
import { StyledContentLogged, Gap, BackgroundCard } from '../../style';
import ImgUser from '../../img/user.png'
import {
    Menu,
    NavTab,
    Input,
    WordPreferences,
    Button,
    TitlePage,
  } from '../../components/index';
  
import * as Styled from './style';

export default function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    const [getNavTab, setNavTab] = useState(2);

    return (
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
                <TitlePage text={"Perfil"}/>
                <StyledContentLogged>
                            <BackgroundCard>
                                <Styled.Center>
                                    <Styled.ImgPerfil src={ImgUser}/>
                                </Styled.Center>
                                <Input text={"Login"}/>
                                <Input text={"Nome"}/>
                                <Input text={"Email"}/>
                                <Input text={"Cpf"}/>
                                <Input text={"Telefone"}/>
                                <Input text={"Senha"}/>
                                <Input text={"Confirmar senha"}/>
                                <WordPreferences/>
                                <Gap>
                                    <Button text="Cancelar"/>
                                    <Button text="Salvar" solid />
                                </Gap>
                            </BackgroundCard>
                </StyledContentLogged>
            </div>
        </>
    );
}
