const listItems = document.querySelectorAll('#itemList li');
const tooltip = document.querySelector('.tooltip');

listItems.forEach(item => {
    item.addEventListener('mouseenter', e => {
      if (item.scrollWidth > item.clientWidth) {
        tooltip.textContent = item.textContent;
        tooltip.style.display = 'block';
      }
    });

    item.addEventListener('mousemove', (e) => {
      if (tooltip.style.display === 'block') {
        console.log(tooltip.style.left = e.pageX + 10 + "px");
        console.log(tooltip.style.top = e.pageY + 10 + "px" );
      }
    });

    item.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
});

