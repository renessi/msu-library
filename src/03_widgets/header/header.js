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

  // Функция для обновления иконки
  function checkAuthStatus() {
    return localStorage.getItem("access_token") !== null;
  }

  let isAuthenticated = checkAuthStatus();
  const icon = document.getElementById("icon");
  const loginButton = document.getElementById("header_login");

  const loginIconElement = document.getElementById('login-icon');


function updateLoginIcon() {
    loginIconElement.setAttribute('href', isAuthenticated ? '#icon-arrow-right' : '#icon-user');
}

updateLoginIcon();

  updateLoginIcon();

  loginButton.addEventListener("click", function () {
    if (isAuthenticated) {
      localStorage.removeItem("access_token");
      isAuthenticated = false;

      updateLoginIcon();
      location.reload();
      console.log("Токен удалён, пользователь вышел из системы.");
    } else {
      console.log("Пользователь не авторизован. Переход на страницу входа.");
    }
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
    console.log('Вы в системе!');
  }
  // Закрытие модалки логина
  if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none';
      console.log('click ')
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
      console.log('ckicj');
      
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

document.addEventListener("DOMContentLoaded", function () {
  const searchElement = document.querySelector('.search');
  const headerElement = document.querySelector('.header');

  function moveSearch() {
    const logoElement = headerElement.querySelector('.header-wrapper__logo');
    const buttonAccentElement = headerElement.querySelector('.header-wrapper .button-accent');

    if (window.innerWidth <= 575) {
      if (searchElement && searchElement.parentNode !== headerElement) {
        headerElement.appendChild(searchElement);
      }
    } else {
      if (searchElement && searchElement.parentNode === headerElement) {
        if (logoElement && searchElement.parentNode === headerElement) {
          logoElement.parentNode.insertBefore(searchElement, buttonAccentElement);
        }
      } else if (!searchElement.parentNode) {
        headerElement.querySelector('.header-wrapper').insertBefore(searchElement, buttonAccentElement);
      }
    }
  }

  moveSearch();

  let resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(moveSearch, 100);
  });
});