// main.js
document.addEventListener('DOMContentLoaded', () => {
    // grab the image by its ID
    const personalPhoto = document.getElementById('personal-photo');
    
    // when it's clicked, show a popup
    personalPhoto.addEventListener('click', () => {
      alert("Hey! Don’t hit me like that");
    });
  });
  