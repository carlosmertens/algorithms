console.log('\n********** STREET FIGHT ***********');
// Inplement street fight game with object and methods

let player1 = createPlayer('Ken', 'Helicopter kick', 20);
let player2 = createPlayer('Ryu', 'Ascending punch', 20);

function createPlayer(name, attackSkill, attackDamage) {
  return {
    name,
    health: 100,
    attackSkill,
    attackDamage,
    attack(player) {
      player.health -= this.attackDamage;
      console.log(
        `${this.name} attacked ${player.name} with a ${this.attackSkill}, inflicting ${this.attackDamage} damage. ${player.name}'s health is now ${player.health}.`
      );
    },
  };
}

// do {
//   const coin = Math.floor(Math.random() * 2 + 1);
//   if (coin === 1) player1.attack(player2);
//   if (coin === 2) player2.attack(player1);
// } while (player1.health > 1 && player2.health > 1);

const endMessage =
  player1.health > player2.health
    ? `>>> ${player1.name} wins!`.toUpperCase()
    : `>>> ${player2.name} wins!`.toUpperCase();

// console.log(endMessage);
