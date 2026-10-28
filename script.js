// Gestion de l'interaction sur le portfolio de Camille Martin
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleDetailsBtn');
  const detailsSection = document.getElementById('projectDetails');

  if (!toggleBtn || !detailsSection) {
    return;
  }

  const btnTextSpan = toggleBtn.querySelector('.btn-text');

  toggleBtn.addEventListener('click', () => {
    const isHidden = detailsSection.hasAttribute('hidden');

    if (isHidden) {
      // Déplier les détails
      detailsSection.removeAttribute('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
      if (btnTextSpan) {
        btnTextSpan.textContent = 'Masquer les détails de la réalisation';
      }
    } else {
      // Replier les détails
      detailsSection.setAttribute('hidden', '');
      toggleBtn.setAttribute('aria-expanded', 'false');
      if (btnTextSpan) {
        btnTextSpan.textContent = 'Afficher les détails de la réalisation';
      }
    }
  });
});
