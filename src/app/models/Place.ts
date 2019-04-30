export class Place {
    public address: string;
    public country: string;
    public details: string;
    public id: string;
    public postalCode: string;
    public town: string;

    constructor($address: string, $country: string, $details: string, $postalCode: string, $town: string) {
        this.address = $address;
        this.country = $country;
        this.details = $details;
        this.postalCode = $postalCode;
        this.town = $town;
    }
}
