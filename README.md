# where2go.website
Um planejamento de viagens react js
Participei do desafio proposto pela Fiap em parceria com a Plusoft, que tinha como objetivo criar uma solução tecnológica integrada com Inteligência Artificial e Realidade Virtual.

O projeto resultante foi o Where2go, uma plataforma que oferece um planejamento de viagem assertivo, personalizado de acordo com as preferências do usuário. Destaca-se a integração da inteligência artificial através da machine learning do ChatGPT.

Minha responsabilidade principal foi o desenvolvimento completo do frontend utilizando React JS. Isso incluiu a integração com a API de chatbot em Python, também criada por mim, e a API core em Java, que gerenciava toda a lógica da aplicação. Além disso, implementei serviços como autenticação JWT, funcionalidades de login, registro, cadastro de usuários e gestão de viagens, entre outros, diretamente no frontend.

Essas implementações contribuíram para uma experiência de usuário fluida e funcional, destacando a eficiência do Where2go na geração de planejamentos de viagem personalizados.

- [NEUROTRIX AI API](https://febrenos.pythonanywhere.com)
- [SITE APRESENTATIVO](https://where2go-info.vercel.app/)
- [PROJETO](https://where2go.website/sign-in)

### NEUROTRIX AI API
| Method | url |
|---|---|
| Post | http://127.0.0.1:5000/bot |
| Post | http://127.0.0.1:5000/weather |
| Post | http://127.0.0.1:5000/place |

<details>
<summary>/bot</summary>
    
- requests
```json
{
    "message":"mais informações sobre restaurantes classicos em sao paulo"
}
```
```json
{
    "message":"outback em sao paulo 3"
}
```
```json
{
    "message":"mais informaçoes sobre outback anália franco salto sao paulo"
}
```

```json
{
    "message":"clima sp-americana daqui 5 dias"
}
```

</details>

<details>
<summary>/weather</summary>

- requests
```json
{
    "days_ahead":0,
    "location":"Americana, São Paulo"
}
```

</details>

<details>
<summary>/place</summary>

- requests
```json
{
    "limit": 1,
    "query":"restaurantes classicos sao paulo"
}
```

</details>
