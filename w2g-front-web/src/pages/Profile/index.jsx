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
  password: 'testpassword',
  confirmPassword: 'testpassword'
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

  // Set initial values when the component is loaded
  useEffect(() => {
    setNickname(userProfileData.nickname);
    setName(userProfileData.name);
    setEmail(userProfileData.email);
    setCpf(userProfileData.cpf);
    setPhone(userProfileData.phone);
    setPassword(userProfileData.password);
    setConfirmPassword(userProfileData.confirmPassword);
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
            <Input text={"Name"} value={name} onChange={(e) => setName(e.target.value)} />
            <Input text={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input text={"CPF"} value={cpf} onChange={(e) => setCpf(e.target.value)} />
            <Input text={"Phone"} value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Input text={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input
              text={"Confirm password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <WordPreferences />
            <Gap>
              <Button text="Cancel" />
              <Button text="Save" solid />
            </Gap>
          </BackgroundCard>
        </StyledContentLogged>
      </div>
    </>
  );
}
