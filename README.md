# where2go.website
Um planejamento de viagens react js

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
