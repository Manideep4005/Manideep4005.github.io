(function () {
  emailjs.init('QKWIPHwLEo3d_q_MR'); // Replace with your public key
})();

document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs
      .send('service_zfnir1m', 'template_bccm26b', {
        user_name: userName,
        user_email: userEmail,
        message: message,
      })
      .then(openModal, function (error) {
        alert('Failed to send email: ' + JSON.stringify(error));
      });
  });

// Open the modal
function openModal() {
  const modal = document.getElementById('successModal');
  modal.style.display = 'flex'; // Show the modal
}

// Close the modal with fade-out effect
function closeModal() {
  const modal = document.getElementById('successModal');
  modal.style.display = 'none'; // Show the modaluration
  document.getElementById('contactForm').reset();
}

// go to top button
let myBtn = document.querySelector('.top_btn');

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

// SIDE BAR FUNCTIONALITY
const sidebar = document.querySelector('.sidebar');
const openSidebar = document.getElementById('sidebar_open_btn');
const clodeSidebar = document.querySelector('#sidebar_close_btn');
const overlay = document.querySelector('.overlay');

function openSideBar() {
  sidebar.style.width = '300px';
  sidebar.style.padding = '20px';
  overlay.style.display = 'block';
}

function closeSideBar() {
  sidebar.style.width = '0';
  sidebar.style.padding = '0';
  overlay.style.display = 'none';
}

openSidebar.addEventListener('click', openSideBar);
clodeSidebar.addEventListener('click', closeSideBar);

overlay.addEventListener('click', closeSideBar);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeSideBar();
  }
});

const sideBarNavBtns = document.querySelectorAll('.sidebar_nav_btns');

for (let i = 0; i < sideBarNavBtns.length; i++)
  sideBarNavBtns[i].addEventListener('click', closeSideBar);
