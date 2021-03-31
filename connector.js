import { html, render } from 'https://unpkg.com/lit-html?module';
import page from "//unpkg.com/page/page.mjs";

import {login} from "./login.js"
import {register} from "./register.js"
import {homePage} from "./homePage.js"
import {logout as apiLogout} from "./data.js";
import {dashboard} from "./dashboard.js";
import {create} from "./create.js"
import {details} from "./details.js"

// import {createListingPage} from "./createListing.js"
// import {carDetails} from "./details.js"
// import {editPage} from "./editPage.js"
// import {myListingsPage} from "./myListings.js"
// import {search} from "./search.js"

let main=document.querySelector("main");
document.getElementById("logoutBtn").addEventListener("click", logout)
setUserNav();

// page ("/",loadData, homePage);
page("/login", loadData, login)
page("/", loadData, homePage)
page("/register", loadData, register)
page("/dashboard", loadData, dashboard)
page("/create", loadData, create);
page("/details/:id", loadData, details);
// page("/ideaDetails/:id", loadData, ideaDetails);
// page("/editPage/:id", loadData, editPage);
// page ("/myListings", loadData, myListingsPage);




page.start();

function loadData(ctx,next){
    ctx.render=function(view){
        render(view, main)
    }
    ctx.setUserNav=setUserNav;
    setUserNav()
    next()
}

function setUserNav(){
    let guest=document.getElementById("guest");
    let user=document.getElementById("user")
    console.log("set user nav!");
    let userIsLogged=sessionStorage.getItem("userId");
    if (userIsLogged!=null){
        user.style.display="block";
        guest.style.display="none";
    } else {
        user.style.display="none";
        guest.style.display="block";
    }

}

function logout(){
    apiLogout();
    setUserNav();
    page.redirect("/")
}