console.log('Boas vindas ao jogo de Blackjack!')
let respUsuario = confirm('Quer iniciar uma nova rodada? ')

if (respUsuario == true){
   let cartasUsuario = []
   let cartasPc = []
  for (c= 0; c < 2; c++){
     let cartasDoUsuario = comprarCarta()
     let cartasDoPc = comprarCarta()
     cartasUsuario.push(cartasDoUsuario)
     cartasPc.push(cartasDoPc)

  }
  let pontosUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor

  let pontosPc = cartasPc[0].valor + cartasPc[1].valor

  console.log(`Usuário - cartas : ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto} - ${pontosUsuario}`)
  console.log(`Computador - cartas: ${cartasPc[0].texto}, ${cartasPc[1].texto} - ${pontosPc}`)

  if (pontosUsuario > pontosPc){
      console.log('O usuário ganhou!')
  }
  else if (pontosUsuario == pontosPc){
     console.log('Empatouu!!')
  }else {
     console.log('O computador venceu!')
  }
}else{
   console.log('O jogo acabou!')
}
