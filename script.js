const init = () => {
  const validateEmail = Event => {
    const input = Event.currentTarget
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    const emailTest = regex.test(input.value)

    if (!emailTest) {
      submitButton.setAttribute('disabled', 'disabled')
      input.nextElementSibling.classList.add('error')
    } else {
      submitButton.removeAttribute('disabled')
      input.nextElementSibling.classList.remove('error')
    }
  }

  const validatePassword = Event => {
    const input = Event.currentTarget

    if (input.value.length < 8) {
      submitButton.setAttribute('disabled', 'disabled')
      input.nextElementSibling.classList.add('error')
    } else {
      submitButton.removeAttribute('disabled')
      input.nextElementSibling.classList.remove('error')
    }
  }

  const inputEmail = document.querySelector('input[type="email"]')
  const inputPassword = document.querySelector('input[type="password"]')
  const submitButton = document.querySelector('.login_submit')

  inputEmail.addEventListener('input', validateEmail)

  if (submitButton) {
    submitButton.addEventListener('click', Event => {
      Event.preventDefault()

      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: inputEmail.value,
          password: inputPassword.value
        })
      })
        .then(Response => {
          return Response.json()
        })
        .then(data => {
          console.log(data)
        })
    })
  }
}
console.log('inputEmail, inputPassword, submitButton')

window.onload = init
