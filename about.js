console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
}
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);