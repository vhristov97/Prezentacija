export class Food {
    name: string
    price: number
    inStock: boolean

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    raisePrice(){
        this.price += 10;
    }

    lowerPrice(){
        this.price -= 10;
    }
}
