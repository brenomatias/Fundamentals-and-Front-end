const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (param, callback) => {
const msg1 = 'temp is '+ getMarsTemperature();
const msgTotal = () => {
    if (param === temperatureInFahrenheit) {
        console.log(temperatureInFahrenheit);
    } else if (param === greet) {
        console.log(greet);
    }
 return callback(msgTotal);
};
}
console.log(temperatureInFahrenheit(getMarsTemperature));