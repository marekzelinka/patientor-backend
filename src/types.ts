export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

type Gender = 'male' | 'female' | 'other';

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: `${number}-${number}-${number}`;
  ssn: `${string}-${string}`;
  gender: Gender;
  occupation: string;
}

export type NewPatient = Omit<Patient, 'id'>;

export type NonSesitivePatient = Omit<Patient, 'ssn'>;
