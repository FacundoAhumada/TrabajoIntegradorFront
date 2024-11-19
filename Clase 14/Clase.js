/*
 Utilizar la Fetch API de JavaScript para obtener datos de una API pública y mostrarlos en la consola del navegador al llamar la función,
 o al cargar la página. Por ejemplo, se podrían utilizar datos de usuarios de la api de Json Placeholder https://jsonplaceholder.typicode.com/users
*/

const apiUsers = 'https://jsonplaceholder.typicode.com/users';


let FetchUsers = async () => {
    try {
    let response = await fetch(apiUsers);   //funcion GET
    console.log(response);
    let users = await response.json();
    console.log(users);

    const userList = document.getElementById('userList');
    users.forEach(user => {
        const listItem = document.createElement("li"); 
        listItem.textContent = `${user.id}, ${user.username}`;
        userList.appendChild(listItem);
        
    });
    } catch (error) {
        console.error("Error: ", error);
    }
};

FetchUsers();

/* 
Hacer una lista en HTML y tratar de asignar en esa lista la info de los usuarios que acabo de traer del api
*/
