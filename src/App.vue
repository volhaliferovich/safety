<template>
    <main>
        <Overlay v-if="showOverlay" title="time for a game!" button-text="Continue" @continue="hideOverlayHandler" />
        <Intro v-if="showHome" @start="startGameHandler" />
        <Quiz
            v-if="gameStarted && questions.length > 0 && !gameOver"
            :data="questions"
            :question-index="questionIndex"
            :show-answer="showAnswer"
            :selected-answer="selectedAnswer"
            @choose-answer="chooseAnswerHandler"
            @next="nextHandler"
        />
        <PlayAgain v-if="gameOver" @play-again="playAgainHandler" />
    </main>
</template>

<script>
import { ref } from "vue";
import Intro from "@/components/Intro.vue";
import PlayAgain from "@/components/PlayAgain.vue";
import Quiz from "@/components/Quiz.vue";
import Overlay from "@/components/Overlay.vue";
import data from "@/data";
import backgroundSnd from "./assets/audios/background.mp3";
import correctSnd from "./assets/audios/Correct.wav";
import wrongSnd from "./assets/audios/Incorrect.wav";
import gameOverVoice from "./assets/audios/voice/BL-0020_Game-over_24k_mono.mp3";
import letsPlayVoice from "./assets/audios/voice/BL-0001_Lets-play-Safety-Select_24k_mono.mp3";
import introVoice from "./assets/audios/voice/BL-0002_Help-Operations-Manager-Darcy_24k_mono.mp3";
import correctVoice from "./assets/audios/voice/BL-0004_Correct_24k_mono.mp3";
import wrongVoice from "./assets/audios/voice/BL-0005_Oops_24k_mono.mp3";

export default {
    name: "App",
    components: { PlayAgain, Intro, Quiz, Overlay },
    setup() {
        const showHome = ref(true);
        const showOverlay = ref(true);
        const gameOver = ref(false);
        const gameStarted = ref(false);
        const questions = ref([]);
        const questionIndex = ref(0);
        const showAnswer = ref(false);
        const selectedAnswer = ref(null);
        const backgroundAudio = new Audio(backgroundSnd);
        const voiceAudio = new Audio();
        const tipAudio = new Audio();

        const playAudio = (audio, source) => {
            audio.src = source;
            audio.play();
        };

        const playIntroVoice = () => {
            playAudio(voiceAudio, letsPlayVoice);
            voiceAudio.addEventListener("ended", () => {
                if (showHome.value) {
                    playAudio(tipAudio, introVoice);
                }
            });
        }

        const hideOverlayHandler = () => {
            showOverlay.value = false;
            backgroundAudio.loop = true;
            backgroundAudio.volume = 0.1;
            backgroundAudio.play();
            playIntroVoice();
        };

        const startGameHandler = () => {
            tipAudio.pause();
            showHome.value = false;
            gameStarted.value = true;
            questions.value = data;
            playAudio(voiceAudio, questions.value[questionIndex.value].textAudio);
        };

        const playAgainHandler = () => {
            showHome.value = true;
            gameOver.value = false;
            gameStarted.value = false;
            questions.value = [];
            questionIndex.value = 0;
            showAnswer.value = false;
            selectedAnswer.value = null;
            playIntroVoice();
            window.top.postMessage({ completed: false }, '*');
        };

        const playTipVoice = () => {
            voiceAudio.addEventListener("ended", () => {
                if (showAnswer.value) {
                    playAudio(tipAudio, questions.value[questionIndex.value].answers[selectedAnswer.value].voice);
                }
            });
        };

        const chooseAnswerHandler = (answer) => {
            const answerAudio = new Audio();
            answerAudio.volume = 1;
            if (questions.value[questionIndex.value].answers[answer].correct) {
                playAudio(answerAudio, correctSnd);
                playAudio(voiceAudio, correctVoice);
            } else {
                playAudio(answerAudio, wrongSnd);
                playAudio(voiceAudio, wrongVoice);
            }
            selectedAnswer.value = answer;
            showAnswer.value = true;
            playTipVoice();
        };

        const nextHandler = () => {
            tipAudio.pause();
            if (questionIndex.value === questions.value.length - 1) {
                gameOver.value = true;
                window.top.postMessage({ completed: true }, '*');
                playAudio(voiceAudio, gameOverVoice);
            } else {
                questionIndex.value++;
                selectedAnswer.value = null;
                playAudio(voiceAudio, questions.value[questionIndex.value].textAudio);
            }
            showAnswer.value = false;
        };

        return {
            showHome,
            gameOver,
            gameStarted,
            questions,
            questionIndex,
            showAnswer,
            startGameHandler,
            playAgainHandler,
            chooseAnswerHandler,
            nextHandler,
            selectedAnswer,
            hideOverlayHandler,
            showOverlay,
        }
    }
}
</script>

<style scoped>
</style>
