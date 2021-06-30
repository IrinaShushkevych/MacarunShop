(() => {
  const btn = document.querySelectorAll('[data-button]');


  for (var i=0; i<btn.length; i++) {
     btn[i].addEventListener('click', function toggleModal(e) {
          const btn = e.target;
          const idx = btn.getAttribute('data-number')
	  const elem = document.querySelectorAll('[data-number="'+idx+'"]')
	  
          for (var j = 0; j < elem.length; j++)
	     elem[j].classList.toggle('is-open')
	
	})
  }
  
})();
