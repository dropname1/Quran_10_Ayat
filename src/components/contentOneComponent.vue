<template>
    <div class="wrapper">
        <div class="main">{{$store.state.content}} <span class="gray">{{$store.state.number}}</span></div>
    </div>
</template>

<script>
export default {


}
</script>

<style>
@font-face {
    font-family: Roboto;
    src: url('../Roboto/Roboto-Light.ttf');
}
.wrapper {
    width: 100%;
    background-color: #2d2d2d;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main {
    font-size: 25px;
    color: white;
    margin-left: 30px;
    margin-right: 30px;
    font-family: Roboto;
    align-items: justify;
}
.gray {
    color: gray;
}
</style>