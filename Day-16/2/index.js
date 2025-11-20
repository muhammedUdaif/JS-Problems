const header = document.getElementById('header') ;

    if (!header) {
      console.error('Header element not found');
    } else {
      let tooltipEl = null;

      function showTooltipIfTruncated() {
        const isOverflowing = header.scrollWidth > header.clientWidth;
        console.log(isOverflowing)
        if (!isOverflowing) return;

        tooltipEl = document.createElement('div');
        tooltipEl.className = 'tooltip';
        tooltipEl.textContent = header.textContent || '';
        console.log(header.textContent)
        document.body.appendChild(tooltipEl);
      }

      function removeTooltip() {
        if (tooltipEl) {
          tooltipEl.remove();
          tooltipEl = null;
        }
      }

      header.addEventListener('mouseenter', showTooltipIfTruncated);
      header.addEventListener('mouseleave', removeTooltip);
    }