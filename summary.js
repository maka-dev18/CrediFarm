
document.addEventListener('DOMContentLoaded', function () {
  const currentDateElement = document.getElementById('current-date');
  const temperatureElement = document.getElementById('temperature');
  const weatherConditionElement = document.getElementById('weather-condition');
  const temperatureRangeElement = document.getElementById('temperature-range');


  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  currentDateElement.textContent = `Today, ${currentDate}`;

  )
const temperature = '24.82°C';
const weatherCondition = 'Clear';
const temperatureRange = 'Hi: 24.82°C  Lo: 24.82°C';

temperatureElement.textContent = temperature;
weatherConditionElement.textContent = weatherCondition;
temperatureRangeElement.textContent = temperatureRange;
});
