const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})


document.querySelectorAll('.uploadInput').forEach(input => {
    input.addEventListener('change', event => {
        event.preventDefault();
        const file = input.files[0];
        if (file) {
            // can upload the file to server or process it as needed
            alert(`File "${file.name}" uploaded successfully.`);
        }
    });
});

document.querySelectorAll('.deleteNote').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const parentDataList = event.target.closest('.data-list');
        const uploadInput = parentDataList.querySelector('.uploadInput');
        // can also reset the input field if needed
        uploadInput.value = ''; // Resetting the value of file input
        const noteIndex = Array.from(parentDataList.parentElement.children).indexOf(parentDataList.parentElement);
        alert(`Delete functionality for note ${noteIndex} will be implemented.`);
    });
});

