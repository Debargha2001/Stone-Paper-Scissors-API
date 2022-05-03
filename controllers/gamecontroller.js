const Player = require('../utils/PlayerClass');
const gameFunc = require('../utils/game');

module.exports.fetchResult = async (req,res) => {
    try{
        let output = [];
        const possible_choices = ['rock', 'paper', 'scissors'];
        let player1 = new Player();
        let player2 = new Player();
        let player3 = new Player();
        let player4 = new Player();
        for(let i=1;i<=50;i++){

            // random choice selection
            player1.choice = possible_choices[Math.floor(Math.random()*3)];
            player2.choice = possible_choices[Math.floor(Math.random()*3)];
            player3.choice = possible_choices[Math.floor(Math.random()*3)];
            player4.choice = possible_choices[Math.floor(Math.random()*3)];

            

            // score between player1 and player2
            let score = await gameFunc.game(player1.choice, player2.choice);
            if(score==1){
                player1.score1+=1;
            }else if(score==2){
                player2.score1+=1;
            }

            // score between player1 and player3
            score = await gameFunc.game(player1.choice, player3.choice);
            if(score==1){
                player1.score2+=1;
            }else if(score==2){
                player3.score1+=1;
            }

            // score between player1 and player4
            score = await gameFunc.game(player1.choice, player4.choice);
            if(score==1){
                player1.score3+=1;
            }else if(score==2){
                player4.score1+=1;
            }

            // score between player2 and player3
            score = await gameFunc.game(player2.choice, player3.choice);
            if(score==1){
                player2.score2+=1;
            }else if(score==2){
                player3.score2+=1;
            }

            // score between player2 and player4
            score = await gameFunc.game(player2.choice, player4.choice);
            if(score==1){
                player2.score3+=1;
            }else if(score==2){
                player4.score2+=1;
            }

            // score between player3 and player4
            score = await gameFunc.game(player3.choice, player4.choice);
            if(score==1){
                player3.score3+=1;
            }else if(score==2){
                player4.score3+=1;
            }

            // build result for each iteration
            let result = {
                iteration: i,
                choice: {
                    player1: player1.choice,
                    player2: player2.choice,
                    player3: player3.choice,
                    player4: player4.choice
                },
                playerWins: {
                    player1: {
                        against: {
                            player2: player1.score1,
                            player3: player1.score2,
                            player4: player1.score3
                        }
                    },
                    player2: {
                        against: {
                            player1: player2.score1,
                            player3: player2.score2,
                            player4: player2.score3
                        }
                    },
                    player3: {
                        against: {
                            player1: player3.score1,
                            player2: player3.score2,
                            player4: player3.score3
                        }
                    },
                    player4: {
                        against: {
                            player1: player4.score1,
                            player2: player4.score2,
                            player3: player4.score3
                        }
                    }
                }
            };

            // push the result to output array
            output.push(result);
        }

        res.status(200).json({
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