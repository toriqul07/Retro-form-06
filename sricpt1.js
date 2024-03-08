const second = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const leatestPost = (data);
    // console.log(leatestPost)
    displayPost(leatestPost)
}


const displayPost = leatestPost => {
    
    const latestContainer = document.getElementById('latest-container')

    leatestPost.forEach(leatestPost => {
        console.log(leatestPost)

        const latestPost = document.createElement('div');
        latestPost.classList = `card w-96 bg-base-100 shadow-xl mx-auto`;
        latestPost.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${leatestPost.cover_image}" alt="Shoes"
              class="rounded-xl" />
          </figure>
          <div class="flex gap-5 pl-10 pr-10 mt-5">
            <img src="./images/icon/date.png" alt="">
            <div>${leatestPost?.author?.posted_date || 'No date'}</div>
          </div>
          <div class="card-body">
            <h2 class="card-title">${leatestPost.title}</h2>
            <p>${leatestPost.description}</p>
            <div class="flex space-x-3 items-center">
              <div><img class="w-20 rounded-full" src="${leatestPost.profile_image}" alt=""></div>
              <div>
                <h1>${leatestPost.author.name}</h1>
                <h1>${leatestPost?.author?.designation || 'Unknown'}</h1>
              </div>
            </div>
          </div>
        
        `;
        latestContainer.appendChild(latestPost);

    });
}
second();