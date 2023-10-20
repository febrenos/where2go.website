import React, { useState } from 'react'
import { Menu, TitlePage, NavTab, SearchInput, Input, Button, Switch, Radio, WordPreferences } from '../../components/index'
// import * as Styled from './style.jsx'
import { BackgroundCard, Gap, StyledContentLogged } from '../../style';

const trajectoryType = [
    { label: 'Viagem', value: 'option1', name: 'options' },
    { label: 'Evento', value: 'option2', name: 'options' },
    { label: 'Local', value: 'option3', name: 'options' },
  ];

const transport = [
    { label: 'Avião', value: 'aviao', name: 'options' },
    { label: 'Ônibus', value: 'onibus', name: 'options' },
    { label: 'Trem/metro', value: 'trem', name: 'options' },
    { label: 'A pé', value: 'aPe', name: 'options' },
];

const visibility = [
    { label: 'Privado', value: 'private' },
    { label: 'Amigos', value: 'friends' },
    { label: 'Convidados', value: 'guests' },
    { label: 'Todos', value: 'all' },
  ];

export default function ToPlan() {
    const [isOpen, setIsOpen] = useState(false);
    const [getNavTab, setNavTab] = useState(1);
    const [selectedTrajectoryType, setSelectedTrajectoryType] = useState('');
    const [selectedvisibilityType, setSelectedvisibilityType] = useState('');
    const [selectedTransport, setSelectedTransport] = useState('');
  
    const handleVisibilityType = (value) =>{
        setSelectedvisibilityType(value);
    };

    const handleTrajectoryTypeChange = (value) => {
      setSelectedTrajectoryType(value);
    };
  
    const handleTransportChange = (value) => {
      setSelectedTransport(value);
    };

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Planejar"}/>
            <StyledContentLogged>
                        <NavTab tabs={['Cadastrar', 'Criadas']} activeTab={getNavTab} onTabClick={setNavTab}/>
                        {getNavTab === 1 &&
                            <>
                                <BackgroundCard>
                                    <Switch enabled={['IA Neurotrix','IA Chat GPT']} size={'sm'}/>
                                    <Button text="Gerar inputs" size={'lg'} align={'left'}/>
                                    <Input text={"Título"}/>
                                    <Input text={"Local / Cep"}/>
                                    <Input text={"Preço estimado"}/>
                                    <Input text={"Data inicio"}/>
                                    <Input text={"Data fim"}/>
                                    <Input text={"Tempo de Distancia"}/>
                                    <Input text={"Documentos"}/>
                                    <Input text={"Duração"}/>
                                    <Input text={"Links"}/>
                                    <Input text={"Descrição"}/>

                                    <Radio
                                        title={'Tipo trajeto'}
                                        options={trajectoryType}
                                        selectedValue={selectedTrajectoryType}
                                        onValueChange={handleTrajectoryTypeChange}
                                    />
                                    <Radio
                                        title={'Transporte'}
                                        options={transport}
                                        selectedValue={selectedTransport}
                                        onValueChange={handleTransportChange}
                                    />
                                    <Radio
                                      title={'Visibilidade'}
                                      options={visibility}
                                      selectedValue={selectedvisibilityType}
                                      onValueChange={handleVisibilityType}
                                    />
                                    <WordPreferences/>
                                        <Button text="Criar com IA" />
                                    <Gap>
                                        <Button text="Cancelar"/>
                                        <Button text="Criar" solid={true} />
                                    </Gap>
                                </BackgroundCard>
                            </>
                        }
                        {getNavTab === 2 &&
                            <>
                                <SearchInput searchType="travel" placeholder="Buscar" />
                            </>
                        }
                        
            </StyledContentLogged>
            </div>
        </>
    )
}