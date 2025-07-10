import Item from "./item.js";

export default class ItemRepository {
    #items = [];

    get items(){
        return this.#items;
    }
}