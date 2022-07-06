import prompt from 'prompt-sync'
import { readFileSync, writeFileSync } from 'fs'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}

export function get_number(){
    const numero = Number(input('Digite o tamanho do vetor: '))
    return numero
}

export function novo_vetor(tamanho){
    return new Array(tamanho)
}

export function iniciar_vetor_numerico(){
    let menu = '_______Opçoes para vetor numérico_________'
    menu += '\n1- Vetor com dados automáticos.'
    menu += '\n2- Vetor com dados digitados pelo cliente.'
    menu += '\n3- Vetor com dados importados de arquivo de texto'
    console.log(menu)
    let opcoes = receber_opcao()
    if (opcoes === 1){
         const tamanho_vetor = get_number()
         const minimo = Number(input('Digite o valor minimo: '))
         const maximo = Number(input('Digite o valor maximo: '))
         const vetor = vetor_automático(tamanho_vetor, minimo, maximo)
        return vetor
        }else if (opcoes === 2){
        const tamanho_vetor = get_number()
        const minimo = Number(input('Digite o valor minimo: '))
        const maximo = Number(input('Digite o valor maximo: '))
        const vetor = vetor_manual(tamanho_vetor, minimo, maximo)
        return vetor
    }else if (opcoes === 3){
        const vetor = vetor_importado()
        return vetor
    }
    
}

function vetor_importado(){
    const nome_do_arquivo = input('Digite o nome do arquivo .txt: ')
    const lines = import_file(nome_do_arquivo)
    const vetor = novo_vetor(lines.length)
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = lines[i]
    }

    return vetor
}

export function vetor_manual(tamanho, minimo, maximo){
    const vetor = novo_vetor(tamanho)
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = numero(minimo, maximo)
    }
    return vetor
}

export function vetor_automático(tamanho, minimo, maximo){
    const vetor = novo_vetor(tamanho)
    for (let i = 0; i < vetor.length; i++){
         vetor[i] = numero_aleatorio(minimo, maximo)
    }
    return vetor
    
}

export function numero_aleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

export function receber_opcao(){
    let opcao = Number(input('Digite aqui a opção desejada: '))
    while (opcao < 0 && opcao > 10){
         opcao = Number(input('Digite aqui a opção desejada: '))
    }
    return opcao
}

function numero(minimo, maximo){
    let number = Number(input('Digite um número: '))
    while (isNaN(number) || (number < minimo || number > maximo)){
        number = Number(input('Digite um número: '))
    }

    return number
}

function import_file(nome){
    const lines = readFileSync(nome, 'utf-8').split('\r\n')
    return lines
}

export function maior_posicao(vetor){
    let maior = 0
    let posterior = 0
    let posicao 
    for (let i = 0; i < vetor.length; i++){
        maior = vetor[0]
        posterior = vetor[i++]
        if (posterior > maior){
            maior = posterior
            posicao = i
        }
    }
    return `O maior numero é ${maior} e sua posicao é ${posicao}.`
}

export function menor_posicao(vetor, maximo){
    let maior = 0
    let menor = maximo
    let posicao 

    for (let i = 0; i < vetor.length; i++){
        maior = vetor[i]
        if(maior < menor){
            menor = maior
            posicao = i 
        }
    }
    return `O menor numero é ${menor}, e sua posicao é ${posicao}.`
}

export function soma(vetor){
    let soma = 0
    for (let i = 0 ; i < vetor.length; i++){
        soma += Number(vetor[i])
    }
    return soma
}

export function media(vetor){
    let soma = 0
    let media = 0 
    for (let i = 0 ; i < vetor.length; i++){
        soma += Number(vetor[i])
        media = soma/vetor.length
    }
    return media
}

export function negativos_e_quantidade(vetor){
    let qtd_negativos = 0
    let negativos = ``
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            qtd_negativos++
            negativos += `${vetor[i]} `
        }
    }
    return `Os números negativos são ${negativos}, têm ${qtd_negativos} negativos.`
}

