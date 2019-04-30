export class Evento {
    public allowedParticipants: number;
    public conference: string;
    public description: string;
    public end: string;
    public name: string;
    public participants: Array<string> = ['5b889b907ff5040004bb8864'];
    public place: string;
    public role: string;
    public seatsLeft: number;
    public speakers: Array<string> = [''];
    public start: string;
    public id: string;

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
}
export class NewEvento extends Evento {
    constructor() {
        super(0, '', '', '', '', [], '', '', 0, [], '');
    }
}
