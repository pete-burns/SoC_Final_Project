package database;

public final class PlayerResults {
    public PlayerResults(
            int wins,
            int losses,
            int draws
    ) {
        this.wins = wins;
        this.losses = losses;
        this.draws = draws;
    }
    public final int wins;
    public final int losses;
    public final int draws;
}
