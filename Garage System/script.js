let garage = [];
let earnings = 0;
let hoursParked = 0;

document.getElementById('add-car-btn').addEventListener('click', addCar);

function addCar(event) {
    event.preventDefault();
    let carNumber = document.getElementById('car-number').value;
    let checkinTime = new Date().toLocaleTimeString();
    let newCar = { carNumber, checkinTime, hoursParked: 0, earnings: 0, signedIn: true, signInTime: new Date().getTime() };
    garage.push(newCar);
    let newRow = document.createElement('tr');
    newRow.dataset.carIndex = garage.length - 1;
    newRow.innerHTML = `
        <td>${carNumber}</td>
        <td>${checkinTime}</td>
        <td>0</td>
        <td>$0.00</td>
        <td>
            <button class="btn btn-danger" onclick="signOut(this)">Sign Out</button>
        </td>
    `;
    document.getElementById('garage-table-body').appendChild(newRow);
    document.getElementById('car-number').value = '';
    updateEarnings();
}

function updateEarnings() {
    for (let i = 0; i < garage.length; i++) {
        if (garage[i].signedIn) {
            let currentTime = new Date().getTime();
            let timeElapsed = currentTime - garage[i].signInTime;
            let minutesElapsed = Math.floor(timeElapsed / 60000);
            garage[i].hoursParked = Math.floor(minutesElapsed / 60);
            garage[i].earnings = minutesElapsed * 0.1; // earnings per minute
            updateTable(i);
        }
    }
    setTimeout(updateEarnings, 1000); // update every 1 second
}

function signOut(button) {
    let carIndex = button.parentNode.parentNode.dataset.carIndex;
    if (carIndex >= 0 && carIndex < garage.length) {
        garage[carIndex].signedIn = false;
        updateTable(carIndex);
        displayHistory(carIndex);
    }
}

function updateTable(carIndex) {
    if (carIndex >= 0 && carIndex < garage.length) {
        let tableRow = document.getElementById('garage-table-body').children[carIndex];
        tableRow.cells[2].innerHTML = garage[carIndex].hoursParked;
        tableRow.cells[3].innerHTML = `$${garage[carIndex].earnings.toFixed(2)}`;
        if (!garage[carIndex].signedIn) {
            tableRow.cells[4].innerHTML = `
                <button class="btn btn-secondary" disabled> Signed Out </button>
            `;
        }
    }
}

function displayHistory(carIndex) {
    let historyTableBody = document.getElementById('history-table-body');
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${garage[carIndex].carNumber}</td>
        <td>${garage[carIndex].checkinTime}</td>
        <td>${garage[carIndex].hoursParked}</td>
        <td>$${garage[carIndex].earnings.toFixed(2)}</td>
    `;
    historyTableBody.appendChild(newRow);
}

function updateEarnings() {
    let totalEarnings = 0;
    for (let i = 0; i < garage.length; i++) {
        if (garage[i].signedIn) {
            let currentTime = new Date().getTime();
            let timeElapsed = currentTime - garage[i].signInTime;
            let minutesElapsed = Math.floor(timeElapsed / 60000);
            garage[i].hoursParked = Math.floor(minutesElapsed / 60);
            garage[i].earnings = minutesElapsed * 0.1; // earnings per minute
            totalEarnings += garage[i].earnings;
            updateTable(i);
        }
    }
    document.getElementById('total-earnings').innerHTML = `$${totalEarnings.toFixed(2)}`;
    setTimeout(updateEarnings, 1000); // update every 1 second
}