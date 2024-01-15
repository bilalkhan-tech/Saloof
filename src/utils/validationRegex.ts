export function isEmailValid(email: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email)) {
    return true;
  } else return false;
}

export function isPhoneValid(phone: string) {
  if (/^\+?[0-9][0-9]{7,14}$/.test(phone)) {
    return true;
  } else return false;
}
