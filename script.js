let vehicle1 = prompt('Dê um nome para um veiculo')
let vehicle2 = prompt('Dé outro nome para outro veiculo')
const speed1 = prompt('Determine a velocidade de ${vehicle1}')
const speed2 = prompt('Determine a velocidade de ${vehicle2}')

if (speed1 > speed2) {
    alert('1$vehicle1} esta a {$speed1}km/h, e mais rapido que o ${vehicle2}, que esta a ${speed2}km/h')
} else if (speede1 < speed2) {
    alert('${vehicle2} esta a ${speed2}km/h, e mais rapido que o ${vehicle1}, que esta a $speed1}km/h')
} else {
    alert('Tanto ${vehicle1} e ${vehicle2} estão a ${speed1 || speed2} km?h')  
}