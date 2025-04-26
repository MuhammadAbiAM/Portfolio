(function () {
    emailjs.init('jm9xImV5A2wLt-7tO');
})();

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation(); 

        document.querySelector('.loading').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.sent-message').style.display = 'none';

        emailjs.sendForm('service_bvauzbj', 'template_c7nw0sh', this)
            .then(function () {
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.sent-message').style.display = 'block';
                form.reset(); // Clear form setelah sukses
            }, function (error) {
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.error-message').style.display = 'block';
                document.querySelector('.error-message').innerHTML = 'Gagal mengirim pesan. Error: ' + error.text;
            });

        return false;
    });
});