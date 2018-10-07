export class User {

    private id : String;
    private login : String;
    private passwordFP : String;
    private eMail : String;

    /**
     * Instance de la classe User
     * @param id
     * @param login 
     * @param pwdFP 
     * @param eMail 
     */
    constructor(id : String, login : String, pwdFP : String, eMail : String) {
        this.id = id;
        this.login = login;
        this.passwordFP = pwdFP;
        this.eMail = eMail;        
    }
}