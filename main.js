document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('htpps://api.github.com/users/antony-barbosa')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
          nameElement.innerText = json.name;
          usernameElement.innerText = json.login;
          avatarElement.innerText = json.avatar_url;
          followingElement.innerText = json.following;
          followersElement.innerText = json.followers;
          reposElement.innerText = json.public_repos;
          linkElement.href = json.html_url;
        })

        fetch('https://api.github.com/users/antony-barbosa/followers')
        .then(res => res.json())
        .then(followers => {
            followersElement.innerText = followers.length;
        });

        fetch('https://api.github.com/users/antony-barbosa/followers')
        .then(res => res.json())
        .then(following => {
            followingElement.innerText = following.length;
        });
})