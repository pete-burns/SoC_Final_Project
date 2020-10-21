package database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/rpsResults")

public class ResultsAPI {
    @Autowired
    private rpsController controller;

    // Implementing a GET method
    // to get the list of all
    // the employees
    @GetMapping(
            path = "/{name}",
            produces = "application/json")

    public PlayerResults getPlayerResults(@PathVariable("name") String name) {

        return controller
                .getResults(name);
    }
}
