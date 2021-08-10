;(() => {
  const button = document.querySelectorAll('[data-button-order]')

  const modal = document.querySelector('[data-modal-order]')

  button.forEach((el) => {
    console.log('element', el)
    el.addEventListener('click', () => {
      modal.classList.toggle('is-hidden')
    })
  })
})()
