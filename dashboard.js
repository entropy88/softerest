import { html, render } from 'https://unpkg.com/lit-html?module';
import {getAllIdeas} from "./data.js"

function dashboardTemplate(data){
    return html`
    <div id="dashboard-holder">
      ${data.length>0?data.map(ideaTemplate):html` <h1>No ideas yet! Be the first one :)</h1>`}
    </div>
    `
}

function ideaTemplate(idea){
    return html`
        <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">${idea.title}</p>
            </div>
            <img class="card-image" src="${idea.img}" alt="Card image cap">
            <a class="btn" href="/details/${idea._id}">Details</a>
        </div>`
}

export async function dashboard(ctx){
    let data= await getAllIdeas();
    ctx.render(dashboardTemplate(data));
}