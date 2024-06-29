document.addEventListener('DOMContentLoaded', function() {
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');

    document.querySelectorAll('.top-images a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
}
