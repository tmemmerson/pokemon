let player;

function Player(classType, health, level, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.level = level;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
  calcAttack: function() {
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    let playerAttack = function() {
      let calcBaseDamage =player.strength * player.agility /500;
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      let numberOfHits = Math.floor(player.agility / 50) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    let enemyAttack = function() {
      let calcBaseDamage =enemy.strength * enemy.agility /500;
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      let numberOfHits = Math.floor(enemy.agility / 50) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert("You dealt " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times to your enemy.");
      if (enemy.health <= 0) {
        alert("You win! Refresh browser to play again.");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        getEnemyHealth.innerHTML = 'Health: 0';
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("Your enemy hit you for " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
        if (player.health <= 0) {
          alert("You lose! Refresh browser to play again.");
          getPlayerHealth.innerHTML = 'Health: 0';
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }
    } else if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert("Your enemy hit you for " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
      if (player.health <= 0) {
        alert("You lose! Refresh browser to play again.");
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        getPlayerHealth.innerHTML = 'Health: 0';
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You dealt " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times to your enemy.");
        if (enemy.health <= 0) {
          alert("You win! Refresh browser to play again.");
          getEnemyHealth.innerHTML = 'Health: 0';
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        } else {
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }
      }
    }
  }

}
