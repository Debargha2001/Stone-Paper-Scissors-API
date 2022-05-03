module.exports.game = async (choice1, choice2) => {
    if(choice1 === choice2){
        return 0;
    }

    if(choice1 === 'rock'){
        switch(choice2){
            case 'paper': 
                return 2;
            case 'scissors':
                return 1;
        }
    }

    if(choice1 === 'paper'){
        switch(choice2){
            case 'rock': 
                return 1;
            case 'scissors':
                return 2;
        }
    }
    
    if(choice1 === 'scissors'){
        switch(choice2){
            case 'paper': 
                return 1;
            case 'rock':
                return 2;
        }
    }
}