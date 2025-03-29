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
