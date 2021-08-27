const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
 let msg = 'temp is '+ getMarsTemperature();
 return msg;
};
setTimeout(() => console.log(sendMarsTemperature()), messageDelay);