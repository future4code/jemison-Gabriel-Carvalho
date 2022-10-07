const converteCelsius = (a, b) => {
  if (
    (Number.isInteger(a) == false && b != "F") ||
    (Number.isInteger(a) === false && b != "K")
  ) {
    return console.log(`Parâmetros inválidos`);
  }
  if (b === "F") {
    const temperatura = (a * 9) / 5 + 32;
    console.log(`${a}°C é ${temperatura}°F`);
  } else if (b === "K") {
    const temperatura = a + 273.15;
    console.log(`${a}°C é ${temperatura}°K`);
  }
};

converteCelsius("30", "F");
