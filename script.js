// JavaScript function to change the text and toggle the active class
function changeText(element) {
    const newText = prompt("Enter new text for this link:");
    if (newText !== null) {
        element.textContent = newText;
        // Remove the 'active' class from all links
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => link.classList.remove('active'));
        // Add the 'active' class to the clicked link
        element.classList.add('active');
    }
}