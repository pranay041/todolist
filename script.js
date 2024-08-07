const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Selects the input box and the container for the to-do list items from the DOM.

function addTask() {
    // This function is triggered when the "Add" button is clicked.

    if(inputBox.value === ''){
        alert("you must write something !");
        // Checks if the input field is empty. If it is, an alert message is shown to prompt the user to enter text.
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value ;
        // Creates a new <li> element and sets its content to the text entered in the input box.

        listContainer.appendChild(li);
        // Adds the newly created <li> element to the list container (i.e., the to-do list).

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // Creates a <span> element and sets its content to the multiplication symbol (×), which acts as a delete button.

        li.appendChild(span);
        // Appends the <span> element to the <li>, so the delete button appears next to each task.
    }
    
    inputBox.value = "";
    // Clears the input box after a task is added, so the user can easily add a new task.

    saveData();
    // Calls the saveData() function to store the current list in the browser's local storage.
}

listContainer.addEventListener("click", function(e){
    // Adds an event listener to the entire list container that listens for clicks on the list items or delete buttons.

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // Toggles the "checked" class on the <li> element when it's clicked, marking the task as complete or incomplete.

        saveData();
        // Saves the updated list state to local storage after marking a task.
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        // Removes the entire <li> element if the delete button (i.e., the <span> element) is clicked.

        saveData();
        // Saves the updated list state to local storage after deleting a task.
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    // Saves the current HTML content of the list container to the browser's local storage under the key "data".
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    // Retrieves the saved list from local storage and displays it in the list container when the page is loaded or refreshed.
}

showTask();
// Calls the showTask() function immediately when the script runs to display any previously saved tasks.
