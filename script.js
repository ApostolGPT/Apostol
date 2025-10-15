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

const LIABILITY_LABELS = {
  homeMortgage: 'Ипотека на дом',
  schoolLoan: 'Кредит на обучение',
  carLoan: 'Кредит на автомобиль',
  creditCards: 'Кредитные карты',
  retailDebt: 'Розничные долги'
};

const LIABILITY_EXPENSE_MAP = {
  homeMortgage: 'homePayment',
  schoolLoan: 'schoolLoan',
  carLoan: 'carLoan',
  creditCards: 'creditCard',
  retailDebt: 'retail'
};

// Метаданные приложения и ключи хранения
const APP_VERSION = '1.1.0';
const STORAGE_KEY = 'cashFlowGameData';

let isStorageAvailable = true;

// Глобальные переменные
let currentScreen = 1;
let currentUser = null;
let selectedProfession = null;
let gameType = null; // 'cashflow' или 'secret'

function createEmptyTurnStats() {
  return {
    turns: 0,
    totalSpent: 0,
    totalInvested: 0,
    totalEarned: 0,
    charityDonations: 0,
    additionalExpenses: 0,
    sharedDeals: 0,
    skippedTurns: 0,
    childrenBorn: 0,
    logs: []
  };
}

function formatCurrency(amount) {
  const safeAmount = Number(amount) || 0;
  return `$${safeAmount.toLocaleString()}`;
}

function formatMoneyDisplay(amount) {
  const numeric = Number(amount) || 0;
  return numeric === 0 ? '—' : `$${numeric.toLocaleString()}`;
}

function ensureTurnStats() {
  if (!gameData.turnStats || !Array.isArray(gameData.turnStats.logs)) {
    gameData.turnStats = createEmptyTurnStats();
  }
  return gameData.turnStats;
}

function registerTurn(actionType, label, details = {}) {
  const stats = ensureTurnStats();
  stats.turns += 1;
  const turnNumber = stats.turns;

  const participants = Math.max(1, parseInt(details.participants, 10) || 1);
  const invested = Number(details.invested) || 0;
  const spent = Number(details.spent) || 0;
  const earned = Number(details.earned) || 0;
  const charity = Number(details.charity) || 0;
  const skipped = Number(details.skipped) || 0;
  const childrenAdded = Number(details.childrenAdded) || 0;

  const entry = {
    turn: turnNumber,
    type: actionType,
    label,
    participants,
    invested,
    spent,
    earned,
    note: details.note || ''
  };

  if (details.result) {
    entry.result = details.result;
  }

  if (participants > 1) {
    entry.shared = true;
    stats.sharedDeals += 1;
  }

  if (skipped > 0) {
    entry.skipped = skipped;
    stats.skippedTurns += skipped;
  }

  if (childrenAdded > 0) {
    entry.childrenAdded = childrenAdded;
    stats.childrenBorn += childrenAdded;
  }

  stats.totalInvested += invested;
  stats.totalSpent += spent;
  stats.totalEarned += earned;

  if (charity > 0) {
    stats.charityDonations += charity;
  }

  stats.logs.push(entry);
  return entry;
}

function ensureStageTwoState() {
  if (!gameData.stageTwoState) {
    gameData.stageTwoState = {
      manualPassive: 0,
      businesses: [],
      passiveGoalClaimed: false,
      dreamGoalClaimed: false,
      reportUnlocked: false,
      victoryCelebrated: false
    };
  } else {
    gameData.stageTwoState.manualPassive = Number(gameData.stageTwoState.manualPassive) || 0;
    gameData.stageTwoState.businesses = Array.isArray(gameData.stageTwoState.businesses)
      ? gameData.stageTwoState.businesses
      : [];
    gameData.stageTwoState.passiveGoalClaimed = !!gameData.stageTwoState.passiveGoalClaimed;
    gameData.stageTwoState.dreamGoalClaimed = !!gameData.stageTwoState.dreamGoalClaimed;
    gameData.stageTwoState.reportUnlocked = !!gameData.stageTwoState.reportUnlocked;
    gameData.stageTwoState.victoryCelebrated = !!gameData.stageTwoState.victoryCelebrated;
  }

  return gameData.stageTwoState;
}

