import { Button } from "bootstrap";

export const CaseListTranslation = {
  Header: { heading: "Предмети" },
};

export const CaseTableTranslation = {
  HeaderColumns: {
    name: "Назив",
    number: "Број",
    owner: "Власник",
    processor: "Обрађивач",
    refersTo: "Односи се на",
    startDate: "Почетак",
    status: "Статус",
    update: "Измени",
    documents: "Документа предмета",
  },
  Buttons: {
    back: "Врати се на почетну страну",
  },
};

export const CaseRowTranslation = {
  updateButton: "Измени",
  listOfDocuments: "Dokumenta predmeta",
};

export const CaseModalForAddAndUpdateTranslation = {
  Header: {
    heading: "Унос предмета и документа",
    headingAddModal: "Унос новог предмета",
    headingUpdateModal: "Измени предмет",
  },
  SelectOptionsAndPlaceholders: {
    caseNamePlaceholder: "Унесите име предмета",
    caseNumberPlaceholder: "Унесите број предмета",
    refersToOption: "Изаберите на кога се односи",
    caseType: "Унесите тип предмета",
  },
};

export const CaseProcessingListTranslation = {
  heading: "Премет",
  caseName: "Име предмета",
  caseNamber: "Број предета",
  caseType: "Тип",
  caseStatus: "Статус",
  caseState: "Стање",
  description: "Опис",
  owner: "Власник",
  refersTo: "Односи се на",
  processor: "Обрађивач",
  startDate: "Датум креирања",
  back: "Врати се назад",
};

export const PhysicalEntityListTranslation = {
  Header: { heading: "Физичка лица" },
};

export const PhysicalEntityTableTranslation = {
  HeaderColumns: {
    name: "Име",
    surName: "Презиме",
    middleName: "Име оца",
    profession: "Професија",
    email: "Имејл",
    address: "Адреса",
    update: "Измена",
    delete: "Брисање",
  },
  Buttons: {
    addNewPhysicalEntity: "Направи ново физичко лице",
  },
};

export const PhysicalEntityRowTranslation = {
  updateButton: "Измени",
};

export const PhysicalEntityModalForAddAndUpdateTranslation = {
  Header: {
    headingAddModal: "Направи ново физичко лице",
    headingUpdateModal: "Измена физичког лица",
  },
  SelectOptionsAndPlaceholders: {
    firstNamePlaceholder: "Име",
    lastNamePlaceholder: "Презиме",
    middleNamePlaceholder: "Име оца",
    professionPlaceholder: "Занимање",
    emailPlaceholder: "E-мејл",
    cityPlaceholder: "Место пребивалишта",
    streetPlaceholder: "Улица",
    streetNumberPlaceholder: "Број улице",
    floorPlaceholder: "Спрат",
    apartmanNumberPlaceholder: "Број стана",
    zipCodePlaceholder: "Поштански број",
  },
};

export const Menus = {
  UserNotAuthenticatedMenuBar: {
    registration: "Регистрација",
    login: "Пријава",
  },
  UsersMenuBar: {
    heading: "Корисници",
    userList: "Приказ корисника",
    addUser: "Креирај новог корисника",

    Subjects: {
      heading: "Субјекти",
      physicalEntityList: "Приказ физичких лица",
      employeeList: "Приказ запослених лица",
      legalEntityList: "Приказ правних лица",
      processTypeList: "Приказ типова процеса",
      organizationalUnitList: "Приказ организациних јединица",
      documentsList: "Приказ докумената",
    },
    Cases: {
      heading: "Предмети",
      caseList: "Приказ предмета",
      caseClassificationList: "Приказ предметних класификација",
    },
    Process: {
      heading: "Процеси",
      addProcess: "Додај процес",
      showProcessList: "Приказ процеса",
    },
    Document: {
      heading: "Документа",
      showDocumentList: "Приказ докумената",
    },
  },
};

export const landingPage = {
  heading: "Апликација",
  createAcc: "Креирај налог",
  registration: "Регистрација",
  login: "Пријава",
};

export const loginTranslation = {
  heading: "Пријава",
};

