package database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/newUser")

public class NewUserAPI {
    @Autowired
    private rpsController controller;

    @PostMapping(
            path = "/",
            consumes = "application/json",
            produces = "application/json")

    public NewUser userCreated(
            @RequestBody NewUser newUser) throws Exception {


        return controller
                .getResults(newUser.username, newUser.password, newUser.email);
    }
}