let gameData = {
  wallet: 0,
  passiveIncome: 0,
  expenses: {},
  assets: [],
  liabilities: [],
  loans: [],
  stocks: [],
  realEstate: [],
  businesses: [],
  additionalExpenses: [],
  children: 0,
  round: 1,
  turnStats: createEmptyTurnStats(),
  secretData: {
    inventory: 100,
    passiveIncome: 0,
    networkIncome: 0
  },
  stageTwoState: {
    manualPassive: 0,
    businesses: [],
    passiveGoalClaimed: false,
    dreamGoalClaimed: false,
    reportUnlocked: false,
    victoryCelebrated: false
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
let stageTwoManualPassive = 0;
let stageTwoBusinesses = [];
let stageTwoPassiveGoalClaimed = false;
let stageTwoDreamGoalClaimed = false;
let stageTwoReportUnlocked = false;
let stageTwoVictoryCelebrated = false;
let stageTwoReportTimer = null;

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
  gameData.assets = [];
  gameData.liabilities = buildProfessionLiabilities();
  gameData.loans = [];
  gameData.stocks = [];
  gameData.realEstate = [];
  gameData.businesses = [];
  gameData.additionalExpenses = [];
  gameData.turnStats = createEmptyTurnStats();
  ensureTurnStats();
  ensureStageTwoState();

  // Настройки этапов
  cashFlowStage = 1;
  stageTwoUnlocked = false;
  stageTwoBasePassive = 0;
  stageTwoInitialPassive = 0;
  stageTwoAdditionalPassive = 0;
  dreamPurchased = false;
  stageTwoManualPassive = 0;
  stageTwoBusinesses = [];
  stageTwoPassiveGoalClaimed = false;
  stageTwoDreamGoalClaimed = false;
  stageTwoReportUnlocked = false;
  stageTwoVictoryCelebrated = false;
  if (stageTwoReportTimer) {
    clearTimeout(stageTwoReportTimer);
    stageTwoReportTimer = null;
  }

  const stageState = ensureStageTwoState();
  stageState.manualPassive = 0;
  stageState.businesses = [];
  stageState.passiveGoalClaimed = false;
  stageState.dreamGoalClaimed = false;
  stageState.reportUnlocked = false;
  stageState.victoryCelebrated = false;

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

  const stage2ReportBody = document.getElementById('stage2ReportBody');
  if (stage2ReportBody) {
    stage2ReportBody.innerHTML = '';
  }

  const childrenInput = document.getElementById('childrenCount');
  if (childrenInput) {
    childrenInput.value = 0;
  }
  const childrenExpenseDisplay = document.getElementById('childrenExpensesAmount');
  if (childrenExpenseDisplay) {
    childrenExpenseDisplay.textContent = '0';
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

function buildProfessionLiabilities() {
  if (!selectedProfession) return [];

  return Object.entries(selectedProfession.liabilities || {}).map(([key, value]) => {
    const expenseKey = LIABILITY_EXPENSE_MAP[key] || null;
    const payment = expenseKey ? (selectedProfession.expenses?.[expenseKey] || 0) : 0;

    return {
      key,
      label: LIABILITY_LABELS[key] || key,
      balance: value,
      originalBalance: value,
      expenseKey,
      originalPayment: payment,
      currentPayment: payment,
      paid: 0,
      closed: payment === 0 || value === 0
    };
  });
}

function promptPartialLiability(index) {
  const liability = gameData.liabilities[index];
  if (!liability || liability.closed) {
    return;
  }

  if (gameData.wallet <= 0) {
    showModal('Недостаточно средств', 'В кошельке нет средств для частичного погашения.');
    return;
  }

  const maxAmount = Math.min(liability.balance, gameData.wallet);
  if (maxAmount <= 0) {
    showModal('Ошибка', 'Этот пассив уже погашен.');
    return;
  }

  const promptMessage = `Введите сумму, которую готовы заплатить сейчас.\nДоступно в кошельке: ${formatCurrency(gameData.wallet)}\nОстаток долга: ${formatCurrency(liability.balance)}`;
  const input = prompt(promptMessage, Math.min(1000, maxAmount));
  if (input === null) {
    return;
  }

  const amount = parseFloat(input);
  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму.');
    return;
  }

  const forceClose = amount >= liability.balance;
  payLiabilityAmount(index, amount, forceClose);
}

function closeLiabilityCompletely(index) {
  const liability = gameData.liabilities[index];
  if (!liability || liability.closed) {
    return;
  }

  if (gameData.wallet < liability.balance) {
    showModal('Недостаточно средств', 'У вас недостаточно денег в кошельке, чтобы закрыть пассив полностью.');
    return;
  }

  payLiabilityAmount(index, liability.balance, true);
}

function payLiabilityAmount(index, amount, forceClose = false) {
  const liability = gameData.liabilities[index];
  if (!liability || liability.closed) {
    return;
  }

  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите сумму погашения.');
    return;
  }

  if (amount > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств в кошельке.');
    return;
  }

  const previousBalance = liability.balance;
  const previousPayment = liability.currentPayment || 0;
  const payment = Math.min(amount, liability.balance);
  gameData.wallet -= payment;
  liability.balance = Math.max(0, liability.balance - payment);
  liability.paid += payment;

  let newPayment = previousPayment;
  if (liability.originalBalance > 0 && liability.balance > 0) {
    const ratio = liability.balance / liability.originalBalance;
    newPayment = liability.originalPayment * ratio;
    newPayment = Number(newPayment.toFixed(2));
    if (newPayment < 0.01) {
      newPayment = 0;
    }
  } else {
    newPayment = 0;
  }

  if (liability.balance <= 0.01 || forceClose) {
    liability.balance = 0;
    liability.closed = true;
    newPayment = 0;
  }

  liability.currentPayment = newPayment;

  if (liability.expenseKey) {
    gameData.expenses[liability.expenseKey] = newPayment;
  }

  updateCashFlowDisplay();

  const formatted = payment.toLocaleString();
  const freedDelta = Math.max(0, previousPayment - newPayment);
  if (liability.closed) {
    const freedMessage = freedDelta > 0
      ? ` Освобождено $${freedDelta.toLocaleString()} и добавлено к вашему денежному потоку.`
      : '';
    showModal('Пассив погашен', `${liability.label}: -$${formatted}. Платеж переходит в ваш денежный поток.${freedMessage}`);
  } else {
    const freedMessage = freedDelta > 0
      ? ` Освобождено $${freedDelta.toLocaleString()} и добавлено к вашему денежному потоку.`
      : '';
    showModal('Платеж учтен', `${liability.label}: -$${formatted}.${freedMessage}`);
  }
}

function calculateFreedCashFlow() {
  return gameData.liabilities.reduce((total, liability) => {
    if (!liability.expenseKey) {
      return total;
    }
    const freed = liability.originalPayment - liability.currentPayment;
    return total + Math.max(0, freed);
  }, 0);
}

function getEffectivePassiveIncome() {
  return gameData.passiveIncome + calculateFreedCashFlow();
}

function renderLoans() {
  const loansContainer = document.getElementById('loansList');
  if (!loansContainer) return;

  loansContainer.innerHTML = '';

  if (!gameData.loans.length) {
    const empty = document.createElement('div');
    empty.className = 'loan-empty';
    empty.textContent = 'Нет активных кредитов.';
    loansContainer.appendChild(empty);
    return;
  }

  gameData.loans.forEach((loan, index) => {
    const item = document.createElement('div');
    item.className = 'loan-item';

    item.innerHTML = `
      <div class="loan-header">
        <span>Кредит #${index + 1}</span>
        <span>Остаток: $${loan.remaining.toLocaleString()}</span>
      </div>
      <div class="loan-details">
        <span>Выплачено: $${loan.paid.toLocaleString()} из $${loan.principal.toLocaleString()}</span>
        <span>Обязательный платеж: $${loan.payment.toLocaleString()}</span>
      </div>
    `;

    const controls = document.createElement('div');
    controls.className = 'loan-controls';

    const input = document.createElement('input');
    input.type = 'number';
    input.min = '0';
    input.step = '1';
    input.placeholder = 'Сумма платежа';

    const payButton = document.createElement('button');
    payButton.textContent = 'Оплатить';
    payButton.onclick = () => {
      recordLoanPayment(index, parseFloat(input.value));
      input.value = '';
    };

    const closeButton = document.createElement('button');
    closeButton.className = 'outline';
    closeButton.textContent = 'Закрыть кредит';
    closeButton.onclick = () => {
      recordLoanPayment(index, loan.remaining);
    };

    controls.appendChild(input);
    controls.appendChild(payButton);
    controls.appendChild(closeButton);
    item.appendChild(controls);
    loansContainer.appendChild(item);
  });
}

function recordLoanPayment(index, amount) {
  const loan = gameData.loans[index];
  if (!loan) {
    return;
  }

  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите сумму платежа по кредиту.');
    return;
  }

  if (amount > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств для платежа.');
    return;
  }

  const payment = Math.min(amount, loan.remaining);
  gameData.wallet -= payment;
  loan.remaining = Math.max(0, loan.remaining - payment);
  loan.paid += payment;

  if (loan.remaining <= 0.01) {
    loan.remaining = 0;
    gameData.loans.splice(index, 1);
    showModal('Кредит закрыт', 'Обязательные платежи по этому кредиту больше не удерживаются.');
  } else {
    showModal('Платеж по кредиту', `-$${payment.toLocaleString()}`);
  }

  updateCashFlowDisplay();
}

