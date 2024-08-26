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


    const userListArray = [
      {
        id: 1,
        nickname: "filipe",
        name: "Filipe Souza",
        // email: "filipe.souza@example.com",
        requestStatus: "request",
        // cellphone: "(11) 98765-4321",
        description: "Aventureiro e desenvolvedor de software.",
      },
      {
        id: 2,
        nickname: "melissa_air",
        name: "Melissa Costa",
        // email: "melissa.costa@example.com",
        requestStatus: "friends",
        // cellphone: "(21) 91234-5678",
        description: "Apaixonada por viagens e natureza.",
      },
      {
        id: 3,
        nickname: "brun0_3",
        name: "Bruno Silva",
        // email: "bruno.silva@example.com",
        requestStatus: "requested",
        // cellphone: "(31) 97654-3210",
        description: "Fã de esportes radicais e fotografia.",
      }
    ];
    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Pessoas"}/>
            <StyledContentLogged>
                <SearchInput disableFilter/>
                <PeopleCardList list={userListArray}/>          
            </StyledContentLogged>
            </div>
        </>
    )
}