export class Evento {
    private allowedParticipants: number;
    private conference: string;
    private description: string;
    private end: string;
    private name: string;
    private participants: Array<string> = ['5b889b907ff5040004bb8864'];
    private place: string;
    private role: string;
    private seatsLeft: number;
    private speakers: Array<string> = [''];
    private start: string;
    private id: string;

    constructor($allowedParticipants: number, $conference: string, $description: string,
        $end: string, $name: string, $participants: Array<string>,
        $place: string, $role: string, $seatsLeft: number, $speakers: Array<string>, $start: string) {

        this.allowedParticipants = $allowedParticipants;
        this.conference = $conference;
        this.description = $description;
        this.end = $end;
        this.name = $name;
        this.participants = $participants;
        this.place = $place;
        this.role = $role;
        this.seatsLeft = $seatsLeft;
        this.speakers = $speakers;
        this.start = $start;
    }

    /**
     * Getter $allowedParticipants
     * @return {number}
     */
    public get $allowedParticipants(): number {
        return this.allowedParticipants;
    }

    /**
     * Getter $conference
     * @return {string}
     */
    public get $conference(): string {
        return this.conference;
    }

    /**
     * Getter $description
     * @return {string}
     */
    public get $description(): string {
        return this.description;
    }

    /**
     * Getter $end
     * @return {string}
     */
    public get $end(): string {
        return this.end;
    }

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Getter $participants
     * @return {Array<string> }
     */
    public get $participants(): Array<string> {
        return this.participants;
    }

    /**
     * Getter $place
     * @return {string}
     */
    public get $place(): string {
        return this.place;
    }

    /**
     * Getter $role
     * @return {string}
     */
    public get $role(): string {
        return this.role;
    }

    /**
     * Getter $seatsLeft
     * @return {number}
     */
    public get $seatsLeft(): number {
        return this.seatsLeft;
    }

    /**
     * Getter $speakers
     * @return {Array<string> }
     */
    public get $speakers(): Array<string> {
        return this.speakers;
    }

    /**
     * Getter $start
     * @return {string}
     */
    public get $start(): string {
        return this.start;
    }

    /**
     * Setter $allowedParticipants
     * @param {number} value
     */
    public set $allowedParticipants(value: number) {
        this.allowedParticipants = value;
    }

    /**
     * Setter $conference
     * @param {string} value
     */
    public set $conference(value: string) {
        this.conference = value;
    }

    /**
     * Setter $description
     * @param {string} value
     */
    public set $description(value: string) {
        this.description = value;
    }

    /**
     * Setter $end
     * @param {string} value
     */
    public set $end(value: string) {
        this.end = value;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Setter $participants
     * @param {Array<string> } value
     */
    public set $participants(value: Array<string>) {
        this.participants = value;
    }

    /**
     * Setter $place
     * @param {string} value
     */
    public set $place(value: string) {
        this.place = value;
    }

    /**
     * Setter $role
     * @param {string} value
     */
    public set $role(value: string) {
        this.role = value;
    }

    /**
     * Setter $seatsLeft
     * @param {number} value
     */
    public set $seatsLeft(value: number) {
        this.seatsLeft = value;
    }

    /**
     * Setter $speakers
     * @param {Array<string> } value
     */
    public set $speakers(value: Array<string>) {
        this.speakers = value;
    }

    /**
     * Setter $start
     * @param {string} value
     */
    public set $start(value: string) {
        this.start = value;
    }

    /**
    * Getter $id
    * @return {string}
    */
    public get $id(): string {
        return this.id;
    }


}
export class NewEvento extends Evento {
    constructor() {
        super(0, '', '', '', '', [], '', '', 0, [], '');
    }
}