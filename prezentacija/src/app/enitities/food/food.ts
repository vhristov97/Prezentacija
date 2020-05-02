export class Food {
    name: string
    price: number

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    raisePrice(){
        this.price += 10;
    }
}
