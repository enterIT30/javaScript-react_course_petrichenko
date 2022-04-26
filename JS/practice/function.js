//todo ЗАДАНИЯ НА РАБОТУ С ФУНКЦИЯМИ ==================================================

// 1 ==================================================================================

function sayHello(name) {
  return `Привет, name`;
}

// 2 ==================================================================================

/* 1-й вариант */

function returnNeighboringNumbers(num) {
  let arr = [];
  let indexOne = num - 1;
  let indexTwo = num;
  let indexThree = num + 1;

  arr[0] = indexOne;
  arr[1] = indexTwo;
  arr[2] = indexThree;

  return arr;
}

console.log(returnNeighboringNumbers(99));


/* 2-й вариант */

function returnNeighboringNumbers(num) {
  let arr = [];

  arr[0] = num - 1;
  arr[1] = num;
  arr[2] = num + 1;

  return arr;
}

console.log(returnNeighboringNumbers(36));


/* 3-й вариант */

function returnNeighboringNumbers(num) {
  let arr = [];

  arr.push(num - 1);
  arr.push(num);
  arr.push(num + 1);

  return arr;
}

console.log(returnNeighboringNumbers(3));


/* Вариант лектора */

function returnNeighboringNumbers(num) {

  return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(190));


// 3 ==================================================================================

/* 1-й вариант */

function getMathResult(num, repet) {
  if (repet <= 0 || typeof(repet) !== 'number') {
    return num;
  }

  let result = '';
  for (let i = 0; i < repet; i++) {

    if ( (i + 1) === repet) {
      result += num + (num * i);
    } else {
      result += num + (num * i) + '---'; // `${num + num * i}---`
    }
  }
  return result;
}
console.log(getMathResult(3, 10));


/* Вариант лектора */

function getMathResult(num, times) {
  if (typeof(times) !== 'number' || times <= 0) {
      return num;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
      if (i === times) {
          str += `${num * i}`;
          // Тут без черточек в конце
      } else {
          str += `${num * i}---`;
          // Это тоже самое, что и
          // str = str + num * i + "---"
      }
  }

  return str;
}

// ПРОДВИНУТЫЕ ЗАДАНИЯ НА ИСПОЛЬЗОВАНИЕ ФУНКЦИЙ ==================================================================================

// 1 ==================================================================================

function calculateVolumeAndArea(length) {

  let cubeV = length * length * length;
  let cubeS = 6 * (length * length);

  //let cubeV = length ** 3;
  //let cubeS = 6 * length ** 2;

  if (length > 0 && typeof(length) === 'number' && length !== '' && (length ^ 0) === length) {
    return `Объем куба: ${cubeV}, площадь всей поверхности: ${cubeS}`;
  } else {
    return 'При вычислении произошла ошибка';
  }
}

console.log(calculateVolumeAndArea(2.5));

// ВАРИАНТ ЛЕКТОРА ==================================================================================


function calculateVolumeAndArea(length) {
  if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
      return "При вычислении произошла ошибка";
  }

  let volume = 0,
      area = 0;
  
  volume = length * length * length;
  // length ** 3 - это тоже самое, что и выше или варианты через цикл.
  // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
  area = 6 * (length * length);

  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

// 2 ==================================================================================

function getCoupeNumber(num) {

  if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (num === 0 || num > 36 || num === '') {
    return "Таких мест не существует";
  }

  if (num >= 1 && num <= 4) {
    return 1;
  } else if (num >= 5 && num <= 8) {
    return 2;
  } else if (num >= 9 && num <= 12) {
    return 3;
  } else if (num >= 13 && num <= 16) {
    return 4;
  } else if (num >= 17 && num <= 20) {
    return 5;
  } else if (num >= 21 && num <= 24) {
    return 6;
  } else if (num >= 25 && num <= 28) {
    return 7;
  } else if (num >= 29 && num <= 32) {
    return 8;
  } else if (num >= 33 && num <= 36) {
    return 9;
  }

/*   switch (num) {
    case 1:
    case 2:
    case 3:
    case 4:
      return 1;
    
    case 5:
    case 6:
    case 7:
    case 8:
      return 2;
    
    case 9:
    case 10:
    case 11:
    case 12:
      return 3;
    
    case 13:
    case 14:
    case 15:
    case 16:
      return 4;
    
    case 17:
    case 18:
    case 19:
    case 20:
      return 5;
    
    case 21:
    case 22:
    case 23:
    case 24:
      return 6;
    
    case 25:
    case 26:
    case 27:
    case 28:
      return 7;
    
    case 29:
    case 30:
    case 31:
    case 32:
      return 8;
    
    case 33:
    case 34:
    case 35:
    case 36:
      return 9;
  } */


  // ВАРИАНТ ЛЕКТОРА

  /*
  for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
  */
}

console.log(getCoupeNumber(25.5));