const baseURL = "https://fabianrbv.github.io/wdd230/";
const linksURL = "https://fabianrbv.github.io/wdd230/data/links.json";
// const linksURL = "data/links.json";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data);
}

const ol = document.querySelector("#activities");

function displayLinks(weeks) {
    weeks.lessons.forEach(lesson => {
        // create an li element for element ol
        const li = document.createElement('li');

        console.log(`${lesson.lesson}`);
        const m_lessonNo = `${lesson.lesson}`;
        lesson.links.forEach(link => {
            console.log(`${link.url}`);
            console.log(`${link.title}`);
            // build a element
            const a = document.createElement("a");
            a.href = `${link.url}`;
            a.innerHTML = `${link.title}` + " | ";
            li.appendChild(a);
            ol.appendChild(li);

        })

    })
}


getLinks();