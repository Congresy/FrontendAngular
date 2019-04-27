export class Actor {
    private name: string;
    private surname: string;
    private email: string;
    private phone: string;
    private photo: string;
    private comments: Array<String>;
    private events: Array<String>;
    private place: string;
    private id: string;
    private role: string;
    private posts: Array<String>;
    private followers: Array<String>;
    private folders: Array<String>;
    private conferences: Array<String>;
    private socialNetworks: Array<String>;
    private following: Array<String>;
    private friends: Array<String>;
    private userAccount: string;
    private banned: boolean;
    private private: boolean;


    constructor($name: string, $surname: string, $email: string, $phone: string, $photo: string,
        $comments: Array<String>, $events: Array<String>, $place: string, $role: string, $posts: Array<String>,
        $followers: Array<String>, $folders: Array<String>, $conferences: Array<String>,
        $socialNetworks: Array<String>, $following: Array<String>, $friends: Array<String>, $userAccount: string,
        $banned: boolean, $private: boolean) {
        this.name = $name;
        this.surname = $surname;
        this.email = $email;
        this.phone = $phone;
        this.photo = $photo;
        this.comments = $comments;
        this.events = $events;
        this.place = $place;
        this.role = $role;
        this.posts = $posts;
        this.followers = $followers;
        this.folders = $folders;
        this.conferences = $conferences;
        this.socialNetworks = $socialNetworks;
        this.following = $following;
        this.friends = $friends;
        this.userAccount = $userAccount;
        this.banned = $banned;
        this.private = $private;
    }

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Getter $surname
     * @return {string}
     */
    public get $surname(): string {
        return this.surname;
    }

    /**
     * Getter $email
     * @return {string}
     */
    public get $email(): string {
        return this.email;
    }

    /**
     * Getter $phone
     * @return {string}
     */
    public get $phone(): string {
        return this.phone;
    }

    /**
     * Getter $photo
     * @return {string}
     */
    public get $photo(): string {
        return this.photo;
    }

    /**
     * Getter $comments
     * @return {Array<String>}
     */
    public get $comments(): Array<String> {
        return this.comments;
    }

    /**
     * Getter $events
     * @return {Array<String>}
     */
    public get $events(): Array<String> {
        return this.events;
    }

    /**
     * Getter $place
     * @return {string}
     */
    public get $place(): string {
        return this.place;
    }

    /**
     * Getter $id
     * @return {string}
     */
    public get $id(): string {
        return this.id;
    }

    /**
     * Getter $role
     * @return {string}
     */
    public get $role(): string {
        return this.role;
    }

    /**
     * Getter $posts
     * @return {Array<String>}
     */
    public get $posts(): Array<String> {
        return this.posts;
    }

    /**
     * Getter $followers
     * @return {Array<String>}
     */
    public get $followers(): Array<String> {
        return this.followers;
    }

    /**
     * Getter $folders
     * @return {Array<String>}
     */
    public get $folders(): Array<String> {
        return this.folders;
    }

    /**
     * Getter $conferences
     * @return {Array<String>}
     */
    public get $conferences(): Array<String> {
        return this.conferences;
    }

    /**
     * Getter $socialNetworks
     * @return {Array<String>}
     */
    public get $socialNetworks(): Array<String> {
        return this.socialNetworks;
    }

    /**
     * Getter $following
     * @return {Array<String>}
     */
    public get $following(): Array<String> {
        return this.following;
    }

    /**
     * Getter $friends
     * @return {Array<String>}
     */
    public get $friends(): Array<String> {
        return this.friends;
    }

    /**
     * Getter $userAccount
     * @return {string}
     */
    public get $userAccount(): string {
        return this.userAccount;
    }

    /**
     * Getter $banned
     * @return {boolean}
     */
    public get $banned(): boolean {
        return this.banned;
    }

    /**
     * Getter $private
     * @return {boolean}
     */
    public get $private(): boolean {
        return this.private;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Setter $surname
     * @param {string} value
     */
    public set $surname(value: string) {
        this.surname = value;
    }

    /**
     * Setter $email
     * @param {string} value
     */
    public set $email(value: string) {
        this.email = value;
    }

    /**
     * Setter $phone
     * @param {string} value
     */
    public set $phone(value: string) {
        this.phone = value;
    }

    /**
     * Setter $photo
     * @param {string} value
     */
    public set $photo(value: string) {
        this.photo = value;
    }

    /**
     * Setter $comments
     * @param {Array<String>} value
     */
    public set $comments(value: Array<String>) {
        this.comments = value;
    }

    /**
     * Setter $events
     * @param {Array<String>} value
     */
    public set $events(value: Array<String>) {
        this.events = value;
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
     * Setter $posts
     * @param {Array<String>} value
     */
    public set $posts(value: Array<String>) {
        this.posts = value;
    }

    /**
     * Setter $followers
     * @param {Array<String>} value
     */
    public set $followers(value: Array<String>) {
        this.followers = value;
    }

    /**
     * Setter $folders
     * @param {Array<String>} value
     */
    public set $folders(value: Array<String>) {
        this.folders = value;
    }

    /**
     * Setter $conferences
     * @param {Array<String>} value
     */
    public set $conferences(value: Array<String>) {
        this.conferences = value;
    }

    /**
     * Setter $socialNetworks
     * @param {Array<String>} value
     */
    public set $socialNetworks(value: Array<String>) {
        this.socialNetworks = value;
    }

    /**
     * Setter $following
     * @param {Array<String>} value
     */
    public set $following(value: Array<String>) {
        this.following = value;
    }

    /**
     * Setter $friends
     * @param {Array<String>} value
     */
    public set $friends(value: Array<String>) {
        this.friends = value;
    }

    /**
     * Setter $userAccount
     * @param {string} value
     */
    public set $userAccount(value: string) {
        this.userAccount = value;
    }

    /**
     * Setter $banned
     * @param {boolean} value
     */
    public set $banned(value: boolean) {
        this.banned = value;
    }

    /**
     * Setter $private
     * @param {boolean} value
     */
    public set $private(value: boolean) {
        this.private = value;
    }


}
