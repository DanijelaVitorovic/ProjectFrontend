export const Statement = {
  ACTIVE: {
    value: "ACTIVE",
    translation: "AKTIVAN",
    color: "green",
  },
  PASSIVE: {
    value: "PASSIVE",
    translation: "PASIVAN",
    color: "red",
  }
}
export const CaseType = {
  ADMINISTRATIVE_PROCEDURE: {
    translation: "Administrativne procedure",
  },

  OTHER: {
    translation: "Ostalo",
  },
};

export const GetNameandSurname = (employee) => {
  return (
    employee.physicalEntity.firstName + " " + employee.physicalEntity.lastName
  );
};

export const GetNameAndSurnameOfSomeEntity = (entity) => {
  return entity.firstName + " " + entity.lastName;
};
