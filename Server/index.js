const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

let clienteJson = {
    "clienteId": "12345",
    "nome": "João Silva",
    "endereco": {
        "rua": "Rua Exemplo",
        "numero": "42",
        "cidade": "Lisboa",
        "codigoPostal": "1234-567"
    },
    "consumo": [
        {
        "mes": "Janeiro",
        "ano": 2023,
        "kWhConsumido": 250,
        "custoTotal": 35.50,
        "dataLeitura": "2023-01-31"
        }
    ],
    "informacoesAdicionais": {
        "tipoTarifa": "Residencial",
        "fornecedorEnergia": "Empresa XYZ",
        "contratoAtivo": true
    }
}
app.use(cors());
app.use(express.json())
app.get('/cliente', (req, res) => { 
    res.status(200).json(clienteJson);
});

app.listen(port, () => console.log(`Listening on port ${port}!`)); // Iniciar o servidor