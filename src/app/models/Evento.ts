export class Evento {
    allowedParticipants: number = 0;
    conference: string = '';
    description: string = '';
    end: string = '';
    name: string = '';
    participants: Array<string> = [""];
    place: string = '';
    role: string = 'Ordinary';
    seatsLeft: number = 0;
    speakers: Array<string> = [""];
    start: string = '';
}