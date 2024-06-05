const sql = require('sql.js');
const db = new sql.Database('db.sqlite3');

// Register button click handler
document.getElementById('register-btn').addEventListener('click', registerUser);

// Register user function
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password]);
    alert(`User ${username} registered successfully!`);
}

// Display user list
db.run(`SELECT * FROM users`, [], (err, rows) => {
    const userList = document.getElementById('user-list');
    rows.forEach((row) => {
        const listItem = document.createElement('li');
        listItem.textContent = row.username;
        userList.appendChild(listItem);
    });
});