function updateCashFlowDisplay() {
  if (!selectedProfession) return;

  // Обновить название профессии
  document.getElementById('selectedProfession').textContent = selectedProfession.name;

  const stageLabel = document.getElementById('cashflowStageLabel');
  if (stageLabel) {
    stageLabel.textContent = cashFlowStage === 1 ? 'Этап 1: Крысиные гонки' : 'Этап 2: Быстрый трек';
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
  const effectivePassive = getEffectivePassiveIncome();
  document.getElementById('passiveIncomeAmount').textContent = `$${effectivePassive.toLocaleString()}`;
  document.getElementById('salaryAmount').textContent = `$${selectedProfession.salary.toLocaleString()}`;

  // Обновить расходы
  updateExpensesDisplay();
  renderLiabilities();
  renderLoans();
  renderStocks();
  renderRealEstate();
  renderBusinesses();
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

  Object.entries(gameData.expenses).forEach(([key, value]) => {
    if (key === 'childExpensePerChild') {
      return;
    }

    const expenseItem = document.createElement('div');
    expenseItem.className = 'expense-item';
    const label = expenseLabels[key] || key;
    expenseItem.innerHTML = `
      <label>${label}:</label>
      <span>$${value.toLocaleString()}</span>
    `;
    fixedExpensesContainer.appendChild(expenseItem);
  });

  if (gameData.loans.length > 0) {
    const divider = document.createElement('div');
    divider.className = 'expense-divider';
    divider.textContent = 'Кредиты';
    fixedExpensesContainer.appendChild(divider);

    gameData.loans.forEach((loan, index) => {
      const expenseItem = document.createElement('div');
      expenseItem.className = 'expense-item loan-expense';
      expenseItem.innerHTML = `
        <label>Кредит #${index + 1}</label>
        <span>$${loan.payment.toLocaleString()}</span>
      `;
      fixedExpensesContainer.appendChild(expenseItem);
    });
  }

  renderCustomExpenses();
}

function renderCustomExpenses() {
  const list = document.getElementById('customExpensesList');
  if (!list) return;

  list.innerHTML = '';
  const extras = Array.isArray(gameData.additionalExpenses) ? gameData.additionalExpenses : [];

  if (!extras.length) {
    const empty = document.createElement('div');
    empty.className = 'custom-expense-empty';
    empty.textContent = 'Дополнительные расходы пока не добавлены.';
    list.appendChild(empty);
    return;
  }

  extras.forEach(expense => {
    const item = document.createElement('div');
    item.className = 'custom-expense-item';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = expense.name;
    const amountSpan = document.createElement('span');
    amountSpan.textContent = formatCurrency(expense.amount);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Удалить';
    removeButton.onclick = () => removeCustomExpense(expense.id);

    item.appendChild(nameSpan);
    item.appendChild(amountSpan);
    item.appendChild(removeButton);
    list.appendChild(item);
  });
}

function addCustomExpense() {
  if (!Array.isArray(gameData.additionalExpenses)) {
    gameData.additionalExpenses = [];
  }

  const nameInput = prompt('Опишите новый расход (например, «Автомобиль»).');
  if (nameInput === null) {
    return;
  }

  const name = nameInput.trim();
  if (!name) {
    showModal('Ошибка', 'Введите название расхода.');
    return;
  }

  const amountInput = prompt('Укажите сумму ежемесячного расхода в долларах.');
  if (amountInput === null) {
    return;
  }

  const amount = parseFloat(amountInput);
  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму расхода.');
    return;
  }

  const expense = {
    id: Date.now(),
    name,
    amount: Number(amount.toFixed(2))
  };

  gameData.additionalExpenses.push(expense);
  const stats = ensureTurnStats();
  stats.additionalExpenses += expense.amount;

  updateCashFlowDisplay();
  showModal('Дополнительный расход добавлен', `${expense.name}: ${formatCurrency(expense.amount)} будет учитываться в расходах.`);
}

function removeCustomExpense(id) {
  if (!Array.isArray(gameData.additionalExpenses)) {
    return;
  }

  const index = gameData.additionalExpenses.findIndex(expense => expense.id === id);
  if (index === -1) {
    return;
  }

  const [removed] = gameData.additionalExpenses.splice(index, 1);
  updateCashFlowDisplay();
  showModal('Расход удален', `${removed.name} больше не учитывается в расходах.`);
}

