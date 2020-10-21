package database;

import java.sql.Connection;
import java.sql.SQLException;

/**
 * Allows the Main file to connect to a database without needing to know the messy details
 * of How the connection is made
 */
public interface DatabaseConnectionInterface {
    Connection openConnection() throws SQLException;
}
