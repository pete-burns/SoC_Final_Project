package database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/updateUserScoreAPI")

public class UpdateUserScoreAPI {
        @Autowired
        private rpsController controller;
        @PostMapping(
                path = "/",
                consumes = "application/json",
                produces = "application/json")

        public UpdateUserScore updateUserScore(
                @RequestBody UpdateUserScore updateUserScore) throws Exception {


            return controller
                    .getResults(updateUserScore.username,updateUserScore.wins,updateUserScore.losses,updateUserScore.draws);

        }


}
