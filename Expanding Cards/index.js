let paneles = document.querySelectorAll(".panel");

paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClass()
        panel.classList.add('active')
    })
})

function removeClass() {
    paneles.forEach(panel => {
        panel.classList.remove('active')
    })
}