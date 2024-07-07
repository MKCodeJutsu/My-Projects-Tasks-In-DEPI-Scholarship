// Digital O'clock
function updateClock() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();
  
    let hours = now.getHours();
    let ampm = hours >= 12? 'PM' : 'AM';
    hours = hours % 12; // convert 24-hour to 12-hour
    hours = hours === 0? 12 : hours; // 0 becomes 12
  
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
  }
  
  setInterval(updateClock, 1000);
  updateClock();