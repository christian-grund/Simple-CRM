// import { FormsModule } from '@angular/forms';

export class User {
  public salutation: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public birthDate: number; // Timestamp kann einfach in Firebase gespeichert werden
  public street: string;
  public zipCode: number;
  public city: string;
  public id: string;

  // ?: Object kann optional angelegt werden
  constructor(obj?: any) {
    this.salutation = obj ? obj.salutation : ""; // wenn object existiert, kommt obj.firstName rein, ansonsten '';
    this.firstName = obj ? obj.firstName : "";
    this.lastName = obj ? obj.lastName : "";
    this.email = obj ? obj.email : "";
    this.birthDate = obj ? obj.birthDate : "";
    this.street = obj ? obj.street : "";
    this.zipCode = obj ? obj.zipCode : "";
    this.city = obj ? obj.city : "";
    this.id = obj ? obj.id : "";
  }

  public toJSON() {
    return {
      salutation: this.salutation,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      id: this.id
    };
  }

  //   new User(); -> hier könnte ein neuer User angelegt werden, ohne dass das Object benötigt wird
}
