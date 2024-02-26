import Home from "./views/Home.js";
import Profile from "./views/Profile.js";

const navigateTo = url => {
    history.pushState(null,null, url);
    router()
}


const router = async () => {
    const routes = [
        {
            path: "/", view: Home
        },
        {
            path: "/profile", view: Profile
        } 
    ];

    const potencialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path  
        }
    })

    let match = potencialMatches.find(potencialMatch => potencialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router())

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href)
        }
    } )
    router()
})