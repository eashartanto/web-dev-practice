window.onload = function () {
  document.getElementById('register').onclick = validate;
};

function validate(event) {
  console.log(event);
  event.preventDefault();
  // alert('in function');
  let fname = document.querySelector('#fname');
  let namepattern = /^[a-zA-Z]{2,30}$/;
  if (fname.value == '') {
    fname.nextElementSibling.innerHTML = ' Please enter first name';
  } else if (!namepattern.test(fname.value)) {
    fname.nextElementSibling.innerHTML = 'Please enter name with letters only';
  } else {
    fname.nextElementSibling.innerHTML = '';
  }
}
