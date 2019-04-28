const addList = document.getElementById("list");

const contact = [
  {
    name: "BudiMan",
    email: "budi1232gmail.com",
    occupation: "American Dream Maker"
  },
  {
    name: "Raisa",
    email: "andrianaRaisa@gmail.com",
    occupation: "Singer"
  },
  {
    name: "Maudy Ayuk ah",
    email: "maudy@gmail.com",
    occupation: "Actress"
  }
];

const displayContact = () => {
  addList.innerHTML = "";

  contact.forEach((contact, index) => {
    const { name, email, occupation } = contact;

    addList.innerHTML += `<li> ${name}, ${email}, ${occupation} <span onClick="deleteContact(${index})"><img src="https://img.icons8.com/flat_round/64/000000/cancel.png">`;
  });
};
displayContact();

const addContact = () => {
  let contactName = document.getElementById("contactName").value;
  let contactEmail = document.getElementById("contactEmail").value;
  let contactJob = document.getElementById("contactJob").value;
  const newContact = {
    name: contactName,
    email: contactEmail,
    occupation: contactJob
  };
  contact.push(newContact);
  displayContact();
  document.getElementById("contactNames").value = "";
  document.getElementById("contactEmail").value = "";
  document.getElementById("contactJob").value = "";
};
addButton.onclick = addContact;

const deleteContact = index => {
  contact.splice(index, 1);
  displayContact();
};

const searchPlayer = () => {
  const filterName = document.getElementById("searchText").value;
  const filtered = contact.filter(search => search.name == filterName);

  addList.innerHTML = "";

  filtered.forEach((contact, index) => {
    const { name, email, occupation } = contact;

    addList.innerHTML += `<li>${name}, ${email}, ${occupation} <span onclick = "deleteContact(${index})"><img src="https://img.icons8.com/flat_round/64/000000/cancel.png"></span></li>`;
  });
};
searchButton.onclick = searchPlayer;
