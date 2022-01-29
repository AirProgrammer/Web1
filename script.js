var addcomment = document.querySelector('#form')
var list = document.querySelector('#commentlist')

addcomment.addEventListener('submit', acom)

function acom(e){
  e.preventDefault();

  var newit = document.querySelector('#inputC').value;
  var it = document.createElement('li');

  li.className = 'itemC';
  li.appendChild(document.createTextNode(newit))

  addcomment.appendChild(li)
}












