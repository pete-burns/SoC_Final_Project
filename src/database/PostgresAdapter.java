package database;

import database.DatabaseConnectionInterface;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class PostgresAdapter implements DatabaseConnectionInterface {

    private final HerokuDatabaseCredentials herokuDatabaseCredentials;

    /**
     * Connects to a Postgres Databases
     * @param herokuDatabaseCredentials - the Url, User and Password for a Heroku database
     */
    public PostgresAdapter(final HerokuDatabaseCredentials herokuDatabaseCredentials) {
        this.herokuDatabaseCredentials = herokuDatabaseCredentials;
    }

    /**
     * Connection guidelines taken from:
     * https://stackoverflow.com/questions/25095600/how-to-connect-to-my-heroku-postgresql-database-from-java
     *
     * @return SQL Connection - allows JDBC operations
     * @throws SQLException
     */
    @Override
    public Connection openConnection() throws SQLException {

        // SSL is always REQUIRED for Heroku Postgres Dbs
        String herokuUrl = herokuDatabaseCredentials.getUrl() + "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";
        String username = herokuDatabaseCredentials.getUser();
        String password = herokuDatabaseCredentials.getPassword();

        // Using JDBC postgres to create a connection (imported JDBC driver in Pom)
        return DriverManager.getConnection(herokuUrl, username, password);
    }
}
