import { v1 as uuid } from 'uuid';
import patients from '../../data/patients';
import type { NewPatient, NonSesitivePatient, Patient } from '../types';

const getPatients = (): Patient[] => {
  return patients;
};

const getNonsensitivePatients = (): NonSesitivePatient[] => {
  return patients.map(
    ({ ssn: _ssn, ...nonSensitivePatient }): NonSesitivePatient =>
      nonSensitivePatient,
  );
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient: Patient = {
    id: uuid(),
    ...patient,
  };

  patients.push(newPatient);

  return newPatient;
};

export default {
  getPatients,
  getNonsensitivePatients,
  addPatient
};
