function fetchData() {
    fetch('https://random-data-api.com/api/users/random_user?size=5')
      .then(response => response.json())
      .then(data => {
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';
  
        data.forEach(user => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          const name = document.createElement('h3');
          name.textContent = user.first_name + ' ' + user.last_name;
  
          const email = document.createElement('p');
          email.textContent = user.email;
  
          const address = document.createElement('p');
          address.textContent = user.address.city + ', ' + user.address.state;
  
          card.appendChild(name);
          card.appendChild(email);
          card.appendChild(address);
          cardContainer.appendChild(card);
        });
      })
      .catch(error => console.log(error));
  }
  
  document.addEventListener('DOMContentLoaded', fetchData);