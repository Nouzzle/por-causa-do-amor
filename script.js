document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;
    const correctPassword = '14-06-2024'; // Correct answer

    const passwordPrompt = document.getElementById('passwordPrompt');
    const scrapbook = document.getElementById('scrapbook');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const error = document.getElementById('error');

    // Initially hide the buttons
    prevButton.classList.add('hidden');
    nextButton.classList.add('hidden');

    document.getElementById('submitPassword').addEventListener('click', function() {
        const passwordInput = document.getElementById('passwordInput').value;
        if (passwordInput === correctPassword) {
            passwordPrompt.classList.add('hidden');
            scrapbook.classList.remove('hidden');
            updateButtons(); // Show the buttons based on the current page
        } else {
            error.classList.remove('hidden');
        }
    });

    document.getElementById('emailIcon').addEventListener('click', function() {
        // Hide the email icon container
        document.getElementById('emailIconContainer').classList.add('hidden');
      
        // Show the password prompt
        document.getElementById('passwordPrompt').classList.remove('hidden');
    });

    document.getElementById('next').addEventListener('click', function() {
        if (currentPage < pages.length - 1) {
            pages[currentPage].style.transform = 'rotateY(-180deg)';
            currentPage++;
            updateButtons();
        }
    });

    document.getElementById('prev').addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            pages[currentPage].style.transform = 'rotateY(0deg)';
            updateButtons();
        }
    });

    document.getElementById('surpriseButton').addEventListener('click', function() {
        window.location.href = 'https://app.sane.fyi/s/bf5afaf8-5556-11ef-bcb0-338d27ca3d66?t=NWNemVz18I75YB7CwtiI&utm_source=share-menu&utm_medium=web'; // Redirect to index2.html
    });

    function updateButtons() {
        // Hide the prev button if on the first page
        if (currentPage === 0) {
            prevButton.classList.add('hidden');
        } else {
            prevButton.classList.remove('hidden');
        }

        // Hide the next button if on the last page
        if (currentPage === pages.length - 1) {
            nextButton.classList.add('hidden');
        } else {
            nextButton.classList.remove('hidden');
        }
    }

    document.getElementById('surpriseButton').classList.add('shake');
});
