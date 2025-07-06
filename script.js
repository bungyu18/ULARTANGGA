const board = document.getElementById('board');
let playerPos = 1;

// Buat papan 1-100
for (let i = 100; i >= 1; i--) {
  const cell = document.createElement('div');
  cell.textContent = i;
  cell.id = 'cell-' + i;
  board.appendChild(cell);
}

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById('diceResult').textContent = 'Dadu: ' + dice;

  playerPos += dice;
  if (playerPos > 100) playerPos = 100;

  updatePlayerPosition();
}

// Ular & Tangga (contoh)
const snakesAndLadders = {
  14: 4,   // Ular
  19: 8,   // Ular
  28: 84,  // Tangga
  36: 44,  // Tangga
  87: 24,  // Ular
  91: 73,  // Ular
  99: 1    // Ular panjang
};

function updatePlayerPosition() {
  // Reset semua kotak
  for (let i = 1; i <= 100; i++) {
    document.getElementById('cell-' + i).classList.remove('player');
  }

  // Cek ular/tangga
  if (snakesAndLadders[playerPos]) {
    playerPos = snakesAndLadders[playerPos];
  }

  // Update posisi
  document.getElementById('cell-' + playerPos).classList.add('player');
  document.getElementById('playerPosition').textContent = 'Posisi Pemain: ' + playerPos;
}
