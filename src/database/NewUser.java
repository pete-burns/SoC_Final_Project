package database;

public class NewUser {
    public NewUser(
            String username,
            String password,
            String email

    ){
        this.username = username;
        this.password = password;
        this.email = email;

    }
    public final String username;
    public final String password;
    public final String email;
}
