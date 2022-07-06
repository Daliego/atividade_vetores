import { input, vetor_automático } from "./io_utils.js"

function main(){
    //const vetor = vetor_automático(10, -20, 20)

    //console.log(vetor.length) 
    const min = 1
    const max = 10
    const numero = numero_aleatorio(min, max)
    //const cachorro = teste('Digite aqui o que vc vai digitar:')
    //console.log(vetor)
    const vetor = [12, 3, 12, 24, 133, 5]
    const quantidade = contar_elementos(vetor, 10)
    const new_vetor = new Array(quantidade)
    let j = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10){
            new_vetor[j] = vetor[i]
            j++
        }
        console.log(j)
    }
    console.log(new_vetor)

}

function contar_elementos(vetor, numero){
    let qtd = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] >= numero){
            qtd++
        }
    }
    return qtd
}

function preencher_vetor(elemento, vetor){
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = elemento
    }
}


function numero_aleatorio(min, max){

    return Math.floor(Math.random() * (max - min)) + min
}

function teste(frase){
    const numero = Number(input(frase))
    return numero
}

function ordenar(){
    //const vetor = vetor_automático(10, -20, 20)
    const vetor = [2, 3, 4]
    let auxiliar
    let contador = 0
    for (let i = vetor.length - 1; i > 0; i--){
        let trade
        for (let j = 0; j < i; j++){
            if(comparador(vetor[j], vetor[j+1])){
                auxiliar = vetor[j+1]
                vetor[j+1] = vetor[j]
                vetor[j] = auxiliar
                trade = true
            }
            contador++
        }    
        /* if(trade === false){
            break
        } */
    }
    console.log(vetor)
    console.log(contador)
}

function comparador(numero1, numero2){
    if (numero1 > numero2){
        return true
    }
    return false
}

//ordenar()
function adicionar_valores(){
    let vetor = vetor_automático(5, -20, 20)
    vetor += 96
    const array = [10,20,30]
    array[2] = undefined
    array[2] = 'Diego'
    console.log(array)

}

//adicionar_valores()

main()