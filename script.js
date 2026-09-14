const cards = document.querySelectorAll('.placeholder');
cards.forEach((card, i) => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX-r.left)/r.width-.5)*8;
    const y = ((e.clientY-r.top)/r.height-.5)*8;
    card.style.transform = `translate(${x}px,${y}px)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  nav.classList.toggle('open');
});
