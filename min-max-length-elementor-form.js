/* AQUI PARA MIN-LENGHT */

// Obtém o campo de texto pelo ID
var campoTexto = document.getElementById('form-field-whatsapp');

// Define o número mínimo de caracteres
var numeroMinimoCaracteres = 10;

// Adiciona um ouvinte de evento de input ao campo de texto
campoTexto.addEventListener('input', function() {
  // Verifica o comprimento do valor inserido
  if (campoTexto.value.length < numeroMinimoCaracteres) {
    campoTexto.setCustomValidity('O campo de texto deve ter pelo menos ' + numeroMinimoCaracteres + ' caracteres.');
  } else {
    campoTexto.setCustomValidity('');
  }
});

// Adiciona um ouvinte de evento de submit ao formulário
campoTexto.form.addEventListener('submit', function(event) {
  // Verifica o comprimento do valor inserido ao enviar o formulário
  if (campoTexto.value.length < numeroMinimoCaracteres) {
    event.preventDefault(); // Impede o envio do formulário
    campoTexto.reportValidity(); // Exibe a mensagem de validação personalizada
  }
});


/* AQUI PARA MAX-LENGHT */


// Obtém o campo de texto pelo ID
var campoTexto = document.getElementById('id-do-campo');

// Define o número máximo de caracteres
var numeroMaximoCaracteres = 10;

// Adiciona um ouvinte de evento de input ao campo de texto
campoTexto.addEventListener('input', function() {
  // Verifica o comprimento do valor inserido
  if (campoTexto.value.length > numeroMaximoCaracteres) {
    campoTexto.value = campoTexto.value.slice(0, numeroMaximoCaracteres);
  }
});


