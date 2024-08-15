import patients from '../../data/patients';
import type { NonSesitivePatient, Patient } from '../types';

const getPatients = (): Patient[] => {
  return patients;
};

const getNonsensitivePatients = (): NonSesitivePatient[] => {
  return patients.map(
    ({ ssn: _ssn, ...nonSensitivePatient }): NonSesitivePatient =>
      nonSensitivePatient,
  );
};

export default {
  getPatients,
  getNonsensitivePatients,
};
