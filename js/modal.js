(() => {
  const modalButton = document.querySelectorAll('[data-modal-button-basket]')
  const modal = document.querySelector('[data-modal-basket]')
  const backdrop = document.querySelector('[data-backdrop]')

  const modalButton1 = document.querySelectorAll('[data-modal-button-catalog]')
  const modal1 = document.querySelector('[data-modal-catalog]')

  const modalButton2 = document.querySelectorAll(
    '[data-modal-button-catalog-all]',
  )
  const modal2 = document.querySelector('[data-modal-catalog-all]')

  console.log(modalButton1)

  modalButton.forEach((el) => {
    console.log('element', el)
    el.addEventListener('click', () => {
      modal.classList.toggle('is-open')
      backdrop.classList.toggle('is-open')
    })
  })

  modalButton1.forEach((el) => {
    console.log('element', el)
    el.addEventListener('click', () => {
      modal1.classList.toggle('is-open')
      backdrop.classList.toggle('is-open')
    })
  })

  modalButton2.forEach((el) => {
    console.log('element', el)
    el.addEventListener('click', () => {
      modal2.classList.toggle('is-open')
      backdrop.classList.toggle('is-open')
    })
  })
})()
