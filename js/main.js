document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // Theme toggle
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeLabel = document.getElementById('themeLabel');
  const themeIcon = document.getElementById('themeIcon');

  const savedTheme = localStorage.getItem('mfs-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeUI(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('mfs-theme', next);
      updateThemeUI(next);
    });
  }

  function updateThemeUI(theme) {
    if (themeLabel) {
      const english = (document.documentElement.lang || '').toLowerCase().startsWith('en');
      const labels = english ? {dark: 'Dark', light: 'Light'} : {dark: 'Escuro', light: 'Claro'};
      themeLabel.textContent = theme === 'dark' ? labels.dark : labels.light;
    }
    if (themeIcon) {
      themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'moon' : 'sun');
      if (window.lucide) {
        lucide.createIcons();
      }
    }
  }

  // Real-time Search across sections
  const searchInput = document.getElementById('searchInput');
  const sections = document.querySelectorAll('.category-section');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();

      sections.forEach(section => {
        let visibleCardsInSection = 0;
        const sectionCards = section.querySelectorAll('.repo-card');

        sectionCards.forEach(card => {
          const searchText = (card.getAttribute('data-search') + ' ' + card.innerText).toLowerCase();
          if (!query || searchText.includes(query)) {
            card.style.display = 'flex';
            visibleCardsInSection++;
          } else {
            card.style.display = 'none';
          }
        });

        // Hide empty sections during search
        if (query && visibleCardsInSection === 0) {
          section.style.display = 'none';
        } else {
          section.style.display = 'block';
        }
      });
    });
  }
});
