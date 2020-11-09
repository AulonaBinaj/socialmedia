export class Auth {
    email: string;
    password: string

    constructor(obj: any) {
        this.email = obj && obj.email,
        this.password = obj && obj.password
    }

    public generateUrlencodedParameters(): string {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('email', this.email);
        urlSearchParams.append('password', this.password);
        return urlSearchParams.toString();
    }
}