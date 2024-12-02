import React, { useEffect, useState } from "react"
import { TitlePage, Menu, Input } from "../../components/index"
import { StyledContentLogged } from "../../style"
import Neurotrix from "../../img/neurotrix.png"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import * as Styled from "./style"
import axios from "axios"

const api = axios.create({ baseURL: proccess.env.REACT_APP_CHAT_BOT_API })

const startMessages = [
  {
    type: "receive",
    message: "Sou seu assistente de viagem, o que precisa?",
  },
  {
    type: "receive",
    message: "Olá sou o travel assistent, como posso te ajudar?",
  },
  {
    type: "receive",
    message: "Oi explorador! Como posso te ajudar hoje?",
  },
  {
    type: "receive",
    message:
      "Olá! Estou aqui para auxiliá-lo em viagens, O que deseja Precisa?",
  },
  {
    type: "receive",
    message: "Oi viajate! como posso ajudar na sua jornada?",
  },
  {
    type: "receive",
    message: "Bem-vindo! Como posso tornar a sua viagem mais fácil hoje?",
  },
  {
    type: "receive",
    message: "Olá! Em que posso auxiliá-lo para a jornada?",
  },
  {
    type: "receive",
    message:
      "Oi! Sou seu assistente de viagem. Como posso facilitar sua experiência?",
  },
  {
    type: "receive",
    message: "Saudações! Como posso ajudá-lo a explorar o mundo?",
  },
]
const messages = [
  // {
  //     type:'receive',
  //     message:'receive'
  // },
  // {
  //     type:'send',
  //     message:'Send'
  // },
]

const getRandomStartMessage = () => {
  const randomIndex = Math.floor(Math.random() * startMessages.length)
  return startMessages[randomIndex]
}

