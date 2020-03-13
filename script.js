    // Equation is °C = 5/9 (°F - 32).
    // let degFahren = prompt("Enter the degrees in Fahrenheit");
    // let degCel;
    // degCel = (5 / 9) * (degFahren - 32);
    // let msg = degFahren + "\xB0 Fahrenheit is " + degCel + "\xB0 ";      if (degFahren < 69) {
    //   alert(msg + "\n Oh that's cold!");
    // } else if (degFahren > 69 && degFahren < 83) {
    //   alert(msg + "\n Temperature is just right!");
    // } else {
    //   alert(msg + "\n Its way too hot!");
    

    //ask for input
    const name = prompt("What is your name?")

    const degFahren = prompt("enter degreed in Fahrenheit");
    const degCel = toCelcius(degFahren);
    fahrenMsg(degFahren);


    //functions allow for reusability;
    // const degWorcester = toCelcius();

    //convert input to celcius
    function toCelcius(fahrenheit) {
        const degCel = (5 / 9) * (fahrenheit - 32);
        return degCel;
  
    }

    //display message based on temperature in fahrenheit.

    function fahrenMsg(fahrenheit) {
        let msg = fahrenheit + "\xB0 Fahrenheit is " + degCel + "\xB0 Celcius";      
        if (fahrenheit < 69) {
            alert(msg + "\n Oh that's cold!");
          } else if (fahrenheit > 69 && fahrenheit < 83) {
            alert(msg + "\n Temperature is just right!");
          } else {
            alert(msg + "\n Its way too hot-still.");
          }
    }


 

