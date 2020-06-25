let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "Venusaur":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Charizard":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Blastoise":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Butterfree":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Beedrill":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Pidgeot":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Raticate":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Fearow":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Arbok":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Pikachu":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Raichu":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Sandslash":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Nidoqueen":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Nidoking":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Clefable":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Ninetails":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Wigglytuff":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Golbat":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Vileplume":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Parasect":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Venomoth":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Dugtrio":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Persian":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Golduck":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Primeape":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Arcanine":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Poliwrath":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Alakazam":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Machamp":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Victreebel":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Tentacruel":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Golem":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Rapidash":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Slowbro":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Magneton":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Dodrio":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Dewgong":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Muk":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Cloyster":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Gengar":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Onix":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Hypno":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Kingler":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Electrode":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Exeggutor":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Marowak":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Hitmonlee":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Hitmonchan":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Lickitung":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Weezing":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Rhydon":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Chansey":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Tangela":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Kangaskhan":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Seadra":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Seaking":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Starmie":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "MrMime":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Scyther":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Jynx":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Electabuzz":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Magmar":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Pinsir":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Tauros":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Gyrados":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Lapras":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Ditto":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Vaporeon":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Jolteon":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Flareon":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Porygon":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Omastar":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Kabutops":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Aerodactyl":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Snorlax":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Articuno":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Zapdos":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Moltres":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Dragonite":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Mewtwo":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
      case "Mew":
        player = new Player(classType, 100, 0, 50, 100, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="../img/mk/fight/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    let enemy00 = new Enemy("Venusaur", 100, 0, 50, 100, 100);
    let enemy01 = new Enemy("Charizard", 100, 0, 50, 100, 100);
    let enemy02 = new Enemy("Blastoise", 100, 0, 50, 100, 100);
    let enemy03 = new Enemy("Butterfree", 100, 0, 50, 100, 100);
    let enemy04 = new Enemy("Beedrill", 100, 0, 50, 100, 100);
    let enemy05 = new Enemy("Pidgeot", 100, 0, 50, 100, 100);
    let enemy06 = new Enemy("Raticate", 100, 0, 50, 100, 100);
    let enemy07 = new Enemy("Fearow", 100, 0, 50, 100, 100);
    let enemy08 = new Enemy("Arbok", 100, 0, 50, 100, 100);
    let enemy09 = new Enemy("Pikachu", 100, 0, 50, 100, 100);
    let enemy10 = new Enemy("Raichu", 100, 0, 50, 100, 100);
    let enemy11 = new Enemy("Sandslash", 100, 0, 50, 100, 100);
    let enemy12 = new Enemy("Nidoqueen", 100, 0, 50, 100, 100);
    let enemy13 = new Enemy("Nidoking", 100, 0, 50, 100, 100);
    let enemy14 = new Enemy("Clefable", 100, 0, 50, 100, 100);
    let enemy15 = new Enemy("Ninetails", 100, 0, 50, 100, 100);
    let enemy16 = new Enemy("Wigglytuff", 100, 0, 50, 100, 100);
    let enemy17 = new Enemy("Golbat", 100, 0, 50, 100, 100);
    let enemy18 = new Enemy("Vileplume", 100, 0, 50, 100, 100);
    let enemy19 = new Enemy("Parasect", 100, 0, 50, 100, 100);
    let enemy20 = new Enemy("Venomouth", 100, 0, 50, 100, 100);
    let enemy21 = new Enemy("Dugtrio", 100, 0, 50, 100, 100);
    let enemy22 = new Enemy("Persian", 100, 0, 50, 100, 100);
    let enemy23 = new Enemy("Golduck", 100, 0, 50, 100, 100);
    let enemy24 = new Enemy("Primeape", 100, 0, 50, 100, 100);
    let enemy25 = new Enemy("Arcanine", 100, 0, 50, 100, 100);
    let enemy26 = new Enemy("Poliwrath", 100, 0, 50, 100, 100);
    let enemy27 = new Enemy("Alakazam", 100, 0, 50, 100, 100);
    let enemy28 = new Enemy("Machamp", 100, 0, 50, 100, 100);
    let enemy29 = new Enemy("Victreebel", 100, 0, 50, 100, 100);
    let enemy30 = new Enemy("Tentacruel", 100, 0, 50, 100, 100);
    let enemy31 = new Enemy("Golem", 100, 0, 50, 100, 100);
    let enemy32 = new Enemy("Rapidash", 100, 0, 50, 100, 100);
    let enemy33 = new Enemy("Slowbro", 100, 0, 50, 100, 100);
    let enemy34 = new Enemy("Magnetron", 100, 0, 50, 100, 100);
    let enemy35 = new Enemy("Dodrio", 100, 0, 50, 100, 100);
    let enemy36 = new Enemy("Dewgong", 100, 0, 50, 100, 100);
    let enemy37 = new Enemy("Muk", 100, 0, 50, 100, 100);
    let enemy38 = new Enemy("Cloyster", 100, 0, 50, 100, 100);
    let enemy39 = new Enemy("Gengar", 100, 0, 50, 100, 100);
    let enemy40 = new Enemy("Onix", 100, 0, 50, 100, 100);
    let enemy41 = new Enemy("Hypno", 100, 0, 50, 100, 100);
    let enemy42 = new Enemy("Kingler", 100, 0, 50, 100, 100);
    let enemy43 = new Enemy("Electrode", 100, 0, 50, 100, 100);
    let enemy44 = new Enemy("Exeggutor", 100, 0, 50, 100, 100);
    let enemy45 = new Enemy("Marowak", 100, 0, 50, 100, 100);
    let enemy46 = new Enemy("Hitmonlee", 100, 0, 50, 100, 100);
    let enemy47 = new Enemy("Hitmonchan", 100, 0, 50, 100, 100);
    let enemy48 = new Enemy("Lickitung", 100, 0, 50, 100, 100);
    let enemy49 = new Enemy("Weezing", 100, 0, 50, 100, 100);
    let enemy50 = new Enemy("Rhydon", 100, 0, 50, 100, 100);
    let enemy51 = new Enemy("Chansey", 100, 0, 50, 100, 100);
    let enemy52 = new Enemy("Tangela", 100, 0, 50, 100, 100);
    let enemy53 = new Enemy("Kangaskhan", 100, 0, 50, 100, 100);
    let enemy54 = new Enemy("Seadra", 100, 0, 50, 100, 100);
    let enemy55 = new Enemy("Seaking", 100, 0, 50, 100, 100);
    let enemy56 = new Enemy("Starmie", 100, 0, 50, 100, 100);
    let enemy57 = new Enemy("MrMime", 100, 0, 50, 100, 100);
    let enemy58 = new Enemy("Scyther", 100, 0, 50, 100, 100);
    let enemy59 = new Enemy("Jynx", 100, 0, 50, 100, 100);
    let enemy60 = new Enemy("Electabuzz", 100, 0, 50, 100, 100);
    let enemy61 = new Enemy("Magmar", 100, 0, 50, 100, 100);
    let enemy62 = new Enemy("Pinsir", 100, 0, 50, 100, 100);
    let enemy63 = new Enemy("Tauros", 100, 0, 50, 100, 100);
    let enemy64 = new Enemy("Gyrados", 100, 0, 50, 100, 100);
    let enemy65 = new Enemy("Lapras", 100, 0, 50, 100, 100);
    let enemy66 = new Enemy("Ditto", 100, 0, 50, 100, 100);
    let enemy67 = new Enemy("Vaporeon", 100, 0, 50, 100, 100);
    let enemy68 = new Enemy("Jolteon", 100, 0, 50, 100, 100);
    let enemy69 = new Enemy("Flareon", 100, 0, 50, 100, 100);
    let enemy70 = new Enemy("Porygon", 100, 0, 50, 100, 100);
    let enemy71 = new Enemy("Omastar", 100, 0, 50, 100, 100);
    let enemy72 = new Enemy("Kabutops", 100, 0, 50, 100, 100);
    let enemy73 = new Enemy("Aerodactyl", 100, 0, 50, 100, 100);
    let enemy74 = new Enemy("Snorlax", 100, 0, 50, 100, 100);
    let enemy75 = new Enemy("Articuno", 100, 0, 50, 100, 100);
    let enemy76 = new Enemy("Zapdos", 100, 0, 50, 100, 100);
    let enemy77 = new Enemy("Moltres", 100, 0, 50, 100, 100);
    let enemy78 = new Enemy("Dragonite", 100, 0, 50, 100, 100);
    let enemy79 = new Enemy("Mewtwo", 100, 0, 50, 100, 100);
    let enemy80 = new Enemy("Mew", 100, 0, 50, 100, 100);    

    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(16));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
      case 2:
        enemy = enemy02;
        break;
      case 3:
        enemy = enemy03;
        break;
      case 4:
        enemy = enemy04;
        break;
      case 5:
        enemy = enemy05;
        break;
      case 6:
        enemy = enemy06;
        break;
      case 7:
        enemy = enemy07;
        break;
      case 8:
        enemy = enemy08;
        break;
      case 9:
        enemy = enemy09;
        break;
      case 10:
        enemy = enemy10;
        break;
      case 11:
        enemy = enemy11;
        break;
      case 12:
        enemy = enemy12;
        break;
      case 13:
        enemy = enemy13;
        break;
      case 14:
        enemy = enemy14;
        break;
      case 15:
        enemy = enemy15;
        break;
      case 16:
        enemy = enemy16;
        break;
    }
    getHeader.innerHTML = '<p>FIGHT!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="../img/mk/fight/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
  }
}
