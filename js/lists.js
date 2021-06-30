(() => {
  const btn = document.querySelectorAll('[data-button]');
  var idx;
  var block = new Object();
  var iconu = new Object();
  var icond = new Object();
  var button = new Object();


  for (var i=0; i<btn.length; i++) {
     btn[i].addEventListener('click', function toggleModal(e) {
          const btn = e.target;
          const idx = btn.getAttribute('data-number')
	  const block = document.querySelector('[data-block'+idx+']')
	  const iconu = document.querySelector('[data-icon-up'+idx+']')
	  const icond = document.querySelector('[data-icon-down'+idx+']')

	  block.classList.toggle('is-open')
	  iconu.classList.toggle('is-open')
	  icond.classList.toggle('is-open')
	})
  }
 

  
})();
