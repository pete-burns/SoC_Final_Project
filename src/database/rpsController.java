package database;

import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import static database.HerokuDatabaseCredentials.SOC_POSTGRES_DATABASE;
@Repository
public class rpsController {
    // Method to return the list of wins
    public PlayerResults getResults(String Username) {
        PlayerResults queryResults = null;
        try {
            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
            Connection openSqlConnection = databaseInterface.openConnection();

            System.out.println("connected");

            Statement tableResults = openSqlConnection.createStatement();
            ResultSet results = tableResults.executeQuery(
                    "SELECT wins, losses, draws FROM rps_table WHERE UserName = " + "'" + Username + "'");
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

    // Authenticate user

    // Add user

    // Update user score

    // Select all for leader board
    public ArrayList<LeaderBoard> getResults() {
        ArrayList<LeaderBoard> queryResults = new ArrayList<>();
        try {
            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
            Connection openSqlConnection = databaseInterface.openConnection();

            System.out.println("connected");

            Statement tableResults = openSqlConnection.createStatement();
            ResultSet results = tableResults.executeQuery(
                    "SELECT username, wins FROM rps_table ORDER BY wins desc LIMIT 10 ");
            while (results.next()) {
                String username = results.getString("username");
                int wins = results.getInt("wins");
//                int losses = results.getInt("losses");
//                int draws = results.getInt("draws");

                System.out.println("User name: " + username + " Wins: " + wins);
                queryResults.add(new LeaderBoard(username, wins));
            }


            tableResults.close();
            openSqlConnection.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return queryResults;
    }
    //
    //
    //
    // Authentification of user and returning username and results
    //
    public UserAndResults getResults(String Username, String password) {

        UserAndResults queryResults = null;
        try {
            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
            Connection openSqlConnection = databaseInterface.openConnection();

            System.out.println("connected");

            Statement tableResults = openSqlConnection.createStatement();
            ResultSet results = tableResults.executeQuery(
                    "SELECT Username FROM rps_table WHERE UserName = " + "'" + Username + "'" + "AND Password = '" + password+ "'");

            if (!results.next()) {
// no matches in table - throw exception
            throw new Exception("User Invalid");
            }


        } catch (Exception ex) {
            ex.printStackTrace();
        }

        PlayerResults playerResults = null;
        try {
            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
            Connection openSqlConnection = databaseInterface.openConnection();

            System.out.println("connected");

            Statement tableResults = openSqlConnection.createStatement();
            ResultSet results = tableResults.executeQuery(
                    "SELECT wins, losses, draws FROM rps_table WHERE UserName = " + "'" + Username + "'");
            while (results.next()) {
                int wins = results.getInt("wins");
                int losses = results.getInt("losses");
                int draws = results.getInt("draws");

                System.out.println("Wins: " + wins + ", Losses: " + losses + " Draws: " + draws);
                playerResults = new PlayerResults(wins, losses, draws);
            }


            tableResults.close();
            openSqlConnection.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return new UserAndResults(Username, playerResults);
    }
}