function renderLiabilities() {
  const liabilitiesContainer = document.getElementById('liabilitiesList');
  if (!liabilitiesContainer) return;

  liabilitiesContainer.innerHTML = '';

  if (!gameData.liabilities.length) {
    const empty = document.createElement('div');
    empty.className = 'liability-empty';
    empty.textContent = 'Все пассивы погашены.';
    liabilitiesContainer.appendChild(empty);
    return;
  }

  gameData.liabilities.forEach((liability, index) => {
    const item = document.createElement('div');
    item.className = 'liability-item';
    if (liability.closed) {
      item.classList.add('liability-closed');
    }

    const freed = Math.max(0, liability.originalPayment - liability.currentPayment);

    item.innerHTML = `
      <div class="liability-header">
        <div>
          <div class="liability-name">${liability.label}</div>
          <div class="liability-balance">Остаток: $${liability.balance.toLocaleString()}</div>
          <div class="liability-progress">Выплачено: $${liability.paid.toLocaleString()} из $${liability.originalBalance.toLocaleString()}</div>
        </div>
        <div class="liability-payment">Текущий платеж: $${liability.currentPayment.toLocaleString()}</div>
      </div>
    `;

    if (liability.expenseKey && liability.originalPayment > 0) {
      const summary = document.createElement('div');
      summary.className = 'liability-extra';
      summary.innerHTML = `
        <span>Освобождено ежемесячно</span>
        <span class="liability-freed">$${freed.toLocaleString()}</span>
      `;
      item.appendChild(summary);

      const actions = document.createElement('div');
      actions.className = 'liability-actions';

      const partialButton = document.createElement('button');
      partialButton.className = 'liability-action partial';
      partialButton.textContent = 'Закрыть часть';
      partialButton.disabled = liability.closed || liability.balance <= 0 || gameData.wallet <= 0;
      partialButton.onclick = () => {
        promptPartialLiability(index);
      };

      const fullButton = document.createElement('button');
      fullButton.className = 'liability-action full';
      fullButton.textContent = 'Закрыть полностью';
      fullButton.disabled = liability.closed || liability.balance <= 0 || gameData.wallet < liability.balance;
      fullButton.onclick = () => {
        closeLiabilityCompletely(index);
      };

      actions.appendChild(partialButton);
      actions.appendChild(fullButton);
      item.appendChild(actions);
    }

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

  const freedCash = calculateFreedCashFlow();
  const freedDisplay = document.getElementById('freedCashFlowAmount');
  if (freedDisplay) {
    freedDisplay.textContent = `$${freedCash.toLocaleString()}`;
  }
  totalIncome += freedCash;

  document.getElementById('totalIncomeAmount').textContent = totalIncome.toLocaleString();

  updateCashFlow();
}

function updateChildrenExpenses() {
  const childrenCount = parseInt(document.getElementById('childrenCount').value) || 0;
  gameData.children = childrenCount;

  const childRate = gameData.expenses.childExpensePerChild || selectedProfession.expenses.childExpensePerChild || 0;
  const childExpense = childrenCount * childRate;
  document.getElementById('childrenExpensesAmount').textContent = childExpense.toLocaleString();

  updateTotalExpenses();
}

function updateTotalExpenses() {
  if (!selectedProfession) return;

  let totalExpenses = 0;

  // Фиксированные расходы
  Object.entries(gameData.expenses).forEach(([key, value]) => {
    if (key !== 'childExpensePerChild') {
      totalExpenses += value;
    }
  });

  // Детские расходы
  const childRate = gameData.expenses.childExpensePerChild || selectedProfession.expenses.childExpensePerChild || 0;
  totalExpenses += gameData.children * childRate;

  // Платежи по кредитам
  const loansTotal = gameData.loans.reduce((sum, loan) => sum + loan.payment, 0);
  totalExpenses += loansTotal;

  const additionalExpensesTotal = (gameData.additionalExpenses || []).reduce((sum, expense) => sum + expense.amount, 0);
  totalExpenses += additionalExpensesTotal;

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
    stageLabel.textContent = cashFlowStage === 1 ? 'Этап 1: Крысиные гонки' : 'Этап 2: Быстрый трек';
  }
}

function updateStage2Display() {
  const stageState = ensureStageTwoState();
  stageTwoReportUnlocked = !!stageState.reportUnlocked;
  stageTwoVictoryCelebrated = !!stageState.victoryCelebrated;

  const baseElement = document.getElementById('stage2BasePassive');
  if (baseElement) {
    baseElement.textContent = stageTwoBasePassive.toLocaleString();
  }

  const walletElement = document.getElementById('stage2WalletAmount');
  if (walletElement) {
    walletElement.textContent = gameData.wallet.toLocaleString();
  }

  if (!stageTwoUnlocked) {
    const passiveElement = document.getElementById('stage2PassiveIncome');
    if (passiveElement) {
      passiveElement.textContent = '0';
    }
    const totalElement = document.getElementById('stage2TotalPassive');
    if (totalElement) {
      totalElement.textContent = '0';
    }
    const salaryButton = document.getElementById('stage2SalaryButton');
    if (salaryButton) {
      salaryButton.textContent = 'Зарплата';
    }
    const expenseButton = document.getElementById('stage2ExpenseButton');
    if (expenseButton) {
      expenseButton.textContent = 'Расход';
    }
    updateStageGoalStatus();
    return;
  }

  recalculateStageTwoAdditionalPassive();

  const fastTrackPassive = stageTwoInitialPassive;
  const totalPassive = getStageTwoPassiveIncome();

  const passiveIncomeElement = document.getElementById('stage2PassiveIncome');
  if (passiveIncomeElement) {
    passiveIncomeElement.textContent = fastTrackPassive.toLocaleString();
  }

  const totalPassiveElement = document.getElementById('stage2TotalPassive');
  if (totalPassiveElement) {
    totalPassiveElement.textContent = totalPassive.toLocaleString();
  }

  const targetElement = document.getElementById('stage2TargetIncome');
  if (targetElement) {
    targetElement.textContent = STAGE_TWO_TARGET_INCREMENT.toLocaleString();
  }

  const salaryButton = document.getElementById('stage2SalaryButton');
  if (salaryButton) {
    salaryButton.textContent = `Зарплата +$${totalPassive.toLocaleString()}`;
  }

  const expenseButton = document.getElementById('stage2ExpenseButton');
  if (expenseButton) {
    expenseButton.textContent = 'Расход';
  }

  renderStageTwoReport();
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

  stageTwoManualPassive += amount;
  recalculateStageTwoAdditionalPassive();
  persistStageTwoState();
  if (input) {
    input.value = '';
  }

  updateStage2Display();

  showModal('Пассивный доход добавлен', `+$${amount.toLocaleString()}`);
}

function updateStageGoalStatus() {
  const increaseElement = document.getElementById('stage2IncreaseAmount');
  const targetElement = document.getElementById('stage2TargetIncome');
  const passiveButton = document.getElementById('passiveGoalButton');
  const passiveCard = document.getElementById('passiveGoalCard');
  const dreamButton = document.getElementById('dreamGoalButton');
  const dreamCard = document.getElementById('dreamGoalCard');
  const dreamDisplay = document.getElementById('stage2DreamDisplay');

  const increase = Math.max(0, getStageTwoPassiveIncome() - stageTwoInitialPassive);

  if (increaseElement) {
    increaseElement.textContent = increase.toLocaleString();
  }

  if (targetElement) {
    targetElement.textContent = STAGE_TWO_TARGET_INCREMENT.toLocaleString();
  }

  const passiveReady = stageTwoUnlocked && !stageTwoPassiveGoalClaimed && increase >= STAGE_TWO_TARGET_INCREMENT;
  if (passiveButton) {
    passiveButton.disabled = !passiveReady;
  }
  if (passiveCard) {
    passiveCard.classList.toggle('ready', passiveReady);
    passiveCard.classList.toggle('completed', stageTwoPassiveGoalClaimed);
  }

  const dreamValue = dreamDisplay ? dreamDisplay.textContent : '—';
  const dreamReady = stageTwoUnlocked && !stageTwoDreamGoalClaimed && dreamValue && dreamValue !== '—';
  if (dreamButton) {
    dreamButton.disabled = !dreamReady;
  }
  if (dreamCard) {
    dreamCard.classList.toggle('ready', dreamReady);
    dreamCard.classList.toggle('completed', stageTwoDreamGoalClaimed);
  }

  handleGoalMilestones();
}

function handleGoalMilestones() {
  const notice = document.getElementById('stage2GoalNotice');
  const noticeMessage = document.getElementById('stage2GoalNoticeMessage');
  const victory = document.getElementById('stage2VictoryBanner');
  const reportButton = document.getElementById('stage2ReportButton');

  if (!notice || !victory || !reportButton) {
    return;
  }

  if (!stageTwoUnlocked) {
    notice.classList.remove('active');
    victory.classList.remove('active');
    reportButton.classList.remove('visible');
    reportButton.disabled = true;
    stageTwoReportUnlocked = false;
    stageTwoVictoryCelebrated = false;
    if (stageTwoReportTimer) {
      clearTimeout(stageTwoReportTimer);
      stageTwoReportTimer = null;
    }
    persistStageTwoState();
    return;
  }

  const completedPassive = stageTwoPassiveGoalClaimed;
  const completedDream = stageTwoDreamGoalClaimed;
  const completedCount = (completedPassive ? 1 : 0) + (completedDream ? 1 : 0);

  if (completedCount === 1) {
    notice.classList.add('active');
    if (noticeMessage) {
      noticeMessage.textContent = completedPassive
        ? 'Осталось подтвердить мечту, чтобы завершить игру.'
        : 'Увеличьте пассивный доход минимум на $50 000, чтобы завершить игру.';
    }
  } else {
    notice.classList.remove('active');
  }

  if (completedCount === 2) {
    victory.classList.add('active');
    if (!stageTwoVictoryCelebrated) {
      stageTwoVictoryCelebrated = true;
      victory.classList.add('celebrate');
      setTimeout(() => victory.classList.remove('celebrate'), 2500);
    }

    if (stageTwoReportTimer) {
      clearTimeout(stageTwoReportTimer);
      stageTwoReportTimer = null;
    }

    if (!stageTwoReportUnlocked) {
      reportButton.classList.remove('visible');
      reportButton.disabled = true;
      stageTwoReportTimer = setTimeout(() => {
        stageTwoReportUnlocked = true;
        reportButton.classList.add('visible');
        reportButton.disabled = false;
        persistStageTwoState();
      }, 5000);
    } else {
      reportButton.classList.add('visible');
      reportButton.disabled = false;
    }
  } else {
    victory.classList.remove('active');
    reportButton.classList.remove('visible');
    reportButton.disabled = true;
    stageTwoReportUnlocked = false;
    stageTwoVictoryCelebrated = false;
    if (stageTwoReportTimer) {
      clearTimeout(stageTwoReportTimer);
      stageTwoReportTimer = null;
    }
  }

  persistStageTwoState();
}

function recalculateStageTwoAdditionalPassive() {
  const businessPassive = stageTwoBusinesses.reduce((sum, business) => sum + business.income, 0);
  stageTwoAdditionalPassive = stageTwoManualPassive + businessPassive;
}

function persistStageTwoState() {
  const state = ensureStageTwoState();
  state.manualPassive = stageTwoManualPassive;
  state.businesses = stageTwoBusinesses.map(business => ({ ...business }));
  state.passiveGoalClaimed = stageTwoPassiveGoalClaimed;
  state.dreamGoalClaimed = stageTwoDreamGoalClaimed;
  state.reportUnlocked = stageTwoReportUnlocked;
  state.victoryCelebrated = stageTwoVictoryCelebrated;
}

function renderStageTwoReport() {
  const tableBody = document.getElementById('stage2ReportBody');
  if (!tableBody) return;

  tableBody.innerHTML = '';

  let runningTotal = stageTwoInitialPassive;

  stageTwoBusinesses.forEach((business, index) => {
    runningTotal += business.income;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${business.name}</td>
      <td>$${business.income.toLocaleString()}</td>
      <td>$${runningTotal.toLocaleString()}</td>
      <td><button class="outline" onclick="removeStageTwoBusiness(${index})">Удалить</button></td>
    `;
    tableBody.appendChild(row);
  });

  const newRow = document.createElement('tr');
  newRow.className = 'new-asset-row';
  newRow.innerHTML = `
    <td><input type="text" placeholder="Название бизнеса"></td>
    <td><input type="number" min="0" placeholder="Доход в месяц"></td>
    <td colspan="2"><button class="buy-btn">Добавить</button></td>
  `;
  newRow.querySelector('button').onclick = () => addStageTwoBusiness(newRow);
  tableBody.appendChild(newRow);
}

function addStageTwoBusiness(row) {
  const inputs = row.querySelectorAll('input');
  const name = inputs[0].value.trim();
  const income = parseFloat(inputs[1].value);

  if (!name || !income || income <= 0) {
    showModal('Ошибка', 'Введите название бизнеса и его доход.');
    return;
  }

  const summary = [`Название: ${name}`, `Доход: $${income.toLocaleString()} / месяц`, '', 'Подтвердить добавление бизнеса?'].join('\n');

  if (!confirm(summary)) {
    return;
  }

  stageTwoBusinesses.push({ name, income });
  inputs.forEach(input => (input.value = ''));
  recalculateStageTwoAdditionalPassive();
  persistStageTwoState();
  updateStage2Display();
  showModal('Бизнес добавлен', `${name}: +$${income.toLocaleString()} к пассивному доходу быстрого трека.`);
}

function removeStageTwoBusiness(index) {
  const [removed] = stageTwoBusinesses.splice(index, 1);
  if (!removed) return;

  recalculateStageTwoAdditionalPassive();
  persistStageTwoState();
  updateStage2Display();
  showModal('Запись удалена', `${removed.name} убран из финансового отчета.`);
}

function confirmPassiveGoal() {
  if (!stageTwoUnlocked || stageTwoPassiveGoalClaimed) {
    return;
  }

  const increase = Math.max(0, getStageTwoPassiveIncome() - stageTwoInitialPassive);
  if (increase < STAGE_TWO_TARGET_INCREMENT) {
    showModal('Еще рано', 'Увеличьте пассивный доход минимум на $50 000, чтобы подтвердить цель.');
    return;
  }

  if (!confirm('Подтвердить достижение цели по увеличению пассивного дохода?')) {
    return;
  }

  stageTwoPassiveGoalClaimed = true;
  persistStageTwoState();
  const card = document.getElementById('passiveGoalCard');
  if (card) {
    card.classList.add('celebrate');
    setTimeout(() => card.classList.remove('celebrate'), 2000);
  }
  updateStageGoalStatus();
  showModal('Цель достигнута', 'Пассивный доход увеличен на $50 000 и более!');
}

function confirmDreamGoal() {
  if (!stageTwoUnlocked || stageTwoDreamGoalClaimed) {
    return;
  }

  const dreamDisplay = document.getElementById('stage2DreamDisplay');
  const dreamValue = dreamDisplay ? dreamDisplay.textContent : '—';

  if (!dreamValue || dreamValue === '—') {
    showModal('Мечта не указана', 'Введите мечту на первом этапе, чтобы подтвердить ее покупку.');
    return;
  }

  if (!confirm(`Подтвердить покупку мечты: "${dreamValue}"?`)) {
    return;
  }

  stageTwoDreamGoalClaimed = true;
  dreamPurchased = true;
  persistStageTwoState();
  const card = document.getElementById('dreamGoalCard');
  if (card) {
    card.classList.add('celebrate');
    setTimeout(() => card.classList.remove('celebrate'), 2000);
  }
  updateStageGoalStatus();
  showModal('Мечта исполнена', `Поздравляем! Мечта "${dreamValue}" куплена.`);
}

function collectFastTrackSalary() {
  if (!stageTwoUnlocked) {
    showModal('Этап 2 недоступен', 'Сначала выполните условия быстрого трека.');
    return;
  }

  const amount = getStageTwoPassiveIncome();
  if (amount <= 0) {
    showModal('Нет дохода', 'Пассивный доход быстрого трека пока равен нулю.');
    return;
  }

  gameData.wallet += amount;
  updateCashFlowDisplay();
  showModal('Зарплата получена', `+$${amount.toLocaleString()}`);
}

function recordFastTrackExpense() {
  if (!stageTwoUnlocked) {
    showModal('Этап 2 недоступен', 'Сначала выполните условия быстрого трека.');
    return;
  }

  const suggestion = getStageTwoPassiveIncome();
  const input = prompt('Введите сумму расхода быстрого трека', suggestion);
  if (input === null) {
    return;
  }

  const amount = parseFloat(input);
  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму расхода.');
    return;
  }

  if (amount > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств в кошельке.');
    return;
  }

  gameData.wallet -= amount;
  updateCashFlowDisplay();
  showModal('Расход учтен', `-$${amount.toLocaleString()}`);
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

  const requestInput = prompt(`Введите сумму кредита (максимум $${availableCredit.toLocaleString()})`, availableCredit);
  if (requestInput === null) {
    return;
  }

  const amount = parseFloat(requestInput);
  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму кредита.');
    return;
  }

  if (amount > availableCredit) {
    showModal('Ошибка', 'Сумма превышает доступный лимит кредита.');
    return;
  }

  const payment = Math.max(1, Math.round(amount * 0.1));

  gameData.wallet += amount;
  gameData.loans.push({
    principal: amount,
    remaining: amount,
    payment: payment,
    paid: 0
  });

  updateCashFlowDisplay();
  showModal('Кредит получен', `+$${amount.toLocaleString()} (ежемесячный платеж $${payment.toLocaleString()})`);
}

function renderStocks() {
  const tableBody = document.getElementById('stocksTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = '';

  gameData.stocks.forEach((stock, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${stock.name}</td>
      <td>${stock.quantity.toLocaleString()}</td>
      <td>$${stock.buyPrice.toLocaleString()}</td>
      <td>—</td>
      <td><button class="outline" onclick="sellStock(${index})">Продать</button></td>
    `;
    tableBody.appendChild(row);
  });

  const newRow = document.createElement('tr');
  newRow.className = 'new-asset-row';
  newRow.innerHTML = `
    <td><input type="text" placeholder="Название актива"></td>
    <td><input type="number" min="1" placeholder="Количество"></td>
    <td><input type="number" min="0" placeholder="Цена за единицу"></td>
    <td>—</td>
    <td><button class="buy-btn">Купить</button></td>
  `;
  newRow.querySelector('button').onclick = () => buyStock(newRow);
  tableBody.appendChild(newRow);
}

function buyStock(row) {
  const inputs = row.querySelectorAll('input');
  const name = inputs[0].value.trim();
  const quantity = parseFloat(inputs[1].value);
  const price = parseFloat(inputs[2].value);

  if (!name || !quantity || quantity <= 0 || !price || price <= 0) {
    showModal('Ошибка', 'Введите название, количество и цену покупки акций.');
    return;
  }

  const totalCost = quantity * price;
  if (totalCost > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств для покупки акций.');
    return;
  }

  gameData.wallet -= totalCost;
  gameData.stocks.push({
    name,
    quantity,
    buyPrice: price,
    totalCost
  });

  inputs.forEach(input => (input.value = ''));
  updateCashFlowDisplay();
  showModal('Акции приобретены', `${name}: -$${totalCost.toLocaleString()}`);
}

function sellStock(index) {
  const stock = gameData.stocks[index];
  if (!stock) return;

  const saleInput = prompt(`Введите цену продажи за единицу для "${stock.name}"`, stock.buyPrice);
  if (saleInput === null) {
    return;
  }

  const salePrice = parseFloat(saleInput);
  if (!salePrice || salePrice <= 0) {
    showModal('Ошибка', 'Введите корректную цену продажи.');
    return;
  }

  const revenue = salePrice * stock.quantity;
  const profit = revenue - stock.totalCost;

  gameData.wallet += revenue;
  gameData.stocks.splice(index, 1);
  updateCashFlowDisplay();

  const profitLabel = profit >= 0 ? `Прибыль: $${profit.toLocaleString()}` : `Убыток: $${Math.abs(profit).toLocaleString()}`;
  showModal('Акции проданы', `${stock.name}: +$${revenue.toLocaleString()} (${profitLabel})`);
}

function renderRealEstate() {
  const tableBody = document.getElementById('realEstateTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = '';

  gameData.realEstate.forEach((estate, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${estate.name}</td>
      <td>$${estate.downPayment.toLocaleString()}</td>
      <td>$${estate.totalPrice.toLocaleString()}</td>
      <td>$${estate.monthlyIncome.toLocaleString()}</td>
      <td><button class="outline" onclick="sellRealEstate(${index})">Продать</button></td>
    `;
    tableBody.appendChild(row);
  });

  const newRow = document.createElement('tr');
  newRow.className = 'new-asset-row';
  newRow.innerHTML = `
    <td><input type="text" placeholder="Название недвижимости"></td>
    <td><input type="number" min="0" placeholder="Первый взнос"></td>
    <td><input type="number" min="0" placeholder="Полная цена"></td>
    <td><input type="number" min="0" placeholder="Доход в месяц"></td>
    <td><button class="buy-btn">Добавить</button></td>
  `;
  newRow.querySelector('button').onclick = () => buyRealEstate(newRow);
  tableBody.appendChild(newRow);
}

function buyRealEstate(row) {
  const inputs = row.querySelectorAll('input');
  const name = inputs[0].value.trim();
  const downPayment = parseFloat(inputs[1].value);
  const totalPrice = parseFloat(inputs[2].value);
  const monthlyIncome = parseFloat(inputs[3].value);

  if (!name || downPayment === undefined || isNaN(downPayment) || totalPrice === undefined || isNaN(totalPrice) || !monthlyIncome || monthlyIncome <= 0) {
    showModal('Ошибка', 'Заполните все поля по недвижимости.');
    return;
  }

  if (downPayment > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств для первоначального взноса.');
    return;
  }

  const summary = [
    `Название: ${name}`,
    `Первоначальный взнос: $${downPayment.toLocaleString()}`,
    `Полная цена: $${totalPrice.toLocaleString()}`,
    `Доход: $${monthlyIncome.toLocaleString()} / месяц`,
    '',
    'Подтвердить добавление этой недвижимости?'
  ].join('\n');

  if (!confirm(summary)) {
    return;
  }

  gameData.wallet -= downPayment;
  gameData.realEstate.push({
    name,
    downPayment,
    totalPrice,
    monthlyIncome
  });
  gameData.passiveIncome += monthlyIncome;

  inputs.forEach(input => (input.value = ''));
  updateCashFlowDisplay();
  showModal('Недвижимость добавлена', `${name}: +$${monthlyIncome.toLocaleString()} к пассивному доходу.`);
}

function sellRealEstate(index) {
  const estate = gameData.realEstate[index];
  if (!estate) return;

  const saleInput = prompt(`Введите сумму продажи для "${estate.name}"`, estate.totalPrice);
  if (saleInput === null) {
    return;
  }

  const salePrice = parseFloat(saleInput);
  if (!salePrice || salePrice <= 0) {
    showModal('Ошибка', 'Введите корректную сумму продажи.');
    return;
  }

  gameData.wallet += salePrice;
  gameData.passiveIncome = Math.max(0, gameData.passiveIncome - estate.monthlyIncome);
  gameData.realEstate.splice(index, 1);
  updateCashFlowDisplay();

  showModal('Недвижимость продана', `${estate.name}: +$${salePrice.toLocaleString()}`);
}

function renderBusinesses() {
  const tableBody = document.getElementById('businessTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = '';

  gameData.businesses.forEach((business, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${business.name}</td>
      <td>$${business.downPayment.toLocaleString()}</td>
      <td>$${business.totalPrice.toLocaleString()}</td>
      <td>$${business.monthlyIncome.toLocaleString()}</td>
      <td><button class="outline" onclick="sellBusiness(${index})">Продать</button></td>
    `;
    tableBody.appendChild(row);
  });

  const newRow = document.createElement('tr');
  newRow.className = 'new-asset-row';
  newRow.innerHTML = `
    <td><input type="text" placeholder="Название бизнеса"></td>
    <td><input type="number" min="0" placeholder="Первый взнос"></td>
    <td><input type="number" min="0" placeholder="Полная цена"></td>
    <td><input type="number" min="0" placeholder="Доход в месяц"></td>
    <td><button class="buy-btn">Добавить</button></td>
  `;
  newRow.querySelector('button').onclick = () => buyBusiness(newRow);
  tableBody.appendChild(newRow);
}

function buyBusiness(row) {
  const inputs = row.querySelectorAll('input');
  const name = inputs[0].value.trim();
  const downPayment = parseFloat(inputs[1].value);
  const totalPrice = parseFloat(inputs[2].value);
  const monthlyIncome = parseFloat(inputs[3].value);

  if (!name || downPayment === undefined || isNaN(downPayment) || totalPrice === undefined || isNaN(totalPrice) || !monthlyIncome || monthlyIncome <= 0) {
    showModal('Ошибка', 'Заполните все поля по бизнесу.');
    return;
  }

  if (downPayment > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств для входа в бизнес.');
    return;
  }

  const summary = [
    `Название: ${name}`,
    `Первоначальный взнос: $${downPayment.toLocaleString()}`,
    `Полная цена: $${totalPrice.toLocaleString()}`,
    `Доход: $${monthlyIncome.toLocaleString()} / месяц`,
    '',
    'Подтвердить добавление бизнеса?'
  ].join('\n');

  if (!confirm(summary)) {
    return;
  }

  gameData.wallet -= downPayment;
  gameData.businesses.push({
    name,
    downPayment,
    totalPrice,
    monthlyIncome
  });
  gameData.passiveIncome += monthlyIncome;

  inputs.forEach(input => (input.value = ''));
  updateCashFlowDisplay();
  showModal('Бизнес добавлен', `${name}: +$${monthlyIncome.toLocaleString()} к пассивному доходу.`);
}

function sellBusiness(index) {
  const business = gameData.businesses[index];
  if (!business) return;

  const saleInput = prompt(`Введите сумму продажи для "${business.name}"`, business.totalPrice);
  if (saleInput === null) {
    return;
  }

  const salePrice = parseFloat(saleInput);
  if (!salePrice || salePrice <= 0) {
    showModal('Ошибка', 'Введите корректную сумму продажи.');
    return;
  }

  gameData.wallet += salePrice;
  gameData.passiveIncome = Math.max(0, gameData.passiveIncome - business.monthlyIncome);
  gameData.businesses.splice(index, 1);
  updateCashFlowDisplay();

  showModal('Бизнес продан', `${business.name}: +$${salePrice.toLocaleString()}`);
}

function handleTurnAction(actionType) {
  switch (actionType) {
    case 'bigDeal':
      handleDealAction('big');
      break;
    case 'smallDeal':
      handleDealAction('small');
      break;
    case 'expenseEvent':
      handleExpenseEvent();
      break;
    case 'market':
      handleMarketAction();
      break;
    case 'charity':
      handleCharityAction();
      break;
    case 'lifeEvent':
      handleLifeEvent();
      break;
    default:
      break;
  }
}

function handleDealAction(size) {
  const dealLabel = size === 'big' ? 'Большая сделка' : 'Малая сделка';
  const solo = confirm('Вы участвуете в сделке один? Нажмите «ОК», если да.');
  let participants = 1;

  if (!solo) {
    const participantsInput = prompt('Сколько человек участвуют вместе с вами?');
    if (participantsInput === null) {
      return;
    }

    participants = parseInt(participantsInput, 10);
    if (isNaN(participants) || participants < 2) {
      showModal('Ошибка', 'Введите количество участников (минимум 2).');
      return;
    }
  }

  const investmentInput = prompt('Сколько средств вы вкладываете в эту сделку? (можно 0)');
  if (investmentInput === null) {
    return;
  }
  const invested = parseFloat(investmentInput) || 0;
  if (invested < 0) {
    showModal('Ошибка', 'Сумма не может быть отрицательной.');
    return;
  }

  const incomeInput = prompt('Сколько вы заработали прямо сейчас на этой сделке? (можно 0)');
  if (incomeInput === null) {
    return;
  }
  const earned = parseFloat(incomeInput) || 0;
  if (earned < 0) {
    showModal('Ошибка', 'Сумма не может быть отрицательной.');
    return;
  }

  const note = prompt('Кратко опишите сделку (необязательно)') || '';

  registerTurn(size === 'big' ? 'bigDeal' : 'smallDeal', dealLabel, {
    participants,
    invested,
    earned,
    note: note.trim()
  });

  const sharedMessage = participants > 1 ? ' Сделка проведена в складчину.' : '';
  showModal('Сделка записана', `${dealLabel} сохранена.${sharedMessage}`);
}

function handleExpenseEvent() {
  const descriptionInput = prompt('Какие расходы вы оплачиваете?');
  if (descriptionInput === null) {
    return;
  }

  const description = descriptionInput.trim();
  if (!description) {
    showModal('Ошибка', 'Опишите расход.');
    return;
  }

  const amountInput = prompt('Сколько вы потратили из кошелька?');
  if (amountInput === null) {
    return;
  }

  const amount = parseFloat(amountInput);
  if (!amount || amount <= 0) {
    showModal('Ошибка', 'Введите корректную сумму.');
    return;
  }

  if (amount > gameData.wallet) {
    showModal('Ошибка', 'Недостаточно средств в кошельке.');
    return;
  }

  gameData.wallet -= amount;
  registerTurn('expense', 'Неожиданный расход', {
    spent: amount,
    note: description
  });

  updateCashFlowDisplay();
  showModal('Расход учтен', `${description}: -${formatCurrency(amount)}`);
}

function handleMarketAction() {
  const success = confirm('Удалось реализовать сделку на рынке? Нажмите «ОК», если да.');

  if (success) {
    const revenueInput = prompt('Сколько вы получили от сделки? (можно 0)');
    if (revenueInput === null) {
      return;
    }
    const revenue = parseFloat(revenueInput) || 0;
    if (revenue < 0) {
      showModal('Ошибка', 'Сумма не может быть отрицательной.');
      return;
    }

    const note = prompt('Что вы продали? (необязательно)') || '';
    registerTurn('market', 'Рынок', {
      earned: revenue,
      note: (`Сделка завершена. ${note}`).trim(),
      result: 'success'
    });
    showModal('Карточка рынка', 'Сделка отмечена как успешная.');
  } else {
    const note = prompt('Что произошло на рынке? (необязательно)') || '';
    registerTurn('market', 'Рынок', {
      note: (`Сделка не состоялась. ${note}`).trim(),
      result: 'fail'
    });
    showModal('Карточка рынка', 'Сделка отмечена как несостоявшаяся.');
  }
}

function handleCharityAction() {
  const ready = confirm('Готовы пожертвовать деньги? Нажмите «ОК», если да.');

  if (ready) {
    const amountInput = prompt('Какую сумму вы жертвуете?');
    if (amountInput === null) {
      return;
    }

    const amount = parseFloat(amountInput);
    if (!amount || amount <= 0) {
      showModal('Ошибка', 'Введите корректную сумму пожертвования.');
      return;
    }

    if (amount > gameData.wallet) {
      showModal('Ошибка', 'Недостаточно средств в кошельке.');
      return;
    }

    const note = prompt('Кому вы помогаете? (необязательно)') || '';
    gameData.wallet -= amount;
    registerTurn('charity', 'Благотворительность', {
      spent: amount,
      charity: amount,
      note: note.trim()
    });
    updateCashFlowDisplay();
    showModal('Пожертвование учтено', `-${formatCurrency(amount)}`);
  } else {
    registerTurn('charity', 'Благотворительность', {
      note: 'Пожертвование отложено.'
    });
    showModal('Ход завершен', 'Вы решили отложить благотворительность.');
  }
}

function handleLifeEvent() {
  openChoiceOverlay('Что произошло?', [
    {
      label: 'Вас уволили',
      description: 'Пропустите два хода и восстановите план.',
      onSelect: () => {
        registerTurn('layoff', 'Увольнение', {
          note: 'Пропустить 2 хода',
          skipped: 2
        });
        showModal('Увольнение', 'Вы пропускаете два хода. Запишите это в журнал.');
      }
    },
    {
      label: 'Поздравляем! У вас родился ребенок',
      description: 'Добавьте нового ребенка и учтите расходы.',
      onSelect: () => {
        const currentChildren = Number(gameData.children) || 0;
        gameData.children = currentChildren + 1;
        const childrenInput = document.getElementById('childrenCount');
        if (childrenInput) {
          childrenInput.value = gameData.children;
        }
        updateChildrenExpenses();
        registerTurn('family', 'Рождение ребенка', {
          note: 'Расходы на детей увеличены',
          childrenAdded: 1
        });
        showModal('Пополнение в семье', 'Количество детей увеличено, расходы обновлены.');
      }
    }
  ]);
}

function openChoiceOverlay(title, options) {
  const overlay = document.getElementById('choiceOverlay');
  const titleElement = document.getElementById('choiceTitle');
  const optionsContainer = document.getElementById('choiceOptions');
  if (!overlay || !titleElement || !optionsContainer) {
    return;
  }

  titleElement.textContent = title;
  optionsContainer.innerHTML = '';

  options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'choice-option';

    const heading = document.createElement('h4');
    heading.textContent = option.label;
    const description = document.createElement('p');
    description.textContent = option.description || '';

    optionDiv.appendChild(heading);
    optionDiv.appendChild(description);
    optionDiv.onclick = () => {
      closeChoiceOverlay();
      option.onSelect();
    };

    optionsContainer.appendChild(optionDiv);
  });

  overlay.classList.add('active');
}

