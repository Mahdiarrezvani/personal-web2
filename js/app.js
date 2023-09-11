let container = document.querySelector('.container')
let textForSize = document.querySelector('.text-for-size')
window.addEventListener('resize', sizePageIf);
window.addEventListener('load', sizePageIf);
function sizePageIf() {
    if (window.innerWidth < 1900) {
        textForSize.style.display = 'block'
        container.style.display = 'none'
    } else {
        container.style.display = 'block'
        textForSize.style.display = 'none'
    }
}