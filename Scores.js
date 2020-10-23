async function getQuote(){

    let response = await fetch('http://localhost:8080/LeaderBoard');
    let scores = await response.json();
    console.log("scores=" + scores[0]);

    for(i=0;i<scores.length;i++){

        console.log(scores)

        let tableRowName = document.createElement("tr")
        let tableNames = document.querySelector("#tableNames");
        tableRowName.innerText = scores[i].username;
        tableNames.appendChild(tableRowName)

        let tableRowScore = document.createElement("tr")
        let tableScores = document.querySelector("#tableScores");
        tableRowScore.innerText = scores[i].wins;
        tableScores.appendChild(tableRowScore)


    }
    }
getQuote()
