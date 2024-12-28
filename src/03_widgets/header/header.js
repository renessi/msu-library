document.addEventListener('DOMContentLoaded', () => {
  // Получение всех нужных элементов
  const headerIcon = document.querySelector('.header__icon')
  const userIcon = document.querySelector('.header__login');
  const addMaterial = document.getElementById('openMaterialModal');
  const modal = document.getElementById('login-modal');
  const uploadModal = document.getElementById('upload-modal');
  const closeModalButton = document.getElementById('modal-close');
  const closeUploadModal = document.getElementById('UploadModal-close');
  const fileInputGroup = document.getElementById('file-input-group');
  const linkInputGroup = document.getElementById('link-input-group');
  const toggleInputs = document.querySelectorAll('input[name="toggle"]');
  const accessToken = localStorage.getItem("access_token");
  const isAuth = accessToken !== null;

  // Переключение между "Загрузить файл" и "Вставить ссылку"
  toggleInputs.forEach((input) => {
    input.addEventListener('change', (event) => {
      if (event.target.value === 'file') {
        fileInputGroup.style.display = 'block';
        linkInputGroup.style.display = 'none';
      } else if (event.target.value === 'link') {
        linkInputGroup.style.display = 'block';
        fileInputGroup.style.display = 'none';
      }
    });
  });

  // Открытие модалки логина
  if (!isAuth) {
    if (userIcon) {
      userIcon.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
    } else {
      console.error('Иконка логина не найдена!');
    }
  } else {
    userIcon.style.background = 'rgb(16 170 16)';
    headerIcon.style.color = '#fff';
    console.log('Вы в системе!');
  }
  // Закрытие модалки логина
  if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  } else {
    console.error('Кнопка закрытия логин-модалки не найдена!');
  }

  // Открытие модалки добавления материала
  if (addMaterial) {
    addMaterial.addEventListener('click', () => {
      if (!isAuth) {
        modal.style.display = 'flex';
        return;
      }
      uploadModal.style.display = 'flex';
    });
  } else {
    console.error('Кнопка добавления материала не найдена!');
  }

  // Закрытие модалки добавления материала
  if (closeUploadModal) {
    closeUploadModal.addEventListener('click', () => {
      uploadModal.style.display = 'none';
    });
  } else {
    console.error('Кнопка закрытия модалки загрузки не найдена!');
  }

  // Закрытие модалок при клике вне их области
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
    if (e.target === uploadModal) {
      uploadModal.style.display = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('login-modal');
  modal.style.display = 'none';
  const uploadModal = document.getElementById('upload-modal');
  uploadModal.style.display = 'none';
})