export const HeaderTranslation = {
  HeaderItems: {
    logout: "Одјава",
    navbarBrand: "АРР",
  },
};

export const DashboardTranslation = {
  DashboardItems: {
    welcomeTitle: "Добродошли",
    welcomeParagraph: "ДМС пракса",
    physicalEntity: "Физичка лица",
    physicalEntityList: "Приказ физичких лица",
    employee: "Запослена лица",
    employeeList: "Приказ запослених лица",
    legalEntity: "Правна лица",
    legalEntityList: "Приказ правних лица",
    processType: "Типови процеса",
    processTypeList: " Приказ типова",
    process: "Процеси",
    processList: "Приказ процеса",
    organizationalUnit: "Организационе јединице",
    organizationalUnitList: "Приказ организационих јединица",
    document: "Документи",
    documentList: "Приказ докумената",
    case: "Предмети",
    caseList: "Приказ предмета",
    caseClassification: "Класификације предмета",
    caseClassificationList: "Приказ класификација предмета",
  },
};

export const EmployeeListTranslation = {
  Header: { heading: "Запослена лица" },
};

export const EmployeeTableTranslation = {
  HeaderColumns: {
    profession: "Професија",
    manager: "Менаџер",
    update: "Измена",
    delete: "Брисање",
  },
  Buttons: {
    addNewEmployee: "Унеси новог запосленог",
    back: "Врати се на почетну страну",
  },
};

export const EmployeeRowTranslation = {
  updateButton: "Измени",
};

export const EmployeeModalForAddAndUpdateTranslation = {
  Header: {
    headingAddModal: "Унос новог запосленог лица",
    headingUpdateModal: "Измена запосленог лица",
  },
  SelectOptionsAndPlaceholders: {
    professionPlaceholder: "Унесите професију",
    managerPlaceholder: "Менаџер",
    managerOption: "Да ли сте менаџер?",
    managerOptionTrue: "Дa",
    managerOptionFalse: "Не",
    physicalEntityPlaceholder: "Изаберите физичко лице",
    physicalEntityOption: "Изаберите физичко лице",
    userPlaceholder: "Изаберите корисника",
    userOption: "Изаберите корисника",
  },
};

export const legalEntityListTranslation = {
  Header: { heading: "Правна лица" },
};

export const legalEntityTableTranslation = {
  HeaderColumns: {
    id: "Ид",
    name: "Назив",
    pib: "Пиб",
    registrationNumber: "Регистрациони број",
    email: "Имаил",
    statement: "Стање",
    update: "Измени",
    delete: "Обриши",
  },
  Buttons: {
    addNewLegalEntity: "Додај правно лице",
  },
};

export const legalEntityModalForAddAndUpdateTranslation = {
  Header: {
    headingAddModal: "Унеси ново правно лице",
    headingUpdateModal: "Измени правно лице",
  },
  SelectOptionsAndPlaceholders: {
    namePlaceholder: "Име",
    pibPlaceholder: "Пиб",
    emailPlaceholder: "Имаил",
    statementPlaceholder: "Изаберите стање",
    statementOption: "Изаберите стање",
    statementOptionActive: "Активан",
    statementOptionPassive: "Пасиван",
  },
};

export const organizationalUnitListTranslation = {
  Header: { heading: "Организационе јединице" },
};

export const organizationalUnitTableTranslation = {
  HeaderColumns: {
    id: "Ид",
    name: "Име јединице",
    code: "Шифра",
    nameLegalEntity: "Име правног лица",
    update: "Измени",
    delete: "Обриши",
  },
  Buttons: {
    addNewOrganizationalUnit: "Направи нову организациону јединицу",
  },
};

export const organizationalUnitModalForAddAndUpdateTranslation = {
  Header: {
    headingAddModal: "Унеси нову организациону јединицу",
    headingUpdateModal: "Измени организациону јединицу",
  },
  SelectOptionsAndPlaceholders: {
    namePlaceholder: "Име јединице",
    codePlaceholder: "Шифра",
    legalEntityPlaceholder: "Одаберите правно лице",
    legalEntityOption: "Одаберите правно лице",
  },
};

