export class Conferencia {
  public name: string;
  public theme: string;
  public comments: Array<string>;
  public organizator: string;
  public price: number;
  public popularity: number;
  public allowedParticipants: number;
  public description: string;
  public speakersNames: string;
  public start: string;
  public end: string;
  public id: string;
  public place: string;
  public participants: Array<String>;

  constructor($name: string, $theme: string, $comments: Array<string>, $organizator: string, $price: number,
    $popularity: number, $allowedParticipants: number, $description: string, $speakersNames: string,
    $start: string, $end: string, $place: string, $participants: Array<String>) {

    this.name = $name;
    this.theme = $theme;
    this.comments = $comments;
    this.organizator = $organizator;
    this.price = $price;
    this.popularity = $popularity;
    this.allowedParticipants = $allowedParticipants;
    this.description = $description;
    this.speakersNames = $speakersNames;
    this.start = $start;
    this.end = $end;
    this.place = $place;
    this.participants = $participants;
  }
}
