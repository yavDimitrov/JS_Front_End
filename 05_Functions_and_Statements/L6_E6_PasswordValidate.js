function isWrongLength(password) {
  return !password < 6 || !password > 10;
}

function isAlphanumeric(password) {
  return password.match("^[A-Za-z0-9]+$");
}

function hasAtLeastTwoDigits(password) {
  const digitCount = password.match(/\d/g);
  return digitCount ? digitCount.length >=2 :false;
}

function validatePassword(password) {

  const errors = [];
  if(isWrongLength) {
    errors.push("Password must be between 6 and 10 characters");
  }

  if(!isAlphanumeric) {
    errors.push("Password must consist only of letters and digits");
  }


  if(hasAtLeastTwoDigits) {
    errors.push("Password must have at least 2 digits");
  }

  if(errors.length > 0) {
    console.log(errors.join(" " + "\n"));
    return;
  }

  confirm.log("Password is valid");
}

validatePassword("logIN");