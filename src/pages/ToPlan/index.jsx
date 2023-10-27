import React, { useState } from 'react'
import { Menu, TitlePage, NavTab, SearchInput, Input, Button, Switch, Radio, WordPreferences } from '../../components/index'
// import * as Styled from './style.jsx'
import { BackgroundCard, Gap, StyledContentLogged } from '../../style';
import axios from 'axios'
import { getCookie } from '../../utils/utils';
const api = axios.create({baseURL: "http://localhost:8080"})

const trajectoryType = [
    { label: 'Viagem', value: 'option1', name: 'options' },
    { label: 'Evento', value: 'option2', name: 'options' },
    { label: 'Local', value: 'option3', name: 'options' },
  ];

const transport = [
    { label: 'Avião', value: 'aviao', name: 'options' },
    { label: 'Ônibus', value: 'onibus', name: 'options' },
    { label: 'Trem/metro', value: 'trem', name: 'options' },
    { label: 'Carro', value: 'carro', name: 'options' },
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


    const [clima, setClima] = useState('');
    const [selectedTransport, setSelectedTransport] = useState('aviao');
    const [tempoMaximo, setTempoMaximo] = useState('');
    const [custoMaximo, setCustoMaximo] = useState('');

    const generateRandomInputs = () => {
        // Gerar valores aleatórios com base no objeto ramdom
        const randomClima = ['quente', 'frio', 'humido', 'seco'][Math.floor(Math.random() * 3)];
        const randomTransport = ['aviao', 'onibus', 'trem', 'carro'][Math.floor(Math.random() * 4)];
        const randomTempoMaximo = Math.floor(Math.random() * 23) + 2; // Generates a random time between 2 and 24 (greater than 1)
        const randomCustoMaximo = (Math.random() * 940 + 60).toFixed(2); // Generates a random cost between 60 and 1000 (greater than 60)        
      
        // Definir os valores nos estados correspondentes
        setClima(randomClima);
        setSelectedTransport(randomTransport);
        setTempoMaximo(randomTempoMaximo.toString());
        setCustoMaximo(randomCustoMaximo);
      };


    const generateTravelByChatGpt = async () => {
        try {
            const authToken = getCookie("authToken");

            const requestData = {
                "clima": clima,
                "transporte": selectedTransport,
                "tempoMaximo": tempoMaximo,
                "custoMaximo": parseInt(custoMaximo, 10)
            }

            const response = await api.post("/trip", requestData, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            // Handle the response here if needed
    
            // Clear the state
            handleNoInputValue();
        } catch (error) {
            console.error("Error making the API request:", error);
        }
    }
    
    const handleNoInputValue = () =>{
        setClima('');
        setSelectedTransport('');
        setTempoMaximo('');
        setCustoMaximo('');
    }
    const handleVisibilityType = (value) =>{
        setSelectedvisibilityType(value);
    };

    const handleTrajectoryTypeChange = (value) => {
      setSelectedTrajectoryType(value);
    };
  
    const handleTransportChange = (value) => {
      setSelectedTransport(value);
    };

    const [isAiNeurotrix, setIsAiNeurotrix] = useState(false)

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
                                    <Switch enabled={['IA Neurotrix','IA Chat GPT']} size={'sm'} value={isAiNeurotrix} onValueChange={setIsAiNeurotrix}/>
                                    

                                    {!isAiNeurotrix && 
                                        <>
                                                <Button text="Gerar inputs" size={'lg'} align={'left'} onClick={generateRandomInputs} />
                                                {/* request */}
                                                <Input text={"Clima"} value={clima} onChange={(e) => setClima(e.target.value)}/>
                                                {/* request */}
                                                <Radio
                                                    title={'Transporte'}
                                                    options={transport}
                                                    selectedValue={selectedTransport}
                                                    onValueChange={handleTransportChange}
                                                />
                                                {/* request */}
                                                <Input text={"Tempo máximo (horas)"} value={tempoMaximo} onChange={(e) => setTempoMaximo(e.target.value)}/>
                                                {/* request */}
                                                <Input text={"Custo máximo em (R$)"} value={custoMaximo} onChange={(e) => setCustoMaximo(e.target.value)}/>

                                                {/*response*/}
                                                {/* <Input text={"Destino"}/>
                                                <Input text={"País"}/>
                                                <Input text={"Atividades po Dia"}/> */}
                                                {/* dias */}
                                                {/* <Input text={"Hospedagem"}/>
                                                <Input text={"Tempo de Distancia"}/>
                                                <Input text={"Documentos"}/>
                                                <Input text={"Duração"}/>
                                                <Input text={"Descrição"}/> */}
                                                <Gap>
                                                    <Button text="Cancelar" onClick={() => handleNoInputValue()}/>
                                                    <Button text="Criar" solid={true} onClick={() => generateTravelByChatGpt()}/>
                                                </Gap>
                                        </>
                                    }

                                    {isAiNeurotrix && 
                                        <>
                                            <Button text="Gerar inputs" size={'lg'} align={'left'}/>
                                            <Input text={"Título"}/>
                                            <Input text={"Local / Cep"}/>
                                            <Input text={"Preço Máximo"}/>
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
                                        </>
                                    }
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