import {post,get,del,put} from './api.js'

const endpoint={
    product: '/data/products?sortBy=_createdOn%20desc',
    byId: '/data/products/',
  
}
export async function getOwnerBook(ownerId){
    return await get(endpoint.byOwner(ownerId))
}

export async function getOffers(){ //take all offers
    return await get(endpoint.product)
}
export async function getById(id){ // take single offer by _id
    return await get(endpoint.byId+id)
}

export async function createOffer(product){ //create new offer
    return await post('/data/products',product) 
}
export async function deleteOffer(id){ //delete offer
    return await del(endpoint.byId+id)
}
export async function updateOffer(id,product){ //update offer
    return await put(endpoint.byId+id,product)
}