export default class Item{
    #id;
    #category;
    #item;
    #collection;
    #description;
    #price;
    #shipping;
    
    constructor(id,category,item,collection, description, price, shipping){
        this.#id = id;
        this.#category = category;
        this.#item = item;
        this.#collection = collection;
        this.#description = description;
        this.#price = price;
        this.#shipping = shipping;
    }

    get id(){
        return this.#id;
    }

    get category(){
        return this.#category;
    }

    get item(){
        return this.#item;
    }

    get collection(){
        return this.#collection;
    }

    get description(){
        return this.#description;
    }

    get price(){
        return this.#price;
    }

    get shipping(){
        return this.#shipping;
    }
}