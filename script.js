// script.js

let db;

async function initDatabase() {
    const SQL = await initSqlJs({
        locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/sql-wasm.wasm`
    });
    const data = await fetch("db.sqlite3").then(res => res.arrayBuffer());
    const database = new SQL.Database(new Uint8Array(data));
    db = database;
}

async function saveDatabase() {
    const data = db.export();
    const buffer = new Uint8Array(data);
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "db.sqlite3";
    a.click();
}

document.addEventListener('DOMContentLoaded', async () => {
    await initDatabase();

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', registerUser);
    }

    const userList = document.getElementById('userList');
    if (userList) {
        fetchUsers();
    }
});

async function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    await saveDatabase();
    alert('User registered successfully');
    window.location.href = 'users.html';
}

async function fetchUsers() {
    const result = db.exec('SELECT username FROM users');
    const userList = document.getElementById('userList');
    if (result.length > 0) {
        result[0].values.forEach((user) => {
            const li = document.createElement('li');
            li.textContent = user[0];
            userList.appendChild(li);
        });
    }
}
