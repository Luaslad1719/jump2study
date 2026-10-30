const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");

// 2. Listen for clicks on the button
menuToggle.addEventListener("click", function() {

    // 3. Toggle the expanded class
    navbar.classList.toggle("expanded");

    // 4. Update the accessibility state
    const isExpanded = navbar.classList.contains("expanded");
    menuToggle.setAttribute("aria-expanded", isExpanded);

});
// se viene la v2 perros
