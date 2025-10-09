// Данные профессий Cash Flow
const cashFlowProfessions = [
  {
    name: "Офицер ГИБДД",
    icon: "👮",
    salary: 3000,
    expenses: {
      taxes: 580,
      homePayment: 400,
      schoolLoan: 0,
      carLoan: 100,
      creditCard: 60,
      retail: 50,
      other: 690,
      childExpensePerChild: 160
    },
    liabilities: {
      homeMortgage: 46000,
      schoolLoan: 0,
      carLoan: 5000,
      creditCards: 2000,
      retailDebt: 1000
    },
    savings: 520
  },
  {
    name: "Офис-менеджер",
    icon: "💼",
    salary: 4600,
    expenses: {
      taxes: 910,
      homePayment: 700,
      schoolLoan: 60,
      carLoan: 120,
      creditCard: 90,
      retail: 50,
      other: 1000,
      childExpensePerChild: 240
    },
    liabilities: {
      homeMortgage: 75000,
      schoolLoan: 12000,
      carLoan: 6000,
      creditCards: 3000,
      retailDebt: 1000
    },
    savings: 400
  },
  {
    name: "Пилот",
    icon: "✈️",
    salary: 9500,
    expenses: {
      taxes: 2350,
      homePayment: 1330,
      schoolLoan: 0,
      carLoan: 300,
      creditCard: 660,
      retail: 50,
      other: 2210,
      childExpensePerChild: 480
    },
    liabilities: {
      homeMortgage: 143000,
      schoolLoan: 0,
      carLoan: 15000,
      creditCards: 22000,
      retailDebt: 1000
    },
    savings: 400
  },
  {
    name: "Швейцар",
    icon: "🏨",
    salary: 1600,
    expenses: {
      taxes: 280,
      homePayment: 200,
      schoolLoan: 0,
      carLoan: 60,
      creditCard: 60,
      retail: 50,
      other: 300,
      childExpensePerChild: 70
    },
    liabilities: {
      homeMortgage: 202000,
      schoolLoan: 150000,
      carLoan: 19000,
      creditCards: 9000,
      retailDebt: 1000
    },
    savings: 400
  },
  {
    name: "Механик",
    icon: "🔧",
    salary: 2000,
    expenses: {
      taxes: 360,
      homePayment: 300,
      schoolLoan: 0,
      carLoan: 60,
      creditCard: 60,
      retail: 50,
      other: 450,
      childExpensePerChild: 110
    },
    liabilities: {
      homeMortgage: 31000,
      schoolLoan: 0,
      carLoan: 3000,
      creditCards: 2000,
      retailDebt: 1000
    },
    savings: 670
  },
  {
    name: "Медсестра",
    icon: "👩‍⚕️",
    salary: 3100,
    expenses: {
      taxes: 600,
      homePayment: 400,
      schoolLoan: 30,
      carLoan: 100,
      creditCard: 90,
      retail: 50,
      other: 710,
      childExpensePerChild: 170
    },
    liabilities: {
      homeMortgage: 47000,
      schoolLoan: 6000,
      carLoan: 5000,
      creditCards: 3000,
      retailDebt: 1000
    },
    savings: 480
  },
  {
    name: "Водитель грузовика",
    icon: "🚛",
    salary: 2500,
    expenses: {
      taxes: 460,
      homePayment: 400,
      schoolLoan: 0,
      carLoan: 80,
      creditCard: 60,
      retail: 50,
      other: 570,
      childExpensePerChild: 140
    },
    liabilities: {
      homeMortgage: 38000,
      schoolLoan: 0,
      carLoan: 4000,
      creditCards: 2000,
      retailDebt: 1000
    },
    savings: 750
  },
  {
    name: "Врач",
    icon: "👨‍⚕️",
    salary: 13200,
    expenses: {
      taxes: 3420,
      homePayment: 1900,
      schoolLoan: 750,
      carLoan: 380,
      creditCard: 270,
      retail: 50,
      other: 2880,
      childExpensePerChild: 640
    },
    liabilities: {
      homeMortgage: 202000,
      schoolLoan: 150000,
      carLoan: 19000,
      creditCards: 9000,
      retailDebt: 1000
    },
    savings: 400
  },
  {
    name: "Учитель",  
    icon: "👩‍🏫",
    salary: 3300,
    expenses: {
      taxes: 630,
      homePayment: 500,
      schoolLoan: 60,
      carLoan: 100,
      creditCard: 90,
      retail: 50,
      other: 760,
      childExpensePerChild: 180
    },
    liabilities: {
      homeMortgage: 50000,
      schoolLoan: 12000,
      carLoan: 5000,
      creditCards: 3000,
      retailDebt: 1000
    },
    savings: 400
  },
  {
    name: "Адвокат",
    icon: "⚖️",
    salary: 7500,
    expenses: {
      taxes: 1830,
      homePayment: 1100,
      schoolLoan: 390,
      carLoan: 220,
      creditCard: 180,
      retail: 50,
      other: 1650,
      childExpensePerChild: 640
    },
    liabilities: {
      homeMortgage: 115000,
      schoolLoan: 78000,
      carLoan: 11000,
      creditCards: 6000,
      retailDebt: 1000
    },
    savings: 400
  },
  {
    name: "Конструктор",
    icon: "📐",
    salary: 4900,
    expenses: {
      taxes: 1050,
      homePayment: 700,
      schoolLoan: 60,
      carLoan: 140,
      creditCard: 120,
      retail: 50,
      other: 1090,
      childExpensePerChild: 250
    },
    liabilities: {
      homeMortgage: 75000,
      schoolLoan: 12000,
      carLoan: 7000,
      creditCards: 4000,
      retailDebt: 1000
    },
    savings: 400
  },
  {
    name: "Секретарь",
    icon: "📋",
    salary: 2500,
    expenses: {
      taxes: 460,
      homePayment: 400,
      schoolLoan: 0,
      carLoan: 80,
      creditCard: 60,
      retail: 50,
      other: 570,
      childExpensePerChild: 140
    },
    liabilities: {
      homeMortgage: 38000,
      schoolLoan: 0,
      carLoan: 4000,
      creditCards: 2000,
      retailDebt: 1000
    },
    savings: 710
  }
];

