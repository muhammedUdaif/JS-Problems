const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');

tabs.forEach(tab => {

    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        console.log(target)

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        pages.forEach(page => {
            page.classList.toggle('active', page.id === target);
        });
    });
});