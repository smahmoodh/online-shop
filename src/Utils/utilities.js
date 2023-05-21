export function copyToClipboard(inputId) {
  var copyText = faToenNum(document.getElementById(inputId).innerHTML);

  navigator.clipboard.writeText(copyText).then(
    function () {
      /* clipboard successfully set */
    },
    function () {
      /* clipboard write failed */
    }
  );
  console.log(navigator.clipboard.readText());
}

export function seperatNumber(value) {
  value = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return value;
}
export function enTofa(value) {
  if (!value) {
    return;
  }
  value = value.toString();
  var englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
  value = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  for (var i = 0, numbersLen = englishNumbers.length; numbersLen > i; i++) {
    value = value
      .toString()
      .replace(new RegExp(englishNumbers[i], "g"), persianNumbers[i]);
  }
  return value;
}
export function enTofaNum(value) {
  if (!value) {
    return;
  }
  value = value.toString();
  var englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
  for (var i = 0, numbersLen = englishNumbers.length; numbersLen > i; i++) {
    value = value
      .toString()
      .replace(new RegExp(englishNumbers[i], "g"), persianNumbers[i]);
  }
  return value;
}
export function faToenNum(value) {
  if (!value) {
    return;
  }
  value = value.toString();
  var englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
  for (var i = 0, numbersLen = englishNumbers.length; numbersLen > i; i++) {
    value = value
      .toString()
      .replace(new RegExp(persianNumbers[i], "g"), englishNumbers[i]);
  }
  return value;
}
export function calcDiscount(price, regularPrice, type) {
  if (type === 1)
    return Math.round((calcDiscount(price, regularPrice) / regularPrice) * 100);
  else return regularPrice - price;
}

export const handleClickScroll = () => {
  const element = document.getElementById('root');
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const validate = (username, password) => {
  let result = true, errorMsg = '';
  if (username === '') {
    errorMsg = 'Username Empty';
    result = false;
  } else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(username))) {
    errorMsg = 'Username Incorrect';
    result = false;
  } else if (password === '') {
    errorMsg ='Password Empty';
    result = false;
  } else if (password.length < 6) {
    errorMsg ='Password Is Short';
    result = false;
  }
  return {result, errorMsg};
}