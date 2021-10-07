const showM = () => {
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenu.classList.remove('hidden');
};

const hideM = () => {
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenu.classList.add('hidden');
};

document.getElementById('h-menu').addEventListener('click', showM);
document.getElementById('portfolio').addEventListener('click', hideM);
document.getElementById('about').addEventListener('click', hideM);
document.getElementById('close-menu').addEventListener('click', hideM);
