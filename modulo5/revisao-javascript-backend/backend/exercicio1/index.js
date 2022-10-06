const converteCelsius = (a, b) => {
  if (
    (isNaN(a) === true && b != "F") ||
    (isNaN(a) === true && b != "K") ||
    (a && b === "")
  ) {
    console.log(`Parâmetros inválidos`);
  } else if (b === "F") {
    const temperatura = (a * 9) / 5 + 32;
    console.log(`${a}°C é ${temperatura}°F`);
  } else if (b === "K") {
    const temperatura = a + 273.15;
    console.log(`${a}°C é ${temperatura}°K`);
  }
};

converteCelsius(30, "K");
