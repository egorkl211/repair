var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close')

button.addEventListener('click', function() {
  modal.classList.add('modal_active');

});

close.addEventListener('click', function myFunc () {
  
  modal.classList.remove('modal_active');

});

//window.setTimeout(() {
 // modal.classList.remove('modal_active');
//}, 1000);
