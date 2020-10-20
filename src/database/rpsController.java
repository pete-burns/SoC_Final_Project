package database;

import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import static database.HerokuDatabaseCredentials.SOC_POSTGRES_DATABASE;
@Repository
public class rpsController {
    // Method to return the list of wins
    public PlayerResults getResults(String Username)
    {
        PlayerResults queryResults = null;
        try {
            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
            Connection openSqlConnection = databaseInterface.openConnection();

            System.out.println("connected");

            Statement tableResults = openSqlConnection.createStatement();
            ResultSet results = tableResults.executeQuery(
                    "SELECT wins, losses, draws FROM rps_table WHERE UserName = " + "'" + Username +"'");
            while (results.next()) {
                int wins = results.getInt("wins");
                int losses = results.getInt("losses");
                int draws = results.getInt("draws");

                System.out.println("Wins: " + wins + ", Losses: " + losses + " Draws: " + draws);
                queryResults = new PlayerResults(wins, losses, draws);
            }



            tableResults.close();
            openSqlConnection.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return queryResults;
    }
}
