function dungeonsDark(arr) {
  let currentHealth = 100;
  let totalCoins = 0;
  let roomCounter = 0;
  let isFinished = false;

  let rooms = arr[0].split("|");

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(" ");
    let itemOrMonster = room[0];
    let value = Number(room[1]);
    roomCounter++;

    if (itemOrMonster === "potion") {
      if (value + currentHealth > 100) {
        value = value - (value + currentHealth - 100);
      }
      currentHealth += value;

      console.log(`You healed for ${value} hp.`);
      console.log(`Current health: ${currentHealth} hp.`);
    } else if (itemOrMonster === "chest") {
      totalCoins += value;
      console.log(`You found ${value} coins.`);
    } else {
      currentHealth -= value;

      if (currentHealth > 0) {
        console.log(`You slayed ${itemOrMonster}.`);
      } else {
        console.log(`You died! Killed by ${itemOrMonster}.`);
        isFinished = true;
        console.log(`Best room: ${roomCounter}`);
        break;
      }
    }
  }

  if (!isFinished) {
    console.log(
      `You've made it!\nCoins: ${totalCoins}\nHealth: ${currentHealth}`
    );
  }
}
dungeonsDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
