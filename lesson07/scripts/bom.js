const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// button.addEventListener('click', () => {
//     if (input.value !== '') {
//         const li = document.createElement('li');

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = '❌';

//         li.textContent = input.value;

//         li.appendChild(deleteButton);

//         list.appendChild(li);

//         deleteButton.addEventListener('click', () => {
//             list.removeChild(li);
//             input.focus();
//         });

//         input.focus();

//         input.value = '';
//     } else {
//         alert('Please enter a book and chapter.');
//     }
// });

let chaptersArray = getChapterList() || [];

// Populate the displayed list of chapters using forEach
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Button click event listener
button.addEventListener("click", () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

// displayList function
function displayList(item) {
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");
    li.textContent = item;
    deletebutton.textContent = "❌";
    deletebutton.classList.add("delete");
    li.append(deletebutton);
    list.append(li);

    deletebutton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// setChapterList function
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// getChapterList function
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// deleteChapter function
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
