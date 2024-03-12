const linksURL = "https://github.com/fabianrbv/wdd230/blob/main/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data.members, 'row');
}

document.querySelectorAll('input[name="view"]').forEach((radio) => {
    radio.addEventListener('change', () => selectView(radio.value));
});

const directoryCards = document.querySelector('#directoryCards');
const directoryContainer = document.querySelector('#directoryContainer');
const list = document.querySelector('#list');
const grid = document.querySelector('#grid');

const displayMembers = (members, view) => {
    console.log(members);
    members.forEach((member) => {
        // Create a section element
        let card = document.createElement('section');
        // Create an img element for the logo
        let logoImg = document.createElement('img');

        // Create teh html elements
        let businessName = document.createElement('h3');
        let address = document.createElement('div');

        let address1 = document.createElement('div');
        let address2 = document.createElement('div');
        let city = document.createElement('div');
        let zipcode = document.createElement('div');
        let state = document.createElement('div');

        let phoneNumbers = document.createElement('div');
        let urlSite = document.createElement('div');
        let memberLevel = document.createElement('div');

        // build logo picture
        logoImg.setAttribute('alt', `${member.name}`);
        logoImg.setAttribute('src', `${member.image}`);
        logoImg.setAttribute('width', '120');
        logoImg.setAttribute('height', '40');
        // build business name
        businessName.innerHTML = `${member.name}`;
        // build url site
        urlSite.innerHTML = `${member.url}`;
        // built address
        address1.innerHTML = `${member.address.address1}`
        address2.innerHTML = `${member.address.address2}` + '\r' + `${member.address.city}` + ', ' + `${member.address.zipcode}` + '\r' + `${member.address.state}`
        city.innerHTML = `${member.address.city}` + ', ' + `${member.address.zipcode}`
        state.innerHTML = `${member.address.state}`
        // build card
        card.appendChild(logoImg);
        card.appendChild(businessName);
        card.appendChild(urlSite);
        //address.appendChild(addressAll);
        card.appendChild(address1);
        card.appendChild(address2);
        card.appendChild(city);
        card.appendChild(state);

        phoneNumbers.innerHTML = 'Phones No: ';
        member.phoneNumbers.forEach((phoneNumber) => {
            phoneNumbers.innerHTML += `${phoneNumber}` + " | "
        });

        card.appendChild(phoneNumbers);
        card.appendChild(memberLevel);
        directoryCards.appendChild(card);

    })
}


function selectView(view) {
    if (view === 'row') {
        directoryCards.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr)';
        // alert("row");
    } else {
        directoryCards.style.gridTemplateColumns = '1fr';
        // alert("column");
    }
}



getMembers();