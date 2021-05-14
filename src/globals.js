export const Statement = {
  ACTIVE: {
    value: "0",
    translation: "Активан",
    color: "green",
  },
  PASSIVE: {
    value: "1",
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
export const getEmployeeName = (employee) => {
  return (
    employee?.physicalEntity?.firstName +
    " " +
    employee?.physicalEntity?.lastName
  );
};

export const getPhysicalEntityName = (physicalEntity) => {
  return physicalEntity?.firstName + " " + physicalEntity?.lastName;
};

export const getCaseOwner = (_case) => {
  return _case?.owner
    ? _case?.owner?.physicalEntity?.firstName +
        " " +
        _case?.owner?.physicalEntity?.lastName
    : "";
};

export const getCaseProcessor = (_case) => {
  return _case.processor
    ? _case?.processor?.physicalEntity?.firstName +
        " " +
        _case?.processor?.physicalEntity?.lastName
    : "";
};

export const getCaseRefersTo = (_case) => {
  return _case?.refersTo
    ? _case?.refersTo?.firstName + " " + _case?.refersTo?.lastName
    : "";
};

export const getDocumentEmployeeCreated = (document) => {
  return (
    document?.employeeCreated?.physicalEntity?.firstName +
    " " +
    document?.employeeCreated?.physicalEntity?.lastName
  );
};

export const handleErrorMessage = (clientValidationMessage) => {
  return clientValidationMessage;
};

export const caseRole = {
  OWNER: "Власник",
  PROCESSOR: "Обрађивач",
};

export const CaseState = {
  ASSIGN: {
    value: "0",
    translation: "На додели",
    color: "green",
  },
  REJECT: {
    value: "1",
    translation: "Одбијен",
    color: "red",
  },
  REVOKE: {
    value: "2",
    translation: "Опозван",
    color: "red",
  },
  TAKEOVER: {
    value: "3",
    translation: "Преузет",
    color: "green",
  },
};

export const CaseTypes = {
  ADMINISTRATIVE_PROCEDURE: {
    value: "0",
    translation: "Административне процедуре",
    color: "green",
  },
  OTHER: {
    value: "1",
    translation: "Друго",
    color: "red",
  },
};

export const getCaseMovementEmployeeSend = (caseMovement) => {
  return caseMovement?.employeeSend
    ? caseMovement?.employeeSend?.physicalEntity?.firstName +
        " " +
        caseMovement?.employeeSend?.physicalEntity?.lastName
    : "";
};

export const CaseMovementState = {
  SENT: {
    value: "0",
    translation: "Послатo",
    color: "green",
  },
  REJECTED: {
    value: "1",
    translation: "Одбијенo",
    color: "red",
  },
  REVOKED: {
    value: "2",
    translation: "Опозванo",
    color: "red",
  },
  RECEIVED: {
    value: "3",
    translation: "Примљено",
    color: "green",
  },
};

export const getCaseMovementSendTo = (caseMovement) => {
  return caseMovement?._case?.processor
    ? caseMovement?._case?.processor?.physicalEntity?.firstName +
        " " +
        caseMovement?._case?.processor?.physicalEntity?.lastName
    : caseMovement?._case?.owner
    ? caseMovement?._case?.owner?.physicalEntity?.firstName +
      " " +
      caseMovement?._case?.owner?.physicalEntity?.lastName
    : "";
};
