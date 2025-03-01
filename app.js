const max = prompt("Enter the max number");

const random = Math.floor(Math.random()* max)+1;

let guess = prompt("Guess the number ");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you are Right! Congrats!! random number was ",random);
        break;
    }else if(guess<random){
        guess = prompt("hint : your guess was too Small. please try again");
    }else {
        guess = prompt("hint : your guess was too Large. please try again");
    }
}