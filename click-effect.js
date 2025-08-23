document.querySelectorAll('.user-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('clicked');
    setTimeout(() => card.classList.remove('clicked'), 200);
  });
});