package database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/AuthAPI")

public class AuthAPI {
    @Autowired
    private rpsController controller;
    @PostMapping(
            path = "",
            consumes = "application/json",
            produces = "application/json")

    public UserAndResults login(
            @RequestBody Auth auth)
    {


        return controller
                .getResults(auth.username,auth.password);

    }
}

