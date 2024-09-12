var fila = []


function adicionarPaciente() {
    var nome = prompt("Digite o nome do paciente :")
    fila.push(nome)
    alert(`O Paciente ${nome} está esperando na fila!`)
}

function retirarPaciente() {
    if (fila.length === 0) {
        alert("Não há pacientes na fila!")
        return
    }
    var nome = fila.shift()
    alert(`O paciente ${nome} foi retirado da fila !`)

}

function mostrarFila() {
    alert(`Pacientes na fila : 
        ${fila.join(",")}`)
}

while (true) {
    var opcao = prompt(`
        Digite 1 para adicionar pacientes.
        Digite 2 para retirar o paciente.
        Digite 3 para mostrar a fila.
        Ou digite 4 para fechar a aba!`)

        if (opcao ==="1"){
            adicionarPaciente()
        }else if (opcao === "2"){
            retirarPaciente()
        }else if (opcao === "3"){
            mostrarFila()
        } else if (opcao === "4"){
            break   
        } else{
            alert("Opção invalida!")
        }
}