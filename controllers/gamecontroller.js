const Player = require('../utils/PlayerClass');
const gameFunc = require('../utils/game');

// this function generates equally likely random numbers
const randomGenerator = () => {
    const num = Math.random();
    if(num>0 && num<=0.33) return 0;
    if(num<=0.66) return 1;
    if(num<=0.99) return 2;
    else return randomGenerator();
}

module.exports.fetchResult = async (req,res) => {
    const numOfPlayers=req.params.num;
    try{
        const players ={}
        
        let output = [];
        const possible_choices = ['rock', 'paper', 'scissors'];
        // creating players object which contains each player as a key
        for(let i=1;i<=numOfPlayers;i++){
            players[`Player${i}`] = new Player(numOfPlayers,i);
        }

        for(let x=1;x<=50;x++){

            // choice selection for players
            for(let i=1;i<=numOfPlayers;i++){
                players[`Player${i}`].choice = possible_choices[randomGenerator()];
            }

            // updating score of players based on their choices
            for(let i=1;i<numOfPlayers;i++){
                for(let j=i+1;j<=numOfPlayers;j++){
                    let score = await gameFunc.game(players[`Player${i}`].choice,players[`Player${j}`].choice);
                    if(score===1){
                        players[`Player${i}`].score_against[`Player${j}`]+=1;
                    }else if(score===2){
                        players[`Player${j}`].score_against[`Player${i}`]+=1;
                    }  
                }
            }

            let choice = {}, playerWins = {}

            for(let i=1;i<=numOfPlayers;i++){
                choice[`Player${i}`] = players[`Player${i}`].choice;
                playerWins[`Player${i}`] = {...players[`Player${i}`].score_against};
            } 
 
            output.push({iteration: x,
                choice: choice,
                playerWins: playerWins
            }); 
        }

        return res.status(200).json({
            message: 'success',
            data: output
        });
    }catch(err){
        return res.status(500).json({
            message: 'failed',
            error: err.message
        });
    }
}
