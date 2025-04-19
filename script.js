const input_clienteID = document.getElementById("clienteID");
const input_nome = document.getElementById('nome');
const input_rua = document.getElementById('rua');
const input_numeroPredio = document.getElementById('numeroPredio');
const input_cidade = document.getElementById('cidade');
const input_codigoPostal = document.getElementById('codigoPostal');
const input_mes = document.getElementById('mes');
const input_ano = document.getElementById('ano');
const input_kwhconsumido = document.getElementById('kwhconsumido');
const input_custoTotal = document.getElementById('custoTotal');
const input_dataLeitura = document.getElementById('dataLeitura');
const input_tipoTarifa = document.getElementById('tipoTarifa');
const input_fornecedor = document.getElementById('fornecedor');
const input_contratoAtivo = document.getElementById('contratoAtivo');

  fetch('http://localhost:4000/cliente', {
    method: 'GET',
  })
  .then(res => res.json())
  .then(data => {
    console.log("JSON:" + JSON.stringify(data));
    input_clienteID.value = data.clienteId;
    input_nome.value = data.nome;
    input_rua.value = data.endereco.rua;
    input_numeroPredio.value = data.endereco.numero;
    input_cidade.value = data.endereco.cidade;
    input_codigoPostal.value = data.endereco.codigoPostal;
    input_mes.value = data.consumo[0].mes;
    input_ano.value = data.consumo[0].ano;
    input_kwhconsumido.value = data.consumo[0].kWhConsumido;
    input_custoTotal.value = data.consumo[0].custoTotal;
    input_dataLeitura.value = data.consumo[0].dataLeitura;
    input_tipoTarifa.value = data.informacoesAdicionais.tipoTarifa;
    input_fornecedor.value = data.informacoesAdicionais.fornecedorEnergia;
    if (data.informacoesAdicionais.contatoAtivo = true && input_contratoAtivo.checked == false) {
      input_contratoAtivo.click();
    }
  })
  .catch(error => console.error(error));


