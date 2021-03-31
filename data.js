import * as api  from "./api.js"

const host="http://localhost:3030"
api.settings.host=host;



export const login=api.login;
export const register=api.register;
export const logout=api.logout;

export async function getAllIdeas(){
let data=await api.get(host+"/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc");
return data;
}

export async function createIdea(idea){
await api.post(host+"/data/ideas",idea)
}

export async function getIdeaById(id){
    let car=await api.get(host+"/data/ideas/"+id);
    return car;
}

export async function deleteIdea(id){
    await api.del(host+"/data/ideas/"+id);
}




