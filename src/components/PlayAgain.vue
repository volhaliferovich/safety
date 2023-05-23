<template>
    <section class="section">
        <h1 class="title">game over!</h1>
        <div class="container">
            <h3 class="text play-again-text">Play <br /> again</h3>
            <button class="btn" @click="$emit('play-again')">
                <img src="../assets/images/again-btn.svg" alt="Play again" />
            </button>
        </div>
        <h4 class="text">or click Next below to continue</h4>
        <img class="next-arrow" src="../assets/images/next-icon.svg" alt="Next">
    </section>
</template>

<script>
export default {
    name: "PlayAgain"
}
</script>

<style scoped>
.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 183px 0 235px;
}

.title {
    font-family: "Ranchers", sans-serif;
    font-size: 131px;
    line-height: 100%;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    background: linear-gradient(206.83deg, #FFFFFF 27.45%, #FFE1A0 97.6%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(-11px 13px 21px rgba(137, 0, 0, 0.33));
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 500px;
    margin: 64px 0 70px;
}

.text {
    font-size: 40px;
    line-height: 123%;
    letter-spacing: 0.005em;
}

.play-again-text {
    margin-right: 43px;
    font-size: 64px;
    line-height: 97%;
    text-transform: uppercase;
    text-align: center;
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

.next-arrow {
    margin-top: 30px;
}
</style>