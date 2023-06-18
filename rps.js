
let score=JSON.parse(localStorage.getItem('sorce')) || {
    attempt : 0,
    win : 0,
    loss : 0,
    tie : 0
}

function Play(userChoice){
    



    const Randomchoice = Math.random();
    let computerPick= '';


    if(Randomchoice>=0&&Randomchoice<=1/3){
        computerPick= 'Rock';
    }
    else if(Randomchoice>=1/2&&Randomchoice<=2/3){
        computerPick= 'Paper';
    }
    else{ 
        computerPick= 'Scissor';
    }

    if(computerPick=='Rock'){
        document.getElementById('robot').innerHTML='<p>Computer Picked</p><i class="fa-solid fa-hand-back-fist fa-5x"></i>'
    }
    else if(computerPick=='Paper'){
        document.getElementById('robot').innerHTML='<p>Computer Picked</p><i class="fa-solid fa-hand fa-5x" ></i>'
    }
    else{
        document.getElementById('robot').innerHTML='<p>Computer Picked</p><i class="fa-solid fa-hand-scissors fa-5x" ></i>'
    }


    let final='';



    // let score11 = localStorage.getItem('score');
    // console.log(score11);





    if(userChoice=='Rock'&&computerPick=='Scissor'){
        final = 'Win';
        score.win+=1;
    }
    else if(userChoice=='Paper'&&computerPick=='Rock'){
        final = 'Win';
        score.win+=1;
    }
    else if(userChoice=='Scissor'&&computerPick=='Paper'){
        final = 'Win';
        score.win+=1;
    }
    else if(userChoice=='Scissor'&&computerPick=='Rock'){
        final = 'Loss';
        score.loss+=1;
    }
    else if(userChoice=='Rock'&&computerPick=='Paper'){
        final = 'Loss';
        score.loss+=1;
    }
    else if(userChoice=='Paper'&&computerPick=='Scissor'){
        final = 'Loss';
        score.loss+=1;
    }
    else{
        final='Tie';
        score.tie+=1
    }

    // localStorage.setItem('sorce',JSON.stringify(score));

    var x = document.getElementById("win"); 
    var y = document.getElementById("loss"); 
    var z = document.getElementById("tie"); 

    //change bg
    if(final==='Win'){
        // y.pause(); 
        // z.pause(); 
        document.body.style.background = "#000 url('/giphy.gif')";
        x.play(); 
    }
    else if(final==='Loss'){
        // x.pause(); 
        // z.pause(); 
        document.body.style.background = "red" ; 
        y.play();   
    }
    else{
        // y.pause(); 
        // x.pause(); 
        document.body.style.background = "black";   
        z.play(); 
    }

    localStorage.setItem('score',JSON.stringify(score));

    document.getElementById("winNumber").innerHTML=score.win;
    document.getElementById("lossNumber").innerHTML=score.loss;



    let result= `You ${final}`

    document.getElementById("result").innerHTML = result;

    // let scorecount=`Winning count: ${score.win}<br>Lossing count: ${score.loss}<br>Number of Attempts: ${score.attempt}`
    // document.getElementById("score").innerHTML = scorecount;
    
}

function resetScore(){
    score={
        attempt : 0,
        win : 0,
        loss : 0,
        tie : 0
    }
    document.body.style.background = "black";
    document.getElementById('robot').innerHTML=`<p>Let's Play with me</p><i class="fa-solid fa-robot fa-5x"></i>`
   


    localStorage.setItem('score',JSON.stringify(score));
    
    document.getElementById("winNumber").textContent = score.win;
    document.getElementById("lossNumber").textContent = score.loss;
}
