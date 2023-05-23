<template>
    <section class="section">
        <div class="left">
            <h1 class="title">Safety  Select</h1>
            <h4 class="text">Help Operations Manager Darcy Fraser choose better hand, wrist and finger positions!</h4>
        </div>
        <button class="btn" @click="$emit('start')">
            <img src="../assets/images/play-btn.svg" alt="Play" />
        </button>
    </section>
</template>

<script>
export default {
    name: "Intro"
}
</script>

<style scoped>
.section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    padding: 0 183px 0 235px;
}

.left {
    max-width: 552px;
}

.title {
    font-family: "Ranchers", sans-serif;
    font-size: 149px;
    line-height: 100%;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    background: linear-gradient(206.83deg, #FFFFFF 27.45%, #FFE1A0 97.6%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(-11px 13px 21px rgba(137, 0, 0, 0.33));
}

.text {
    margin-top: 53px;
    font-size: 34px;
    line-height: 123%;
    letter-spacing: 0.005em;
}

.btn {
    background: transparent;
    border: none;
    cursor: pointer;
}

.btn > img {
    display: block;
    height: auto;
    max-width: 100%;
}
</style>