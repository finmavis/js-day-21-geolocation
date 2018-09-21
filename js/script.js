const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// Get data location over time
navigator.geolocation.watchPosition((data) => {
  speed.textContent = data.coords.speed || 0;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => { // Fallback if someone not allow permission
  console.log(err);
  alert('You gotta allow that location PERMISSION!');
});