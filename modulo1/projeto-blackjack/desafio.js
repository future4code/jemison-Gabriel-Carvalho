let respostaUsuario = confirm('Boas vindas ao jogo de BlackJack, deseja iniciar uma nova rodada?')

const cartasUsuario = []
const cartasPc = []

if (respostaUsuario === true){
   for(let c = 0; c < 2; c++){
      cartasUsuario.push(comprarCarta())
      cartasPc.push(comprarCarta())

      while(cartasUsuario[c].texto && cartasPc[c].texto == 'A♥️'){
         cartasUsuario.texto.splice(c,1)
         cartasUsuario.texto.splice(c,1)

         cartasPc.texto.splice(c,1)
         cartasPc.texto.splice(c,1) 

         cartasUsuario.push(comprarCarta())
         
         cartasPc.push(comprarCarta())

      }
   }
   
   let usuarioCompraCarta = confirm (`Suas cartas são: ${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}
A carta revelada do computador é: ${cartasPc[0].texto}
Deseja comprar mais uma carta? `)

   if(usuarioCompraCarta == false){
      let pontosJogador = cartasUsuario[0].valor + cartasUsuario[1].valor
      let pontosPC = cartasPc[0].valor + cartasPc[1].valor

      if (pontosJogador > 21){
         
         confirm ('Suas cartas são:  ' + cartasUsuario[0].texto  +  cartasUsuario[1].texto + '. ' + 'Pontuação: ' + pontosJogador + '\n' + 'Cartas do computador: ' + cartasPc[0].texto +  cartasPc[1].texto +'. '+ ' Pontuação: ' + pontosPC + '\n' + 'O computador venceu')

      }else if( pontosPC > 21 && pontosJogador <= 21){
         
         confirm ('Suas cartas são: ' + cartasUsuario[0].texto + cartasUsuario[1].texto + '. ' + 'Pontuação: ' + pontosJogador + '\n' + 'Cartas do computador: ' + cartasPc[0].texto + cartasPc[1].texto +'.'+ ' Pontuação: ' + pontosPC + '\n' + 'O jogador venceu')
      
      }else if (pontosJogador === pontosPC){
         confirm ('Suas cartas são: ' + cartasUsuario[0].texto + cartasUsuario[1].texto + '. ' + 'Pontuação: ' + pontosJogador + '\n' + 'Cartas do computador: ' + cartasPc[0].texto + cartasPc[1].texto +'.'+ ' Pontuação: ' + pontosPC + '\n' + 'Empate')
      }

   }

   while (usuarioCompraCarta == true){
      cartasUsuario.push(comprarCarta())
      cartasPc.push(comprarCarta())
      let novasCartas = cartasUsuario.map((item) =>{return item.texto})
      
      let comprarMaisCartas = confirm (`Suas cartas são: ${novasCartas}
A carta revelada do computador é: ${cartasPc[0].texto}
Deseja comprar mais uma carta? `)

      if (comprarMaisCartas == false){ break }

   }

   let pontosUsuario = cartasUsuario.map((item) =>{return item.valor}).reduce((a, b) => a + b, 0)

   let pontosPc = cartasPc.map((item) => {return item.valor}).reduce((a,b) => a + b, 0)

   let baralhoFinalUsuario = cartasUsuario.map((item) =>{return item.texto})
   let baralhoFinalPc = cartasPc.map((item) => {return item.texto})

   if (pontosUsuario > 21){
      
      confirm('Suas Cartas são ' + baralhoFinalUsuario + '.' + ' Sua pontuação foi ' + pontosUsuario  + "\n" + 'As cartas do computador são ' + baralhoFinalPc + '.' + ' Pontuação do computador : ' + pontosPc + '\n' + 'O computador venceu!')

   }else if(pontosPc > 21 && pontosUsuario <= 21){
      
      confirm('Suas Cartas são ' + baralhoFinalUsuario + '.' + ' Sua pontuação foi' + pontosUsuario  + "\n" + 'As cartas do computador são ' + baralhoFinalPc + '.' + ' Pontuação do computador : ' + pontosPc + '\n' + 'O jogador venceu!')

   }else if (pontosUsuario === pontosPc){
      confirm('Suas Cartas são ' + baralhoFinalUsuario + '.' + ' Sua pontuação foi' + pontosUsuario  + "\n" + 'As cartas do computador são ' + baralhoFinalPc + '.' + ' Pontuação do computador : ' + pontosPc + '\n' + 'Empate')

   }

}else{
   alert('O jogo acabou!')
}
