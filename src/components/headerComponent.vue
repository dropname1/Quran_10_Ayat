<template>
  <div class="wrapper">
    <div class="title">И напоминай, ибо напоминание приносит пользу верующим.
        <span class="number">Quran (51:55)</span>
    </div>
    <button @click="randomNum" class="button">получить напоминание</button>
  </div>
</template>

<script>
export default {
methods: {
    randomNum() {
        this.$store.commit('randomFun',2)
    }
}
}
</script>

<style scoped>
@font-face {
    font-family: Roboto;
    src: url('../Roboto/Roboto-Light.ttf');
}
.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    border-radius: 20px;
    background-color: #b2bec3;
}
.title {
    margin-left: 25px;
    font-size: 25px;
    font-family: Roboto;
}
.number {
    color: gray
}
.button {
    font-size: 17px;
    padding: 10px 20px;
    width: 200px;
    border-radius: 10px;
    margin-right: 25px;
    background-color: #2d2d2d;
    border: none;
    box-shadow: 1px 1px 10px #2d2d2d;
    cursor: pointer;
    transition: all 0.3s;
}
.button:hover {
    transform: translate(1px,1px);
    transition: all 0.3s;
}
</style>