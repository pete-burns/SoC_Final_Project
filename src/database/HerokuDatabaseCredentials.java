package database;

public enum HerokuDatabaseCredentials {
    SOC_POSTGRES_DATABASE("jdbc:postgresql://ec2-54-155-22-153.eu-west-1.compute.amazonaws.com/ddpq9mv8bcfi6j", "pguvtpiskeufxd", "3bf0ac6b34d42677fe8954a1db7700e014fafb94e0e11b4042b115c889953ea0");

    private final String url;
    private final String user;
    private final String password;

    HerokuDatabaseCredentials(String url, String user, String password) {
        this.url = url;
        this.user = user;
        this.password = password;
    }

    public String getUrl() {
        return url;
    }

    public String getPassword() {
        return password;
    }

    public String getUser() {
        return user;
    }
}
