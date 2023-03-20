function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
  
  function currentDay() {
    const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const months = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const date = new Date();
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const tag = `${day} ${month} ${addLeadingZero(date.getDate())}  ${year}`;
  
    return tag;
  }
  
  function currentTime() {
    const date = new Date();
    const hours = addLeadingZero(date.getHours());
    const minutes = addLeadingZero(date.getMinutes());
    const seconds = addLeadingZero(date.getSeconds());
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    return timeString;
  }
  
  let pageLoadTimestamp;
  
  function timeOnPage() {
    const now = new Date();
    const timeElapsed = new Date(now - pageLoadTimestamp);
    const hours = addLeadingZero(timeElapsed.getUTCHours());
    const minutes = addLeadingZero(timeElapsed.getUTCMinutes());
    const seconds = addLeadingZero(timeElapsed.getUTCSeconds());
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    alert(`Die Seite ist seit ${timeString} geöffnet.`);
  }
  
  function refresh() {
    location.reload();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    pageLoadTimestamp = new Date();
  });