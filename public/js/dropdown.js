

const profileContainer = document.querySelectorAll('.profile-container')

const dropdownMenu = document.querySelectorAll('.dropdown-menu')

for (let i = 0; i < profileContainer.length; i++) {
    const container = profileContainer[i]
    const dropdown = dropdownMenu[i]

     container.addEventListener('click', () =>{
         dropdown.classList.toggle('active-dropdown-menu');
     })

     dropdown.addEventListener('mouseleave', () =>{
        dropdown.classList.remove('active-dropdown-menu');
     })
}





