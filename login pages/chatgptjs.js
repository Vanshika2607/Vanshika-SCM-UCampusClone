document.querySelector('.menu-toggle').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = sidebar.style.width === '0px' ? '250px' : '0';
});
