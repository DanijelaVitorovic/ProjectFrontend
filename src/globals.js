export const Statement = {
  ACTIVE: {
    value: "ACTIVE",
    translation: "Активан",
    color: "green",
  },
  PASSIVE: {
    value: "PASSIVE",
    translation: "Пасиван",
    color: "red",
  },
};
export const CaseType = {
  ADMINISTRATIVE_PROCEDURE: {
    translation: "Administrativne procedure",
  },

  OTHER: {
    translation: "Ostalo",
  },
};

export const DocumentType = {
  INTERNAL: {
    translation: "Интерни",
  },
  EXTERNAL: {
    translation: "Екстерни",
  },
  SUBMISSION: {
    translation: "Доставни",
  },
  ACT: {
    translation: "Актни",
  },
  ATTACHMENT: {
    translation: "Прилози",
  },
};

export const documentStatus = {
  PROCEEDING: {
    value: "PROCEEDING",
    translation: "Подношење",
  },
  VERIFICATION: {
    value: "VERIFICATION",
    translation: "Верификација",
  },
  SIGNING: {
    value: "SIGNING",
    translation: "Потписивање",
  },
  SIGNED: {
    value: "SIGNED",
    translation: "Потписан",
  },
  FIRST_SENDING: {
    translation: "Прво слање",
  },
  FIRST_RETURNED: {
    translation: "Прво враћање",
  },
  SECOND_SENDING: {
    translation: "Друго слање",
  },
  SECOND_RETURNED: {
    translation: "Друго враћање",
  },
  BULLETIN_BOARD: {
    translation: "Огласна табла",
  },
  DELIVERED: {
    translation: "Испоручен",
  },
  FINAL: {
    value: "FINAL",
    translation: "Завршен",
  },
  REVOKED: {
    translation: "Опозван",
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
