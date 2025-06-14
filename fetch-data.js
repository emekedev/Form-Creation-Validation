async function fetchUserData (){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    dataContainer.innerHTML = '';

    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
    }catch{
        dataContainer.innerHTML = 'Failed to load user data.';
    }

    const userList = createElement('ul');
    users.array.forEach(user => {
        const listItems = document.createElement('li');
        listItems.textContent = user.name;
        userList.appendChild(listItems);
    });
    dataContainer.appendChild(userList);
}


document.addEventListener('DOMContentLoaded', fetchUserData);


