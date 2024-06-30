/*  function toggleMenu() {
  /*   var navList = document.getElementById("nav-list");
    navList.classList.toggle("show"); */



 





/* const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {

    navMenu.classList.toggle('active');
});

 */



/* document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});
 */

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
    const navLinks = document.querySelectorAll('.nav-list li a');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navList.classList.remove('show');
        });
    });
});






/* 
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}







function toggleSubFolder(element) {
    const subFolderContent = element.nextElementSibling;
    if (subFolderContent.style.display === "block") {
        subFolderContent.style.display = "none";
    } else {
        subFolderContent.style.display = "block";
    }
}
 */







function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}










function toggleFolder(id) {
    const folderContent = document.querySelector(`#${id} .folder-content`);
    if (folderContent.style.display === "block") {
        folderContent.style.display = "none";
    } else {
        folderContent.style.display = "block";
    }
}

function toggleSubFolder(element) {
    const subFolderContent = element.nextElementSibling;
    if (subFolderContent.style.display === "block") {
        subFolderContent.style.display = "none";
    } else {
        subFolderContent.style.display = "block";
    }
}










/* 



folderLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const level = link.parentElement.getAttribute('data-level');
        const subfolderGrid = document.getElementById(level);
        if (subfolderGrid) {
            document.querySelectorAll('.subfolder-grid').forEach(grid => {
                if (grid.id === level) {
                    grid.style.display = grid.style.display === 'block' ? 'none' : 'block';
                } else {
                    grid.style.display = 'none';
                }
            });
        }
    });
}); 



document.addEventListener('DOMContentLoaded', function () {
folderLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const level = link.parentElement.getAttribute('data-level');
        const subfolderGrid = document.getElementById(level);
        if (subfolderGrid) {
            document.querySelectorAll('.subfolder-grid').forEach(grid => {
                if (grid.id === level) {
                    grid.style.display = grid.style.display === 'block' ? 'none' : 'block';
                } else {
                    grid.style.display = 'none';
                }
            });
        }
    });
}); 



 */



/*  }); */



document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
    } else {
        alert('Please enter a valid email address.');
    }
});