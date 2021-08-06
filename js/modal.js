;(() => {
  const modalButton = document.querySelectorAll('[data-modal-button-basket]')

  const modal = document.querySelector('[data-modal-basket]')
  const backdrop = document.querySelector('[data-backdrop]')

  const modalButton1 = document.querySelectorAll('[data-modal-button-catalog]')
  const modal1 = document.querySelector('[data-modal-catalog]')

  const modalButton2 = document.querySelectorAll(
    '[data-modal-button-catalog-all]',
  )
  const modal2 = document.querySelector('[data-modal-catalog-all]')

  const modalButton3 = document.querySelectorAll(
    '[data-modal-button-assembled-order]',
  )
  const modal3 = document.querySelector('[data-modal-order-assemble]')

  const modalButton4 = document.querySelectorAll(
    '[data-modal-button-basket-order]',
  )
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

  modalButton3.forEach((el) => {
    console.log('element', el)
    el.addEventListener('click', () => {
      modal3.classList.toggle('is-open')
      backdrop.classList.toggle('is-open')
    })
  })

  modalButton4.forEach((el) => {
    console.log('element', el)
    el.addEventListener('click', () => {
      modal.classList.toggle('is-open')
      modal3.classList.toggle('is-open')
      // backdrop.classList.toggle('is-open')
    })
  })
})()
