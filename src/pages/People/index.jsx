import React, { useEffect, useState } from 'react'
import { Menu, TitlePage, SearchInput, PeopleCardList } from '../../components/index'
// import * as Styled from './style.jsx'
import { StyledContentLogged } from '../../style';
import { getCookie } from '../../utils/utils';
import api from '../../services/javaApi';

export default function People() {
    const [isOpen, setIsOpen] = useState(false);
    const [userList, setUserList] = useState([]); 

    const getAllUsers = async () => {
        try {
          const authToken = getCookie("authToken");
          const response = await api.get("/user/all", {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          });

          const usersList = response.data;
          setUserList(usersList);
          console.log(usersList);
          
        } catch (error) {
          console.error("Error making the API request:", error);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    // const perssonList = [
    //     {
    //       id: 4,//
    //       name: 'Luan Silva',//
    //       nickname: 'luan.s',//
    //       joinedOn: '2022-05-15',//
    //       requestStatus: 'request', // or 'request' or 'friends'
    //       visitedPlaces: 'Paris, New York, Tokyo',//
    //       visited: '2 locais, 1 viagem, 1 evento (4)',//
    //       likedTrips: 0,
    //       savedTrips: 1,
    //       description: '@luan.AlbertS \nGosto viajar e conhecer novas pessoas, ir a eventos de tecnologia e gosto também de tudo que envolva o estilo classico'
    //     }
    //   ];

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Pessoas"}/>
            <StyledContentLogged>
                <SearchInput disableFilter/>
                <PeopleCardList list={userList}/>          
            </StyledContentLogged>
            </div>
        </>
    )
}