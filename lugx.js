const togglebtn = document.querySelector('.toggle_btn')
const togglebtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdownmenu')

togglebtn.onclick = function() {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')
  togglebtnIcon.className = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}




function setupTopGamesSection(){
    const section3 = document.querySelector('.section3');
    const viewAllButton = section3.querySelector('.viewall');
    const container3s = section3.querySelectorAll('.container3');
    const viewLessButton = document.createElement('button');
    viewLessButton.textContent = 'View Less';
    viewLessButton.style.display = 'none'; // Initially hide it
    viewLessButton.classList.add('viewless');
  
    section3.appendChild(viewLessButton); // Add the button to the section
  
    // Initially hide the 2nd and 3rd rows
    if (container3s.length > 1) {
      container3s[1].style.display = 'none';
    }
    if (container3s.length > 2) {
      container3s[2].style.display = 'none';
    }
  
    viewAllButton.addEventListener('click', () => {
      // Show all rows
      container3s.forEach(container => {
        container.style.display = 'block';
      });
  
      // Hide the "View All" button and show "View Less"
      viewAllButton.style.display = 'none';
      viewLessButton.style.display = 'block';
    });
  
    viewLessButton.addEventListener('click', () => {
      // Hide rows 2 and 3
      if (container3s.length > 1) {
        container3s[1].style.display = 'none';
      }
      if (container3s.length > 2) {
        container3s[2].style.display = 'none';
      }
  
      // Show "View All" and hide "View Less"
      viewAllButton.style.display = 'block';
      viewLessButton.style.display = 'none';
    });
  }
  
  // Call the function to set up the section
  setupTopGamesSection();