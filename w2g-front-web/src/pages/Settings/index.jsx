import React, { useState } from 'react'
import {TitlePage, Menu, Input, WordPreferences, Button, Switch, TextIcon} from '../../components/index';
import { BackgroundCard, Gap, StyledContentLogged } from '../../style';


const  wordPreferences = [
    {
      name: 'Sol',
      isActive: true,
    },
    {
      name: 'Clássico',
      isActive: true,
    },
    {
      name: 'Música',
      isActive: true,
    },
    {
      name: 'Histórico',
      isActive: false,
    },
    {
      name: 'Comida',
      isActive: true,
    },
    {
      name: 'Ar livre',
      isActive: false,
    },
    {
      name: 'Água',
      isActive: false,
    },
    {
      name: 'Natureza',
      isActive: false,
    },
    {
      name: 'Esporte',
      isActive: true,
    },
    {
      name: 'Aventura',
      isActive: false,
    },
    {
      name: 'Relaxamento',
      isActive: false,
    },
    {
      name: 'Cultura',
      isActive: false,
    },
    {
      name: 'Praia',
      isActive: true,
    },
    {
      name: 'Montanha',
      isActive: false,
    },
    {
      name: 'Cidade',
      isActive: false,
    },
    {
      name: 'Inverno',
      isActive: false,
    },
    {
      name: 'Verão',
      isActive: true,
    },
    {
      name: 'Outono',
      isActive: false,
    },
    {
      name: 'Primavera',
      isActive: false,
    },
    {
      name: 'Escalada',
      isActive: true,
    },
  ]

export default function Settings() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <div className={isOpen ? 'contentClose' : 'contentOpen'}>
          <TitlePage text={"Profile"} />
          <StyledContentLogged>
            <BackgroundCard>
              <Switch enabled={['Notificações site']}/>
              <Switch enabled={['Notificações email']}/>
              <Switch enabled={['White mode','Dark mode']}/>
              <Switch enabled={['Usar Geolocalização']}/>
              <TextIcon text={'Deletar conta'} type={'delete'} align={'center'}/>
              <Gap>
                <Button text="Cancelar" />
                <Button text="Salvar" solid />
              </Gap>
            </BackgroundCard>
          </StyledContentLogged>
        </div>
      </>
    )
}