// go to top button
let myBtn = document.querySelector('.top-btn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    myBtn.style.display = 'flex';
  } else {
    myBtn.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 75;
  document.documentElement.scrollTop = 75;
}

// FUNCTION FOR OPENING MY IMAGE MODAL
const openImgBtn = document.querySelectorAll('#my-img');
const closeImgBtn = document.querySelector('#close-img-btn');
const imgModal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openImg() {
  imgModal.style.display = 'flex';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  document.querySelector('.overlay').style.display = 'block';
  console.log('btn is clicked');
}

function closeImg() {
  imgModal.style.display = 'none';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  document.querySelector('.overlay').style.display = 'none';
  console.log('btn is clicked');
}

for (let j = 0; j < openImgBtn.length; j++)
  openImgBtn[j].addEventListener('click', openImg);

closeImgBtn.addEventListener('click', closeImg);

const root = document.querySelector(':root');

const dark = document.querySelectorAll('#dark');

const header = document.querySelector('.header-1');

function toggleDark() {
  if (root.classList.contains('dark')) {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

if (localStorage.getItem('theme') === 'dark') {
  root.classList.add('dark');
}

for (let i = 0; i < dark.length; i++)
  dark[i].addEventListener('click', toggleDark);

/* Side Bar Open */
const sidebarOpenBtn = document.getElementById('open-sidebar');
const sideBarCloseBtn = document.getElementById('sidebar-close');
const sidebar = document.querySelector('.sidebar');
const sidebarBtns = document.querySelectorAll('#sidebar-btns');

function openSidebar() {
  sidebar.style.width = '300px';
  document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  document.querySelector('.overlay').style.display = 'block';
}

function closeSideBar() {
  sidebar.style.width = '0';
  document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
  document.querySelector('.overlay').style.display = 'none';
}

sidebarOpenBtn.addEventListener('click', openSidebar);
sideBarCloseBtn.addEventListener('click', closeSideBar);

for (let i = 0; i < sidebarBtns.length; i++)
  sidebarBtns[i].addEventListener('click', closeSideBar);

overlay.addEventListener('click', closeImg);
overlay.addEventListener('click', closeSideBar);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeImg();
    closeSideBar();
  }
});
