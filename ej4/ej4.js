const API_URL = 'http://localhost:3000/users';
const listarUsers = document.getElementById("users");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputRole = document.getElementById("role");
const addButton = document.getElementById("add");

async function renderUsers() {
    const users = await search();
    let inner = ""
    users.forEach(element => {
        const card = `<li>${element.name} | ${element.role} | ${element.email} | <button onclick="promote('${element.id}')">Promote</button> | <button onclick="demote('${element.id}')">Demote</button> | <button onclick="deleteUser('${element.id}')">Delete</button></li>`;
        inner += card;
    });

    listarUsers.innerHTML += inner;
}

async function promote(id) {
    const user = await searchOne(id);
    let newRole = "";
    if (user.role == "Editor") {
        newRole = "Admin"
    }
    if (user.role == "Viewer") {
        newRole = "Editor"
    }

    await modifyRole(id, newRole);
    listarUsers.innerHTML = "";
    renderUsers();
}


async function demote(id) {
    const user = await searchOne(id);
    let newRole = "";
    if (user.role == "Admin") {
        newRole = "Editor"
    }
    if (user.role == "Editor") {
        newRole = "Viewer"
    }

    await modifyRole(id, newRole);
    listarUsers.innerHTML = "";
    renderUsers();
}

async function deleteUser(id){
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    listarUsers.innerHTML = "";
    renderUsers();
    return data
  } catch (error) {
    console.log("Error al crear la tarea: ", error)
  }
}

addButton.addEventListener('click', async () => {
    let newTasks = {
        name: document.getElementById("name").value,
        role: document.getElementById("email").value,
        email: document.getElementById("role").value
    };
    try {
        const response = await fetch(`${API_URL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTasks)
        });
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        listarUsers.innerHTML = "";
        renderUsers();
        return data
    } catch (error) {
        console.log("Error al crear usuario: ", error)
    }
});


async function searchOne(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log("Error al obtener los usuarios: ", error)
    }
}

async function search() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log("Error al obtener los usuarios: ", error)
    }
}

async function modifyRole(id, role) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "role": role
            })
        });
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log("Error al modificar: ", error)
    }
}


renderUsers();