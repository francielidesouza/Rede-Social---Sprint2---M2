
//filltar cards de usuários para renderizar na tela
function filterUsersSugest(arrayUsers) {
    arrayUsersSugest = []

    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i].id == 3 || arrayUsers[i].id == 6 || arrayUsers[i].id == 7) {
            arrayUsersSugest.push(arrayUsers[i])
        }
    }

    return arrayUsersSugest
}
filterUsersSugest(users)


//renderizar cards de usuarios
function renderUsersCard(arrayUsers) {

    const arrayUsersSugest = document.querySelector('.card__container')

    for (let i = 0; i < arrayUsers.length; i++) {

        const element = arrayUsers[i]

        const cardUser = createUserCard(element)

        arrayUsersSugest.appendChild(cardUser)
    }

}
renderUsersCard(arrayUsersSugest)


function createUserCard(elementUser) {

    const cardUserContainer = document.createElement('li')
    const userContainer = document.createElement('div')
    const figure = document.createElement('figure')
    const imgUser = document.createElement('img')
    const dataContainer = document.createElement('div')
    const nameUser = document.createElement('h2')
    const professionUser = document.createElement('small')
    const buttonFollowing = document.createElement('button')

    cardUserContainer.classList.add('card__users')
    userContainer.classList.add('container__user')
    imgUser.classList.add('img')
    dataContainer.classList.add('card__container--data')
    nameUser.classList.add('user__name')
    professionUser.classList.add('user__profession')
    buttonFollowing.classList.add('btn', 'card__btn--follow')

    imgUser.src = elementUser.img
    imgUser.alt = elementUser.user

    nameUser.innerText = elementUser.user
    professionUser.innerText = elementUser.stack

    buttonFollowing.innerText = 'Seguir'
    follow(buttonFollowing)


    cardUserContainer.append(userContainer, dataContainer, buttonFollowing)

    userContainer.append(figure, dataContainer)
    figure.appendChild(imgUser)
    dataContainer.append(nameUser, professionUser)


    return cardUserContainer
}
createUserCard(posts)

//botão seguir
function follow(button) {
    button.addEventListener('click', () => {
        if (button.classList.toggle('card__btn--following')) {
          
            button.innerText = 'Seguindo'
         
        } else {
            button.innerText = 'Seguir'
     
        }
    })
}


//renderizar cards de posts
function filterUserPost(array) {
    let NewArray = []

    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if (array[j].user === users[i].id) {
                NewArray.push(users[i])
            }
        }

    }
    return NewArray
}


function createPostCard(arrayPosts) {

    const postsArticles = document.querySelector('.listPosts__container')

    let arrayUsers = filterUserPost(arrayPosts)
    
    for (let i = 0; i < arrayUsers.length; i++) {
        const cardPostContainer = document.createElement('li')
        const userContainer = document.createElement('div')
        const figure = document.createElement('figure')
        const imgUser = document.createElement('img')
        const dataContainer = document.createElement('div')
        const nameUser = document.createElement('h2')
        const professionUser = document.createElement('small')

        const titleArticle = document.createElement('h1')
        const descriptionArticle = document.createElement('p')

        const containerButtons = document.createElement('div')
        const buttonOpenPost = document.createElement('button')
        const imgLike = document.createElement('img')
        const qtdLike = document.createElement('span')

        cardPostContainer.classList.add('container__card--modal')
        userContainer.classList.add('container__user')
        imgUser.classList.add('img')
        dataContainer.classList.add('card__container--data')
        nameUser.classList.add('user__name')
        professionUser.classList.add('user__profession')

        titleArticle.classList.add('card__article--title')
        descriptionArticle.classList.add('card__article--description')

        containerButtons.classList.add('card__container__footer')
        buttonOpenPost.classList.add('btn', 'card__btn--post', 'btn__modal')
        imgLike.classList.add('img__icone', 'img__like')
        like(imgLike)

        imgUser.src = arrayUsers[i].img
        imgUser.alt = arrayUsers[i].user

        nameUser.innerText = arrayUsers[i].user
        professionUser.innerText = arrayUsers[i].stack

        titleArticle.innerText = arrayPosts[i].title
        descriptionArticle.innerText = arrayPosts[i].text

        buttonOpenPost.dataset.id = arrayPosts[i].id_post
        buttonOpenPost.innerText = 'Abrir Post'
        imgLike.src = './src/assets/img/coracaoVermelho.png'
        imgLike.alt = 'Coração'
        qtdLike.innerText = '25'

        cardPostContainer.append(userContainer, dataContainer, titleArticle, descriptionArticle, containerButtons)

        userContainer.append(figure, dataContainer)
        figure.appendChild(imgUser)
        dataContainer.append(nameUser, professionUser)
        containerButtons.append(buttonOpenPost, imgLike, qtdLike)
        postsArticles.append(cardPostContainer)
    }

}
createPostCard(posts)

//botão like
function like(button) {
    button.addEventListener('click', () => {

        if (button.classList.toggle('img__like')) {
          
            button.classList = 'img__like'
         
        } else {
            button.classList = 'img__icone'
     
        }
    })
}

//modal
function createModal(id) {
  
    const modal = document.querySelector('.modal__container')
   modal.innerHTML = ''
    const arrayModal = []
   
    for (let i = 0; i < posts.length; i++) {
        if(id == posts[i].id_post){
            arrayModal.push(posts[i])
            break
        }

    }
    console.log(arrayModal);
    let arrayUsers = filterUserPost(arrayModal)

    const cardModalContainer = document.createElement('li')
    const buttonCloseModal = document.createElement('button')
    const userContainer = document.createElement('div')
    const figure = document.createElement('figure')
    const imgUser = document.createElement('img')
    const dataContainer = document.createElement('div')
    const nameUser = document.createElement('h2')
    const professionUser = document.createElement('small')
    
    const titleArticle = document.createElement('h1')
    const descriptionArticle = document.createElement('p')
    
    cardModalContainer.classList.add('container__card--posts')
    buttonCloseModal.classList.add('button__modal')
    userContainer.classList.add('container__user')
    imgUser.classList.add('img')
    dataContainer.classList.add('card__container--data')
    nameUser.classList.add('user__name')
    professionUser.classList.add('user__profession')
    
    titleArticle.classList.add('card__article--title')
    descriptionArticle.classList.add('card__article--description')
    
    buttonCloseModal.innerText = 'X'
    
    buttonCloseModal.addEventListener('click', () => {
        modal.close()
    }) 

    console.log(arrayUsers);
    imgUser.src = arrayUsers[0].img
    
    imgUser.alt = arrayUsers[0].user
    
    nameUser.innerText = arrayUsers[0].user
    professionUser.innerText = arrayUsers[0].stack
    
    titleArticle.innerText = arrayModal[0].title
    descriptionArticle.innerText = arrayModal[0].text
    
    cardModalContainer.append(buttonCloseModal, userContainer, dataContainer, titleArticle, descriptionArticle)
    
    userContainer.append(figure, dataContainer)
    figure.appendChild(imgUser)
    dataContainer.append(nameUser, professionUser)
    modal.append(cardModalContainer)
    console.log(buttonCloseModal);
}



function openModal() {
    
    const buttons = document.querySelectorAll('.btn__modal')

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i]
 
       
        button.addEventListener('click', () => {
          
            createModal(button.dataset.id)
        
            const modal = document.querySelector('.modal__container')

            modal.showModal()

        })

    }
}
openModal()


