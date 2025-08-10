const path_to_top = document.currentScript.getAttribute('path_to_top') ?? "./";

document.addEventListener('DOMContentLoaded', () => {
    fetch(path_to_top + 'top_panel.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('top-panel-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading top panel:', error));
});