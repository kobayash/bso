<template>
  <div class="container">
    <div class="count-board">
      <count-board-raw
        label="ball"
      >
        B
      </count-board-raw>
      <count-board-raw
        label="strike"
      >
        S
      </count-board-raw>
      <count-board-raw
        label="out"
      >
        O
      </count-board-raw>
      <!--    <div class="circle">-->
      <!--      <baseball-counter-circle></baseball-counter-circle>-->
      <!--    </div>-->
      <!--    <div class="circle">-->
      <!--      <baseball-counter-circle></baseball-counter-circle>-->
      <!--    </div>-->
      <!--    <div class="circle">-->
      <!--      <baseball-counter-circle></baseball-counter-circle>-->
      <!--    </div>-->
    </div>
    <div class="count-board-navigation">
      <div class="buttons">

        <a class="button" href="#"
           v-on:click="incrementBall"
        >B</a>

        <a class="button" href="#"
           v-on:click="incrementStrike"
        >S</a>

        <a class="button" href="#"
           v-on:click="incrementOut"
        >O</a>

        <a class="button" href="#"
           v-on:click="next"
        >→</a>

      </div>
    </div>
  </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    import CountBoardRaw from '~/components/CountBoardRaw.vue';

    export default {
        components: {
            CountBoardRaw
        },
        methods: {
            incrementBall() {
                this.$store.commit('counter/ball')
            },
            incrementStrike() {
                this.$store.commit('counter/strike')
            },
            incrementOut() {
                this.$store.commit('counter/out')
            },
            next() {
                this.$store.commit('counter/next')
            }
        }
    }
</script>

<style lang="scss">
  * {
    font-family: "verdana", sans-serif;
  }
  .container {
    width:100%;
    margin-top: 80px;
  }
  .count-board {
    width: 720px;
    height: 540px;
    margin: 0 auto;
    padding: 0;
    display: table;
    table-layout: fixed;
  }
  .count-board-navigation {
  }
  .buttons {
    width: 100%;
    margin: 80px auto;
    text-align: center;
    .button {
      border: 10px solid white;
      border-radius: 50%;
      width: 180px;
      height : 180px;
      display: inline-block;
      text-align:center;
      line-height:180px;
      font-size: 80px;
      color: white;
      margin-left: 40px;
      backgroud-color: #051210;
      &:link  {
        text-decoration: none;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
