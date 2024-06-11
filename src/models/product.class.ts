// import { FormsModule } from '@angular/forms';

export class Product {
  public name: string;
  public price: number;
  public type: string;

  // ?: Object kann optional angelegt werden
  constructor(obj?: any) {
    this.name = obj ? obj.name : ""; // wenn object existiert, kommt obj.firstName rein, ansonsten '';
    this.price = obj ? obj.price : "";
    this.type = obj ? obj.type : "";
  }

  public toJSON() {
    return {
      name: this.name,
      price: this.price,
      type: this.type
    };
  }
}
