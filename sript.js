const loadphone = async () =>{
    const res=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data=await res.json();
    const phones=data.posts;
    // console.log(data.posts);
    displayPhones(phones);
}
const displayPhones = phones =>{
    // console.log(phones);
    const phoneContainer=document.getElementById('phone-container'); 
    phones.forEach(phone => {
        console.log(phone);

        const postCard = document.createElement('div');
       postCard.classList = `flex gap-5 bg-base-200 w-[100%] rounded-xl p-8 mb-5`;
       postCard.innerHTML = `
       <div><img class="w-20 rounded-full" src="${phone.image}" alt=""></div>
          <div class="space-y-4">
            <div class="flex gap-x-5">
              <h2 class="text-lg font-bold">#${phone.category}</h2>
              <h2 class="text-lg font-bold">Author: ${phone.author.name}</h2>
            </div>
            <div>
              <h1 class="text-4xl font-bold">${phone.title}</h1>
              <p class="text-lg">${phone.description}</p>
            </div>
            <hr>
            <div class="flex justify-between">
              <div class="flex gap-x-4">
                <h3 class="text-lg flex items-center gap-2"><img src="images/message-regular.svg" alt="" class="w-4">${phone.comment_count}</h3>
                <h3 class="text-lg flex items-center gap-2"><img src="images/eye-solid.svg" alt="" class="w-4">${phone.view_count}</h3>
                <h3 class="text-lg flex items-center gap-2"><img src="images/clock-regular.svg" alt="" class="w-4">${phone.posted_time}</h3>
              </div>
              <button onclick="setRedValue('${phone.title}',${phone?.view_count})" class="bg-green-600 p-3 rounded-full"><img src="images/icons8-add-message-48.png" alt="" class="w-4"></button>
            </div>
          </div> 
          `;
          phoneContainer.appendChild(postCard);
    })
}

// const handlesearch = () =>{
//     // console.log('click handler');
//     const searchField=document.getElementById('search-field');
//     const searchText= searchField.value;
//     // console.log();
    
    
// }
loadphone();
let cnt=0;
const setRedValue=(a,b) =>{
    console.log(a);
    console.log(b);
    cnt++;
    const aa=document.getElementById('cnt_value');
    aa.innerText=cnt;
    const set_selected_items=document.getElementById("selected-button");
    // const div=document.createElement("div");
    set_selected_items.innerHTML+=` <div  class="flex gap-5 pb-10"> <h1>${a}</h1>

    <div  class="flex gap-5 pb-10">
      <img src="images/eye-solid.svg" alt="" class="w-4">
      <p>${b}</p>
    </div></div>
    `;
}