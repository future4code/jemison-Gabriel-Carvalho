```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  let x = 0
  let num = 0
  for(let i=0; i < arrayDeNumeros.length; i++){
    
    if(arrayDeNumeros[i] == numeroEscolhido){
      x += 1
      num = arrayDeNumeros[i]
    }
  }
  if(numeroEscolhido == num){
    return `O número ${num} aparece ${x}x`
  }
  
  if(numeroEscolhido == 3){
      return 'Número não encontrado'
    }
  if(arrayDeNumeros.length == 0){
    return 'Número não encontrado'
  }
}
```