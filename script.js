const users = [
    { id: 1, name: "John", age: "18", profession: "developer" },
    { id: 2, name: "Jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
  ];

  function renderUserList() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";
      // Inside the renderUserList() and renderFilteredUserList() functions
      card.innerHTML = `
      <p> ${user.id}      Name: ${user.name}      Profession: ${user.profession}     Age: ${user.age} </p>
       `;


      userList.appendChild(card);
    });
  }

  function filterUsers() {
    const selectedProfession = document.getElementById("profession").value;

    if (selectedProfession === "") {
      alert("Please select a profession before clicking the button.");
      return;
    }

    const filteredUsers = users.filter(user => user.profession === selectedProfession);
    renderFilteredUserList(filteredUsers);
  }

  function renderFilteredUserList(filteredUsers) {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    filteredUsers.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
      <p> ${user.id}      Name: ${user.name}      Profession: ${user.profession}     Age: ${user.age} </p>
       `;
      userList.appendChild(card);
    });
  }

  function addUser() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const profession = document.getElementById("newProfession").value;

    if (name && age && profession) {
      const id = users.length + 1;
      const newUser = { id, name, age, profession };
      users.push(newUser);
      renderUserList();
    } else {
      alert("Please fill in all the fields before adding a user.");
    }
  }

  renderUserList();