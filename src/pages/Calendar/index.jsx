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


    const agendedDates = tripList.map((travel) => travel.dataInicio);
    
    return(
        <>
        <main>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
             <TitlePage text={"Calendário"}/>
             <StyledContentLogged>
                <SearchInput searchType="calendar" placeholder="Buscar" agended={agendedDates} startFilter/>
                <TravelCardAiList list={tripList} type="agended"/>
             </StyledContentLogged>
            </div>
        </main>
        </>
    )
}