export class Conferencia {
  private name: string;
  private theme: string;
  private comments: Array<string>;
  private organizator: string;
  private price: number;
  private popularity: number;
  private allowedParticipants: number;
  private description: string;
  private speakersNames: string;
  private start: string;
  private end: string;
  private id: string;
  private place: string;
  private participants: Array<String>;

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

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $theme
   * @return {string}
   */
  public get $theme(): string {
    return this.theme;
  }

  /**
   * Getter $comments
   * @return {Array<string>}
   */
  public get $comments(): Array<string> {
    return this.comments;
  }

  /**
   * Getter $organizator
   * @return {string}
   */
  public get $organizator(): string {
    return this.organizator;
  }

  /**
   * Getter $price
   * @return {number}
   */
  public get $price(): number {
    return this.price;
  }

  /**
   * Getter $popularity
   * @return {number}
   */
  public get $popularity(): number {
    return this.popularity;
  }

  /**
   * Getter $allowedParticipants
   * @return {number}
   */
  public get $allowedParticipants(): number {
    return this.allowedParticipants;
  }

  /**
   * Getter $description
   * @return {string}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter $speakersNames
   * @return {string}
   */
  public get $speakersNames(): string {
    return this.speakersNames;
  }

  /**
   * Getter $start
   * @return {string}
   */
  public get $start(): string {
    return this.start;
  }

  /**
   * Getter $end
   * @return {string}
   */
  public get $end(): string {
    return this.end;
  }

  /**
   * Getter $id
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Getter $place
   * @return {string}
   */
  public get $place(): string {
    return this.place;
  }

  /**
   * Getter $participants
   * @return {Array<String>}
   */
  public get $participants(): Array<String> {
    return this.participants;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $theme
   * @param {string} value
   */
  public set $theme(value: string) {
    this.theme = value;
  }

  /**
   * Setter $comments
   * @param {Array<string>} value
   */
  public set $comments(value: Array<string>) {
    this.comments = value;
  }

  /**
   * Setter $organizator
   * @param {string} value
   */
  public set $organizator(value: string) {
    this.organizator = value;
  }

  /**
   * Setter $price
   * @param {number} value
   */
  public set $price(value: number) {
    this.price = value;
  }

  /**
   * Setter $popularity
   * @param {number} value
   */
  public set $popularity(value: number) {
    this.popularity = value;
  }

  /**
   * Setter $allowedParticipants
   * @param {number} value
   */
  public set $allowedParticipants(value: number) {
    this.allowedParticipants = value;
  }

  /**
   * Setter $description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter $speakersNames
   * @param {string} value
   */
  public set $speakersNames(value: string) {
    this.speakersNames = value;
  }

  /**
   * Setter $start
   * @param {string} value
   */
  public set $start(value: string) {
    this.start = value;
  }

  /**
   * Setter $end
   * @param {string} value
   */
  public set $end(value: string) {
    this.end = value;
  }

  /**
   * Setter $place
   * @param {string} value
   */
  public set $place(value: string) {
    this.place = value;
  }

  /**
   * Setter $participants
   * @param {Array<String>} value
   */
  public set $participants(value: Array<String>) {
    this.participants = value;
  }

}
