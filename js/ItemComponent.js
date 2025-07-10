import ItemRepository from "./itemRepository.js";

export default class ItemComponent{
    #itemRepository;
    #url;

    constructor(){
        this.#url = "./data/items.json";
        this.#itemRepository = new ItemRepository();
        this.#getData();
    }

    #getData(){

    }
}