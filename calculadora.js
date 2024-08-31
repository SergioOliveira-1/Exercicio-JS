let number1 = 3
let number2 = 2
let operador = "+"

function calculadora(number1, number2, operator) {
    switch (operator) {
      case '+':
        return parseInt(number1) + parseInt(number2);
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      case '/':
        return number1 / number2;
      default:
          return 'Operação inválida!';
    }

  }

  console.log(calculadora(number1, number2, operador));