function changeBackgroundColor() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  
  function displayMessage(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    document.getElementById('formOutput').innerHTML = `<p>Thanks <strong>${name}</strong>, we got your message: "${message}"!</p>`;
    return false;
  }
