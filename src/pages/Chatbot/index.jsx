import React, { useEffect, useState } from 'react'
import {TitlePage, Menu, Input} from '../../components/index';
import { StyledContentLogged } from '../../style';
import Neurotrix from '../../img/neurotrix.png'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './style'


const startMessages = [
    {
        type:'recive',
        message:'Sou seu assistente de viagem, o que precisa?'
    },
    {
        type:'recive',
        message:'Olá sou o travel assistent, como posso te ajudar?'
    },
    {
        type:'recive',
        message:'Oi explorador! Como posso te ajudar hoje?'
    },
    {
        type:'recive',
        message:'Olá! Estou aqui para auxiliá-lo em viagens, O que deseja Precisa?'
    },
    {
        type:'recive',
        message:'Oi viajate! como posso ajudar na sua jornada?'
    },
    {
        type:'recive',
        message:'Bem-vindo! Como posso tornar a sua viagem mais fácil hoje?'
    },
    {
        type:'recive',
        message:'Olá! Em que posso auxiliá-lo para a jornada?'
    },
    {
        type:'recive',
        message:'Oi! Sou seu assistente de viagem. Como posso facilitar sua experiência?'
    },
    {
        type:'recive',
        message:'Saudações! Como posso ajudá-lo a explorar o mundo?'
    },
]
const messages = [
    // {
    //     type:'recive',
    //     message:'Recive'
    // },
    // {
    //     type:'send',
    //     message:'Send'
    // },

]

const getRandomStartMessage = () => {
    const randomIndex = Math.floor(Math.random() * startMessages.length);
    return startMessages[randomIndex];
  };

export default function ChatBot({list}) {
    list = messages;
    const [isOpen, setIsOpen] = useState(false);
    const [, setUserMessages] = useState(list); // Renomeando para evitar conflito de nomes
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
        list.length = 0;
        const initialMessage = getRandomStartMessage();
        list.push(initialMessage);
        setUserMessages([...messages]);
      }, []); // Executa apenas na montagem

      const handleSendMessage = () => {
        const isTooLongOrSpecialCharactersOnly = inputMessage.length > 300 || /^[\W_]+$/.test(inputMessage);
        const specialCharacterCount = (inputMessage.match(/[^a-zA-Z0-9ç\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g) || []).length;
        const hasTooManySpecialCharacters = specialCharacterCount > 1;
        const hasMoreNumbersThanLettersOrOnlyNumbers = (inputMessage.replace(/[^a-zA-Z]/g, '').length < inputMessage.replace(/\D/g, '').length);
        const hasRepeatedCharacterSequence = /(\w)\1{2,}/.test(inputMessage);
        const hasMoreThanTwoSequentialRepeatedLetters = /(\w)\1{2}/.test(inputMessage);

        console.log(`isTooLongOrSpecialCharactersOnly: ${isTooLongOrSpecialCharactersOnly}`);
        console.log(`hasMoreNumbersThanLettersOrOnlyNumbers: ${hasMoreNumbersThanLettersOrOnlyNumbers}`);
        console.log(`hasRepeatedCharacterSequence: ${hasRepeatedCharacterSequence}`);
        console.log(`hasMoreThanTwoSequentialRepeatedLetters: ${hasMoreThanTwoSequentialRepeatedLetters}`);
        console.log(`specialCharacterCount: ${specialCharacterCount}`);
        if (isTooLongOrSpecialCharactersOnly 
            || hasTooManySpecialCharacters 
            || hasMoreNumbersThanLettersOrOnlyNumbers
            || hasRepeatedCharacterSequence
            || hasMoreThanTwoSequentialRepeatedLetters) {
            return
        }
        const newMessages = [...list];
        list.push({ type: 'send', message: inputMessage });
        setUserMessages(newMessages);
        setInputMessage('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSendMessage();
        }
      };

      

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Chat bot"}/>
            <StyledContentLogged mobile>
                <Styled.CardChat>
                    <Styled.CardMessages>
                        <Styled.UserBot>
                          <Styled.UserBotImg src={Neurotrix} alt="" />
                          <Styled.Desc>
                            <Styled.DescH3>NeurotrixBot</Styled.DescH3>
                            <Styled.DescP>Travel assistent</Styled.DescP>
                          </Styled.Desc>
                        </Styled.UserBot>
                        <Styled.ContentMessages>
                        {list.map((i, index) => (
                          <Styled.ContentMessage typeMessage={i.type} key={index}>
                            <Styled.Message typeMessage={i.type}>
                              <Styled.MessageP>{i.message}</Styled.MessageP>
                            </Styled.Message>
                          </Styled.ContentMessage>
                        ))}
                        </Styled.ContentMessages>
                    </Styled.CardMessages>
                

                <Styled.SendMessage>
                    <Input placeholder={'Pergunte algo...'} value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onKeyDown={handleKeyDown}/>
                    <Styled.BgIcon onClick={handleSendMessage}>
                        <Styled.SendIcon icon={faPaperPlane}/>
                    </Styled.BgIcon>
                </Styled.SendMessage>
                </Styled.CardChat>
            </StyledContentLogged>
            </div>
        </>
    )
}