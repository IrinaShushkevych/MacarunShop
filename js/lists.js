(() => {
  const btn = document.querySelectorAll('[data-button]');

  btn.forEach(   (b)=>{
    b.addEventListener('click', function toggleModal(e) {
	const btn = e.target;
	const idx = btn.getAttribute('data-number')
	const elem = document.querySelectorAll('[data-number="'+idx+'"]')
	elem.forEach((e) => { e.classList.toggle('is-open')});
    })
  })
})();
