document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    menuToggle.addEventListener("click", function() {
        sidebarOverlay.style.width = "250px";
    });

    closeSidebar.addEventListener("click", function() {
        sidebarOverlay.style.width = "0";
    });
});




document.getElementById('dropdownMenuButton').addEventListener('click', function() {
    var closeIcon = document.querySelector('.close-icon');
    if (closeIcon.style.display === 'none' || closeIcon.style.display === '') {
        closeIcon.style.display = 'block';
    } else {
        closeIcon.style.display = 'none';
    }
});

document.querySelector('.close-icon').addEventListener('click', function() {
    var dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.remove('show'); 
    this.style.display = 'none'; 
});