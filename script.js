module.exports = {
  difference: function(a,b) {
    return (a - b);
  },

  isEqual: function(a,b) {
    if(a !== b) {
      return false;
    }
    return true;
  },

  isEven: function(i) {
    if(i % 2 === 0) {
      return true;
    }
    return false;
  },

  isDivisible: function(a,b) {
    if(a % b === 0) {
      return true;
    }
    return false;
  },

  discountPercentage: function(cost,discount) {
    if(discount < 0 || discount > 100) {
      return 'please enter a number between 0 and 100';
    }
    let result = (discount / 100) * cost;
      return result;
  },

  isVowel: function(letter) {
    switch(letter) {
      case 'a' :
      case 'e' :
      case 'i' :
      case 'o' :
      case 'u' :
        return true;
      break;
      default:
        return false;
    }
  },

  celsiusToFahrenheit: function(c) {
    let f = (c * 1.8) + 32;
      return f;
  },

  biggestOfThree: function(a,b,c) {
    let max = Math.max(a,b,c);
      return max;
  },
  // Bonus

  federalIncomeTaxCalculator: function(salary,status) {
    if ((status !== 'single') && (status !== 'joint')) {
        return 'Better call an accountant';
    }
    if (salary > 74900) {
        return 'Better call an accountant'
    }
    if (status == 'joint') {
        if (salary <= 18650) {
            return '10%';
        } else {
            return '15%';
        }
    } else {
        if (salary < 9325) {
            return '10%';
        } else if (salary <= 37950) {
            return '15%';
        } else {
            return '25%';
        }
    }
  }
}
