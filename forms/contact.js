document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('jm9xImV5A2wLt-7tO'); // <- ganti dengan Public Key kamu

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // <--- PENTING
        event.stopPropagation(); // <--- Tambahan agar benar-benar stop event-nya

        document.querySelector('.loading').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.sent-message').style.display = 'none';

        emailjs.sendForm('service_bvauzbj', 'template_c7nw0sh', this)
            .then(function () {
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.sent-message').style.display = 'block';
                form.reset();
            }, function (error) {
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.error-message').style.display = 'block';
                document.querySelector('.error-message').innerHTML = 'Gagal mengirim pesan. Error: ' + error.text;
            });

        return false; // <--- PENTING SUPAYA SUBMIT TIDAK LANJUT
    });
});
