export class Place {
    private address: string;
    private country: string;
    private details: string;
    private id: string;
    private postalCode: string;
    private town: string;

    constructor($address: string, $country: string, $details: string, $postalCode: string, $town: string) {
        this.address = $address;
        this.country = $country;
        this.details = $details;
        this.postalCode = $postalCode;
        this.town = $town;
    }

    /**
     * Getter $address
     * @return {string}
     */
    public get $address(): string {
        return this.address;
    }

    /**
     * Getter $country
     * @return {string}
     */
    public get $country(): string {
        return this.country;
    }

    /**
     * Getter $details
     * @return {string}
     */
    public get $details(): string {
        return this.details;
    }

    /**
     * Getter $id
     * @return {string}
     */
    public get $id(): string {
        return this.id;
    }

    /**
     * Getter $postalCode
     * @return {string}
     */
    public get $postalCode(): string {
        return this.postalCode;
    }

    /**
     * Getter $town
     * @return {string}
     */
    public get $town(): string {
        return this.town;
    }

    /**
     * Setter $address
     * @param {string} value
     */
    public set $address(value: string) {
        this.address = value;
    }

    /**
     * Setter $country
     * @param {string} value
     */
    public set $country(value: string) {
        this.country = value;
    }

    /**
     * Setter $details
     * @param {string} value
     */
    public set $details(value: string) {
        this.details = value;
    }

    /**
     * Setter $postalCode
     * @param {string} value
     */
    public set $postalCode(value: string) {
        this.postalCode = value;
    }

    /**
     * Setter $town
     * @param {string} value
     */
    public set $town(value: string) {
        this.town = value;
    }

}