// Данные профессий "Секрет денег"
const secretOfMoneyProfessions = [
  {name: "Учитель", icon: "👩‍🏫", salary: 7000, expenses: 4200, profit: 2800, savings: 20000},
  {name: "Маляр", icon: "🎨", salary: 10000, expenses: 6100, profit: 4600, savings: 18000},
  {name: "Секретарь", icon: "📋", salary: 12000, expenses: 7400, profit: 4600, savings: 18000},
  {name: "Строитель", icon: "🏗️", salary: 13000, expenses: 8200, profit: 4800, savings: 17000},
  {name: "Кровельщик", icon: "🏠", salary: 15000, expenses: 9600, profit: 5400, savings: 16000},
  {name: "Водитель", icon: "🚗", salary: 16000, expenses: 10400, profit: 5600, savings: 15000},
  {name: "Кондитер", icon: "🍰", salary: 17000, expenses: 11200, profit: 5800, savings: 14000},
  {name: "Офицер ГИБДД", icon: "👮", salary: 18000, expenses: 12000, profit: 6000, savings: 13000},
  {name: "Банковский служащий", icon: "🏦", salary: 20000, expenses: 13600, profit: 6400, savings: 12000},
  {name: "Хирург", icon: "👨‍⚕️", salary: 24000, expenses: 16600, profit: 7400, savings: 11000},
  {name: "Архитектор", icon: "🏛️", salary: 25000, expenses: 17500, profit: 7500, savings: 10000},
  {name: "Элитный домработник", icon: "🏠", salary: 30000, expenses: 21300, profit: 8700, savings: 9000},
  {name: "Шеф-повар", icon: "👨‍🍳", salary: 40000, expenses: 28800, profit: 11200, savings: 8000},
  {name: "Главный бухгалтер", icon: "📊", salary: 50000, expenses: 36500, profit: 13500, savings: 7000},
  {name: "Авиа пилот", icon: "✈️", salary: 60000, expenses: 44400, profit: 15600, savings: 6000},
  {name: "Директор", icon: "👔", salary: 80000, expenses: 60000, profit: 20000, savings: 5000}
];

// Метаданные приложения и ключи хранения
const APP_VERSION = '1.1.0';
const STORAGE_KEY = 'cashFlowGameData';

let isStorageAvailable = true;

// Глобальные переменные
let currentScreen = 1;
let currentUser = null;
let selectedProfession = null;
let gameType = null; // 'cashflow' или 'secret'
let gameData = {
  wallet: 0,
  passiveIncome: 0,
  expenses: {},
  assets: [],
  children: 0,
  round: 1,
  secretData: {
    inventory: 100,
    passiveIncome: 0,
    networkIncome: 0
  }
};

let pendingUpdateNotice = null;

let cashFlowStage = 1;
let stageTwoUnlocked = false;
let stageTwoBasePassive = 0;
let stageTwoInitialPassive = 0;
let stageTwoAdditionalPassive = 0;
let dreamPurchased = false;
const STAGE_TWO_TARGET_INCREMENT = 50000;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
  isStorageAvailable = checkLocalStorageAvailability();
  applyAppVersion();
  loadGameData();
  initializeProfessions();
  setupEventListeners();

  let noticeTitle = null;
  let noticeMessage = null;

  if (!isStorageAvailable) {
    noticeTitle = 'Автосохранение недоступно';
    noticeMessage = 'Ваш браузер блокирует доступ к локальному хранилищу, поэтому прогресс не будет сохраняться автоматически. Продолжайте игру, но учтите, что данные пропадут после перезагрузки страницы.';
  }

  if (pendingUpdateNotice) {
    if (noticeMessage) {
      noticeMessage += `\n\n${pendingUpdateNotice}`;
    } else {
      noticeTitle = 'Обновление 1.1.0';
      noticeMessage = pendingUpdateNotice;
    }
    pendingUpdateNotice = null;
  }

  if (noticeMessage) {
    showModal(noticeTitle, noticeMessage);
  }

  // Показать первый экран
  showScreen(1);
});

function applyAppVersion() {
  const versionLabel = document.getElementById('appVersion');
  if (versionLabel) {
    versionLabel.textContent = `v${APP_VERSION}`;
  }
}

// Навигация между экранами
function navigateToScreen(screenNumber) {
  showScreen(screenNumber);
  currentScreen = screenNumber;
  saveGameData();
}

