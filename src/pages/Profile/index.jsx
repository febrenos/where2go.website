import React, { useState, useEffect } from 'react';
import {
  StyledContentLogged,
  Gap,
  BackgroundCard
} from '../../style';
import ImgUser from '../../img/user.png';
import {
  Menu,
  Input,
  WordPreferences,
  Button,
  TitlePage,
} from '../../components/index';
import api from '../../services/javaApi';

import * as Styled from './style';
import { getCookie } from '../../utils/utils';

const userProfileData = {
  wordPreferences:[
    'viagem',
    'ponto turistico',
    'praia',
    'cidade',
    'frio',
    'classico',
  ]
};

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const getMyUser = async () => {
    const authToken = getCookie("authToken");
    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });

    const userData = response.data

    setNickname(userData.nickname);
    setName(userData.name);
    setEmail(userData.email);
    setCpf(userData.cpf);
    setCellphone(userData.cellphone);
    setPassword(userData.password);
    setDescription(userData.description);
  };

  const upadateUser = async (nickname, name, email, cpf, cellphone, password) => {

    // Senhas têm o tamanho mínimo, você pode prosseguir com a atualização do usuário
    setIsPasswordValid(true);

    const userBody = {
      nickname,
      name,
      email,
      cpf,
      cellphone,
      password,
      description
    }
    console.log(userBody)

    const authToken = getCookie("authToken");
    await api.put("/user", userBody, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }

  // Set initial values when the component is loaded
  useEffect(() => {
    getMyUser()
  }, []);

  return (
    <>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <div className={isOpen ? 'contentClose' : 'contentOpen'}>
        <TitlePage text={"Profile"} />

        <StyledContentLogged>
          <BackgroundCard>
            <Styled.Center>
              <Styled.ImgProfile src={ImgUser} />
            </Styled.Center>
            {/* Setting initial values for inputs */}
            <Input text={'Nickname'} value={nickname} onChange={(e) => setNickname(e.target.value)}/>
            <Input text={"Nome"} value={name} onChange={(e) => setName(e.target.value)} />
            <Input text={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input text={"CPF"} value={cpf} onChange={(e) => setCpf(e.target.value)} />
            <Input text={"Telefone"} value={cellphone} onChange={(e) => setCellphone(e.target.value)} />
            <Input text={"Senha"} value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
            <Input text={"Descrição"} value={description} onChange={(e) => setDescription(e.target.value)} />
            <WordPreferences list={userProfileData.wordPreferences}/>
            <Gap>
              <Button text="Cancelar" />
              <Button text="Salvar" solid onClick={() => upadateUser(nickname, name, email, cpf, cellphone, password)}/>
            </Gap>
          </BackgroundCard>
        </StyledContentLogged>
      </div>
    </>
  );
}
