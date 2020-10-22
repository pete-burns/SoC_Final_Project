async function getQuote(){
    let response = await fetch('http://localhost:8080/LeaderBoard');
    let data = await response.json()
    console.log (data)

    }

    getQuote()

    


    // let sortDirection = false;
    //         async function getScores(){

    //             const response = await fetch("http://127.0.0.1:8080/rpsResults/");

    //             let responseData = await response.json();

    //             console.log("wins "+responseData.wins);
    //             console.log("losses "+responseData.losses);
    //             console.log("draws "+responseData.draws);

    //         }
    //         getScores();
    
    
    //         //* callback function "when this loads, go ahead and load the table data"
    //         window.onload = () => {
    //          loadTableData(personData);    
    //         };
    
    
    
    
    // //        //* This function will inject the content
    
    //         function loadTableData(personData) {
    //             console.log("load table data is working")
    
    //             const tableNames = document.getElementById('tableNames');
    //             console.log(tableNames)

    //             const tableScores = document.getElementById('tableScores');
    //             console.log(tableScores)

    
    //             for(i=0; i<=personData.length-1; i++){
    //               console.log(personData[i].name)  
                  
    //               let rowNames = document.createElement("tr")
    //               rowNames.innerText = personData[i].name

    //               let rowScores = document.createElement("tr")
    //               rowScores.innerText = personData[i].score

    //             tableNames.appendChild(rowNames)  
    //             tableScores.appendChild(rowScores)
                       
            
    //         }
                
    
    
    
    //         } 
            
    //         //loadtableData(personData); Don't need to run this as it is already being run

    //         function sortColumn(columnName) { 
    //             const dataType = typeof personData[0][columnName];
    //             sortDirection = !sortDirection; 
    
    //             switch(dataType) {
    //                 /*if case is number, go ahead and sort column number*/
    //                 case 'number' :
    //                 sortNumberColumn(sortDirection, columnName);
    //                 break;
    
    //             }
                
                
    
    
    //         }
    
    //         function sortNumberColumn(sort, columnName) {
    
    //             /* take original table data and reset it to table data.sort take in a call back function*/
    //             personData = personData.sort((pl, p2) => {
    //                 return sort ? p1[columnName] - p2[coulumnName] : p2[coulumnName] - p1[columnName]
    //             });
    
    //         }