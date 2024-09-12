const jobInput = document.getElementById('jobInput')
const jobButton = document.getElementById('addJobBtn')
const jobList = document.getElementById('jobList')

jobButton.addEventListener('click', () => {
    const jobText = jobInput.value.trim()
    if (jobText === '') {
        alert(`Digite o nome da vaga.`)
        return
    }

    const li = document.createElement('li')
    li.textContent = jobText

    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remover'
    removeButton.className = 'remove-btn'
    removeButton.addEventListener('click', ()=>{
        jobList.removeChild(li)
    })

    li.appendChild(removeButton)
    jobList.appendChild(li)

    jobInput.value=''

})