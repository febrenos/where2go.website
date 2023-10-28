import React, { useEffect, useState } from 'react'
import { Menu, TitlePage, SearchInput, TravelCardAiList } from '../../components/index'
import { StyledContentLogged } from '../../style';
import api from '../../services/javaApi';
import { getCookie } from '../../utils/utils';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [tripList, setTripList] = useState([]);
    
    useEffect(() => {
      getMyTrips();
  }, []);

    const getMyTrips = async () => {
      try {
        const authToken = getCookie("authToken");
        const response = await api.get("/trip/all", {
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

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Home"}/>
            <StyledContentLogged>
                <SearchInput searchType="travel" placeholder="Buscar" disableFilter/>
                <TravelCardAiList list={tripList}/>
            </StyledContentLogged>
            </div>
        </>
    )
}