function showScreen(screenNumber) {
  // Скрыть все экраны
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.style.display = 'none';
    screen.classList.remove('active');
  });

  // Показать выбранный экран
  const targetScreen = document.getElementById(`screen${screenNumber}`);
  if (targetScreen) {
    targetScreen.style.display = 'block';
    targetScreen.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// Инициализация профессий
function initializeProfessions() {
  // Cash Flow профессии
  const cashFlowContainer = document.getElementById('cashFlowProfessions');
  if (cashFlowContainer) {
    cashFlowContainer.innerHTML = '';
    cashFlowProfessions.forEach((profession, index) => {
      const professionItem = createProfessionItem(profession, index, 'cashflow');
      cashFlowContainer.appendChild(professionItem);
    });
  }
  
  // Секрет денег профессии
  const secretContainer = document.getElementById('secretMoneyProfessions');
  if (secretContainer) {
    secretContainer.innerHTML = '';
    secretOfMoneyProfessions.forEach((profession, index) => {
      const professionItem = createProfessionItem(profession, index, 'secret');
      secretContainer.appendChild(professionItem);
    });
  }
}

function createProfessionItem(profession, index, type) {
  const div = document.createElement('div');
  div.className = 'profession-item';
  div.innerHTML = `
    <div class="profession-icon">${profession.icon}</div>
    <div class="profession-name">${profession.name}</div>
  `;
  div.onclick = () => selectProfession(index, type);
  return div;
}

function selectProfession(index, type) {
  if (type === 'cashflow') {
    selectedProfession = cashFlowProfessions[index];
    gameType = 'cashflow';
    initializeCashFlowGame();
    navigateToScreen(6);
  } else {
    selectedProfession = secretOfMoneyProfessions[index];
    gameType = 'secret';
    initializeSecretGame();
    navigateToScreen(7);
  }
}

// Валидация регистрации
function validateRegistration() {
  const nickname = document.getElementById('nickname');
  const password = document.getElementById('password');
  const nicknameValidation = document.getElementById('nicknameValidation');
  const passwordValidation = document.getElementById('passwordValidation');
  
  let isValid = true;
  
  // Валидация никнейма
  const nicknameRegex = /^[a-zA-Z0-9\-_*.]{1,20}$/;
  if (!nicknameRegex.test(nickname.value)) {
    nicknameValidation.textContent = 'Только латинские символы, цифры и -_*. (до 20 символов)';
    nicknameValidation.className = 'validation-message error';
    isValid = false;
  } else {
    nicknameValidation.textContent = '✓ Никнейм корректный';
    nicknameValidation.className = 'validation-message success';
  }
  
  // Валидация пароля
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,10}$/;
  if (!passwordRegex.test(password.value)) {
    passwordValidation.textContent = 'Нужна заглавная буква, строчная буква и цифра (до 10 символов)';
    passwordValidation.className = 'validation-message error';
    isValid = false;
  } else {
    passwordValidation.textContent = '✓ Пароль корректный';
    passwordValidation.className = 'validation-message success';
  }
  
  return isValid;
}

function validateAndRegister(event) {
  event.preventDefault();
  
  if (validateRegistration()) {
    const nickname = document.getElementById('nickname').value;
    currentUser = {
      nickname: nickname,
      registeredAt: new Date()
    };
    
    showModal('Регистрация успешна!', `Добро пожаловать, ${nickname}!`);
    setTimeout(() => {
      closeModal();
      navigateToScreen(3);
    }, 2000);
  }
  
  return false;
}

function socialLogin(provider) {
  showModal('Социальная авторизация', `Вход через ${provider} (демо-режим)`);
  currentUser = {
    nickname: `User_${provider}`,
    provider: provider,
    registeredAt: new Date()
  };
  
  setTimeout(() => {
    closeModal();
    navigateToScreen(3);
  }, 1500);
}

// Настройка слушателей событий
function setupEventListeners() {
  // Валидация в реальном времени
  const nickname = document.getElementById('nickname');
  const password = document.getElementById('password');
  
  if (nickname) {
    nickname.addEventListener('input', validateRegistration);
  }
  
  if (password) {
    password.addEventListener('input', validateRegistration);
  }

  const dreamInput = document.getElementById('playerDream');
  if (dreamInput) {
    dreamInput.addEventListener('input', () => {
      const stage2DreamDisplay = document.getElementById('stage2DreamDisplay');
      if (stage2DreamDisplay) {
        const dreamValue = dreamInput.value.trim() || '—';
        stage2DreamDisplay.textContent = dreamValue;
      }
    });
  }

  // Автосохранение каждые 30 секунд
  setInterval(saveGameData, 30000);
}

// === CASH FLOW ИГРА ===

function initializeCashFlowGame() {
  if (!selectedProfession) return;

  // Инициализация игровых данных
  gameData.wallet = selectedProfession.savings;
  gameData.expenses = { ...selectedProfession.expenses };
  gameData.passiveIncome = 0;
  gameData.children = 0;

  // Настройки этапов
  cashFlowStage = 1;
  stageTwoUnlocked = false;
  stageTwoBasePassive = 0;
  stageTwoInitialPassive = 0;
  stageTwoAdditionalPassive = 0;
  dreamPurchased = false;

  const stage2Button = document.getElementById('stage2Button');
  if (stage2Button) {
    stage2Button.disabled = true;
    stage2Button.classList.remove('active');
  }

  const stage1Button = document.getElementById('stage1Button');
  if (stage1Button) {
    stage1Button.classList.add('active');
  }

  const dreamCheckbox = document.getElementById('dreamPurchased');
  if (dreamCheckbox) {
    dreamCheckbox.checked = false;
  }

  const stage2Input = document.getElementById('stage2PassiveInput');
  if (stage2Input) {
    stage2Input.value = '';
  }

  const childrenInput = document.getElementById('childrenCount');
  if (childrenInput) {
    childrenInput.value = 0;
  }
  const childrenExpenseDisplay = document.getElementById('childrenExpensesAmount');
  if (childrenExpenseDisplay) {
    childrenExpenseDisplay.textContent = '0';
  }

  const stage2Status = document.getElementById('stage2GoalStatus');
  if (stage2Status) {
    stage2Status.textContent = 'Цель пока не достигнута.';
    stage2Status.classList.remove('success', 'warning');
  }

  const stage2List = document.getElementById('stage2PassiveList');
  if (stage2List) {
    stage2List.innerHTML = '';
  }

  const stage2Base = document.getElementById('stage2BasePassive');
  if (stage2Base) stage2Base.textContent = '0';

  const stage2Passive = document.getElementById('stage2PassiveIncome');
  if (stage2Passive) stage2Passive.textContent = '0';

  const stage2Wallet = document.getElementById('stage2WalletAmount');
  if (stage2Wallet) stage2Wallet.textContent = '0';

  const stage2Total = document.getElementById('stage2TotalPassive');
  if (stage2Total) stage2Total.textContent = '0';

  const stage2Target = document.getElementById('stage2TargetIncome');
  if (stage2Target) stage2Target.textContent = STAGE_TWO_TARGET_INCREMENT.toLocaleString();

  showCashflowStage(1);

  // Обновление интерфейса
  updateCashFlowDisplay();
}

