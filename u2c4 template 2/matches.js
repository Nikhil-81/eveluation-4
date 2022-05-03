// write js code here corresponding to matches.html





let matchdatacol=JSON.parse(localStorage.getItem("schedule"))


// favourite data storage 
let favouritedata=JSON.parse(localStorage.getItem("favourites"))  || [];

displaymatchdata(matchdatacol)
function displaymatchdata(matchdatacol){

    let tbody =document.querySelector("tbody")
    tbody.innerHTML=[]
    matchdatacol.forEach(function(el){
        console.log(el)
        // creating the elements;
let tr=document.createElement("tr");
let td1=document.createElement("td");
let td2=document.createElement("td");
let td3=document.createElement("td");
let td4=document.createElement("td");
let td5=document.createElement("td");
let td6=document.createElement("td");


// giving the value to elements;
 
td1.innerText=el.number;
td2.innerText=el.team1;
td3.innerText=el.team2;
td4.innerText=el.matchdata;
td5.innerText=el.matchvenue;
td6.innerText="Favourite";
td6.style.color="green"
td6.style.cursor="pointer"


// adding elements to parents

tr.append(td1,td2,td3,td4,td5,td6)
tbody.append(tr)

// giving event listner to td6

td6.addEventListener("click",function(el){
    addtofavi(el)
})

})

function addtofavi(el){
    favouritedata.push(el)
    localStorage.setItem("favourites",JSON.stringify(favouritedata))
}

}




    let x=document.querySelector("#filterVenue")
    x.addEventListener("change",function(event){
        let y=matchdatacol.filter(mf => mf.matchvenue == x.value)
        
        displaymatchdata(y)
    })

    
    
