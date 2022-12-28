var values = [1,0,1,0,1,0,0,1,0];
var flag = true;
var player1 ,player2; 
var player1Count =player2Count = 0;
document.querySelector(".container").addEventListener('click',function(e){
    index = e.target.id;
    if(values[index]==1 || values[index]==0 )
    {
        if(flag){
            e.target.innerText = "X";
            values[index] = 'X';
        }
        else{
            e.target.innerText = "O";
            values[index] = 'O';
        }
        flag = !flag ;
        getWinner();
    }
    else
    {
        alert("Not Allowed");
    }
    
})


function getWinner()
{
   winnerIndexs = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
   ]
   for (let i = 0; i < winnerIndexs.length; i++) 
   {
    let [a,b,c] = winnerIndexs[i];
    if(values[a]==values[b] &&values[b]==values[c])
    {
        console.log(a,b,c);
        getScore(a,b,c)
        break;
    }
   }
}



function getScore(x,y,z)
{

    if(flag)
    {
      
      alert(player2 , " Winner");
        player2Count++;

    }
    else
    {
        alert(player1 , " Winner");
        player1Count++;
    }

    document.querySelector("#score1").innerHTML ="<strong>"+player1Count+"</strong>";
    document.querySelector("#score2").innerHTML ="<strong>"+player2Count+"</strong>";
    document.getElementById(x).style.backgroundColor=" gray";
    document.getElementById(y).style.backgroundColor="gray";
    document.getElementById(z).style.backgroundColor="gray";
    values=[null,null,null,null,null,null,null,null,null];
   
}


//Start Game Function
document.querySelector('#start').addEventListener('click',function()
{
    player1 = document.querySelector("#user1").value;
    player2 = document.querySelector("#user2").value;

    if(player1 == "" || player2 == "")
    {
        alert("Please enter the Players Name");
    }
    else
    {
        document.querySelector(".gameDiv").style.visibility = 'visible';
        document.querySelector(".form").style.display = 'none';
        document.querySelector("#name1").innerHTML ="<strong>"+player1+"</strong>";
        document.querySelector("#name2").innerHTML ="<strong>"+player2+"</strong>";
    }
})



document.querySelector("#reset").addEventListener('click' ,function()
{
    var divs = document.querySelectorAll(".div");//[div0, div1,div2]
    for(let i=0;i<divs.length;i++)
    {
        divs[i].innerHTML ="";
        divs[i].style.backgroundColor = 'black';
    }
    values = [1,0,1,0,1,0,0,1,0];
    flag = true;
})
