// for toggle yes to enter the bus pass number
function toggleBusPassNumber(isExistingUser) {
    const busPassNumberDiv = document.getElementById('busPassNumberDiv');
    if (isExistingUser) {
        busPassNumberDiv.style.display = 'block';
    } else {
        busPassNumberDiv.style.display = 'none';
    }
}

// to show success page on form submission
function showSuccessPage() {
    // Load success.html content into a container
    const container = document.getElementById('successContainer');
    container.innerHTML = '<object data="../HTML/Success.html"></object>';
}