export const processTypeListTranslation = {
  Header: { heading: "Типови процеса" },
};

export const processTypeTableTranslation = {
  HeaderColumns: {
    id: "Ид",
    type: "Тип",
    description: "Опис",
    update: "Измени",
    delete: "Обриши",
  },
  Buttons: {
    addNewProcessType: "Додај нови тип",
  },
};

export const processTypeModalForAddAndUpdateTrasaltion = {
  Header: {
    headingAddModal: "Додај нови тип",
    headingUpdateModal: "Измени тип",
  },
  SelectOptionsAndPlaceholders: {
    typePlaceholder: "Тип",
    descriptionPlaceholder: "Опис",
  },
};
export const documentListTranslation = {
  Header: { heading: "Документи", title: "Унеси нови документ" },
};

export const documentTableTranslation = {
  HeaderColumns: {
    id: "Ид",
    title: "Наслов",
    description: "Опис",
    type: "Тип",
    status: "Статус",
    employee: "Запослени",
    _case: "Случај",
    update: "Измена",
    delete: "Брисање",
  },
  Buttons: {
    back: "Врати се на почетну страну",
    add: "Додај документ са предметом",
  },
};
export const documentModalForAddAndUpdateTranslation = {
  Header: {
    headingAddModal: "Унос новог документа",
    headingUpdateModal: "Измена документа",
  },
  SelectOptionsAndPlaceholders: {
    titlePlaceholder: "Наслов",
    descriptionPlaceholder: "Опис",
    typePlaceholder: "Унесите тип предмета",
    typeOption: "Унесите тип документа",
    statusPlaceholder: "Унесите статус документа",
    statusOption: "Унесите статус документа",
    employeePlaceholder: "Одаберите запослено лице",
    employeeOption: "Одаберите запослено лице",
    _casePlaceholder: "Одаберите случај",
    _caseOption: "Одаберите случај",
  },
};

export const caseClassificationListTranslation = {
  Header: {
    heading: "Класификације предмета",
  },
};

export const caseClassificationTableTranslation = {
  Buttons: {
    back: "Врати се назад",
    addNewCaseClassification: "Унеси нову класификацију",
  },
  RowItems: {
    id: "Шифра",
    name: "Име класификације",
    namOfOrganizationalUnit: "Име организационе јединице",
    update: "Измена",
    delete: "Брисање",
  },
};

export const physicalEntityValidationsTranslation = {
  Modals: {
    firstName: "Име је обавезнo и треба имати минимум 2 карактера",
    lastName: "Prezime је обавезнo и треба имати минимум 2 карактера",
    city: "Град је обавезан и треба имати минимум 2 карактера",
    email: "Неодговарајући формат",
  },
};

export const employeeValidationsTranslation = {
  Modals: {
    profession: "Морате унети професију",
    physicalEntity: "Морате унети физичко лице",
    user: "Морате унети корисника",
  },
};

export const caseValidationsTranslation = {
  Modals: {
    title: "Морате унети наслов документа",
    employeeCreated: "Морате унети запослено лице",
    caseName: "Морате унети назив предмета",
    refersTo: "Морате изабрати",
    title: "Морате унети наслов документа",
    alertCase: "Нисте попунили сва потребна поља прве старне",
    alertDocument: "Нисте попунили сва потребна поља друге стране",
  },
};

export const caseClassificationValidationsTranslation = {
  Modals: {
    code: "Шифра је обавезна и треба имати минимум 2 цифре",
    name: "Име је обавезнo и треба имати минимум 2 карактера",
    organizationalUnit: "Организациона јединица је обавезна",
  },
};

export const caseClassificationTranslation = {
  heading: "Шифра је обавезна и треба имати минимум 2 цифре",
  headingUpdate: "Измени класификације предмета",
  codePlaceholder: "Унесите шифру класификације",
  namePlaceholder: "Организациона јединица је обавезна",
  organizationalUnitSelect: "Изаберите којој организационој јединици припада",
};
