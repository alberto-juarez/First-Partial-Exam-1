
document.getElementById('submitBtn').addEventListener("click", (event) => {
  event.preventDefault();
  var num = document.getElementsByClassName('fizzBuzzNumber')[0].value;
  var contenedor = document.querySelector('.resultsSection');
  if (num > 0){

    for (var i = 1; i <= num; i++) {
      // console.log(num);
      var nuevaCaja = document.createElement('div');
      nuevaCaja.className = 'fizz-buzz-item';
      if (i % 3 == 0 && i % 5 == 0){
        nuevaCaja.innerHTML = 'fizzbuzz';
      } else if (i % 3 == 0 ) {
        nuevaCaja.innerHTML = 'fizz';
      } else if (i % 5 == 0) {
        nuevaCaja.innerHTML = 'buzz';
      } else {
        nuevaCaja.innerHTML = i;
      }
      contenedor.appendChild(nuevaCaja);
    }
  } else {
    console.log('Numero menor a 0 ');
  }

  var cajas = document.querySelectorAll('.fizz-buzz-item');

  cajas.forEach((item) => {
    item.addEventListener('click',() => {
      // console.log('toque caja');
      item.parentNode.removeChild(item);
    });
  });

});




function cajas() {

}
