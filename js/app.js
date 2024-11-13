function adicionar() {
  //recuperar valores: nome do produto, quantidade e valor.
  let nomeProduto = document.getElementById('produto').value;
  let produto = nomeProduto.split('-')[0];
  let valor = nomeProduto.split('R$')[1];
  let qtdProduto = document.getElementById('quantidade').value;

  let total = valor * qtdProduto;

  alert(total)
  // calcular o preço, o nosso subtotal.
  //adicionar no carrinho
  //atualizar o valor total
}

function limpar() {

}