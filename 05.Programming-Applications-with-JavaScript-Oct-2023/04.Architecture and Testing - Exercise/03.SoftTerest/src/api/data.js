import * as api from "./api.js";

const endpointsURI = {
  getAllIdes: "data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
  ideaById: "data/ideas/", 
  createIdea: "data/ideas",
  deleteIdeaById: "data/ideas/" 
};

//GET request
export function getAllIdeas() {
  return api.get(endpointsURI.getAllIdes);
}

//GET request
export function getIdeaById(id) {
  return api.get(`${endpointsURI.ideaById}${id}`);
}

//POST request
export function createIdea(idea) {
  return api.post(endpointsURI.createIdea, idea);
}

//DEL request

export function deleteIdeaById(id) {
  return api.del(`${endpointsURI.deleteIdeaById}${id}`)
}