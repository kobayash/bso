<template>
  <div class="count-board-raw"
       :class="lampLabel"
  >
    <div class="count-board-cell">
      <div class="count-board-label">
        <slot></slot>
      </div>
    </div>
    <div class="count-board-cell"
         :class="light(0)"
    >
      <span class="lamp"></span>
    </div>
    <div class="count-board-cell"
         :class="light(1)"
    >
      <span class="lamp"></span>
    </div>
    <div class="count-board-cell"
         :class="light(2)"
         v-show="isBall"
    ><span class="lamp"></span></div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'

  export default {
      props: {
          label: {
              type: String,
              default: '',
              required: true
          }
      },
      computed: {
          counter () {
              return this.$store.state.counter[this.label];
          },
          lampCount() {
              let c = 2;
              if(this.label === 'ball') {
                  c = 3;
              }

              return c;
          },
          isBall() {
              return this.label === 'ball';
          },
          lampLabel() {
              let l = String;
              switch(this.label) {
                  case 'strike':
                      l = 'strike';
                      break;
                  case 'out':
                      l = 'out';
                      break;
                  default:
                      l = 'ball';
              }
              return l;
          }
      },
      methods: {
          light(length) {
              return this.counter > length ? 'active' : '';
          }
      }
  }
</script>
<style lang="scss">
  .count-board-raw {
    display: table-row;
    width: 100%;
  }

  .count-board-cell {
    display: table-cell;
    width: 25%;
    height:180px;
    text-align: center;
    vertical-align: middle;
    position:relative;
  }

  .count-board-label {
    text-align: center;
    color: white;
    font-size: 210px;
    font-weight: bold;
    position:absolute;
    top:-46px;
  }

  .lamp {
    margin: 0;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: #152220;
    display: inline-block;
  }
  .ball .active .lamp {
    background-color: green;
  }
  .strike .active .lamp {
    background-color: yellow;
  }
  .out .active .lamp {
    background-color: red;
  }

</style>
