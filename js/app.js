let valorGeral = 0;

function adicionar() {
  //recuperar valores: nome do produto, quantidade e valor.
  let nomeProduto = document.getElementById('produto').value;
  let produto = nomeProduto.split('-')[0];
  let valor = nomeProduto.split('R$')[1];
  let qtdProduto = document.getElementById('quantidade').value;

  // calcular o preço, o nosso subtotal.
  let total = valor * qtdProduto;
  
  //adicionar no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML +  `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtdProduto}x</span> ${produto} <span class="texto-azul">R$${valor}</span>
        </section>`
  //atualizar o valor total
  valorGeral = valorGeral + total;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${valorGeral}`
}

function limpar() {
  valorGeral = '0'
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = ' ';
 

}