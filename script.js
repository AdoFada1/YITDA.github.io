document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let businessName = document.getElementById("business-name").value;
    let ownerName = document.getElementById("owner-name").value;
    let contact = document.getElementById("contact").value;
    let category = document.getElementById("category").value;

    if (businessName && ownerName && contact && category) {
        alert("Business Registered Successfully!\n\n" +
              "Business Name: " + businessName + "\n" +
              "Owner: " + ownerName + "\n" +
              "Contact: " + contact + "\n" +
              "Category: " + category);
    } else {
        alert("Please fill in all fields.");
    }
});

    let businessName = document.getElementById("business-name").value;
    let ownerName = document.getElementById("owner-name").value;
    let contact = document.getElementById("contact").value;
    let category = document.getElementById("category").value;

    if (!businessName || !ownerName || !contact || !category) {
        alert("Please fill in all fields.");
        return;
    }

    let formData = {
        businessName: businessName,
        ownerName: ownerName,
        contact: contact,
        category: category
    };

    fetch("https://script.google.com/macros/s/AKfycbwSZb_utO7HP6l9jCeveRELRkBbbYu262hs5thNVFzsBKkuMX91BvS8KSAWc3G8KOPt/exec", { // Replace with your actual Google Apps Script URL
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(data => {
        if (data === "Success") {
            alert("Business Registered Successfully!");
            document.querySelector("form").reset();
        } else {
            alert("Error submitting form. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    });
});

