const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');

    fileInput.addEventListener('change', function() {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });

    function readFile() {
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          console.log(e.target.result);
        };
        reader.readAsText(file);
      }
    }

    function writeFile() {
      const fileData = 'Привет';
      const blob = new Blob([fileData], { type: 'text/plain;charset=utf-8' });
      const fileName = 'example.txt';
      saveAs(blob, fileName);
    }