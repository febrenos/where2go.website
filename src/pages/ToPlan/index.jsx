import React, { useEffect, useState } from 'react'
import { Menu, TitlePage, NavTab, SearchInput, Input, Button, Radio, TravelCardAiList } from '../../components/index'
// import * as Styled from './style.jsx'
import { BackgroundCard, Gap, StyledContentLogged } from '../../style';
import api from '../../services/javaApi'
import { getCookie } from '../../utils/utils';

// const trajectoryType = [
//     { label: 'Viagem', value: 'option1', name: 'options' },
//     { label: 'Evento', value: 'option2', name: 'options' },
//     { label: 'Local', value: 'option3', name: 'options' },
//   ];

const transport = [
    { label: 'Avião', value: 'aviao', name: 'options' },
    { label: 'Ônibus', value: 'onibus', name: 'options' },
    { label: 'Trem/metro', value: 'trem', name: 'options' },
    { label: 'Carro', value: 'carro', name: 'options' },
];

// const visibility = [
//     { label: 'Privado', value: 'private' },
//     { label: 'Amigos', value: 'friends' },
//     { label: 'Convidados', value: 'guests' },
//     { label: 'Todos', value: 'all' },
// ];

export default function ToPlan() {
    const [tripList, setTripList] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [getNavTab, setNavTab] = useState(1);
    const [, setSelectedTrajectoryType] = useState('');
    const [, setSelectedvisibilityType] = useState('');


    const [clima, setClima] = useState('');
    const [selectedTransport, setSelectedTransport] = useState('aviao');
    const [tempoMaximo, setTempoMaximo] = useState('');
    const [custoMaximo, setCustoMaximo] = useState('');
    const [destino, setDestino] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');

    useEffect(() => {
      console.log(dataInicio)
    }, [dataInicio]);

    const generateRandomInputs = () => {
        // Gerar valores aleatórios com base no objeto ramdom
        const randomClima = ['quente', 'frio', 'úmido', 'seco'][Math.floor(Math.random() * 4)];
        const randomTransport = ['aviao', 'onibus', 'trem', 'carro'][Math.floor(Math.random() * 4)];
        //const randomTempoMaximo = Math.floor(Math.random() * 23) + 2; // Generates a random time between 2 and 24 (greater than 1)
        const randomCustoMaximo = (Math.random() * (10000 - 2000) + 2000).toFixed(2);
        const ramdomDestino = ['São Paulo', 'Espanha', 'Dubai', 'Estados Unidos', 'Curitiba, Paraná', 'Alaska', 'Machu Picchu, Peru', 'Paris, França'][Math.floor(Math.random() * 9)];      
        const today = new Date();
        const formattedToday = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD
        setDataInicio(formattedToday);
    
        const randomDays = Math.floor(Math.random() * 26) + 5; // Entre 5 e 30 dias
        const endDate = new Date(today);
        endDate.setDate(today.getDate() + randomDays);
        const formattedEndDate = endDate.toISOString().split('T')[0];
        // Definir os valores nos estados correspondentes
        setClima(randomClima);
        setSelectedTransport(randomTransport);
        setTempoMaximo(randomDays.toString());
        setCustoMaximo(randomCustoMaximo);
        setDestino(ramdomDestino);
        setDataInicio(formattedToday)
        setDataFim(formattedEndDate)
      };

      useEffect(() => {
        getMyTrips();
    }, []);
    

    const generateTravelByChatGpt = async () => {
        try {
          const authToken = getCookie("authToken");
          console.log(`authToken generateTravelByChatGpt ${authToken}`);
          const requestData = {
            "clima": clima,
            "transporte": selectedTransport,
            "tempoMaximo": tempoMaximo,
            "custoMaximo": parseFloat(custoMaximo),
            "destino": destino,
            "dataInicio": dataInicio,
            "dataFim": dataFim,
          };
      
          const response = await api.post("/trip", requestData, {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          });
      
          // Lide com a resposta aqui, se necessário
          // Por exemplo, você pode querer imprimir a resposta no console:
          console.log("Response data:", response.data);
      
          // Limpe o estado
          handleNoInputValue();
          getMyTrips();
        } catch (error) {
          console.error("Error making the API request:", error);
        }
      };
      
    const getMyTrips = async () => {
        try {
          const authToken = getCookie("authToken");
          const response = await api.get("/trip", {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          });

          const trips = response.data;
          setTripList(trips);
          console.log(tripList)
          return tripList;
          
        } catch (error) {
          console.error("Error making the API request:", error);
        }
    }
    
    
    const handleNoInputValue = () =>{
        setClima('');
        setSelectedTransport('');
        setTempoMaximo('');
        setCustoMaximo('');
        setDestino('');
        setDataInicio('');
        setDataFim('');
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
                                    {/* <Switch enabled={['IA Neurotrix','IA Chat GPT']} size={'sm'} value={isAiNeurotrix} onValueChange={setIsAiNeurotrix}/> */}
                                    

                                        <>
                                                <Button text="Gerar inputs" size={'lg'} align={'left'} onClick={generateRandomInputs} />
                                                <Input text={"Clima"} value={clima} onChange={(e) => setClima(e.target.value)}/>
                                                <Input text={"Tempo máximo (dias)"} value={tempoMaximo} onChange={(e) => setTempoMaximo(e.target.value)}/>
                                                <Input text={"Custo máximo (R$)"} value={custoMaximo} onChange={(e) => setCustoMaximo(e.target.value)}/>
                                                <Input text={"Destino"} value={destino} onChange={(e) => setDestino(e.target.value)}/>
                                                <Input text={"Data inicio"} type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)}/>
                                                <Input text={"Data Fim"} type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)}/>
                                                <Radio
                                                    title={'Transporte'}
                                                    options={transport}
                                                    selectedValue={selectedTransport}
                                                    onValueChange={handleTransportChange}
                                                />

                                                <Gap>
                                                    <Button text="Cancelar" onClick={() => handleNoInputValue()}/>
                                                    <Button text="Criar" solid={true} onClick={() => generateTravelByChatGpt()}/>
                                                </Gap>
                                        </>

                                    {/* {isAiNeurotrix && 
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
                                    } */}
                                </BackgroundCard>
                            </>
                        }
                        {getNavTab === 2 &&
                            <>
                                <SearchInput searchType="travel" placeholder="Buscar" disableFilter/>
                                <TravelCardAiList list={tripList}/>
                            </>
                        }
                        
            </StyledContentLogged>
            </div>
        </>
    )
}