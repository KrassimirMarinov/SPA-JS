import {post,get,del,put} from './api.js'

const endpoint={
    albums: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    byId: '/data/albums/',
    search: '/data/albums?where=name'
}


export async function getOffers(){
    return await get(endpoint.albums)
}
export async function getById(id){
    return await get(endpoint.byId+id)
}

export async function createOffer(album){
    return await post("/data/albums",album)
}
export async function deleteOffer(id){
    return await del(endpoint.byId+id)
}
export async function updateOffer(id,album){
    return await put(endpoint.byId+id,album)
}
export async function searchAlbum(query){
    return get(`/data/albums?where=name%20LIKE%20%22${query}%22`)
}