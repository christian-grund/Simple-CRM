export class Order {
  public date: number; // Timestamp kann einfach in Firebase gespeichert werden
  public status: string;
  public amount: number;
  public value: number;

  // ?: Object kann optional angelegt werden
  constructor(obj?: any) {
    this.date = obj ? obj.date : 0; // wenn object existiert, kommt obj.firstName rein, ansonsten '';
    this.status = obj ? obj.status : "";
    this.amount = obj ? obj.amount : 0;
    this.value = obj ? obj.value : 0;
  }

  public toJSON() {
    return {
      date: this.date,
      status: this.status,
      amount: this.amount,
      value: this.value
    };
  }
}
