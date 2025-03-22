// Selecting all panels with querySelectorAll
const panels = document.querySelectorAll('.panel');

// Adding mouse click event listener to each panel
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // Removeing the 'active' class from all panels by usning function
        removeActiveClasses();
        // now Adding the 'active' class to the clicked panel
        panel.classList.add('active');
    });
});

// this is the Function to remove the 'active' class from all panels
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}