function closeChoiceOverlay() {
  const overlay = document.getElementById('choiceOverlay');
  if (!overlay) return;

  overlay.classList.remove('active');
  const optionsContainer = document.getElementById('choiceOptions');
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
  }
}

function checkSecondRound() {
  if (stageTwoUnlocked || !selectedProfession) return;

  const notification = document.getElementById('secondRoundNotification');
  if (!notification) return;

  const totalExpenses = parseNumeric(document.getElementById('totalExpensesAmount').textContent) || 0;
  const childBuffer = selectedProfession.expenses.childExpensePerChild || 0;

  const effectivePassive = getEffectivePassiveIncome();
  if (effectivePassive >= totalExpenses + childBuffer && totalExpenses > 0) {
    notification.style.display = 'flex';
  }
}

function goToSecondRound() {
  const notification = document.getElementById('secondRoundNotification');
  if (notification) {
    notification.style.display = 'none';
  }

  stageTwoUnlocked = true;
  stageTwoBasePassive = getEffectivePassiveIncome();
  stageTwoInitialPassive = stageTwoBasePassive * 100;
  stageTwoAdditionalPassive = 0;
  stageTwoManualPassive = 0;
  stageTwoBusinesses = [];
  stageTwoPassiveGoalClaimed = false;
  stageTwoDreamGoalClaimed = false;
  dreamPurchased = false;
  stageTwoReportUnlocked = false;
  stageTwoVictoryCelebrated = false;
  if (stageTwoReportTimer) {
    clearTimeout(stageTwoReportTimer);
    stageTwoReportTimer = null;
  }

  const stageState = ensureStageTwoState();
  stageState.manualPassive = 0;
  stageState.businesses = [];
  stageState.passiveGoalClaimed = false;
  stageState.dreamGoalClaimed = false;
  stageState.reportUnlocked = false;
  stageState.victoryCelebrated = false;
  persistStageTwoState();

  const stage2Button = document.getElementById('stage2Button');
  if (stage2Button) {
    stage2Button.disabled = false;
  }

  showModal('Быстрый трек!', `Ваш пассивный доход масштабирован до $${stageTwoInitialPassive.toLocaleString()}.`);

  showCashflowStage(2);
  updateStage2Display();
  updateStageButtons();
}

