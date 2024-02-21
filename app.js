
// Data
const Reels = [
    {
        img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        name: "Marcus_x"
    },
    {
        img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
        name: "Ann1242"
    },
    {
        img:"https://img.freepik.com/free-photo/close-up-happy-young-bearded-man-casual-clothes-laughing-feeling-joyful-standing-blue-background_1258-65751.jpg",
        name: "TomM"
    },
    {
        img:   "https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg",
        name: "M_i_a"
    },
    {
        img:  "https://www.shutterstock.com/image-photo/cheerful-african-american-guy-smiling-600nw-2029465811.jpg",
        name: "broski12"
    },
    {
        img:  "https://img.freepik.com/free-photo/handsome-young-african-american-with-pink-polo-tshirt_176420-32131.jpg",
        name: "M1ke"
    },
    
];

const Posts = [
    {
        img: "https://www.visitnorfolk.com/wp-content/uploads/2022/06/Beach-Day-Ocean-View.jpeg",
        profile: "https://t4.ftcdn.net/jpg/03/14/06/09/360_F_314060921_IwOZu9SgVuZqZJyusLnmirX2rNKh7h2F.jpg",
        name: "Sofie_x",
        time: 5,
        likes: "3,972",
        desc: "Vacations🥤"
    },
    {
        img: "https://a.cdn-hotels.com/gdcs/production181/d1415/58842a68-207a-4fb1-a85c-102eba660798.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        profile: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG",
        name: "Photograph",
        time: 3,
        likes: "2,202",
        desc: "Insane view"
    },
    {
        img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-09-breakfast-grits%2FNew%20Finals%2F2021-10-12_ATK8035",
        profile: "https://media.istockphoto.com/id/956600100/vector/chef-woman-gesturing-ok.jpg?s=612x612&w=0&k=20&c=ZIGRIbmSgMZRuywZ59JJBgEaDmeVeWmpyFjoUU1iry4=",
        name: "Chef",
        time: 1,
        likes: "14,125",
        desc: "Breakfast🍲🍲🍲"
    },
    {
        img: "https://images3.alphacoders.com/133/1332803.png",
        profile: "https://cdn-prod.medicalnewstoday.com/content/images/articles/317/317443/nice-man-smiling.jpg",
        name: "Barry",
        time: 2,
        likes: "321,605",
        desc: "My new painting"
    },
    {
        img: "https://www.leetdesk.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fleetdesk%2Fc5527f47-def9-433c-9cce-23f286dbfea2_Front.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C374%2C4000%2C2250%26w%3D1920%26h%3D1080&w=3840&q=75",
        profile: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
        name: "Gamer123",
        time: 1,
        likes: "111,605",
        desc: "Setup for 2024"
    },
]

const reelsDiv = document.querySelector(".reels");
const postsDiv = document.querySelector(".posts");

for(let i = 0; i < Reels.length; i++) {
    // Reels
    let newDiv = document.createElement("div")
    let newImg = document.createElement("img")
    let newP =  document.createElement("p")
    
    newImg.src = Reels[i].img;
    newDiv.classList.add("singleReel")
    newP.innerHTML = Reels[i].name
    newP.classList.add("reelUsername")

    newDiv.appendChild(newImg);
    newDiv.appendChild(newP);

    reelsDiv.appendChild(newDiv)

    // Posts
    let newPost = document.createElement("div")
    let newInfo = document.createElement("div");
    let newProfilePic = document.createElement("div")
    let newNavDiv = document.createElement("div")
    let postImg = document.createElement("img")
    let profileImg = document.createElement("img")
    let newA = document.createElement("a");
    let newTime = document.createElement("p")
    let newPar = document.createElement("p")
    let newLikes = document.createElement("p")

    // buttons
    const loveBtn = document.createElement("button");
    loveBtn.classList.add("loveBtn")
    loveBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`

    const comBtn = document.createElement("button");
    comBtn.classList.add("comBtn")
    comBtn.innerHTML = `<i class="fa-regular fa-comment"></i>`

    const sendBtn = document.createElement("button");
    sendBtn.classList.add("sendBtn")
    sendBtn.innerHTML = `<i class="fa-regular fa-paper-plane"></i>`

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("saveBtn")
    saveBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i>`

    


    // post
    newPost.classList.add("singlePost");
    newPost.appendChild(newInfo)
    newInfo.classList.add("postInfo") 
    newInfo.appendChild(newProfilePic)
    newProfilePic.appendChild(profileImg);
    profileImg.src= Posts[i].profile
    newProfilePic.classList.add("profilePicture");
    newInfo.appendChild(newA);
    newInfo.appendChild(newTime)
    newTime.innerHTML = `${Posts[i].time}d`
    newA.innerHTML = Posts[i].name
    newPost.appendChild(postImg);
    postImg.src= Posts[i].img;
    newPost.appendChild(newNavDiv);
    newNavDiv.classList.add("postNav")
    newNavDiv.appendChild(loveBtn)
    newNavDiv.appendChild(comBtn)
    newNavDiv.appendChild(sendBtn)
    newNavDiv.appendChild(saveBtn)
    saveBtn.classList.add("saveBtn")
    // Likes
    newPost.appendChild(newLikes)
    newLikes.innerHTML = `${Posts[i].likes} likes`

    // desc
    newPost.appendChild(newPar);
    newPar.innerHTML = Posts[i].desc
    postsDiv.appendChild(newPost)

}




