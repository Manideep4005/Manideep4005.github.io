const header = document.getElementById('header');
const openbtn = document.getElementById('open-btn');
const showbtns = document.getElementById('head-links');
const closebtn = document.getElementById('close-btn');
const jumpbtns = document.querySelectorAll('#jump-btn');

openbtn.addEventListener('click', () => {
  showbtns.style.width = '300px';
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  document.querySelector('.overlay').style.display = 'block';
  document.getElementById('myBtn').style.zIndex = 5;
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

// go to top button
let myBtn = document.getElementById('myBtn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    myBtn.style.display = 'block';
  } else {
    myBtn.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
