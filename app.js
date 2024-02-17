const reelsDiv = document.querySelector(".reels");

const Reels = [
    {
        img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        name: "XDasd"
    },
    {
        img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
        name: "XDDwds"
    },
    {
        img:"https://img.freepik.com/free-photo/close-up-happy-young-bearded-man-casual-clothes-laughing-feeling-joyful-standing-blue-background_1258-65751.jpg",
        name: "XDaaaxz"
    },
    {
        img:   "https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg",
        name: "XDsds"
    },
    {
        img:  "https://www.shutterstock.com/image-photo/cheerful-african-american-guy-smiling-600nw-2029465811.jpg",
        name: "XDsds"
    },
    {
        img:  "https://img.freepik.com/free-photo/handsome-young-african-american-with-pink-polo-tshirt_176420-32131.jpg",
        name: "XDsds"
    },
];

for(let i = 0; i < Reels.length; i++) {
    let newDiv = document.createElement("div")
    let newImg = document.createElement("img")
    let newP =  document.createElement("p")
    
    newImg.src = Reels[i].img;
    newDiv.classList.add("singleReel")
    newP.innerHTML = Reels[i].name

    newDiv.appendChild(newImg);
    newDiv.appendChild(newP);

    reelsDiv.appendChild(newDiv)
}




