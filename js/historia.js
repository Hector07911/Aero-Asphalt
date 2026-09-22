function filterStories(category) {
  // Update button states
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category) ||
        (category === 'todos' && btn.textContent === 'Todos')) {
      btn.classList.add('active');
    }
  });

  // Filter cards
  const cards = document.querySelectorAll('.history-card');
  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'todos' || cardCategory === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}