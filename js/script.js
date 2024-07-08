const header = document.getElementById('header');
const openbtn = document.getElementById('open-btn');
const showbtns = document.getElementById('head-links');
const closebtn = document.getElementById('close-btn');
const jumpbtns = document.querySelectorAll('#jump-btn');

openbtn.addEventListener('click', () => {
  showbtns.style.width = '300px';
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  document.querySelector('.overlay').style.display = 'block';
});

closebtn.addEventListener('click', () => {
  showbtns.style.width = '0';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  document.querySelector('.overlay').style.display = 'none';
});

function closeModal() {
  showbtns.style.width = '0';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  document.querySelector('.overlay').style.display = 'none';
}

for (let i = 0; i < jumpbtns.length; i++)
  jumpbtns[i].addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  // check the key is 'Escape'
  if (e.key === 'Escape') {
    showbtns.style.width = '0';
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    document.querySelector('.overlay').style.display = 'none';
  }
});

document.querySelector('.overlay').addEventListener('click', () => {
  showbtns.style.width = '0';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  document.querySelector('.overlay').style.display = 'none';
});
