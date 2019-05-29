export class UserAccount {
    public id: string;
    public username: string;
    public password: string;
    public accountNonExpired: boolean;
    public accountNonLocked: boolean;
    public authorities: Array<String>;
    public credentialsNonExpired: boolean;
    public enabled: boolean;
}