const renderMessageContent = (item) => {
  console.log(item)
  if (item.type === "send") {
    // Mensagem de envio ou recebimento
    return <Styled.MessageP>{item.message}</Styled.MessageP>
  } else if (Array.isArray(item.message)) {
    if (item.message.length === 0) {
      return (
        <Styled.MessageP>
          Desculpe, ainda nao tenho resposta para isso
        </Styled.MessageP>
      )
    } else if (item.message[0].type === "place_details") {
      // Mensagem do tipo "place_details"
      return (
        <div style={{ marginTop: "10px" }}>
          <Styled.MessageTitle>{item.message[0].title}</Styled.MessageTitle>
          {item.message.slice(1).map((placeDetails, i) => (
            <div key={i} style={{ marginTop: "20px" }}>
              <Styled.MessageTitle>
                {i + 1}. {placeDetails.place_name}
              </Styled.MessageTitle>

              <Styled.MessageInLine>
                <Styled.MessageKey>Endereço: </Styled.MessageKey>
                <Styled.MessageP>{placeDetails.address}</Styled.MessageP>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>Número: </Styled.MessageKey>
                <Styled.MessageP>
                  {placeDetails.international_phone_number}
                </Styled.MessageP>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>Sobre: </Styled.MessageKey>
                <Styled.MessageP>{placeDetails.overview}</Styled.MessageP>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>Nível do preço: </Styled.MessageKey>
                <Styled.MessageP>{placeDetails.priceLevels}</Styled.MessageP>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>Avaliações: </Styled.MessageKey>
                <Styled.MessageP>{placeDetails.rating}</Styled.MessageP>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>Serve cerveja: </Styled.MessageKey>
                <Styled.MessageP>{placeDetails.serves_beer}</Styled.MessageP>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>Serve Café matinal: </Styled.MessageKey>
                <Styled.MessageP>
                  {placeDetails.serves_breakfast}
                </Styled.MessageP>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>Serve almoço: </Styled.MessageKey>
                <Styled.MessageP>{placeDetails.serves_dinner}</Styled.MessageP>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>
                  Serve comida vegetariana:{" "}
                </Styled.MessageKey>
                <Styled.MessageP>
                  {placeDetails.serves_vegetarian_food}
                </Styled.MessageP>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>Serves vinho: </Styled.MessageKey>
                <Styled.MessageP>{placeDetails.serves_wine}</Styled.MessageP>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>Google: </Styled.MessageKey>
                <Styled.MessageLink
                  href={placeDetails.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {placeDetails.link}
                </Styled.MessageLink>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>website: </Styled.MessageKey>
                <Styled.MessageLink
                  href={placeDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {placeDetails.website}
                </Styled.MessageLink>
              </Styled.MessageInLine>

              <Styled.MessageInLine>
                <Styled.MessageKey>
                  wheelchair_accessible_entrance:{" "}
                </Styled.MessageKey>
                <Styled.MessageP>
                  {placeDetails.wheelchair_accessible_entrance}
                </Styled.MessageP>
              </Styled.MessageInLine>
            </div>
          ))}
        </div>
      )
    } else if (item.message[0].type === "place") {
      // Mensagem do tipo "place"
      return (
        <div style={{ marginTop: "10px" }}>
          <Styled.MessageTitle>{item.message[0].title}</Styled.MessageTitle>
          {item.message.slice(1).map((placeInfo, i) => (
            <div key={i} style={{ marginTop: "20px" }}>
              <Styled.MessageKey>
                {i + 1}. {placeInfo.place_name}
              </Styled.MessageKey>
              <Styled.MessageP>{placeInfo.description}</Styled.MessageP>
            </div>
          ))}
        </div>
      )
    }
  } else if (typeof item.message === "string") {
    // Mensagem de texto simples
    return <Styled.MessageP>{item.message}</Styled.MessageP>
  }

  return "Desculpe, não entendi"
}

const defaultList = []
export default function ChatBot({ list = defaultList }) {
  list = messages
  const [isOpen, setIsOpen] = useState(false)
  const [, setUserMessages] = useState(list) // Renomeando para evitar conflito de nomes
  const [inputMessage, setInputMessage] = useState("")
  useEffect(() => {
    list.length = 0
    const initialMessage = getRandomStartMessage()
    list.push(initialMessage)
    setUserMessages([...messages])
  }, [list]) // Executa apenas na montagem

  const handleSendMessage = async () => {
    const isTooLongOrSpecialCharactersOnly =
      inputMessage.length > 300 || /^[\W_]+$/.test(inputMessage)
    const specialCharacterCount = (
      inputMessage.match(
        /[^a-zA-Z0-9ç\s!@#$%^&*()_+\-=]\[\]{};':"\\|,.<>\/?]+/g
      ) || []
    ).length
    const hasTooManySpecialCharacters = specialCharacterCount > 1
    const hasMoreNumbersThanLettersOrOnlyNumbers =
      inputMessage.replace(/[^a-zA-Z]/g, "").length <
      inputMessage.replace(/\D/g, "").length
    const hasRepeatedCharacterSequence = /(\w)\1{2,}/.test(inputMessage)
    const hasMoreThanTwoSequentialRepeatedLetters = /(\w)\1{2}/.test(
      inputMessage
    )

    console.log(
      `isTooLongOrSpecialCharactersOnly: ${isTooLongOrSpecialCharactersOnly}`
    )
    console.log(
      `hasMoreNumbersThanLettersOrOnlyNumbers: ${hasMoreNumbersThanLettersOrOnlyNumbers}`
    )
    console.log(`hasRepeatedCharacterSequence: ${hasRepeatedCharacterSequence}`)
    console.log(
      `hasMoreThanTwoSequentialRepeatedLetters: ${hasMoreThanTwoSequentialRepeatedLetters}`
    )
    console.log(`specialCharacterCount: ${specialCharacterCount}`)
    if (
      isTooLongOrSpecialCharactersOnly ||
      hasTooManySpecialCharacters ||
      hasMoreNumbersThanLettersOrOnlyNumbers ||
      hasRepeatedCharacterSequence ||
      hasMoreThanTwoSequentialRepeatedLetters
    ) {
      return
    }

    let newMessages = [...list] // Altere de const para let
    list.push({ type: "send", message: inputMessage })
    setInputMessage("")
    setUserMessages(newMessages)

    try {
      const response = await api.post("/bot", {
        message: inputMessage,
      })

      const responseData = response.data
      list.push({ type: "receive", message: responseData.response })
    } catch (error) {
      console.error("Erro na solicitação à API:", error)
      list.push({ type: "receive", message: "Desculpe, não entendi" })
    }

    newMessages = [...list]
    setUserMessages(newMessages)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <div className={isOpen ? "contentClose" : "contentOpen"}>
        <TitlePage text={"Chat bot"} />
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
                {list.map((item, index) => (
                  <Styled.ContentMessage typeMessage={item.type} key={index}>
                    <Styled.Message typeMessage={item.type}>
                      {renderMessageContent(item)}
                    </Styled.Message>
                  </Styled.ContentMessage>
                ))}
              </Styled.ContentMessages>
            </Styled.CardMessages>

            <Styled.SendMessage>
              <Input
                placeholder={"Pergunte algo..."}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Styled.BgIcon onClick={handleSendMessage}>
                <Styled.SendIcon icon={faPaperPlane} />
              </Styled.BgIcon>
            </Styled.SendMessage>
          </Styled.CardChat>
        </StyledContentLogged>
      </div>
    </>
  )
}
