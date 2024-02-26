import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitile("Home");
    }

    async getHtml() {
        return `
        <h1>Profile</h1>`
    }
}