function showFinalReport() {
  const overlay = document.getElementById('finalReportOverlay');
  if (!overlay) return;

  const stats = ensureTurnStats();
  const turnField = document.getElementById('reportTotalTurns');
  if (turnField) turnField.textContent = stats.turns.toString();

  const spentField = document.getElementById('reportTotalSpent');
  if (spentField) spentField.textContent = formatCurrency(stats.totalSpent);

  const investedField = document.getElementById('reportTotalInvested');
  if (investedField) investedField.textContent = formatCurrency(stats.totalInvested);

  const earnedField = document.getElementById('reportTotalEarned');
  if (earnedField) earnedField.textContent = formatCurrency(stats.totalEarned);

  const charityField = document.getElementById('reportCharity');
  if (charityField) charityField.textContent = formatCurrency(stats.charityDonations);

  const additionalField = document.getElementById('reportAdditionalExpenses');
  if (additionalField) additionalField.textContent = formatCurrency(stats.additionalExpenses);

  const sharedField = document.getElementById('reportSharedDeals');
  if (sharedField) sharedField.textContent = stats.sharedDeals.toString();

  const skippedField = document.getElementById('reportSkippedTurns');
  if (skippedField) skippedField.textContent = stats.skippedTurns.toString();

  const tableBody = document.getElementById('finalReportTableBody');
  if (tableBody) {
    tableBody.innerHTML = '';
    if (!stats.logs.length) {
      const emptyRow = document.createElement('tr');
      const cell = document.createElement('td');
      cell.colSpan = 7;
      cell.textContent = 'Журнал пока пуст. Совершите несколько ходов в игре.';
      emptyRow.appendChild(cell);
      tableBody.appendChild(emptyRow);
    } else {
      stats.logs.forEach(log => {
        const row = document.createElement('tr');
        const cells = [
          log.turn,
          log.label,
          log.participants,
          formatMoneyDisplay(log.spent),
          formatMoneyDisplay(log.invested),
          formatMoneyDisplay(log.earned),
          log.note || '—'
        ];

        cells.forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        });

        tableBody.appendChild(row);
      });
    }
  }

  overlay.classList.add('active');
}

function closeFinalReport() {
  const overlay = document.getElementById('finalReportOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
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
      if (!Array.isArray(gameData.additionalExpenses)) {
        gameData.additionalExpenses = [];
      }
      ensureTurnStats();
      const stageState = ensureStageTwoState();
      stageTwoReportUnlocked = !!stageState.reportUnlocked;
      stageTwoVictoryCelebrated = !!stageState.victoryCelebrated;
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