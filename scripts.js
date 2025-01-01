document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('activate').classList.remove('hidden');
});

document.getElementById('activateButton').addEventListener('click', function() {
    document.getElementById('activate').classList.add('hidden');
    document.getElementById('protected').classList.remove('hidden');
});

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('activationPassword').value;
    if (password === 'Samba') {
        document.getElementById('protected').classList.add('hidden');
        document.getElementById('finalPage').classList.remove('hidden');
    } else {
        alert('Incorrect password. Please try again.');
    }
});
