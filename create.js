import { html } from 'https://unpkg.com/lit-html?module';
import {createIdea} from "./data.js";

function createTemplate(onSubmit){
    return html`
     <div @submit=${onSubmit} class="container home wrapper  my-md-5 pl-md-5">
        <div class=" d-md-flex flex-mb-equal ">
            <div class="col-md-6">
                <img class="responsive-ideas create" src="./images/creativity_painted_face.jpg" alt="">
            </div>
            <form class="form-idea col-md-5" action="#/create" method="post">
                <div class="text-center mb-4">
                    <h1 class="h3 mb-3 font-weight-normal">Share Your Idea</h1>
                </div>
                <div class="form-label-group">
                    <label for="ideaTitle">Title</label>
                    <input type="text" id="title" name="title" class="form-control" placeholder="What is your idea?"
                        required="" autofocus="">
                </div>
                <div class="form-label-group">
                    <label for="ideaDescription">Description</label>
                    <textarea type="text" name="description" class="form-control" placeholder="Description"
                        required=""></textarea>
                </div>
                <div class="form-label-group">
                    <label for="inputURL">Add Image</label>
                    <input type="text" id="imageURl" name="imageURL" class="form-control" placeholder="Image URL"
                        required="">

                </div>
                <button class="btn btn-lg btn-dark btn-block" type="submit">Create</button>

                <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2021.</p>
            </form>
        </div>
    </div>`
}

export async function create(ctx){
    ctx.render(createTemplate(onSubmit));


    async function onSubmit(e){
        e.preventDefault();
        let form = e.target;
        let formData= new FormData(form);
        console.log("so far so good");

        let title=formData.get("title");
        let description=formData.get("description");
        let img=formData.get("imageURL");

        if (title.length<6||description.length<10 || img.length<5){
            return alert ("Please fill all fields properly!")
        }

        await createIdea({title,description,img});
        ctx.page.redirect("/dashboard")

//         •	The form should contain the following validations:
// o	The title should be at least 6 characters long.
// o	The description should be at least 10 characters long.
// o	The image should be at least 5 characters long.

    }
}