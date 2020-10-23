import database.DatabaseConnectionInterface;

public class DatabaseTestMain {

    public static void main(String[] args) {
//        This Code creates the table:
//        try{
//            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
//            Connection openSqlConnection = databaseInterface.openConnection();
//
//            System.out.println("connected");
//
//            Statement createTable = openSqlConnection.createStatement();
//            int numberOfRowsIpacted = createTable.executeUpdate( "CREATE TABLE rps_table (" +
//                    "UserName varChar(255)," +
//                    "Password varChar(255)," +
//                    "Wins int," +
//                    "Losses int," +
//                    "Draws int" +
//                    ")");
//            createTable.close();
//            openSqlConnection.close();

//        }


//        This code will insert a new player:
//        try{
//            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
//            Connection openSqlConnection = databaseInterface.openConnection();
//
//            System.out.println("connected");
//
//            Statement insertIntoTable = openSqlConnection.createStatement();
//            insertIntoTable.executeUpdate(
//                    "INSERT INTO rps_table ("+"username, "+"password)"+" VALUES (" + "'Tobi', " + "'c'"+")"
//            );
//            insertIntoTable.close();
//            openSqlConnection.close();
//        }
//        catch(Exception ex){
//            ex.printStackTrace();
//        }
//    }

//          updates game state to db
//        try {
//            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
//            Connection openSqlConnection = databaseInterface.openConnection();
//
//            System.out.println("connected");
//
//            Statement updateTable = openSqlConnection.createStatement();
//            updateTable.executeUpdate(
//                    "UPDATE rps_table SET wins = 35, draws = 8, losses = 8" +
//                            "WHERE UserName = 'Tobi'"
//
//            );
//            updateTable.close();
//            openSqlConnection.close();
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }


//        Returns wins/losses/draws from db
//        try {
//            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
//            Connection openSqlConnection = databaseInterface.openConnection();
//
//            System.out.println("connected");
//
//            Statement tableResults = openSqlConnection.createStatement();
//            ResultSet results = tableResults.executeQuery(
//                    "SELECT wins, losses, draws FROM rps_table WHERE UserName = 'Pete'");
//            while (results.next()) {
//                int wins = results.getInt("wins");
//                int losses = results.getInt("losses");
//                int draws = results.getInt("draws");
//
//                System.out.println("Wins: " + wins + ", Losses: " + losses + " Draws: " + draws);
//            }
//
//            tableResults.close();
//            openSqlConnection.close();
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }


        //        This code will alter the table:
//        try{
//            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
//            Connection openSqlConnection = databaseInterface.openConnection();
//
//            System.out.println("connected");
//
//            Statement alterTable = openSqlConnection.createStatement();
//            alterTable.executeUpdate(
//                    "ALTER TABLE rps_table ADD email varchar(255)"
//            );
//            alterTable.close();
//            openSqlConnection.close();
//        }
//        catch(Exception ex){
//            ex.printStackTrace();
//        }

        //        This code will delete from the table:
//        try {
//            final DatabaseConnectionInterface databaseInterface = new PostgresAdapter(SOC_POSTGRES_DATABASE);
//            Connection openSqlConnection = databaseInterface.openConnection();
//
//            System.out.println("connected");
//
//            Statement alterTable = openSqlConnection.createStatement();
//            alterTable.executeUpdate(
//                    "DELETE FROM rps_table WHERE Username = 'josephSco';"
//            );
//            alterTable.close();
//            openSqlConnection.close();
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }
    }
}

