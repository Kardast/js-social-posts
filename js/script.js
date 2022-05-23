const myContainer = document.getElementById("container");
console.log(myContainer);

posts.forEach((element, index) => {

    myContainer.innerHTML +=
    `
    <div class="post">

            <div class="post__header">

                <div class="post-meta">

                    <div class="post-meta__icon">

                        <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                    </div>

                    <div class="post-meta__data">

                        <div class="post-meta__author">${element.author.name}</div>

                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>

            <div
            class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.
            </div>

            <div class="post__image">

                <img src="${element.media}" alt="">
            </div>

            <div class="post__footer">

                <div class="likes js-likes">

                    <div class="likes__cta">

                        <a class="like-button  js-like-button" href="javascript:void(0)" data-postid="1">

                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>

                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>

                    <div class="likes__counter">
                        
                        Piace a <b id="like-counter-${index}" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>

    `;
});

const iLikeIt = document.querySelectorAll(".js-like-button");
console.log(iLikeIt);

// iLikeIt.forEach((item, index) => 

//     item.addEventListener("click",
//     function() {
//         console.log(this);
//         this.classList.add("like-button--liked");
//         posts[index].likes++;
//         console.log(posts[index].likes);
//         let myCounter = document.getElementById("like-counter-" + index);
//         myCounter.innerHTML = `<b id="like-counter-${index}" class="js-likes-counter">${posts[index].likes}</b>`;
//         let myArray = [];
//         myArray.push(posts[index].id); 
//         console.log(myArray);
//     })

// );

let myArray = [];

iLikeIt.forEach((item, index) => {

    item.addEventListener("click", 
        function () {
            item.classList.toggle("like-button--liked");
            if (item.classList.contains("like-button--liked")) {
                posts[index].likes++;
                myArray.push(posts[index].id);

            } else {
                posts[index].likes--;
                myArray.pop(posts[index].id);

            }
            console.log(posts[index].likes);
            let myCounter = document.getElementById("like-counter-" + index);
            myCounter.innerHTML = `<b id="like-counter-${index}" class="js-likes-counter">${posts[index].likes}</b>`;
            console.log(myArray);
        })

});










