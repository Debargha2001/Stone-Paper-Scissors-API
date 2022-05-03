# Stone-Paper-Scissors-API
Stone Paper Scissors API using Node.Js where number of players is 4.
All user input values are genarated via random numbers. No need for a user input.
It is a 4 player game.

To start the server run the command "npm start"

API: /game/start

Method: GET

RESPONSE:
  {
    
    "message": "success",
    "data": [
        {
            "iteration": 1,
            "choice": {
                "player1": "paper",
                "player2": "rock",
                "player3": "rock",
                "player4": "rock"
            },
            "playerWins": {
                "player1": {
                    "against": {
                        "player2": 1,
                        "player3": 1,
                        "player4": 1
                    }
                },
                "player2": {
                    "against": {
                        "player1": 0,
                        "player3": 0,
                        "player4": 0
                    }
                },
                "player3": {
                    "against": {
                        "player1": 0,
                        "player2": 0,
                        "player4": 0
                    }
                },
                "player4": {
                    "against": {
                        "player1": 0,
                        "player2": 0,
                        "player3": 0
                    }
                }
            }
        }
   }]
     
  
 In the above JSON Response,
 
 data is an array containing result of each iteration. The result for each iteration contains:
 
 iteration-> indicates the number of iteration.
 
 choice -> indicates choice of each player(rock/paper/scissors).
 
 playerWins -> it contains the score of every players against each other.
  
