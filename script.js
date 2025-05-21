
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modal-close');
  const modalContainer = document.getElementById('modal');

  function openModal(key) {
    if(projectDetails[key]) {
      modalTitle.textContent = projectDetails[key].title;
      modalDesc.textContent = projectDetails[key].desc;
      modalOverlay.classList.add('active');
      modalContainer.focus();
    }
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
  }

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.key);
    });
    card.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.key);
      }
    });
  });

  modalClose.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', e => {
    if(e.target === modalOverlay) {
      closeModal();
    }
  });

  modalOverlay.addEventListener('keydown', e => {
    if(e.key === 'Escape') {
      closeModal();
    }

    if(e.key === 'Tab') {
      const focusableElements = modalOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstEl = focusableElements[0];
      const lastEl = focusableElements[focusableElements.length -1];

      if(e.shiftKey) {
        if(document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if(document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  });

  const form = document.getElementById('contactForm');
  const nameInput = form.name;
  const emailInput = form.email;
  const messageInput = form.message;

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formStatus = document.getElementById('formStatus');

  function validateEmail(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formStatus.textContent = '';

    if(!nameInput.value.trim()) {
      nameError.textContent = 'Name is required.';
      valid = false;
    }
    if(!emailInput.value.trim()) {
      emailError.textContent = 'Email is required.';
      valid = false;
    } else if(!validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email.';
      valid = false;
    }
    if(!messageInput.value.trim()) {
      messageError.textContent = 'Message is required.';
      valid = false;
    }
    if(!valid) {
      formStatus.style.color = '#cc3300';
      formStatus.textContent = 'Please fix errors above and try again.';
      return;
    }
    formStatus.style.color = '#004d99';
    formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
    form.reset();
  });
