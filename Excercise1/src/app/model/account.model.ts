export class Account{
    public id !: number
    public username : string
    public password : string
    public roles : string
    public name : string
    public email : string
    constructor(username:string,password:string,roles:string,name:string,email:string){
        this.username = username
        this.password = password
        this.roles = roles
        this.name = name,
        this.email = email
    }
}