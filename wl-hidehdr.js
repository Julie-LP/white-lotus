
  window.addEventListener("load", function () {
    setTimeout(function () {
      const classesToHide = ['track-image', 'track-quote', 'track-color'];

      classesToHide.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        console.log(`Found ${elements.length} elements with class ${className}`);
        elements.forEach(el => {
          el.style.setProperty('display', 'none', 'important');
        });
      });
    }, 300);
  });
