let watchVideo = document.querySelector('#iwillAndVideo .el_custom_btn');
let lightboxAlert = document.getElementById('lightbox-alert');

watchVideo.addEventListener('click', () => {
    
    lightboxAlert.classList.add('active')
});

lightboxAlert.addEventListener('click', () => {
    lightboxAlert.classList.remove('active');
});