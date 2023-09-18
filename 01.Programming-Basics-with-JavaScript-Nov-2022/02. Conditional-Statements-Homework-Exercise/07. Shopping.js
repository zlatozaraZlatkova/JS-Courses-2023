function shoppingBag(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardsPrice = videoCards * 250;
    let processorsPrice = processors *(videoCardsPrice * 0.35);
    let ramPrice = ram * (videoCardsPrice * 0.1);

    let totalShoppingSum = videoCardsPrice + processorsPrice + ramPrice;


    if (videoCards >= processors) {
       //totalShoppingSum = totalShoppingSum *(1-0.15); 
       totalShoppingSum -= totalShoppingSum * 0.15;
    } 
    

    if (budget >= totalShoppingSum) {
      
        let budgetRest = budget - totalShoppingSum;
       console.log(`You have ${budgetRest .toFixed(2)} leva left!`);

    } else {
        let neededSum = totalShoppingSum - budget;
        console.log(`Not enough money! You need ${neededSum .toFixed(2)} leva more!`);
        
    }

}
shoppingBag(["900","2","1","3"])
shoppingBag(["920.45","3","1","1"])