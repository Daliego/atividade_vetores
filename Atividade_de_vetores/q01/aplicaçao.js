import prompt from 'prompt-sync'
import {readFileSync} from 'fs'
import { iniciar_vetor_numerico, receber_opcao, 
     maior_posicao, menor_posicao, 
     media, soma, negativos_e_quantidade,
     atualizar_vetor, adicionar_elementos,
     remover_por_posicao, remover_por_valor,
     modificar_por_posicao, white_file_vetor,
     ler_file } from './io_utils.js'
const input = prompt()

function main(){
     let menu = '######MENU de opções para vetores#######'
     menu += '\n0-Digite para parar'
     menu += '\n1-Digite inicialiazar vetor numérico'
     menu += '\n2-Digite para apresentar os valores'
     menu += '\n3-Digite para resetar os valores do vetor'
     menu += '\n4-Para mostrar a quantidade de elementos do vetor'
     menu += '\n5-Para ver maior e menor elemento do vetor e sua posição'
     menu += '\n6-Para ver a media dos valores do vetor'
     menu += '\n7-Para ver a soma dos valores do vetor'
     menu += '\n8-Para mostrar os valores negativos e sua quantidade'
     menu += '\n9-Atualizar os valores de acordo com a regra'
     menu += '\n10-Para adicionar novos vetores'
     menu += '\n11-Para remover valor do vetor'
     menu += '\n12-Para remover elemento do vetor'
     menu += '\n13-Modificar o valor do veto na posição específica'
     menu += '\n14-Para salvar os elemento do vetor'
     console.log(menu)
     let opcao = receber_opcao()
     let vetor 
     while(opcao !== 0){
          if (opcao === 1){
               console.clear()
               vetor = iniciar_vetor_numerico()
               console.log(vetor)
          }else if (opcao === 2){
               console.clear()
               console.log(vetor)
          }else if (opcao === 3){
               const choice = input('Tem cerceza que quer reiniciar o vetor: ')
               if (choice === 'sim'){
                    console.clear()
                    vetor = iniciar_vetor_numerico()
                    console.log(vetor)
               }else{
                    console.clear()
               }
          }else if (opcao === 4){
               console.log(vetor.length)
          }else if (opcao === 5){
               console.clear()
               const maximo = Number(input('Digite o valor máximo do vetor:'))
               const maior_numero = maior_posicao(vetor)
               const menor_numero = menor_posicao(vetor, maximo)
               console.log(`${maior_numero}\n${menor_numero}`)
          }else if (opcao === 6){
               console.clear()
               const media_dos_valores = media(vetor)
               console.log(media_dos_valores.toFixed(2))
          }else if (opcao === 7){
               console.clear()
               const soma_dos_valores = soma(vetor)
               console.log(soma_dos_valores)
          }else if (opcao === 8){
               console.clear()
               const qtd_negativos = negativos_e_quantidade(vetor)
               console.log(qtd_negativos)
          }else if (opcao === 9){
               console.clear()
               const novo_vetor = atualizar_vetor(vetor)
               console.log(novo_vetor)
          }else if (opcao === 10){
               console.clear
               const novo_vetor = adicionar_elementos(vetor)
               console.log(novo_vetor)
          }else if (opcao === 11){
               console.clear
               const novo_vetor = remover_por_valor(vetor)
               console.log(novo_vetor)
          }else if (opcao === 12){
               console.clear
               const novo_vetor = remover_por_posicao(vetor)
               console.log(novo_vetor)
          }else if (opcao === 13){
               console.clear
               const novo_vetor = modificar_por_posicao(vetor)
               console.log(novo_vetor)
          }else if (opcao === 14){
               console.clear
               white_file_vetor(vetor)
               console.log(ler_file('vetor.txt'))
               save = true
          }

          input('Digite <enter> para continuar')
          console.clear()
          console.log(menu)
          opcao = receber_opcao()

     }
}




main()