function updateCashFlowDisplay() {
  if (!selectedProfession) return;

  // Обновить название профессии
  document.getElementById('selectedProfession').textContent = selectedProfession.name;

  const stageLabel = document.getElementById('cashflowStageLabel');
  if (stageLabel) {
    stageLabel.textContent = cashFlowStage === 1 ? 'Этап 1: Крысиный бег' : 'Этап 2: Быстрый трек';
  }

  const nickname = currentUser?.nickname || 'Гость';
  const nicknameDisplay = document.getElementById('playerNicknameDisplay');
  if (nicknameDisplay) {
    nicknameDisplay.textContent = nickname;
  }

  const professionDisplay = document.getElementById('stage1ProfessionName');
  if (professionDisplay) {
    professionDisplay.textContent = selectedProfession.name;
  }

  const dreamInput = document.getElementById('playerDream');
  const stage2DreamDisplay = document.getElementById('stage2DreamDisplay');
  if (stage2DreamDisplay) {
    const dreamValue = dreamInput && dreamInput.value.trim() ? dreamInput.value.trim() : '—';
    stage2DreamDisplay.textContent = dreamValue;
  }

  // Обновить основные показатели
  document.getElementById('walletAmount').textContent = `$${gameData.wallet.toLocaleString()}`;
  document.getElementById('passiveIncomeAmount').textContent = `$${gameData.passiveIncome.toLocaleString()}`;
  document.getElementById('salaryAmount').textContent = `$${selectedProfession.salary.toLocaleString()}`;

  // Обновить расходы
  updateExpensesDisplay();
  renderLiabilities();
  updateTotalExpenses();

  // Пересчитать доходы
  updateTotalIncome();

  // Обновить доступный кредит
  updateAvailableCredit();

  // Обновить кнопку этапов
  updateStageButtons();

  if (stageTwoUnlocked) {
    updateStage2Display();
  }
}

function updateExpensesDisplay() {
  const fixedExpensesContainer = document.getElementById('fixedExpenses');
  if (!fixedExpensesContainer || !selectedProfession) return;

  const expenseLabels = {
    taxes: 'Налоги',
    homePayment: 'Оплата залога/аренды',
    schoolLoan: 'Кредит на обучение',
    carLoan: 'Кредит на автомобиль',
    creditCard: 'Кредитная карта',
    retail: 'Розничные расходы',
    other: 'Прочие расходы'
  };
  
  fixedExpensesContainer.innerHTML = '';
  
  Object.entries(selectedProfession.expenses).forEach(([key, value]) => {
    if (key !== 'childExpensePerChild') {
      const expenseItem = document.createElement('div');
      expenseItem.className = 'expense-item';
      expenseItem.innerHTML = `
        <label>${expenseLabels[key]}:</label>
        <span>$${value.toLocaleString()}</span>
      `;
      fixedExpensesContainer.appendChild(expenseItem);
    }
  });
}

function renderLiabilities() {
  const liabilitiesContainer = document.getElementById('liabilitiesList');
  if (!liabilitiesContainer || !selectedProfession) return;

  const liabilityLabels = {
    homeMortgage: 'Ипотека на дом',
    schoolLoan: 'Кредит на обучение',
    carLoan: 'Кредит на автомобиль',
    creditCards: 'Кредитные карты',
    retailDebt: 'Розничные долги'
  };

  liabilitiesContainer.innerHTML = '';

  Object.entries(selectedProfession.liabilities || {}).forEach(([key, value]) => {
    const item = document.createElement('div');
    item.className = 'liability-item';
    item.innerHTML = `
      <span>${liabilityLabels[key] || key}</span>
      <span>$${value}</span>
    `;
    liabilitiesContainer.appendChild(item);
  });
}

function updateTotalIncome() {
  let totalIncome = selectedProfession.salary;
  
  // Добавить переменные доходы
  const investments = parseFloat(document.getElementById('investments').value) || 0;
  const dividends = parseFloat(document.getElementById('dividends').value) || 0;
  const realEstateBusiness = parseFloat(document.getElementById('realEstateBusiness').value) || 0;
  const businessIncome1 = parseFloat(document.getElementById('businessIncome1').value) || 0;
  const businessIncome2 = parseFloat(document.getElementById('businessIncome2').value) || 0;
  
  // Добавить дополнительные доходы
  const additionalIncomes = document.querySelectorAll('.additional-income');
  additionalIncomes.forEach(input => {
    totalIncome += parseFloat(input.value) || 0;
  });
  
  totalIncome += investments + dividends + realEstateBusiness + businessIncome1 + businessIncome2;
  totalIncome += gameData.passiveIncome;

  document.getElementById('totalIncomeAmount').textContent = totalIncome.toLocaleString();

  updateCashFlow();
}

function updateChildrenExpenses() {
  const childrenCount = parseInt(document.getElementById('childrenCount').value) || 0;
  gameData.children = childrenCount;

  const childExpense = childrenCount * selectedProfession.expenses.childExpensePerChild;
  document.getElementById('childrenExpensesAmount').textContent = childExpense.toLocaleString();

  updateTotalExpenses();
}

