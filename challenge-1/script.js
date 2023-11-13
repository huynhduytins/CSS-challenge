const menuIcon = document.querySelector('.menu-icon')

menuIcon.addEventListener('click', () => {
  if ([...menuIcon.classList].includes('open')) {
    menuIcon.classList.remove('open')
    menuIcon.classList.add('close')
  } else {
    menuIcon.classList.remove('close')
    menuIcon.classList.add('open')
  }
})
