document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('jm9xImV5A2wLt-7tO');

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        document.querySelector('.loading').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.sent-message').style.display = 'none';

        const serviceID = 'service_bvauzbj';
        const templateID = 'template_c7nw0sh';

        const params = {
            name: form.querySelector('input[name="name"]').value,
            email: form.querySelector('input[name="email"]').value,
            subject: form.querySelector('input[name="subject"]').value,
            message: form.querySelector('textarea[name="message"]').value,
        };

        emailjs.send(serviceID, templateID, params)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.sent-message').style.display = 'block';
                form.reset();
            }, function (error) {
                console.log('FAILED...', error);
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.error-message').style.display = 'block';
                document.querySelector('.error-message').innerHTML = 'Gagal mengirim pesan. Error: ' + error.text;
            });

        return false;
    });
});
