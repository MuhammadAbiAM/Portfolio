(function () {
    emailjs.init('YOUR_PUBLIC_KEY'); // Ganti dengan public key kamu
})();

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah form submit ke server

        document.querySelector('.loading').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.sent-message').style.display = 'none';

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function () {
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.sent-message').style.display = 'block';
                form.reset(); // Clear form setelah sukses
            }, function (error) {
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.error-message').style.display = 'block';
                document.querySelector('.error-message').innerHTML = 'Gagal mengirim pesan. Error: ' + error.text;
            });
    });
});