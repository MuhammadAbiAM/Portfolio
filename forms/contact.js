(function () {
    emailjs.init('jm9xImV5A2wLt-7tO');
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Tampilkan loading
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.sent-message').style.display = 'none';

    emailjs.sendForm('service_bvauzbj', 'template_c7nw0sh', this)
        .then(function () {
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.sent-message').style.display = 'block';
        }, function (error) {
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.error-message').innerHTML = 'Gagal mengirim pesan. Error: ' + error.text;
        });
});