<template>
    <section class="section">
        <div class="header">
            <h4 class="question">{{ data[questionIndex].text }}</h4>
        </div>
        <div class="content">
            <div
                v-for="(answer, index) in data[questionIndex].answers"
                :key="index"
                class="option"
                :class="{
                    'correct': showAnswer && data[questionIndex].answers[selectedAnswer].correct && selectedAnswer === index,
                    'wrong': showAnswer && !data[questionIndex].answers[selectedAnswer].correct && selectedAnswer === index
                }"
                @click="() => chooseAnswer(index)"
            >
                <img class="image" :src="answer.option" :alt="`Option ${index + 1}`" >
                <img
                    v-if="showAnswer"
                    class="option-icon" :src="data[questionIndex].answers[selectedAnswer].correct && index === selectedAnswer ? checkIcon : selectedAnswer === index ? unionIcon : ''"
                    alt=""
                >
            </div>
            <button v-if="showAnswer && data[questionIndex].answers[selectedAnswer].correct" class="next-btn" @click="$emit('next')">
                <img src="../assets/images/right-next-icon.svg" alt="Next">
            </button>
        </div>
        <div v-if="showAnswer" class="footer">
            <h4 class="tip">{{ data[questionIndex].answers[selectedAnswer].correct ? $t('Exclamation.correct') : $t('Exclamation.oops') }} {{ data[questionIndex].answers[selectedAnswer].tip }}</h4>
        </div>
    </section>
</template>

<script>
import unionIcon from "../assets/images/union-icon.svg";
import checkIcon from "../assets/images/check-icon.svg";

export default {
    name: "Quiz",
    props: {
        data: Array,
        questionIndex: Number,
        showAnswer: Boolean,
        selectedAnswer: [Number, null],
    },
    setup(props, ctx) {
        const chooseAnswer = (answer) => {
            ctx.emit("choose-answer", answer);
        };

        return {
            chooseAnswer,
            unionIcon,
            checkIcon,
        }
    }
}
</script>

<style scoped>
.section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 37.5px 51px;
    background: #CE2C16;
}

.question {
    text-align: center;
}

.content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    padding: 68px 225px 32px 171px;
}

.content > .option:first-child {
    margin-right: 84px;
}

.option {
    position: relative;
    outline: 3px solid #FFFFFF;
    border-radius: 15px;
}

.option > img {
    display: block;
    height: auto;
    max-width: 100%;
}

.image {
    border-radius: 15px;
}

.correct {
    outline: 15px solid #77D302;
    border-radius: 20px;
}

.wrong {
    outline: 15px solid #FF1F00;
    border-radius: 20px;
}

.option-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 10px 0 0 0;
}

.correct .option-icon {
    padding: 18px 12px;
    background: #77D302;
}

.wrong .option-icon {
    padding: 18px;
    background: #FF1F00;
}

.next-btn {
    position: absolute;
    top: 222px;
    right: 96px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 33.5px 51px;
    background: rgba(206, 44, 22, 0.33);
}

.tip {
    font-size: 36px;
    line-height: 101%;
    letter-spacing: 0.005em;
    text-align: center;
}
</style>