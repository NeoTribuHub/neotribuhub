const form = document.querySelector('#formContacto');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Pasado aquí!');

    emailjs.init({
        publicKey: "CEGyk6T1AG5PjtiFQ",
    })

    emailjs.sendForm("service_4fqhgwm", "template_rkrluo4", form)
        .then((response) => alert("Mensagem enviada com sucesso!"))
        .catch((error) => {
            console.log(error);
            alert("Erro ao enviar mensagem!")
        });
})