
$('#save').click(function () {
  var saveList = $('.task-list').html();
  localStorage.app = saveList;
});

var aggiungi = document.getElementById('add');
var newTask = document.getElementById('task-text');
var list = document.querySelector('.task-list');
var showHide = document.getElementById('showHide');

if (localStorage.app) {
  list.innerHTML = localStorage.app;
};

showHide.addEventListener('click', function () {
  list.classList.toggle('hide');
  if(list.classList.contains('hide')) {
    showHide.innerText = 'visualizza';
  } else {
    showHide.innerText = 'nascondi';
  }
})

aggiungi.addEventListener('click', function () {
  var adesso = new Date();
  var data = String(adesso.getFullYear()+'-'+(adesso.getMonth()+1)+'-'+adesso.getDate()+" "+adesso.getHours() + ":" + adesso.getMinutes() + ":" + adesso.getSeconds());
  var el = document.createElement('li');
  el.innerHTML = newTask.value + "  -  " + data.bold() + `
      <button class="done">✔</button>
      <button class="remove">✖</button>`;
  list.appendChild(el);
})

list.addEventListener('click', function (e) {
  if (e.target.classList.contains('done')) {
    e.target.closest('li').classList.toggle('made');

    if (e.target.closest('li').classList.contains('made')) {
      list.appendChild(e.target.closest('li'));
    }
  }

  if (e.target.classList.contains('remove')){
    e.target.closest('li').remove();
  }
})
