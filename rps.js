function Play(userChoice){
    // let attempt=0;
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

    let final='';
    // let win=0,loss=0;

    if(userChoice=='Rock'&&computerPick=='Scissor'){
        final = 'Win';
        win+=1;
    }
    else if(userChoice=='Paper'&&computerPick=='Rock'){
        final = 'Win';
        win+=1;
    }
    else if(userChoice=='Scissor'&&computerPick=='Paper'){
        final = 'Win';
        win+=1;
    }
    else if(userChoice=='Scissor'&&computerPick=='Rock'){
        final = 'Loss';
        loss+=1;
    }
    else if(userChoice=='Rock'&&computerPick=='Paper'){
        final = 'Loss';
        loss+=1;
    }
    else if(userChoice=='Paper'&&computerPick=='Scissor'){
        final = 'Loss';
        loss+=1;
    }
    else{
        final='Tie';
        tie+=1
    }

    var x = document.getElementById("win"); 
    var y = document.getElementById("loss"); 
    var z = document.getElementById("tie"); 

    //change
    if(final==='Win'){
        // y.pause(); 
        // z.pause(); 
        document.body.style.background = "#000 url('/rockPaperScissor/giphy.gif')";
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


    let result= `You picked the ${userChoice}<br>The computer picked the ${computerPick}<br>You ${final}`

    document.getElementById("result").innerHTML = result;

    let score=`Winning count: ${win}<br>Lossing count: ${loss}<br>Number of Attempts ${attempt}`
    document.getElementById("score").innerHTML = score;
}
