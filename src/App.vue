<template>
    <main>
        <Overlay v-if="showOverlay" @continue="hideOverlayHandler"/>
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
import { ref, computed } from "vue";
import { i18n } from "@/plugins/i18n";
import questions from "@/data";
import Intro from "@/components/Intro.vue";
import PlayAgain from "@/components/PlayAgain.vue";
import Quiz from "@/components/Quiz.vue";
import Overlay from "@/components/Overlay.vue";
import backgroundSnd from "./assets/audios/background.mp3";
import correctSnd from "./assets/audios/Correct.wav";
import wrongSnd from "./assets/audios/Incorrect.wav";
import gameOverVoice from "./assets/audios/voice/BL-0020_Game-over_24k_mono.mp3";
import letsPlayVoice from "./assets/audios/voice/BL-0001_Lets-play-Safety-Select_24k_mono.mp3";
import introVoice from "./assets/audios/voice/BL-0002_Help-Operations-Manager-Darcy_24k_mono.mp3";
import correctVoice from "./assets/audios/voice/BL-0004_Correct_24k_mono.mp3";
import wrongVoice from "./assets/audios/voice/BL-0005_Oops_24k_mono.mp3";
import gameOverVoiceFr from "./assets/audios/voice/FR/BL-0020_Partie-terminée_24k_mono.mp3";
import letsPlayVoiceFr from "./assets/audios/voice/FR/BL-0001_Jouons-à-Sécurité-Sélection_24k_mono.mp3";
import introVoiceFr from "./assets/audios/voice/FR/BL-0002_Aidez-Darcy-Fraser-gestionnai_24k_mono.mp3";
import correctVoiceFr from "./assets/audios/voice/FR/BL-0004_Correct_24k_mono.mp3";
import wrongVoiceFr from "./assets/audios/voice/FR/BL-0005_Oups_24k_mono.mp3";

export default {
    name: "App",
    components: { PlayAgain, Intro, Quiz, Overlay },
    setup() {
        const showHome = ref(true);
        const showOverlay = ref(true);
        const gameOver = ref(false);
        const gameStarted = ref(false);
        const questionIndex = ref(0);
        const showAnswer = ref(false);
        const selectedAnswer = ref(null);
        const backgroundAudio = new Audio(backgroundSnd);
        const voiceAudio = new Audio();
        const tipAudio = new Audio();
        const voiceOver = computed(() => {
            switch (i18n.global.locale.value) {
                case "fr":
                    return {
                        intro: introVoiceFr,
                        letsPlay: letsPlayVoiceFr,
                        gameOver: gameOverVoiceFr,
                        correct: correctVoiceFr,
                        oops: wrongVoiceFr,
                    };
                default:
                    return {
                        intro: introVoice,
                        letsPlay: letsPlayVoice,
                        gameOver: gameOverVoice,
                        correct: correctVoice,
                        oops: wrongVoice,
                    };
            }
        });

        window.onmessage = (event) => {
            i18n.global.locale.value = event.data.locale || "en";
        };

        const playAudio = (audio, source) => {
            audio.src = source;
            audio.play();
        };

        const playIntroVoice = () => {
            playAudio(voiceAudio, voiceOver.value.letsPlay);
            voiceAudio.addEventListener("ended", () => {
                if (showHome.value) {
                    playAudio(tipAudio, voiceOver.value.intro);
                }
            });
        };

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
            playAudio(voiceAudio, questions.value[questionIndex.value].textAudio);
        };

        const playAgainHandler = () => {
            showHome.value = true;
            gameOver.value = false;
            gameStarted.value = false;
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
                playAudio(voiceAudio, voiceOver.value.correct);
            } else {
                playAudio(answerAudio, wrongSnd);
                playAudio(voiceAudio, voiceOver.value.oops);
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
                playAudio(voiceAudio, voiceOver.value.gameOver);
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
        };
    }
}
</script>

<style scoped>
</style>
