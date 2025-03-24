const videoLinks = document.querySelectorAll('.video');

 videoLinks.forEach(link => {
   link.addEventListener('click', function(event) {
     event.preventDefault(); 

     const videoId = link.getAttribute('data-video-id');

     showOverlay(videoId);
   });
 });

 function showOverlay(videoId) {
   const overlay = document.getElementById("video-overlay");
   const iframe = document.getElementById("youtube-video");

   iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

   overlay.style.display = "flex";
 }

 document.getElementById("close-overlay").addEventListener("click", function() {
   document.getElementById("video-overlay").style.display = "none"; 
   document.getElementById("youtube-video").src = '';
 });
