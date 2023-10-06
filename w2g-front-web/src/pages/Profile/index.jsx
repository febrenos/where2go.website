import React, { useState } from 'react';
import { StyledContentLogged, Gap, BackgroundCard } from '../../style'; 
import ImgUser from '../../img/user.png'
import ImgTrofeu from '../../img/trofeu.png'
import {
    Header,
    Title,
    NavTab,
    Input,
    WordPreferences,
    Btn,
    TitlePage,
  } from '../../components/index';
  
import * as Styled from './style';

export default function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    const [getNavTab, setNavTab] = useState(1);

    return (
        <>
            <main>
                <Header isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
                <div className={isOpen ? 'contentClose' : 'contentOpen'}>
                    <StyledContentLogged>
                    <TitlePage Title={"Perfil"}/>
                        <NavTab tabs={['Perfil', 'Preferências', 'Dashboard']} activeTab={getNavTab} onTabClick={setNavTab}/>
                        {getNavTab === 1 && (
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
                                <Gap>
                                    <Btn text="Cancelar"/>
                                    <Btn text="Salvar" solid={true} />
                                </Gap>
                            </BackgroundCard>
                        )}
                        {getNavTab === 2 && (
                            <BackgroundCard>
                                <WordPreferences/>
                                <Gap>
                                    <Btn text="Cancelar"/>
                                    <Btn text="Salvar" solid={true} />
                                </Gap>
                            </BackgroundCard>
                        )}
                        {getNavTab === 3 && (
                            <Styled.Flex>
                                <BackgroundCard>
                                    <Styled.Center>
                                        <Styled.ImgPerfil src={ImgTrofeu}/>
                                        <Title Title={"Prata"}/>
                                    </Styled.Center>
                                </BackgroundCard>
                                <BackgroundCard >
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                                <BackgroundCard>
                                    <p>eee</p>
                                </BackgroundCard>
                            </Styled.Flex>
                        )}
                    </StyledContentLogged>
                    
                </div>
            </main>
        </>
    );
}
