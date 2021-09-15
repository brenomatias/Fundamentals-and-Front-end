const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    return mars;
  };
  
  getPlanet(); // imprime Marte depois de 4 segundos
  setTimeout(() => console.log(getPlanet()), 4000);