// write js code here corresponding to index.html
// You should add submit event on the form
let form=document.querySelector("#masaiForm")
form.addEventListener("submit",displayMatches)
let mainmatchdata= JSON.parse(localStorage.getItem("schedule")) || []
function displayMatches(){
    event.preventDefault();
    let data={
        number:form.matchNum.value,
        team1:form.teamA.value,
        team2:form.teamB.value,
        matchdata:form.date.value,
        matchvenue:form.venue.value
    }
    console.log(data)
    mainmatchdata.push(data)
    // creating  local storage schedule
    localStorage.setItem("schedule",JSON.stringify(mainmatchdata))
    
}