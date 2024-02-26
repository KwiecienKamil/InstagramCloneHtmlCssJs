import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitile("Home");
    }

    async getHtml() {
        return `
        <div class="center">
        <div class="center_top">
            <a href="#" class="forYou center_btn active">For You</a>
            <a href="#" class="following center_btn">Following</a>
        </div>
        <div class="reels"></div>
        <div class="posts"></div>
    </div>
    <div class="right">
        <div class="profile">
            <div class="profile_info">
                <div class="profile_avatar">
                    <img src="picture.png" alt="KamilKwiecien">
                </div>
                <div class="profile_name">
                    <a href="/" id="nickname">Kamil</a>
                    <p>Kamil Kwiecień</p>
                </div>
            </div>
            <a href="/" id="switch">Switch</a>
        </div>
        <div class="suggested">
            <p>Suggested for you</p>
            <a href="/">See All</a>
        </div>
        <div class="suggestions">
        </div>
    </div>`
    }
}