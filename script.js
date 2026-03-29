// Simple function to log when someone accesses an "Internal Leak"
document.querySelectorAll('.issue-link').forEach(link => {
    link.addEventListener('click', () => {
        console.log("Accessing Restricted File: " + link.innerText);
    });
});
