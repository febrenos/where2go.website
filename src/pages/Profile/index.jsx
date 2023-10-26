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

import * as Styled from './style';

const userProfileData = {
  nickname: 'fe.brenos',
  name: 'Felipe Breno',
  email: 'felipesugisawa1',
  cpf: '527.346.738.19',
  phone: '11 968651661',
  cep: '03737-000',
  password: 'testpassword',
  confirmPassword: 'testpassword',
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

  // States to store input values
  const [nickname, setNickname] = useState(userProfileData.nickname);
  const [name, setName] = useState(userProfileData.name);
  const [email, setEmail] = useState(userProfileData.email);
  const [cpf, setCpf] = useState(userProfileData.cpf);
  const [phone, setPhone] = useState(userProfileData.phone);
  const [password, setPassword] = useState(userProfileData.password);
  const [confirmPassword, setConfirmPassword] = useState(userProfileData.confirmPassword);
  const [cep, setCep] = useState(userProfileData.cep);

  // Set initial values when the component is loaded
  useEffect(() => {
    setNickname(userProfileData.nickname);
    setName(userProfileData.name);
    setEmail(userProfileData.email);
    setCpf(userProfileData.cpf);
    setPhone(userProfileData.phone);
    setPassword(userProfileData.password);
    setConfirmPassword(userProfileData.confirmPassword);
    setCep(userProfileData.cep);
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
            <Input text={"Telefone"} value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Input text={"CEP"} value={cep} onChange={(e) => setCep(e.target.value)} />
            <Input text={"Senha"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input text={"Confirma senha"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <WordPreferences list={userProfileData.wordPreferences}/>
            <Gap>
              <Button text="Cancelar" />
              <Button text="Salvar" solid />
            </Gap>
          </BackgroundCard>
        </StyledContentLogged>
      </div>
    </>
  );
}
