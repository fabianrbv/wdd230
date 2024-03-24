const linksURL = "https://fabianrbv.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();

    const goldMembers = filterMembersByMembershipLevel(data, "Gold");
    //console.log(goldMembers);
    displayMembers(goldMembers);
    displayRandomMember(goldMembers);
}

const displayMembers = (goldMembers) => {
    const ol = document.querySelector("#goldMembersList");

    goldMembers.forEach((member) => {
        const a = document.createElement("a");
        a.href = `${member.url}`;
        a.innerHTML = `${member.name}`;
        const li = document.createElement('li');
        li.appendChild(a);
        ol.appendChild(li);
    }
    );
}
    ;

function displayRandomMember(goldMembers) {
    const randomIndex = Math.floor(Math.random() * goldMembers.length);
    const randomMember = goldMembers[randomIndex];
    const memberIcon = document.createElement("img");

    const div = document.querySelector("#randomGoldMember");

    memberIcon.setAttribute("src", `${randomMember.image}`);
    memberIcon.setAttribute("width", "80%");
    // memberIcon.setAttribute("src" , `${randomMember.image}`);

    div.innerHTML = `<p>Read the successful story of our Member: </p>` + `<a href="${randomMember.url}">${randomMember.name}</a>`;
    div.innerHTML = div.innerHTML + `<br/> <br/>`;
    div.appendChild(memberIcon);
}

function filterMembersByMembershipLevel(data, membershipLevel) {
    return data.members.filter((member) => member.membershipLevel === membershipLevel);
}

getMembers();