export function atualizar_vetor(vetor){
    let menu = '__________Opções para atualizar o vetor__________'
    menu += '\n1-Para multiplicar os elementos por um valor'
    menu += '\n2-Para elevar(exponenciar) os elementos por um valor'
    menu += '\n3-Para reduzir os elementos a uma fração'
    menu += '\n4-Para substituir os valores negativos por um número aleatório'
    menu += '\n5-Para ordenar os valores em ordem crescente ou decrescente'
    menu += '\n6-Para embaralhar os valores'
    console.log(menu)
    const opcao = receber_opcao()
    if (opcao === 1){
        const elemento = Number(input('Digite por qual valor o número deve ser multiplicado: '))
        for (let i = 0; i < vetor.length; i++){
            vetor[i] = vetor[i] * elemento
        }
        return vetor
    }else if (opcao === 2){
        const elemento = Number(input('Digite por qual valor o número deve ser exponenciado: '))
        for (let i = 0; i < vetor.length; i++){
            vetor[i] = vetor[i] ** elemento
        }
        return vetor
    }else if (opcao === 3){
        const elemento = input('Digite aqui a que fração o número deve ser reduzido: ').split('/')
        const fração = Number(elemento[0]) / Number(elemento[1])
        for (let i = 0; i < vetor.length; i++){
            vetor[i] = (vetor[i] * fração).toFixed(2)
        }
        return vetor
    }else if (opcao === 4){
        const min = Number(input('Numero minímo: '))
        const max = Number(input('Numero máximo: '))
        for (let i = 0; i < vetor.length; i++){
            if (vetor[i] < 0){
            vetor[i] = numero_aleatorio(min, max)
            }
        }
        return vetor
    }else if (opcao === 5){
        let menu = '1-Ordem crescente'
        menu += '\n2-Ordem decrescente'
        console.log(menu)
        const opcao = receber_opcao()
        let ordem
        if (opcao === 1){
            ordem = ordenar_vetor_crescente(vetor)
        }else{
            ordem = ordenar_vetor_decrescente(vetor)
        }
        return ordem
    }else if (opcao === 6){
        const vetor_embaralhado = embaralhar_vetores(vetor)
        console.log(vetor_embaralhado)
    }
}

function ordenar_vetor_crescente(vetor){
    let auxiliar
    for (let i = vetor.length; i > 0; i--){
        for (let j = 0; j < i; j++){
            if (maior_numero(vetor[j], vetor[j+1])){
                auxiliar = vetor[j+1]
                vetor[j+1] = vetor[j]
                vetor[j] = auxiliar
            }
        }
    }
    return vetor
}

function ordenar_vetor_decrescente(vetor){
    let auxiliar
    for (let i = 0; i < vetor.length - 1; i++){
        for (let j = vetor.length - 1; j > 0; j--){
            if (maior_numero(vetor[j], vetor[j-1])){
                auxiliar = vetor[j-1]
                vetor[j-1] = vetor[j]
                vetor[j] = auxiliar
            }
        }
    }
    return vetor
}

function maior_numero(numero1, numero2){
    if (numero1 > numero2){
        return true
    }
    return false
}

function embaralhar_vetores(vetor){
    let auxiliar
    for (let i = 0; i < vetor.length - 1; i++){
        for (let j = 0; j < vetor.length - 1; j++){
            if (j < vetor.length/2){
                auxiliar = vetor[j+1]
                vetor[j+1] = vetor[j]
                vetor[j] = auxiliar
            }else if (j % 2 === 0){
                auxiliar = vetor[j+1]
                vetor[j+1] = vetor[j]
                vetor[j] = auxiliar
            }
        }
    }
    return vetor
}

export function adicionar_elementos(vetor){
    const tamanho = Number(input('Digite a quantidade de elementos que serão adicionados: '))
    for (let i = 0; i < tamanho; i++){
        vetor[vetor.length] = numero()
    }
    return vetor
}

export function remover_por_valor(vetor){
    const valor = Number(input('Digite o valor que deve ser removido do vetor: '))
    const qtd = quantidade_de_um_elemento(vetor, valor)
    const tamanho = vetor.length - qtd
    const vetor_atualizado = novo_vetor(tamanho)
    console.log(vetor_atualizado.length)

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] !== valor){
            vetor_atualizado[i] = vetor[i]
        }
    }
    return vetor_atualizado
}

export function remover_por_posicao(vetor){
    const posicao = Number(input('Digite a posiçao que deve ser removida:'))
    const vetor_atualizado = novo_vetor(vetor.length - 1)
    for (let i = 0; i < vetor.length; i++){
        if (i !== posicao){
            vetor_atualizado[i] = vetor[i]
        }
    }
    return vetor_atualizado
}

function quantidade_de_um_elemento(vetor, valor){
    let quantidade = 0
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] === valor){
            quantidade++
        }
    }
    return quantidade
}

export function modificar_por_posicao(vetor){
    const posicao = Number(input('Digite a posiçao que deve ser modificada: '))
    for (let i = 0; i < vetor.length; i++){
        if (i === posicao){
            vetor[i] = Number(input('Digite o valor que deve ser colocado: '))
        }
    }
    return vetor
}

export function white_file_vetor(vetor){
    for (let i = 0; i < vetor.length; i++){
        writeFileSync('vetor.txt', vetor[i] + '\n', {
            encoding: "utf8",
            flag: "a+",
            mode: 0o666
          })
    }
}

export function ler_file(texto){
    return readFileSync(texto, 'utf-8')
}