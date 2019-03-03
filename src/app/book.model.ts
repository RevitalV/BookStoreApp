

export class Book {
  public id: number;
  public name: string;
  public author: string;
  public description: string;
  public publisher: string;
  public imagePath: string;
  public price: number;
  public numOfItems: number;

  constructor(id: number, name: string, author: string, description: string, publisher: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.description = description;
    this.publisher = publisher;
    this.imagePath = imagePath;
    this.numOfItems = 1;
    this.price = 5;
  }
}
