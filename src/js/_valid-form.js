// Скрипт для валидации полей формы

//функция проверки на запрещенные символы, собаку и точку перед доменом
function myValitade(value) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(value);
}

// Настройка плагина для отображение подсказок у полей ввода для полной формы
const validator = new JustValidate('.js-app-form', {
  errorFieldCssClass: 'is-bad',
  errorFieldStyle: {
    color: 'black',
    border: 'none',
    outline: '1px solid red',
  },

  errorLabelCssClass: 'is-label-bad',
  errorLabelStyle: {
      color: 'black',
      textDecoration: 'underlined',
  },

  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 15
    },

    email: {
      required: true,
      minLength: 7,
      maxLength: 30,
      function: myValitade,
    },

    message: {
      required: true,
      minLength: 10,
      maxLength: 2000
    },
  },

  messages: {
    name: {
      required: 'Обязательное поле для заполнения',
      minLength: 'Имя должно состоять минимум из 2 символов',
      maxLength: 'Имя не должно превышать 15 символлов',
    },

    email: {
      required: 'Обязательное поле для заполнения',
      minLength: 'E-mail должен содержать не менее 7 символов',
      maxLength: 'E-mail должен содержать не более 30 символов',
      function: 'E-mail не корректен',
    },

    message: {
      required: 'Обязательное поле для заполнения',
      minLength: 'Комментарий должен содержать не менее 10 символов',
      maxLength: 'Комментарий должен содержать не более 2000 символов',
    }
  }
});


new JustValidate('.studio__form', {
  rules: {
    email: {
      required: true,
      minLength: 7,
      maxLength: 30,
      function: myValitade,
    },
  },

  messages: {
    email: {
      required: 'Обязательное поле для заполнения',
      minLength: 'E-mail должен содержать не менее 7 символов',
      maxLength: 'E-mail должен содержать не более 30 символов',
      function: 'E-mail не корректен',
    },
  }
});
