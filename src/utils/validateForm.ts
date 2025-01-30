export const checkSubject = (subject: string) => {
  if(!subject) return false;
  return true;
}

export const checkMessage = (message: string) => {
  if(!message) return false;
  return true;
}

export const checkEmailUrl = (url: string) => {
  const urlForm =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  if(!urlForm.test(url)) {
    return false;
  }
  return true;
}