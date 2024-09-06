document.getElementById('doctor').addEventListener('click', function() {
    document.getElementById('doctor').classList.add('hidden');
    document.getElementById('yoga').classList.remove('hidden');
});

// Yoga image par click karne par Doctor dikhaye aur Yoga hide kare
document.getElementById('yoga').addEventListener('click', function() {
    document.getElementById('yoga').classList.add('hidden');
    document.getElementById('doctor').classList.remove('hidden');
});