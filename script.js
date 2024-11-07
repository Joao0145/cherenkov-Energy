document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevenir o envio do formulário para validar antes

        let isValid = true;  // Variável para controlar se o formulário é válido

        // Verificar Nome
        const name = document.getElementById('full-name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim() === "") {
            nameError.textContent = "Nome é obrigatório.";
            isValid = false;
        } else {
            nameError.textContent = "";  // Limpar erro
        }

        // Verificar E-mail
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = "Por favor, insira um e-mail válido.";
            isValid = false;
        } else {
            emailError.textContent = "";  // Limpar erro
        }

        // Verificar Telefone
        const phone = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');
        const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!phoneRegex.test(phone.value)) {
            phoneError.textContent = "Por favor, insira um telefone válido.";
            isValid = false;
        } else {
            phoneError.textContent = "";  // Limpar erro
        }

        // Verificar Gênero
        const gender = document.querySelector('input[name="gender"]:checked');
        const genderError = document.getElementById('gender-error');
        if (!gender) {
            genderError.textContent = "Por favor, selecione seu gênero.";
            isValid = false;
        } else {
            genderError.textContent = "";  // Limpar erro
        }

        // Verificar Termos e Condições
        const terms = document.getElementById('terms');
        const termsError = document.getElementById('terms-error');
        if (!terms.checked) {
            termsError.textContent = "Você deve aceitar os termos e condições.";
            isValid = false;
        } else {
            termsError.textContent = "";  // Limpar erro
        }

        // Verificar Mensagem (opcional, mas uma boa prática)
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (message.value.trim() === "") {
            messageError.textContent = "Por favor, insira uma mensagem.";
            isValid = false;
        } else {
            messageError.textContent = "";  // Limpar erro
        }

        // Se o formulário estiver válido, enviamos o alerta e resetamos o formulário
        if (isValid) {
            const nome = name.value;
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
            form.reset();  // Resetar o formulário após o envio bem-sucedido
        }
    });
});
