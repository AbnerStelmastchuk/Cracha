const linksSocialMedia = {
  github: 'AbnerStelmastchuk',
  youtube: 'channel/UC9n9545FsqpTH2RMVk3jCpA',
  facebook: 'Abner.Stelmastchuk',
  instagram: 'stelmastchuk_',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //data.name = 'userName'
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPicture.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
