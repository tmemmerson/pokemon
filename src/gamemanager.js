let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "venusaur":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "charizard":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "blastoise":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "butterfree":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "beedrill":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "pidgeot":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "raticate":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "fearow":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "arbok":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "pikachu":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "raichu":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "sandslash":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "nidoqueen":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "nidoking":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "clefable":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "ninetails":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "wigglytuff":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "golbat":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "vileplume":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "parasect":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "venomoth":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "dugtrio":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "persian":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "golduck":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "primeape":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "arcanine":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "poliwrath":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "alakazam":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "machamp":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "victreebel":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "tentacruel":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "golem":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "rapidash":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "slowbro":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "magneton":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "dodrio":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "dewgong":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "muk":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "cloyster":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "gengar":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "onix":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "hypno":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "kingler":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "electrode":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "exeggutor":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "marowak":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "hitmonlee":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "hitmonchan":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "lickitung":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "weezing":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "rhydon":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "chansey":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "tangela":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "kangaskhan":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "seadra":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "seaking":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "starmie":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "mrmime":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "scyther":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "jynx":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "electabuzz":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "magmar":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "pinsir":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "tauros":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "gyrados":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "lapras":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "ditto":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "vaporeon":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "jolteon":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "flareon":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "porygon":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "omastar":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "kabutops":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "aerodactyl":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "snorlax":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "articuno":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "zapdos":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "moltres":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "dragonite":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "mewtwo":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
      case "mew":
        player = new Player(classType, 100, 99, 50, 100, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="../img/pokemon/fight/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Level: ' + player.level + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
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
    let enemy00 = new Enemy("Venusaur", 100, 99, 50, 100, 100);
    let enemy01 = new Enemy("Charizard", 100, 99, 50, 100, 100);
    let enemy02 = new Enemy("Blastoise", 100, 99, 50, 100, 100);
    let enemy03 = new Enemy("Butterfree", 100, 99, 50, 100, 100);
    let enemy04 = new Enemy("Beedrill", 100, 99, 50, 100, 100);
    let enemy05 = new Enemy("Pidgeot", 100, 99, 50, 100, 100);
    let enemy06 = new Enemy("Raticate", 100, 99, 50, 100, 100);
    let enemy07 = new Enemy("Fearow", 100, 99, 50, 100, 100);
    let enemy08 = new Enemy("Arbok", 100, 99, 50, 100, 100);
    let enemy09 = new Enemy("Pikachu", 100, 99, 50, 100, 100);
    let enemy10 = new Enemy("Raichu", 100, 99, 50, 100, 100);
    let enemy11 = new Enemy("Sandslash", 100, 99, 50, 100, 100);
    let enemy12 = new Enemy("Nidoqueen", 100, 99, 50, 100, 100);
    let enemy13 = new Enemy("Nidoking", 100, 99, 50, 100, 100);
    let enemy14 = new Enemy("Clefable", 100, 99, 50, 100, 100);
    let enemy15 = new Enemy("Ninetails", 100, 99, 50, 100, 100);
    let enemy16 = new Enemy("Wigglytuff", 100, 99, 50, 100, 100);
    let enemy17 = new Enemy("Golbat", 100, 99, 50, 100, 100);
    let enemy18 = new Enemy("Vileplume", 100, 99, 50, 100, 100);
    let enemy19 = new Enemy("Parasect", 100, 99, 50, 100, 100);
    let enemy20 = new Enemy("Venomouth", 100, 99, 50, 100, 100);
    let enemy21 = new Enemy("Dugtrio", 100, 99, 50, 100, 100);
    let enemy22 = new Enemy("Persian", 100, 99, 50, 100, 100);
    let enemy23 = new Enemy("Golduck", 100, 99, 50, 100, 100);
    let enemy24 = new Enemy("Primeape", 100, 99, 50, 100, 100);
    let enemy25 = new Enemy("Arcanine", 100, 99, 50, 100, 100);
    let enemy26 = new Enemy("Poliwrath", 100, 99, 50, 100, 100);
    let enemy27 = new Enemy("Alakazam", 100, 99, 50, 100, 100);
    let enemy28 = new Enemy("Machamp", 100, 99, 50, 100, 100);
    let enemy29 = new Enemy("Victreebel", 100, 99, 50, 100, 100);
    let enemy30 = new Enemy("Tentacruel", 100, 99, 50, 100, 100);
    let enemy31 = new Enemy("Golem", 100, 99, 50, 100, 100);
    let enemy32 = new Enemy("Rapidash", 100, 99, 50, 100, 100);
    let enemy33 = new Enemy("Slowbro", 100, 99, 50, 100, 100);
    let enemy34 = new Enemy("Magnetron", 100, 99, 50, 100, 100);
    let enemy35 = new Enemy("Dodrio", 100, 99, 50, 100, 100);
    let enemy36 = new Enemy("Dewgong", 100, 99, 50, 100, 100);
    let enemy37 = new Enemy("Muk", 100, 99, 50, 100, 100);
    let enemy38 = new Enemy("Cloyster", 100, 99, 50, 100, 100);
    let enemy39 = new Enemy("Gengar", 100, 99, 50, 100, 100);
    let enemy40 = new Enemy("Onix", 100, 99, 50, 100, 100);
    let enemy41 = new Enemy("Hypno", 100, 99, 50, 100, 100);
    let enemy42 = new Enemy("Kingler", 100, 99, 50, 100, 100);
    let enemy43 = new Enemy("Electrode", 100, 99, 50, 100, 100);
    let enemy44 = new Enemy("Exeggutor", 100, 99, 50, 100, 100);
    let enemy45 = new Enemy("Marowak", 100, 99, 50, 100, 100);
    let enemy46 = new Enemy("Hitmonlee", 100, 99, 50, 100, 100);
    let enemy47 = new Enemy("Hitmonchan", 100, 99, 50, 100, 100);
    let enemy48 = new Enemy("Lickitung", 100, 99, 50, 100, 100);
    let enemy49 = new Enemy("Weezing", 100, 99, 50, 100, 100);
    let enemy50 = new Enemy("Rhydon", 100, 99, 50, 100, 100);
    let enemy51 = new Enemy("Chansey", 100, 99, 50, 100, 100);
    let enemy52 = new Enemy("Tangela", 100, 99, 50, 100, 100);
    let enemy53 = new Enemy("Kangaskhan", 100, 99, 50, 100, 100);
    let enemy54 = new Enemy("Seadra", 100, 99, 50, 100, 100);
    let enemy55 = new Enemy("Seaking", 100, 99, 50, 100, 100);
    let enemy56 = new Enemy("Starmie", 100, 99, 50, 100, 100);
    let enemy57 = new Enemy("MrMime", 100, 99, 50, 100, 100);
    let enemy58 = new Enemy("Scyther", 100, 99, 50, 100, 100);
    let enemy59 = new Enemy("Jynx", 100, 99, 50, 100, 100);
    let enemy60 = new Enemy("Electabuzz", 100, 99, 50, 100, 100);
    let enemy61 = new Enemy("Magmar", 100, 99, 50, 100, 100);
    let enemy62 = new Enemy("Pinsir", 100, 99, 50, 100, 100);
    let enemy63 = new Enemy("Tauros", 100, 99, 50, 100, 100);
    let enemy64 = new Enemy("Gyrados", 100, 99, 50, 100, 100);
    let enemy65 = new Enemy("Lapras", 100, 99, 50, 100, 100);
    let enemy66 = new Enemy("Ditto", 100, 99, 50, 100, 100);
    let enemy67 = new Enemy("Vaporeon", 100, 99, 50, 100, 100);
    let enemy68 = new Enemy("Jolteon", 100, 99, 50, 100, 100);
    let enemy69 = new Enemy("Flareon", 100, 99, 50, 100, 100);
    let enemy70 = new Enemy("Porygon", 100, 99, 50, 100, 100);
    let enemy71 = new Enemy("Omastar", 100, 99, 50, 100, 100);
    let enemy72 = new Enemy("Kabutops", 100, 99, 50, 100, 100);
    let enemy73 = new Enemy("Aerodactyl", 100, 99, 50, 100, 100);
    let enemy74 = new Enemy("Snorlax", 100, 99, 50, 100, 100);
    let enemy75 = new Enemy("Articuno", 100, 99, 50, 100, 100);
    let enemy76 = new Enemy("Zapdos", 100, 99, 50, 100, 100);
    let enemy77 = new Enemy("Moltres", 100, 99, 50, 100, 100);
    let enemy78 = new Enemy("Dragonite", 100, 99, 50, 100, 100);
    let enemy79 = new Enemy("Mewtwo", 100, 99, 50, 100, 100);
    let enemy80 = new Enemy("Mew", 100, 99, 50, 100, 100);    

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
      case 17:
        enemy = enemy17;
        break;
      case 18:
        enemy = enemy18;
        break;
      case 19:
        enemy = enemy19;
        break;
      case 20:
        enemy = enemy20;
        break;
      case 21:
        enemy = enemy21;
        break;
      case 22:
        enemy = enemy22;
        break;
      case 23:
        enemy = enemy23;
        break;
      case 24:
        enemy = enemy24;
        break;
      case 25:
        enemy = enemy25;
        break;
      case 26:
        enemy = enemy26;
        break;
      case 27:
        enemy = enemy27;
        break;
      case 28:
        enemy = enemy28;
        break;
      case 29:
        enemy = enemy29;
        break;
      case 30:
        enemy = enemy30;
        break;
      case 31:
        enemy = enemy31;
        break;
      case 32:
        enemy = enemy32;
        break;
      case 33:
        enemy = enemy33;
        break;
      case 34:
        enemy = enemy34;
        break;
      case 35:
        enemy = enemy35;
        break;
      case 36:
        enemy = enemy36;
        break;
      case 37:
        enemy = enemy37;
        break;
      case 38:
        enemy = enemy38;
        break;
      case 39:
        enemy = enemy39;
        break;
      case 40:
        enemy = enemy40;
        break;
      case 41:
        enemy = enemy41;
        break;
      case 42:
        enemy = enemy42;
        break;
      case 43:
        enemy = enemy43;
        break;
      case 44:
        enemy = enemy44;
        break;
      case 45:
        enemy = enemy45;
        break;
      case 46:
        enemy = enemy46;
        break;
      case 47:
        enemy = enemy47;
        break;
      case 48:
        enemy = enemy48;
        break;
      case 49:
        enemy = enemy49;
        break;
      case 50:
        enemy = enemy50;
        break;
      case 51:
        enemy = enemy51;
        break;
      case 52:
        enemy = enemy52;
        break;
      case 53:
        enemy = enemy53;
        break;
      case 54:
        enemy = enemy54;
        break;
      case 55:
        enemy = enemy55;
        break;
      case 56:
        enemy = enemy56;
        break;
      case 57:
        enemy = enemy57;
        break;
      case 58:
        enemy = enemy58;
        break;
      case 59:
        enemy = enemy59;
        break;
      case 60:
        enemy = enemy60;
        break;
      case 61:
        enemy = enemy61;
        break;
      case 62:
        enemy = enemy62;
        break;
      case 63:
        enemy = enemy63;
        break;
      case 64:
        enemy = enemy64;
        break;
      case 65:
        enemy = enemy65;
        break;
      case 66:
        enemy = enemy66;
        break;
      case 67:
        enemy = enemy67;
        break;
      case 68:
        enemy = enemy68;
        break;
      case 69:
        enemy = enemy69;
        break;
      case 70:
        enemy = enemy70;
        break;
      case 71:
        enemy = enemy71;
        break;
      case 72:
        enemy = enemy72;
        break;
      case 73:
        enemy = enemy73;
        break;
      case 74:
        enemy = enemy74;
        break;
      case 75:
        enemy = enemy75;
        break;
      case 76:
        enemy = enemy76;
        break;
      case 77:
        enemy = enemy77;
        break;
      case 78:
        enemy = enemy78;
        break;
      case 79:
        enemy = enemy79;
        break;
      case 80:
        enemy = enemy80;
        break;
      case 81:
        enemy = enemy81;
        break;
    }
    getHeader.innerHTML = '<p>FIGHT!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="../img/pokemon/fight/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Level: ' + enemy.level + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
  }
}