function updateTotalExpenses() {
  if (!selectedProfession) return;

  let totalExpenses = 0;
  
  // Фиксированные расходы
  Object.entries(selectedProfession.expenses).forEach(([key, value]) => {
    if (key !== 'childExpensePerChild') {
      totalExpenses += value;
    }
  });
  
  // Детские расходы
  totalExpenses += gameData.children * selectedProfession.expenses.childExpensePerChild;
  
  document.getElementById('totalExpensesAmount').textContent = totalExpenses.toLocaleString();

  updateCashFlow();
  return totalExpenses;
}

function updateCashFlow() {
  const totalIncomeText = document.getElementById('totalIncomeAmount').textContent;
  const totalExpensesText = document.getElementById('totalExpensesAmount').textContent;

  const totalIncome = parseNumeric(totalIncomeText);
  const totalExpenses = parseNumeric(totalExpensesText);

  const cashFlow = totalIncome - totalExpenses;
  document.getElementById('cashFlowAmount').textContent = `$${cashFlow.toLocaleString()}`;
  document.getElementById('cashFlowAmount').style.color = cashFlow >= 0 ? '#10b981' : '#ef4444';

  // Проверить возможность перехода на второй круг
  checkSecondRound();
}

function updateAvailableCredit() {
  const cashFlowText = document.getElementById('cashFlowAmount').textContent;
  const cashFlow = parseNumeric(cashFlowText);
  const availableCredit = Math.max(0, Math.round(cashFlow * 10));
  document.getElementById('availableCredit').textContent = availableCredit.toLocaleString();
}

function parseNumeric(value) {
  if (typeof value === 'number') return value;
  if (!value) return 0;
  const normalized = value.toString().replace(/[^0-9.-]/g, '');
  const parsed = parseFloat(normalized);
  return isNaN(parsed) ? 0 : parsed;
}

function showCashflowStage(stage) {
  if (stage === 2 && !stageTwoUnlocked) {
    return;
  }

  cashFlowStage = stage;

  const stage1Form = document.getElementById('stage1Form');
  const stage2Form = document.getElementById('stage2Form');
  if (stage1Form) {
    stage1Form.classList.toggle('active', stage === 1);
  }
  if (stage2Form) {
    stage2Form.classList.toggle('active', stage === 2);
  }

  updateCashFlowDisplay();
  updateStageButtons();
}

function updateStageButtons() {
  const stage1Button = document.getElementById('stage1Button');
  const stage2Button = document.getElementById('stage2Button');

  if (stage1Button) {
    stage1Button.classList.toggle('active', cashFlowStage === 1);
  }

  if (stage2Button) {
    stage2Button.disabled = !stageTwoUnlocked;
    stage2Button.classList.toggle('active', cashFlowStage === 2);
  }

  const stageLabel = document.getElementById('cashflowStageLabel');
  if (stageLabel) {
    stageLabel.textContent = cashFlowStage === 1 ? 'Этап 1: Крысиный бег' : 'Этап 2: Быстрый трек';
  }
}

function updateStage2Display() {
  const passiveList = document.getElementById('stage2PassiveList');
  if (!passiveList) return;

  const basePassive = stageTwoBasePassive;
  const fastTrackPassive = stageTwoInitialPassive;
  const additionalPassive = stageTwoAdditionalPassive;

  const baseElement = document.getElementById('stage2BasePassive');
  if (baseElement) {
    baseElement.textContent = basePassive.toLocaleString();
  }

  const passiveIncomeElement = document.getElementById('stage2PassiveIncome');
  if (passiveIncomeElement) {
    passiveIncomeElement.textContent = fastTrackPassive.toLocaleString();
  }

  const walletElement = document.getElementById('stage2WalletAmount');
  if (walletElement) {
    walletElement.textContent = gameData.wallet.toLocaleString();
  }

  const totalPassiveElement = document.getElementById('stage2TotalPassive');
  if (totalPassiveElement) {
    totalPassiveElement.textContent = getStageTwoPassiveIncome().toLocaleString();
  }

  const targetElement = document.getElementById('stage2TargetIncome');
  if (targetElement) {
    targetElement.textContent = (stageTwoInitialPassive + STAGE_TWO_TARGET_INCREMENT).toLocaleString();
  }

  passiveList.innerHTML = '';

  const baseItem = document.createElement('li');
  baseItem.innerHTML = `<span>Пассивный доход этапа 1</span><span>$${basePassive.toLocaleString()}</span>`;
  passiveList.appendChild(baseItem);

  const scaledItem = document.createElement('li');
  scaledItem.innerHTML = `<span>Быстрый трек (×100)</span><span>$${fastTrackPassive.toLocaleString()}</span>`;
  passiveList.appendChild(scaledItem);

  const additionalItem = document.createElement('li');
  additionalItem.innerHTML = `<span>Дополнительный пассивный доход этапа 2</span><span>$${additionalPassive.toLocaleString()}</span>`;
  passiveList.appendChild(additionalItem);

  updateStageGoalStatus();
}

function getStageTwoPassiveIncome() {
  return stageTwoInitialPassive + stageTwoAdditionalPassive;
}

function addStageTwoPassiveIncome() {
  if (!stageTwoUnlocked) {
    showModal('Этап 2 недоступен', 'Сначала завершите цели первого этапа.');
    return;
  }

  const input = document.getElementById('stage2PassiveInput');
  const amount = parseFloat(input?.value);

  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму пассивного дохода.');
    return;
  }

  stageTwoAdditionalPassive += amount;
  if (input) {
    input.value = '';
  }

  updateStage2Display();
  updateStageGoalStatus();

  showModal('Пассивный доход добавлен', `+$${amount.toLocaleString()}`);
}

