window.addEventListener('DOMContentLoaded', (event) => {
    const shapes = document.querySelectorAll('.shapes > div');
    const resetButton = document.getElementById('resetButton');

    shapes.forEach((shape) => {
        shape.addEventListener('click', handleShapeClick);
        
      });

    function handleShapeClick(event) {
      event.target.style.display = 'none';
    }

    resetButton.addEventListener('click', resetShapes);

    function resetShapes() {
        shapes.forEach((shape) => {
          shape.style.display = 'block';
        });
      }
  });