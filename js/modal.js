;(() => {
  const modalButton = document.querySelectorAll('[data-modal-button-basket]')
  const modal = document.querySelector('[data-modal-basket]')
  const backdrop = document.querySelector('[data-backdrop]')

  console.log(modalButton)

  modalButton.forEach((el) => {
    console.log('element', el)
    el.addEventListener('click', () => {
      modal.classList.toggle('is-open')
      backdrop.classList.toggle('is-open')
    })
  })
})()