function toggleDreamPurchase() {
  if (!stageTwoUnlocked) return;

  const checkbox = document.getElementById('dreamPurchased');
  dreamPurchased = checkbox ? checkbox.checked : false;
  updateStageGoalStatus();
}

function updateStageGoalStatus() {
  const status = document.getElementById('stage2GoalStatus');
  if (!status) return;

  if (!stageTwoUnlocked) {
    status.classList.remove('success', 'warning');
    status.textContent = 'Цель пока не достигнута.';
    return;
  }

  const targetPassive = stageTwoInitialPassive + STAGE_TWO_TARGET_INCREMENT;
  const currentPassive = getStageTwoPassiveIncome();

  status.classList.remove('success', 'warning');

  if (dreamPurchased) {
    status.textContent = 'Поздравляем! Мечта куплена — победа достигнута!';
    status.classList.add('success');
    return;
  }

  if (currentPassive >= targetPassive) {
    status.textContent = 'Цель достигнута! Пассивный доход увеличен на $50 000 и более.';
    status.classList.add('success');
    return;
  }

  const remaining = targetPassive - currentPassive;
  status.textContent = `Цель пока не достигнута. Увеличьте пассивный доход еще на $${remaining.toLocaleString()}.`;
  status.classList.add('warning');
}

function addIncome() {
  const amount = parseFloat(document.getElementById('transactionAmount').value);
  const note = document.getElementById('transactionNote').value;
  
  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму дохода');
    return;
  }

  gameData.wallet += amount;
  updateCashFlowDisplay();

  // Очистить поля
  document.getElementById('transactionAmount').value = '';
  document.getElementById('transactionNote').value = '';

  const formattedAmount = amount.toLocaleString();
  showModal('Доход добавлен', `+$${formattedAmount}${note ? ` (${note})` : ''}`);
}

function addExpense() {
  const amount = parseFloat(document.getElementById('transactionAmount').value);
  const note = document.getElementById('transactionNote').value;
  
  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму расхода');
    return;
  }
  
  if (amount > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств в кошельке');
    return;
  }
  
  gameData.wallet -= amount;
  updateCashFlowDisplay();

  // Очистить поля
  document.getElementById('transactionAmount').value = '';
  document.getElementById('transactionNote').value = '';

  const formattedAmount = amount.toLocaleString();
  showModal('Расход добавлен', `-$${formattedAmount}${note ? ` (${note})` : ''}`);
}

function takeCredit() {
  const availableCredit = parseNumeric(document.getElementById('availableCredit').textContent);

  if (availableCredit <= 0) {
    showModal('Ошибка', 'У вас отрицательный денежный поток. Кредит недоступен.');
    return;
  }

  const formattedCredit = availableCredit.toLocaleString();

  if (confirm(`Взять кредит на сумму $${formattedCredit}?`)) {
    gameData.wallet += availableCredit;
    updateCashFlowDisplay();
    showModal('Кредит получен', `+$${formattedCredit}`);
  }
}

function addStock(button) {
  const row = button.closest('tr');
  const inputs = row.querySelectorAll('input');
  
  const name = inputs[0].value;
  const quantity = parseFloat(inputs[1].value);
  const price = parseFloat(inputs[2].value);
  const monthlyIncome = parseFloat(inputs[3].value);
  
  if (!name || !quantity || !price || !monthlyIncome) {
    showModal('Ошибка', 'Заполните все поля');
    return;
  }
  
  const totalCost = quantity * price;
  
  if (totalCost > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств');
    return;
  }
  
  // Списать деньги и добавить к пассивному доходу
  gameData.wallet -= totalCost;
  gameData.passiveIncome += monthlyIncome;
  
  // Добавить в активы
  gameData.assets.push({
    type: 'stock',
    name: name,
    quantity: quantity,
    price: price,
    monthlyIncome: monthlyIncome,
    totalCost: totalCost
  });
  
  // Очистить поля
  inputs.forEach(input => input.value = '');
  
  updateCashFlowDisplay();
  updateTotalIncome();
  
  showModal('Актив приобретен', `${name}: +$${monthlyIncome}/мес`);
}

function addRealEstate(button) {
  const row = button.closest('tr');
  const inputs = row.querySelectorAll('input');
  
  const name = inputs[0].value;
  const downPayment = parseFloat(inputs[1].value);
  const totalPrice = parseFloat(inputs[2].value);
  const monthlyIncome = parseFloat(inputs[3].value);
  
  if (!name || !downPayment || !totalPrice || !monthlyIncome) {
    showModal('Ошибка', 'Заполните все поля');
    return;
  }
  
  if (downPayment > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств для первоначального взноса');
    return;
  }
  
  // Списать первоначальный взнос и добавить к пассивному доходу
  gameData.wallet -= downPayment;
  gameData.passiveIncome += monthlyIncome;
  
  // Добавить в активы
  gameData.assets.push({
    type: 'realestate',
    name: name,
    downPayment: downPayment,
    totalPrice: totalPrice,
    monthlyIncome: monthlyIncome
  });
  
  // Очистить поля
  inputs.forEach(input => input.value = '');
  
  updateCashFlowDisplay();
  updateTotalIncome();
  
  showModal('Недвижимость приобретена', `${name}: +$${monthlyIncome}/мес`);
}

