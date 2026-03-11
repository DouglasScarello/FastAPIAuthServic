const API_URL = 'http://127.0.0.1:8000';

const authSection = document.getElementById('auth-section');
const dashboardSection = document.getElementById('dashboard-section');
const authForm = document.getElementById('auth-form');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const submitBtn = document.getElementById('submit-btn');
const messageEl = document.getElementById('message');
const userListEl = document.getElementById('user-list');
const logoutBtn = document.getElementById('logout-btn');
const jwtDisplay = document.getElementById('jwt-display');
const logContainer = document.getElementById('api-logs');

let currentMode = 'login';
let authToken = localStorage.getItem('token');

// Inicialização
if (authToken) {
    showDashboard();
}

function addLog(msg) {
    const time = new Date().toLocaleTimeString();
    const entry = document.createElement('code');
    entry.className = 'log-entry';
    entry.innerText = `[${time}] ${msg}`;
    logContainer.prepend(entry);
}

// Alternar Abas
tabLogin.addEventListener('click', () => {
    currentMode = 'login';
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    submitBtn.innerText = 'Invocar Portal';
    messageEl.innerText = '';
});

tabRegister.addEventListener('click', () => {
    currentMode = 'register';
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    submitBtn.innerText = 'Assinar Anais';
    messageEl.innerText = '';
});

// Formulário
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    addLog(`Iniciando ${currentMode} para: ${username}`);

    try {
        if (currentMode === 'register') {
            await registerUser(username, password);
        } else {
            await loginUser(username, password);
        }
    } catch (err) {
        addLog(`ERRO: ${err.message}`);
        messageEl.innerText = '⚠️ ' + err.message;
        messageEl.style.color = '#f87171';
    }
});

async function registerUser(username, password) {
    const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (res.ok) {
        addLog('Usuário gravado com sucesso no SQLite.');
        messageEl.innerText = '✨ Gravado! Autentique-se agora.';
        messageEl.style.color = '#34d399';
        setTimeout(() => tabLogin.click(), 1500);
    } else {
        const data = await res.json();
        throw new Error(data.detail);
    }
}

async function loginUser(username, password) {
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        body: formData
    });

    if (res.ok) {
        const data = await res.json();
        authToken = data.access_token;
        localStorage.setItem('token', authToken);
        addLog('Token JWT gerado e validado.');
        messageEl.innerText = '✅ Portal aberto!';
        messageEl.style.color = '#34d399';
        setTimeout(showDashboard, 1000);
    } else {
        const data = await res.json();
        throw new Error(data.detail);
    }
}

async function showDashboard() {
    authSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    jwtDisplay.innerText = authToken;
    addLog('Dashboard técnico carregado.');
    await loadUsers();
}

async function loadUsers() {
    addLog('Consultando tabela SQLite...');
    try {
        const res = await fetch(`${API_URL}/users`);
        if (res.ok) {
            const users = await res.json();
            userListEl.innerHTML = users.map(u => `
                <li>
                    <span>🐲 ${u.username}</span>
                    <span style="opacity: 0.4">ID: ${u.id}</span>
                </li>
            `).join('');
            addLog(`${users.length} registros encontrados.`);
        }
    } catch (err) {
        addLog('Falha ao acessar banco.');
    }
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    authToken = null;
    addLog('Sessão encerrada.');
    dashboardSection.classList.add('hidden');
    authSection.classList.remove('hidden');
});
