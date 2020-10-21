package database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.net.URI;
import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/LeaderBoard")

public class LeaderBoardAPI {

        @Autowired
        private rpsController controller;

        @GetMapping(
                path = "",
                produces = "application/json")

        public ArrayList<LeaderBoard> getLeaderBoard() {

            return controller
                    .getResults();
        }
    }

