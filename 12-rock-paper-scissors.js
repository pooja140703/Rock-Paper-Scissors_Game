  
        // we usse local storage object
        let score = JSON.parse(localStorage.getItem('score'))|| {
            wins: 0,
            losses : 0,
            ties:0
          };
  
          // if(score == null)
          // {
          //   score ={
          //     wins: 0,
          //     losses : 0,
          //     ties : 0
          //   };
          // }
  
          updateScoreElement();
          let computerMove = '';
  
          //function for picking the computer move
  
          function pickComputerMove() {
            const randomNumber = Math.random(); 
            
          if((randomNumber >= 0)&&(randomNumber<1/3)){
           computerMove = 'rock';
          }else if((randomNumber >=1/3)&&(randomNumber <= 2/3))
          {
            computerMove = 'paper';
          }else{
            computerMove = 'scissors';
          }
  
            return computerMove; 
          }
  
          //function for getting result
  
          function playGame(playerMove){
           const computerMove =  pickComputerMove();
  
            // console.log(computerMove2);
              
            let result ='';
  
          if(playerMove === 'scissors')
          {
            if(computerMove === 'rock'){
              result ='You Lose';
            }else if(computerMove === 'paper'){
              result = 'You Win';
            }else if(computerMove === 'scissors')
            {
              result = 'Tie';
            }
  
          }else if(playerMove === 'paper')
          {
            if(computerMove === 'rock'){
            result ='You Win';
           }else if(computerMove === 'paper'){
            result = 'Tie';
           }else if(computerMove === 'scissors')
           {
            result = 'You Lose';
           }
  
          }else if(playerMove === 'rock')
          {
            if(computerMove === 'rock'){
                result ='Tie';
              }else if(computerMove === 'paper'){
                result = 'You Lose';
              }else if(computerMove === 'scissors')
              {
                result = 'You Win';
              }
          }
  
        if (result === 'You Win')
        {
          score.wins += 1;
        }else if(result === 'You Lose')
        {
          score.losses += 1;
        }else if(result === 'Tie')
        {
          score.ties += 1;
        }
  
        localStorage.setItem('score',JSON.stringify(score));
  
       
       updateScoreElement();
  
       document.querySelector('.js-result')
        .innerHTML = result;
  
       document.querySelector('.js-moves')
        .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">   <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`; 
       
  
  //  alert(`You Picked ${playerMove} . Computer picked ${computerMove}. ${result}
  //  Wins : ${score.wins} ,Losses : ${score.losses}, Ties : ${score.ties}
  //  `)
          }
  
       function updateScoreElement(){
          document.querySelector('.js-score')
           .innerHTML = `Wins : ${score.wins} ,Losses : ${score.losses}, Ties : ${score.ties}`;
          }

      let isAutoPlaying = false;
      let intervalId;

      document.querySelector('.js-rock-button')
          .addEventListener('click' ,() => {
                playGame('rock');
          });

      document.querySelector('.js-paper-button')
          .addEventListener('click' ,() => {
                playGame('paper');
          });

      document.querySelector('.js-scissors-button')
          .addEventListener('click' ,() => {
                playGame('scissors');
          });

      document.querySelector('.js-autoplay-button')
          .addEventListener('click' ,() => {
                autoPlay();
          });

      document.querySelector('.js-reset-button')
          .addEventListener('click' ,() => {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score'); 
    
            updateScoreElement(); 
          });

      document.body.addEventListener('keydown' , (event) => {
          if(event.key === 'r')
          {
            playGame('rock');
          }else if(event.key === 'p'){
            playGame('paper');
          }else if(event.k){}
      })

      
      //cons autoPlay = () => {
           //arrow function code
      //};

      function autoPlay() {
        if(!isAutoPlaying){
          
         intervalId = setInterval(function(){
                        const playerMove = pickComputerMove();
                        playGame(playerMove);
                    } , 1000);

         isAutoPlaying = true;
        }else{
           clearInterval(intervalId);
           isAutoPlaying = false;
        }
      }
  
  
  
