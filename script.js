
console.log("CatPhotoApp script loaded!");

// Add a click event to all images to show their alt text in an alert
document.addEventListener("DOMContentLoaded", function() {
    // Add click event to all images
    document.querySelectorAll("img").forEach(function(img) {
        img.addEventListener("click", function() {
            alert("Image description: " + img.alt);
        });
    });

    // Add a click event to the submit button to show a message before submitting
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            alert("Thank you for submitting your cat photo!");
            // The form will submit as normal after the alert
        });
    }
});