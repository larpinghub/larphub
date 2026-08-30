//neve
const canvas = document.getElementById('snow-canvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const numParticles = 85;
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        speedY: Math.random() * 1.5 + 0.6,
        speedX: Math.random() * 0.4 - 0.2,
        opacity: Math.random() * 0.75 + 0.25
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();


//song    
const audioPlayer = document.getElementById('audioPlayer');
const bgSong = document.getElementById('bgSong');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

audioPlayer.addEventListener('click', () => {
  if (bgSong.paused){
    bgSong.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  } else {
    bgSong.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }
});