package database;

public class UpdateUserScore {
    public UpdateUserScore(
            String username,
            int wins,
            int losses,
            int draws

    ){
        this.username = username;
        this.wins = wins;
        this.draws = losses;
        this.losses = draws;

    }
    public final String username;
    public final int wins;
    public final int losses;
    public final int draws;
}
