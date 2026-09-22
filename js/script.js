const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    const searchValue = searchInput.value.trim();

    if (searchValue === "") {
        alert("Please enter a service or freelancer.");
    } else {
        alert("Searching for: " + searchValue);
    }

});