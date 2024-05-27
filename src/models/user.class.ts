export class User {
  firstName: string;
  lastName: string;
  birthDate: number; // Timestamp kann einfach in Firebase gespeichert werden
  street: string;
  zipCode: number;
  city: string;

  // ?: Object kann optional angelegt werden
  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : ''; // wenn object existiert, kommt obj.firstName rein, ansonsten '';
    this.lastName = obj ? obj.lastName : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
  }

  //   new User(); -> hier könnte ein neuer User angelegt werden, ohne dass das Object benötigt wird
}
