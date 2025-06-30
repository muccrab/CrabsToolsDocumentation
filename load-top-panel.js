document.addEventListener('DOMContentLoaded', () => {
    fetch('top_panel.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('top-panel-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading top panel:', error));
});