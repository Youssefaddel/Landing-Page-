/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Variable for the ul
const navBarList = document.getElementById('navbar__list');
// Define Variable Sections as an Array to creat new Sections
const sections = Array.from(document.querySelectorAll('section'));

// Function to creat new lists has new sections on the nav bar
function creatLi(){
    for(section of sections){
        listItem=document.createElement("li");
        listItem.innerHTML=`<li> <a href="#${section.id}"data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a> `;
        // Add new section 
        navBarList.appendChild(listItem);
    }
}

// Scroll to section on link click
navBarList.addEventListener('click', toSection =>{
    toSection.preventDefault();

// scroll between the sections 
if (toSection.target.dataset.nav){
        document.getElementById(`${toSection.target.dataset.nav}`).scrollIntoView({ behavior: "smooth"});
    }

});

creatLi();

// Add class 'active' to section when near top of viewport
window.onscroll=function(){
    document.querySelectorAll("section").forEach(function (active){
       // active.classList.add("your-active-class");

        if(active.getBoundingClientRect().top >= -50 && active.getBoundingClientRect().top <400){
       
            // Set sections as active
            active.classList.add("your-active-class");
        }
        else{
            active.classList.remove("your-active-class");
        }
    });
}
