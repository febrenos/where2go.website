// utils.js
import { differenceInYears } from 'date-fns';

export function isPasswordValid(password, confirmPassword) {
    return password === confirmPassword && password.length >= 6;
}

export function isDateOfBirthValid(dateOfBirth) {
  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);
  const age = differenceInYears(currentDate, birthDate);
  return age >= 10;
}

export function isEmailValid(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
}
  
