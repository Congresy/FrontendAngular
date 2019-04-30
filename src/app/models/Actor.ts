export class Actor {
    public name: string;
    public surname: string;
    public email: string;
    public phone: string;
    public photo: string;
    public comments: Array<String>;
    public events: Array<String>;
    public place: string;
    public id: string;
    public role: string;
    public posts: Array<String>;
    public followers: Array<String>;
    public folders: Array<String>;
    public conferences: Array<String>;
    public socialNetworks: Array<String>;
    public following: Array<String>;
    public friends: Array<String>;
    public userAccount: string;
    public banned: boolean;
    public private: boolean;


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
}