function addBusiness(button) {
  const row = button.closest('tr');
  const inputs = row.querySelectorAll('input');
  
  const name = inputs[0].value;
  const downPayment = parseFloat(inputs[1].value);
  const totalPrice = parseFloat(inputs[2].value);
  const monthlyIncome = parseFloat(inputs[3].value);
  
  if (!name || !downPayment || !totalPrice || !monthlyIncome) {
    showModal('Ошибка', 'Заполните все поля');
    return;
  }
  
  if (downPayment > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств для первоначального взноса');
    return;
  }
  
  // Списать первоначальный взнос и добавить к пассивному доходу
  gameData.wallet -= downPayment;
  gameData.passiveIncome += monthlyIncome;
  
  // Добавить в активы
  gameData.assets.push({
    type: 'business',
    name: name,
    downPayment: downPayment,
    totalPrice: totalPrice,
    monthlyIncome: monthlyIncome
  });
  
  // Очистить поля
  inputs.forEach(input => input.value = '');
  
  updateCashFlowDisplay();
  updateTotalIncome();
  
  showModal('Бизнес приобретен', `${name}: +$${monthlyIncome}/мес`);
}

function checkSecondRound() {
  if (stageTwoUnlocked || !selectedProfession) return;

  const notification = document.getElementById('secondRoundNotification');
  if (!notification) return;

  const totalExpenses = parseNumeric(document.getElementById('totalExpensesAmount').textContent) || 0;
  const childBuffer = selectedProfession.expenses.childExpensePerChild || 0;

  if (gameData.passiveIncome >= totalExpenses + childBuffer && totalExpenses > 0) {
    notification.style.display = 'flex';
  }
}

function goToSecondRound() {
  const notification = document.getElementById('secondRoundNotification');
  if (notification) {
    notification.style.display = 'none';
  }

  stageTwoUnlocked = true;
  stageTwoBasePassive = gameData.passiveIncome;
  stageTwoInitialPassive = stageTwoBasePassive * 100;
  stageTwoAdditionalPassive = 0;
  dreamPurchased = false;

  const stage2Button = document.getElementById('stage2Button');
  if (stage2Button) {
    stage2Button.disabled = false;
  }

  showModal('Быстрый трек!', `Ваш пассивный доход масштабирован до $${stageTwoInitialPassive.toLocaleString()}.`);

  showCashflowStage(2);
  updateStage2Display();
  updateStageButtons();
}

// === СЕКРЕТ ДЕНЕГ ИГРА ===

function initializeSecretGame() {
  if (!selectedProfession) return;
  
  // Инициализация игровых данных
  gameData.wallet = selectedProfession.savings;
  gameData.secretData = {
    inventory: 100,
    passiveIncome: 0,
    networkIncome: 0,
    round: 1
  };
  
  updateSecretDisplay();
}

function updateSecretDisplay() {
  if (!selectedProfession) return;
  
  // Обновить название профессии
  document.getElementById('secretProfessionName').textContent = selectedProfession.name;
  
  // Обновить основные показатели
  document.getElementById('secretWallet').textContent = gameData.wallet.toLocaleString();
  document.getElementById('secretSalary').textContent = selectedProfession.salary.toLocaleString();
  document.getElementById('secretExpenses').textContent = selectedProfession.expenses.toLocaleString();
  document.getElementById('secretProfit').textContent = selectedProfession.profit.toLocaleString();
  
  // Обновить прогресс-бар
  updateSecretProgress();
}

function updateSecretProgress() {
  const target = gameData.secretData.round === 1 ? 200000 : 300000;
  const current = gameData.secretData.round === 1 ? gameData.wallet : gameData.secretData.passiveIncome;
  const progress = Math.min((current / target) * 100, 100);
  
  const progressBar = document.getElementById('secretProgress');
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
  
  // Проверить переход на следующий круг
  if (progress >= 100) {
    checkSecretRoundTransition();
  }
}

function receiveSecretSalary() {
  gameData.wallet += selectedProfession.salary;
  updateSecretDisplay();
  showModal('Зарплата получена', `+₽${selectedProfession.salary.toLocaleString()}`);
}

function paySecretExpenses() {
  if (gameData.wallet < selectedProfession.expenses) {
    showModal('Ошибка', 'Недостаточно средств для оплаты расходов');
    return;
  }
  
  gameData.wallet -= selectedProfession.expenses;
  updateSecretDisplay();
  showModal('Расходы оплачены', `-₽${selectedProfession.expenses.toLocaleString()}`);
}

function addSecretCustomIncome() {
  const amount = parseFloat(document.getElementById('secretCustomAmount').value);
  
  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму');
    return;
  }
  
  gameData.wallet += amount;
  updateSecretDisplay();
  
  document.getElementById('secretCustomAmount').value = '';
  showModal('Доход добавлен', `+₽${amount.toLocaleString()}`);
}

function addSecretCustomExpense() {
  const amount = parseFloat(document.getElementById('secretCustomAmount').value);
  
  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму');
    return;
  }
  
  if (amount > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств');
    return;
  }
  
  gameData.wallet -= amount;
  updateSecretDisplay();
  
  document.getElementById('secretCustomAmount').value = '';
  showModal('Расход добавлен', `-₽${amount.toLocaleString()}`);
}

function checkSecretRoundTransition() {
  if (gameData.secretData.round === 1 && gameData.wallet >= 200000) {
    showModal('Переход на 2-й круг!', 'Поздравляем! Вы накопили ₽200,000');
    gameData.secretData.round = 2;
    
    // Переключить на второй круг
    document.getElementById('secretRound1').style.display = 'none';
    document.getElementById('secretRound2').style.display = 'block';
    document.getElementById('roundIndicator').textContent = 'Круг 2';
  } else if (gameData.secretData.round === 2 && gameData.secretData.passiveIncome >= 300000) {
    showModal('Переход на 3-й круг!', 'Поздравляем! Пассивный доход ₽300,000');
    gameData.secretData.round = 3;
    
    // Переключить на третий круг
    document.getElementById('secretRound2').style.display = 'none';
    document.getElementById('secretRound3').style.display = 'block';
    document.getElementById('roundIndicator').textContent = 'Финальный круг';
  }
}

