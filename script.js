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

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
  loadGameData();
  initializeProfessions();
  setupEventListeners();
  
  // Показать первый экран
  showScreen(1);
});

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
  });
  
  // Показать выбранный экран
  const targetScreen = document.getElementById(`screen${screenNumber}`);
  if (targetScreen) {
    targetScreen.style.display = 'block';
    targetScreen.classList.add('active');
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
  
  // Обновление интерфейса
  updateCashFlowDisplay();
}

function updateCashFlowDisplay() {
  if (!selectedProfession) return;
  
  // Обновить название профессии
  document.getElementById('selectedProfession').textContent = selectedProfession.name;
  
  // Обновить основные показатели
  document.getElementById('walletAmount').textContent = `$${gameData.wallet}`;
  document.getElementById('passiveIncomeAmount').textContent = `$${gameData.passiveIncome}`;
  document.getElementById('salaryAmount').textContent = `$${selectedProfession.salary}`;
  
  // Обновить расходы
  updateExpensesDisplay();
  
  // Обновить денежный поток
  updateCashFlow();
  
  // Обновить доступный кредит
  updateAvailableCredit();
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
        <span>$${value}</span>
      `;
      fixedExpensesContainer.appendChild(expenseItem);
    }
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
  
  document.getElementById('totalIncomeAmount').textContent = totalIncome.toFixed(0);
  
  updateCashFlow();
}

function updateChildrenExpenses() {
  const childrenCount = parseInt(document.getElementById('childrenCount').value) || 0;
  gameData.children = childrenCount;
  
  const childExpense = childrenCount * selectedProfession.expenses.childExpensePerChild;
  document.getElementById('childrenExpensesAmount').textContent = childExpense;
  
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
  
  document.getElementById('totalExpensesAmount').textContent = totalExpenses;
  
  updateCashFlow();
  return totalExpenses;
}

function updateCashFlow() {
  const totalIncome = parseFloat(document.getElementById('totalIncomeAmount').textContent) || 0;
  const totalExpenses = parseFloat(document.getElementById('totalExpensesAmount').textContent) || 0;
  
  const cashFlow = totalIncome - totalExpenses;
  document.getElementById('cashFlowAmount').textContent = `$${cashFlow}`;
  document.getElementById('cashFlowAmount').style.color = cashFlow >= 0 ? '#10b981' : '#ef4444';
  
  // Проверить возможность перехода на второй круг
  checkSecondRound();
}

function updateAvailableCredit() {
  const cashFlow = parseFloat(document.getElementById('cashFlowAmount').textContent.replace('$', '')) || 0;
  const availableCredit = Math.max(0, cashFlow * 10);
  document.getElementById('availableCredit').textContent = availableCredit.toFixed(0);
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
  
  showModal('Доход добавлен', `+$${amount}${note ? ` (${note})` : ''}`);
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
  
  showModal('Расход добавлен', `-$${amount}${note ? ` (${note})` : ''}`);
}

function takeCredit() {
  const availableCredit = parseFloat(document.getElementById('availableCredit').textContent);
  
  if (availableCredit <= 0) {
    showModal('Ошибка', 'У вас отрицательный денежный поток. Кредит недоступен.');
    return;
  }
  
  if (confirm(`Взять кредит на сумму $${availableCredit}?`)) {
    gameData.wallet += availableCredit;
    updateCashFlowDisplay();
    showModal('Кредит получен', `+$${availableCredit}`);
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
  const totalExpenses = updateTotalExpenses();
  
  if (gameData.passiveIncome > totalExpenses + 10) {
    document.getElementById('secondRoundNotification').style.display = 'flex';
  }
}

function goToSecondRound() {
  // Переход на второй круг Cash Flow
  const newSalary = gameData.passiveIncome * 100;
  
  showModal('Второй круг!', `Ваша новая зарплата: $${newSalary.toLocaleString()}`);
  document.getElementById('secondRoundNotification').style.display = 'none';
  
  // Здесь можно добавить логику второго круга
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

function saveGameData() {
  const dataToSave = {
    currentScreen: currentScreen,
    currentUser: currentUser,
    selectedProfession: selectedProfession,
    gameType: gameType,
    gameData: gameData,
    timestamp: new Date().toISOString()
  };
  
  localStorage.setItem('cashFlowGameData', JSON.stringify(dataToSave));
}

function loadGameData() {
  const savedData = localStorage.getItem('cashFlowGameData');
  
  if (savedData) {
    try {
      const data = JSON.parse(savedData);
      
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
    }
  }
}

// Очистка данных
function resetGameData() {
  if (confirm('Сбросить все данные игры?')) {
    localStorage.removeItem('cashFlowGameData');
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
    exportDate: new Date().toISOString()
  };
  
  const dataStr = JSON.stringify(dataToExport, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = `cash_flow_data_${new Date().toISOString().split('T')[0]}.json`;
  link.click();
}