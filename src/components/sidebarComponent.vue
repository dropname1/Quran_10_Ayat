<template>
  <div class="wrapper">
    <button @click="selectButton(1)" class="button">пророки</button>
    <button @click="selectButton(2)" class="button">смерть</button>
    <button @click="selectButton(3)" class="button">жизнь</button>
    <button @click="selectButton(4)" class="button">поминание</button>
    <button @click="selectButton(5)" class="button">терпение</button>
    <button @click="selectButton(6)" class="button">удел</button>
    <button @click="selectButton(7)" class="button">рай</button>
    <button @click="selectButton(8)" class="button">ад</button>
  </div>
</template>

<script>
export default {
methods: {
  selectButton(x) {
    this.$store.commit('selectFun',x)
  }
}
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #b2bec3;
    border-radius: 20px;
    margin-top: 10px;
    width: 20%;
}
.button {
    width: 100%;
    height: 40px;
    margin-bottom: 14px;
    border-radius: 10px;
    font-size: 17px;
    border: 1px solid black;
    cursor: pointer;
    transition: all 0.2s;
    background-color: #2d3436;
}
.button:nth-child(8) {
  margin-bottom: 0px;
}
.button:hover {
    transform: translate(5px);
    transition: all 0.1s;
}
.selected {
    background-color:#2d3436;
    box-shadow: 1px 1px 2px rgb(0, 0, 0);
    transform: translate(5px);
}
</style>