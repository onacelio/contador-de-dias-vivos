function mudarTema() {
    let button = document.getElementById('teme')
    let body = document.getElementsByTagName('body')[0]
    if(button.value === 'true') {
        body.classList.add('dark')
        button.value = 'false'
        button.textContent = 'TEMA ESCURO'
    } else {
        body.classList.remove('dark')
        button.value = 'true'
        button.textContent = 'TEMA CLARO'
    }
}