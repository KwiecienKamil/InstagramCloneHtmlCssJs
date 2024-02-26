window.onload = function()
{
    const path = window.location.pathname.split("/");

    switch(path[1])
    {
        case "":
        {
            loadPage("home");
            break;
        }
        case "profile":
        {
            loadPage("profile");
            break;
        }
        default:
        {
            loadPage("404");
            break;
        }
    }

    document.querySelectorAll(".menu__item").forEach((item) =>
    {
        item.addEventListener("click", function()
        {
            const path = item.getAttribute("value");
            loadPage(path);
            if(path == "home")
            {
                window.history.pushState("", "", "/");
                return;
            }

            window.history.pushState("", "", path);
        });
    });

    function loadPage($path)
    {
        if($path == "") return;

        const container = document.getElementById("container");

        const request = new XMLHttpRequest();
        request.open("GET", "pages/" + $path + ".html");
        request.send();
        request.onload = function()
        {
            if(request.status == 200)
            {
                container.innerHTML = request.responseText;
                document.title = $path;
            }
        }
    }
}
// Data
const Reels = [
    {
        img: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=ais",
        name: `Marcus_x`
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1664888035613-a6c75aa15b01?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHNtaWxpbmd8ZW58MHx8MHx8fDA%3D",
        name: "Ann1242"
    },
    {
        img:"https://thumbs.dreamstime.com/b/healthy-smile-dentistry-concept-man-handsome-guy-smiling-white-background-cheerful-macho-happy-satisfied-teeth-health-beauty-172096976.jpg",
        name: "TomM"
    },
    {
        img:   "https://img.freepik.com/premium-photo/close-up-silly-cute-smiling-brunette-girl-leaning-hands-looking-with-admiration-white_1258-30409.jpg?w=360",
        name: "M_i_a"
    },
    {
        img:  "https://www.aconsciousrethink.com/wp-content/uploads/2021/08/when-a-guy-smiles-at-you.jpg",
        name: "broski12"
    },
   
];

const Posts = [
    {
        img: "https://www.visitnorfolk.com/wp-content/uploads/2022/06/Beach-Day-Ocean-View.jpeg",
        profile: "https://t4.ftcdn.net/jpg/03/14/06/09/360_F_314060921_IwOZu9SgVuZqZJyusLnmirX2rNKh7h2F.jpg",
        name: "Sofie_x",
        time: 5,
        likes: 3972,
        desc: "Vacations🥤"
    },
    {
        img: "https://a.cdn-hotels.com/gdcs/production181/d1415/58842a68-207a-4fb1-a85c-102eba660798.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        profile: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG",
        name: "Photograph",
        time: 3,
        likes: 2202,
        desc: "Insane view"
    },
    {
        img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-09-breakfast-grits%2FNew%20Finals%2F2021-10-12_ATK8035",
        profile: "https://media.istockphoto.com/id/956600100/vector/chef-woman-gesturing-ok.jpg?s=612x612&w=0&k=20&c=ZIGRIbmSgMZRuywZ59JJBgEaDmeVeWmpyFjoUU1iry4=",
        name: "Chef",
        time: 1,
        likes: 14125,
        desc: "Breakfast🍲🍲🍲"
    },
    {
        img: "https://images3.alphacoders.com/133/1332803.png",
        profile: "https://cdn-prod.medicalnewstoday.com/content/images/articles/317/317443/nice-man-smiling.jpg",
        name: "Barry",
        time: 2,
        likes: 321605,
        desc: "My new painting"
    },
    {
        img: "https://www.leetdesk.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fleetdesk%2Fc5527f47-def9-433c-9cce-23f286dbfea2_Front.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C374%2C4000%2C2250%26w%3D1920%26h%3D1080&w=3840&q=75",
        profile: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
        name: "Gamer123",
        time: 1,
        likes: 111605,
        desc: "Setup for 2024"
    },
];




const reelsDiv = document.querySelector(".reels");
const postsDiv = document.querySelector(".posts");
const heartBtn = document.querySelector(".like") 


