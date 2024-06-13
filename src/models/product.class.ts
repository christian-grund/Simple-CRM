// import { FormsModule } from '@angular/forms';

export class Product {
  public name: string;
  public price: number;
  public type: string;
  public id: string;

  // ?: Object kann optional angelegt werden
  constructor(obj?: any) {
    this.name = obj ? obj.name : ""; // wenn object existiert, kommt obj.firstName rein, ansonsten '';
    this.price = obj ? Number(obj.price) : 0; // Umwandlung in Zahl
    this.type = obj ? obj.type : "";
    this.id = obj ? obj.id : "";
  }

  public toJSON() {
    return {
      name: this.name,
      price: this.price,
      type: this.type,
      id: this.id
    };
  }
}
