function lockedProfile() {
    const mainRef = document.querySelector("main");
    const profileRef = document.querySelector(".profile");
    const showMoreBtn = document.querySelector("button");
    showMoreBtn.addEventListener("click", showData);
  
  
    async function showData(event) {
      const isUnlocked = event.target.parentElement.querySelector("input[type=radio][value=unlock]").checked;
  
      try {
  
        url = `http://localhost:3030/jsonstore/advanced/profiles`;
        const response = await fetch(url);
    
        if (isUnlocked == true) {
          const data = await response.json();
     
          for (let profileData of Object.values(data)) {
            const profileTemp = profileRef.cloneNode(true);
            mainRef.appendChild(editProfile(profileTemp, profileData));
          }
    
          mainRef.children[0].remove();
    
        }
  
      } catch (error){
        throw new Error("Error");
      }
  
      function editProfile(profileTemp, data) {
        profileTemp.querySelector('input[type=text][name="user1Username"]').value = data.username;
        profileTemp.querySelector('input[type=email][name="user1Email"]').value = data.email;
        profileTemp.querySelector('input[type=text][name="user1Age"]').value = data.age;
        profileTemp.querySelector('input[name="user1Age"]').type = 'email';
  
        const div = profileTemp.querySelector('.user1Username');
        div.className = '';
        div.id = 'user1HiddenFields';
        div.style.display = 'none';
  
  
        const showMoreBth = profileTemp.querySelector("button");
        showMoreBth.addEventListener("click", showMore);
  
        return profileTemp;
  
      }
  
      function showMore(event) {
        debugger
        const button = event.target;
        const divHiddenData = event.target.parentElement;
      
        const unlocked = divHiddenData.querySelector("input[type=radio][value=unlock]").checked;
  
        if (unlocked == true && button.textContent == "Show more") {
          divHiddenData.querySelector('#user1HiddenFields').style.display = "block";
          button.textContent = "Hide it";
  
        } else {
          divHiddenData.querySelector('#user1HiddenFields').style.display = "none";
          button.textContent = "Show more";
        }
  
      }
  
    }
  }