function attack(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  watch: {
    playerHealth(value) {
      if(value <=0){
        this.winner = 'monster'
      }
      else if(value <=0 and this.monsterHealth)
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    PlayerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayVisibleSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    playerAttack() {
      this.currentRound++;
      const attackValue = attack(5, 12);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
      // console.log(this.playerHealth, this.monsterHealth);
    },
    monsterAttack() {
      const attackValue = attack(8, 12);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = attack(10, 25);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
    },
  },
});

app.mount("#game");
