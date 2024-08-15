import { Gender, type NewPatient } from './types';

const toNewPatient = (unknown: unknown): NewPatient => {
  if (!unknown || typeof unknown !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (
    'name' in unknown &&
    'dateOfBirth' in unknown &&
    'ssn' in unknown &&
    'gender' in unknown &&
    'occupation' in unknown
  ) {
    const newPatient: NewPatient = {
      name: parseName(unknown.name),
      dateOfBirth: parseDateOfBirth(unknown.dateOfBirth),
      ssn: parseSsn(unknown.ssn),
      gender: parseGender(unknown.gender),
      occupation: parseOccupation(unknown.occupation),
    };

    return newPatient;
  }

  throw new Error('Incorrect data: some fields are missing');
};

export default toNewPatient;

const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error('Incorrect name: ' + name);
  }

  return name;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error('Incorrect dateOfBirth: ' + dateOfBirth);
  }

  return dateOfBirth;
};

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error('Incorrect ssn: ' + ssn);
  }

  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect gender: ' + gender);
  }

  return gender;
};

const isGender = (gender: string): gender is Gender => {
  return Object.values(Gender).map(String).includes(gender);
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error('Incorrect occupation: ' + occupation);
  }

  return occupation;
};

const isString = (unknown: unknown): unknown is string => {
  return typeof unknown === 'string' || unknown instanceof String;
};

const isDate = (string: string): boolean => {
  return Boolean(Date.parse(string));
};
