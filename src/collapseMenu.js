// hides and displays the collapse menu button
const toggleCollapse = () => {
  const sidebarCols = document.getElementsByClassName('sb-columns');
  const sbArr = Array.from(sidebarCols);
  sbArr.forEach((container) => {
    if (container.style.display === '' || container.style.display === 'none') {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });
};

// allow user to manually collapse menu
const collapseListener = () => {
  const collapseBtn = document.getElementById('collapsible');

  collapseBtn.addEventListener('click', () => {
    toggleCollapse();
  });
};

// display sidebar at normal screen sizes
const displaySidebar = (x) => {
  const sidebarCols = document.getElementsByClassName('sb-columns');
  const sbArr = Array.from(sidebarCols);

  if (x.matches) {
    sbArr.forEach((container) => {
      container.style.display = 'block';
    });
  }
};

// hide sidebar at small screen sizes
const hideSidebar = (x) => {
  const sidebarCols = document.getElementsByClassName('sb-columns');
  const sbArr = Array.from(sidebarCols);

  if (x.matches) {
    sbArr.forEach((container) => {
      container.style.display = 'none';
    });
  }
};

// auto-collapse sidebar based on screen size
const mediaQueryEventListener = () => {
  const min = window.matchMedia('(min-width: 601px)');
  const max = window.matchMedia('(max-width: 600px)');
  displaySidebar(min);
  min.addEventListener('change', () => {
    displaySidebar(min);
  });
  max.addEventListener('change', () => {
    hideSidebar(max);
  });
};

export { collapseListener, mediaQueryEventListener };
