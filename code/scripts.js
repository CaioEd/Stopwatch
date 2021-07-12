"use strict"

const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const parar = document.querySelector('#parar')

let hora = 0
let minuto = 0
let segundo = 0

let tempo = 1000 // QUANTOS MILÉSIMOS VALEM 1 SEGUNDO.

let cron

function start(){
    cron = setInterval( () => { timer()}, tempo) // QUAL FUNÇÃO VAI SER EXECUTADA A CADA UM SEGUNDO.
}

function pause(){
    clearInterval(cron) // QUAL INTERVALO PARAR.
}

function stop(){
    clearInterval(cron)
    hora = 0
    minuto = 0
    segundo = 0

    document.querySelector('#counter').innerHTML = '00:00:00'
}

function timer(){
    segundo++

    if(segundo == 60){
        segundo = 0
        minuto++

        if(minuto == 60){
            minuto = 0
            hora++
        }
    }

    const format = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo) // SE HORA(OU MINUTO/SEGUNDO) FOR MENOR QUE 10, COLOQUE UM ZERO NA FRENTE. 

    document.querySelector('#counter').innerHTML = format
} 

iniciar.addEventListener('click', start)
pausar.addEventListener('click', pause)
parar.addEventListener('click', stop)