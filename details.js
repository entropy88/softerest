import { html } from 'https://unpkg.com/lit-html?module';
import {getIdeaById} from "./data.js";
import {deleteIdea} from "./data.js"

function ideaDetailtTemplate(idea, isOwner){
    return html`  <div class="container home some">
    <img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>
    ${isOwner?html`<div class="text-center">
        <a id="delBtn" class="btn detb" href="javascript:void(0)">Delete</a>
    </div>`:""}
    
</div>
`
}

export async function details(ctx){

    let ideaId=ctx.params.id;
    let idea=await getIdeaById(ideaId);
    let isOwner=idea._ownerId==sessionStorage.getItem("userId")
    ctx.render(ideaDetailtTemplate(idea, isOwner));

    let delBtn=document.getElementById("delBtn");
delBtn.addEventListener("click", async function(){
    await deleteIdea(ideaId)
})
}



