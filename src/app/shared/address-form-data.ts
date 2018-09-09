export class AddressFormData {

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public street: string,
    public flatNr: number,
    public city?: string,
    public postCode?: number) {
  }
}

