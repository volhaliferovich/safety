<template>
    <section class="overlay">
        <h1 class="overlay-text">{{ title }}</h1>
        <button class="overlay-btn" @click="$emit('continue')">{{ buttonText }}</button>
    </section>
</template>

<script>
export default {
    name: "Overlay",
    props: {
        title: String,
        buttonText: String,
    },
    setup() {},
};
</script>

<style scoped>
.overlay {
    position: absolute;
    top: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
}

.overlay-text {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 94px;
    line-height: 106.5%;
    text-align: center;
    letter-spacing: 0.005em;
    text-transform: uppercase;
    color: #ffffff;
}

.overlay-btn {
    margin-top: 34px;
    padding: 16px 28px;
    border: none;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 123%;
    text-align: center;
    letter-spacing: 0.005em;
    color: #1E1E1E;
}
</style>