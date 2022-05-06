class Player{
    constructor(num,curr){
        this.choice='';
        this.score_against = {};
        for(let i=1;i<=num;i++){
            if(i!=curr){
                this.score_against[`Player${i}`] = 0;
            }
        }

        
    }
}

module.exports = Player;