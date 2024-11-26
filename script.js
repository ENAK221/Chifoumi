// Variables pour les scores
let playerScore = 0;
let computerScore = 0;

// Ajout des événements aux boutons
document.querySelector('.btn-rock').addEventListener('click', () => playRound('rock'));
document.querySelector('.btn-paper').addEventListener('click', () => playRound('paper'));
document.querySelector('.btn-scissors').addEventListener('click', () => playRound('scissors'));
document.querySelector('.reset-btn').addEventListener('click', resetGame);

function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Met à jour les images et leur description
    const playerImg = document.querySelector('.player-choice img');
    const computerImg = document.querySelector('.computer-choice img');

    // Ajout de logs pour le débogage
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    playerImg.src = `img/${playerChoice}.jpg`;
    playerImg.alt = playerChoice;
    computerImg.src = `img/${computerChoice}.jpg`;
    computerImg.alt = computerChoice;

    // Affiche la section des résultats
    const matchResult = document.querySelector('.match-result');
    matchResult.style.visibility = 'visible'; // Assurez-vous qu'elle est visible

    // Vérifie qui a gagné
    if (playerChoice === computerChoice) {
        alert("C'est une égalité !");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        document.getElementById('player-score').textContent = `Joueur: ${playerScore}`;
    } else {
        computerScore++;
        document.getElementById('computer-score').textContent = `Ordinateur: ${computerScore}`;
    }
}

function resetGame() {
    // Réinitialise les scores
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = "Joueur: 0";
    document.getElementById('computer-score').textContent = "Ordinateur: 0";

    // Réinitialise les images à leur état par défaut
    const playerImg = document.querySelector('.player-choice img');
    const computerImg = document.querySelector('.computer-choice img');
    playerImg.src = "img/placeholder.jpg";
    playerImg.alt = "Votre choix";
    computerImg.src = "img/placeholder.jpg";
    computerImg.alt = "Choix de l'ordinateur";

    // La section reste visible avec les placeholders
    const matchResult = document.querySelector('.match-result');
    matchResult.style.visibility = 'visible'; // Toujours visible
}