function sellProducts() {
  const salePercent = parseFloat(document.getElementById('salePercent').value);
  const salePrice = parseFloat(document.getElementById('salePrice').value);
  const productPrice = parseFloat(document.getElementById('productPrice').value);
  
  if (!salePercent || !salePrice || salePercent <= 0 || salePercent > 100) {
    showModal('Ошибка', 'Введите корректный процент (1-100)');
    return;
  }
  
  if (salePercent / 100 > gameData.secretData.inventory / 100) {
    showModal('Ошибка', 'Недостаточно товара на складе');
    return;
  }
  
  // Рассчитать выручку
  const revenue = (salePercent / 100) * salePrice;
  const cost = (salePercent / 100) * productPrice;
  const profit = revenue - cost;
  
  // Обновить остаток товара
  gameData.secretData.inventory -= salePercent;
  gameData.wallet += revenue;
  
  // Обновить интерфейс
  document.getElementById('inventoryAmount').textContent = `${gameData.secretData.inventory}%`;
  updateSecretDisplay();
  
  // Очистить поля
  document.getElementById('salePercent').value = '';
  document.getElementById('salePrice').value = '';
  
  showModal('Товар продан', `Выручка: ₽${revenue.toLocaleString()}, Прибыль: ₽${profit.toLocaleString()}`);
}

function payWarehouseExpenses() {
  const warehouseCost = 100000;
  
  if (gameData.wallet < warehouseCost) {
    showModal('Ошибка', 'Недостаточно средств для оплаты склада');
    return;
  }
  
  gameData.wallet -= warehouseCost;
  updateSecretDisplay();
  showModal('Склад оплачен', `-₽${warehouseCost.toLocaleString()}`);
}

function addNetworkIncome() {
  const amount = parseFloat(document.getElementById('networkIncome').value);
  
  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму');
    return;
  }
  
  gameData.wallet += amount;
  gameData.secretData.networkIncome += amount;
  
  updateSecretDisplay();
  document.getElementById('networkIncome').value = '';
  
  showModal('Доход от сети добавлен', `+₽${amount.toLocaleString()} (активный доход)`);
}

function calculateShares() {
  const stock1 = parseFloat(document.getElementById('stock1').value) || 0;
  const stock2 = parseFloat(document.getElementById('stock2').value) || 0;
  const stock3 = parseFloat(document.getElementById('stock3').value) || 0;
  const stock4 = parseFloat(document.getElementById('stock4').value) || 0;
  
  if (stock1 === 0 || stock2 === 0 || stock3 === 0 || stock4 === 0) {
    showModal('Ошибка', 'Введите все 4 цены акций');
    return;
  }
  
  const average = (stock1 + stock2 + stock3 + stock4) / 4;
  document.getElementById('shareResult').innerHTML = `
    <strong>Средняя цена пая: ₽${average.toFixed(2)}</strong>
  `;
  
  showModal('Пай рассчитан', `Средняя цена: ₽${average.toFixed(2)}`);
}

// === МОДАЛЬНЫЕ ОКНА ===

function showModal(title, message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  
  modalMessage.innerHTML = `
    <h3>${title}</h3>
    <p>${message}</p>
  `;
  
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}

// === СОХРАНЕНИЕ И ЗАГРУЗКА ===

function checkLocalStorageAvailability() {
  try {
    if (typeof window === 'undefined' || !('localStorage' in window)) {
      return false;
    }

    const testKey = '__cashflow_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    console.warn('Локальное хранилище недоступно. Автосохранение будет отключено.', error);
    return false;
  }
}

function saveGameData() {
  if (!isStorageAvailable) {
    return;
  }

  try {
    const dataToSave = {
      currentScreen: currentScreen,
      currentUser: currentUser,
      selectedProfession: selectedProfession,
      gameType: gameType,
      gameData: gameData,
      version: APP_VERSION,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  } catch (error) {
    console.log('Ошибка сохранения данных:', error);
  }
}

function loadGameData() {
  if (!isStorageAvailable) {
    return;
  }

  let savedData = null;

  try {
    savedData = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Не удалось получить данные из локального хранилища:', error);
    isStorageAvailable = false;
    return;
  }

  if (!savedData) {
    return;
  }

  try {
    const data = JSON.parse(savedData);

    if (!data || typeof data !== 'object') {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }

    if (!data.version || data.version !== APP_VERSION) {
      pendingUpdateNotice = 'Мы обновили файлы игры до версии 1.1.0 и сбросили старые сохранения, чтобы избежать конфликтов данных. Начните новую игру, чтобы воспользоваться последними улучшениями.';
      localStorage.removeItem(STORAGE_KEY);
      return;
    }

    if (data.currentUser) {
      currentUser = data.currentUser;
    }

    if (data.selectedProfession) {
      selectedProfession = data.selectedProfession;
    }

    if (data.gameType) {
      gameType = data.gameType;
    }

    if (data.gameData) {
      gameData = { ...gameData, ...data.gameData };
    }

    // Не восстанавливаем currentScreen, чтобы всегда начинать с приветствия
  } catch (error) {
    console.log('Ошибка загрузки данных:', error);
    localStorage.removeItem(STORAGE_KEY);
  }
}

// Очистка данных
function resetGameData() {
  if (!isStorageAvailable) {
    location.reload();
    return;
  }

  if (confirm('Сбросить все данные игры?')) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
}

// Экспорт данных
function exportGameData() {
  const dataToExport = {
    currentUser: currentUser,
    selectedProfession: selectedProfession,
    gameType: gameType,
    gameData: gameData,
    version: APP_VERSION,
    exportDate: new Date().toISOString()
  };
  
  const dataStr = JSON.stringify(dataToExport, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = `cash_flow_data_${new Date().toISOString().split('T')[0]}.json`;
  link.click();
}