for(let i = 0; i < Reels.length; i++) {
    // Reels
    let newDiv = document.createElement("div")
    let newImg = document.createElement("img")
    let nickDiv = document.createElement("div")
    let newP =  document.createElement("p")
    let verified = document.createElement("span");

    verified.innerHTML = `<i class="fa-solid fa-certificate"></i>`
    verified.classList.add("verified")
    
    newImg.src = Reels[i].img;
    newDiv.classList.add("singleReel")
    newP.innerHTML = Reels[i].name
    newP.classList.add("reelUsername")

    newDiv.appendChild(newImg);
    newDiv.appendChild(nickDiv);
    nickDiv.classList.add("reels_userinfo")

    nickDiv.style.display = "flex"
    nickDiv.style.alignItems = "center"
    nickDiv.style.justifyContent = "center"
    nickDiv.style.gap = ".2rem"

    nickDiv.appendChild(newP)
    nickDiv.appendChild(verified)
    reelsDiv.appendChild(newDiv)

}
for(let i = 0; i < Reels.length; i++) {
    // Posts
    let newPost = document.createElement("div")
    let newInfo = document.createElement("div");
    let descDiv = document.createElement("div");
    let newProfilePic = document.createElement("div")
    let newNavDiv = document.createElement("div")
    let postImg = document.createElement("img")
    let profileImg = document.createElement("img")
    let newA = document.createElement("a");
    let newA2 = document.createElement("a");
    let newTime = document.createElement("p")
    let newPar = document.createElement("p")
    let newLikes = document.createElement("p")

    // buttons
    const loveBtn = document.createElement("button");
    loveBtn.classList.add("loveBtn")
    loveBtn.innerHTML = `<i class="fa-regular fa-heart like"></i>`

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

    loveBtn.addEventListener("click", () => {
        newLikes.innerHTML = `${Posts[i].likes + 1} likes`
        
    })

    // desc
    newPost.appendChild(descDiv)
    descDiv.style.display = "flex";
    descDiv.style.alignItems = "center";
    descDiv.style.gap = "5px";
    descDiv.style.marginTop = "5px";
    descDiv.appendChild(newA2);
    descDiv.appendChild(newPar);
    newA2.innerHTML = Posts[i].name
    newA2.style.fontWeight = "600"
    newPar.innerHTML = Posts[i].desc
    postsDiv.appendChild(newPost)
}

// suggestions
    const suggestions = [
        {
            name: "_rl9",
            img: "https://pbs.twimg.com/profile_images/1560186554781519873/wq6vdCir_400x400.jpg"
    },
    {
        name: "cristiano",
        img: "https://img.a.transfermarkt.technology/portrait/big/8198-1694609670.jpg?lm=1"
    },
    {
        name: "leomessi",
        img: "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg"
    }
];
    let mainSugDiv = document.querySelector(".suggestions")

    for(let i = 0; i < suggestions.length; i++) {
        let verified = document.createElement("span");
        verified.innerHTML = `<i class="fa-solid fa-certificate"></i>`
        verified.classList.add("verified")
    let sugDiv = document.createElement("div");
    let leftDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    let userInfoDiv = document.createElement("div");

    let sugBtn = document.createElement("button");
    let sugADiv = document.createElement("div");
    let sugA = document.createElement("a");
    let sugP = document.createElement("p");
    let sugImg = document.createElement("img")


    mainSugDiv.appendChild(sugDiv);
    sugDiv.classList.add("suggestion");
    sugDiv.appendChild(leftDiv);
    sugDiv.appendChild(sugBtn)
    leftDiv.appendChild(imgDiv)
    leftDiv.appendChild(userInfoDiv);
    leftDiv.classList.add("sugLeftDiv")

    imgDiv.appendChild(sugImg)
    imgDiv.classList.add("sugImgDiv")
    sugImg.src = suggestions[i].img
    userInfoDiv.classList.add("userInfoDiv");
    userInfoDiv.appendChild(sugADiv)
    sugADiv.appendChild(sugA)
    sugADiv.appendChild(verified)
    verified.style.paddingLeft = "5px"
    userInfoDiv.appendChild(sugP)

    sugBtn.classList.add("suggestion_btn")
    sugBtn.innerHTML = "Follow";
    sugA.innerHTML = suggestions[i].name
    sugP.innerHTML = "Suggested For You"
    }


// Functionality

const forYouBtn = document.querySelector(".forYou");
const followingBtn = document.querySelector(".following");

const centerBtns = document.querySelectorAll(".center_btn");

centerBtns.forEach(btn => {
    btn.addEventListener(("click"), () => {
        centerBtns.forEach(btn => btn.classList.remove("active"))
        btn.classList.add("active")
    })
})

// Follow

const followBtns = document.querySelectorAll(".suggestion_btn");

followBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.innerHTML = "Followed"
        btn.style.color = "gray";
        btn.style.cursor = "default"
    })
})




