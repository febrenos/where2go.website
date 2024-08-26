import React, { useEffect, useState } from 'react'
import {TitlePage, Menu, SearchInput, TravelCardAiList} from '../../components/index';
import { StyledContentLogged } from '../../style';
import { getCookie } from '../../utils/utils';
import api from '../../services/javaApi';

export default function Calendar() {
    const [isOpen, setIsOpen] = useState(false);
    const [tripList, setTripList] = useState([]);

    useEffect(() => {
      getMyTrips();
  }, []);

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
  const trip = [
    {
      destino: "Rio de Janeiro",
      pais: "Brasil",
      custo: 2500,
      duracaoViagem: "7 dias",
      hospedagem: "Hotel 5 estrelas",
      dataInicio: "01/12/2024",
      dataFim: "08/12/2024",
      atividadesPorDia: [
        {
          dia: 1,
          atividades: [
            { nome: "Visita ao Cristo Redentor", duracao: "2 horas" },
            { nome: "Passeio na Praia de Copacabana", duracao: "3 horas" },
          ],
        },
        {
          dia: 2,
          atividades: [
            { nome: "Tour pelo Pão de Açúcar", duracao: "4 horas" },
            { nome: "Jantar em restaurante típico", duracao: "2 horas" },
          ],
        },
      ],
      isCreatedByMe: true,
      visitedByMe: 2,
    },
    {
      destino: "Paris",
      pais: "França",
      custo: 5000,
      duracaoViagem: "10 dias",
      hospedagem: "Hotel 4 estrelas",
      dataInicio: "15/01/2025",
      dataFim: "25/01/2025",
      atividadesPorDia: [
        {
          dia: 1,
          atividades: [
            { nome: "Visita à Torre Eiffel", duracao: "3 horas" },
            { nome: "Museu do Louvre", duracao: "4 horas" },
          ],
        },
        {
          dia: 2,
          atividades: [
            { nome: "Passeio pelo rio Sena", duracao: "2 horas" },
            { nome: "Café em Montmartre", duracao: "1 hora" },
          ],
        },
      ],
      isCreatedByMe: false,
      visitedByMe: 0,
    },
  ]

    const agendedDates = tripList.map((travel) => travel.dataInicio);
    
    return(
        <>
        <main>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
             <TitlePage text={"Calendário"}/>
             <StyledContentLogged>
                <SearchInput searchType="calendar" placeholder="Buscar" agended={agendedDates} startFilter/>
                <TravelCardAiList list={trip} type="agended"/>
             </StyledContentLogged>
            </div>
        </main>
        </>
    )
}