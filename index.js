const pedidos= [
    {id: 1, cliente: "Ana", valor: 150, status: "pago"},
    {id: 2, cliente: "Carlos", valor: 300, status: "pendente"},
    {id: 3, cliente: "João", valor: 250, status: "pago"},
    {id: 4, cliente: "Maria", valor: 400, status: "cancelado"},
    {id: 5, cliente: "Pedro", valor: 500, status: "pago"},
];
function faturamentoPedidos (pedidos){
    const pedidosPagos= pedidos.filter(p => p.status === "pago");
    if (pedidosPagos.length < 1 ){
        return "Não há pedidos pagos"
    }
    const faturamento = pedidosPagos.reduce((acc, curr) => acc + curr.valor, 0);
    const Ticketmedio = faturamento / pedidosPagos.length;
    const maiorVenda = pedidosPagos.reduce((maior, atual) => maior.valor > atual.valor ? maior : atual);
    const moeda = valor =>
        valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    return `Faturamento: R$ ${moeda(faturamento)}
     \nQuantidade de pedidos: ${pedidosPagos.length}
      \nTicket médio: R$${moeda(Ticketmedio)}
       \nMaior venda paga: ${maiorVenda.cliente} - ${moeda(maiorVenda.cliente)}`
}
console.log(faturamentoPedidos(pedidos));