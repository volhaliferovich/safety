import { computed } from "vue";
import { i18n } from "@/plugins/i18n";
import q1 from "@/assets/audios/voice/BL-0003_Which-is-an-example-of-a-Smart_24k_mono.mp3";
import fr_q1 from "@/assets/audios/voice/FR/BL-0003_Quel-est-un-exemple-de-configu_24k_mono.mp3";
import q1_a1 from "@/assets/images/q1_a1.png";
import q1_v1 from "@/assets/audios/voice/BL-0006_This-position-puts-strain-on-t_24k_mono.mp3";
import fr_q1_v1 from "@/assets/audios/voice/FR/BL-0006_Cette-position-met-une-tension_24k_mono.mp3";
import q1_a2 from "@/assets/images/q1_a2.png";
import q1_v2 from "@/assets/audios/voice/BL-0007_Darcy-positions-himself-closer.mp3";
import fr_q1_v2 from "@/assets/audios/voice/FR/BL-0007_Darcy-se-positionne-plus-près_24k_mono.mp3";
import q2 from "@/assets/audios/voice/BL-0008_Which-shows-the-wrist-in-a-STR_24k_mono.mp3";
import fr_q2 from "@/assets/audios/voice/FR/BL-0008_Quelle-image-montre-le-poignet_24k_mono.mp3";
import q2_a1 from "@/assets/images/q2_a1.png";
import q2_v1 from "@/assets/audios/voice/BL-0010_The-end-range-puts-stress-on-y_24k_mono.mp3";
import fr_q2_v1 from "@/assets/audios/voice/FR/BL-0010_La-position-extrême-met-une-te_24k_mono.mp3";
import q2_a2 from "@/assets/images/q2_a2.png";
import q2_v2 from "@/assets/audios/voice/BL-0009_Try-again-to-select-the-STRESS_24k_mono.mp3";
import fr_q2_v2 from "@/assets/audios/voice/FR/BL-0009_Essayez-à-nouveau-de-sélection_24k_mono.mp3";
import q3 from "@/assets/audios/voice/BL-0011_Which-grip-is-better-for-your_24k_mono.mp3";
import fr_q3 from "@/assets/audios/voice/FR/BL-0011_Quelle-prise-est-meilleure-pou_24k_mono.mp3";
import q3_a1 from "@/assets/images/q3_a1.png";
import q3_v1 from "@/assets/audios/voice/BL-0013_A-relaxed-index-finger-and-thu_24k_mono.mp3";
import fr_q3_v1 from "@/assets/audios/voice/FR/BL-0013_Un-index-et-un-pouce-détendus_24k_mono.mp3";
import q3_a2 from "@/assets/images/q3_a2.png";
import q3_v2 from "@/assets/audios/voice/BL-0012_This-looks-stressed-try-again_24k_mono.mp3";
import fr_q3_v2 from "@/assets/audios/voice/FR/BL-0012_Cela-semble-stressant-essayez_24k_mono.mp3";
import q4 from "@/assets/audios/voice/BL-0014_Which-wrist-position-maintains_24k_mono.mp3";
import fr_q4 from "@/assets/audios/voice/FR/BL-0014_Quelle-position-du-poignet-mai_24k_mono.mp3";
import q4_a1 from "@/assets/images/q4_a1.png";
import q4_v1 from "@/assets/audios/voice/BL-0015_The-wrist-is-more-of-an-end-ra_24k_mono.mp3";
import fr_q4_v1 from "@/assets/audios/voice/FR/BL-0015_Le-poignet-est-plutôt-en-posit_24k_mono.mp3";
import q4_a2 from "@/assets/images/q4_a2.png";
import q4_v2 from "@/assets/audios/voice/BL-0016_Push-with-the-little-finger-si_24k_mono.mp3";
import fr_q4_v2 from "@/assets/audios/voice/FR/BL-0016_Poussez-avec-le-côté-du-petit_24k_mono.mp3";
import q5 from "@/assets/audios/voice/BL-0017_Which-setup-is-better-for-carr_24k_mono.mp3";
import fr_q5 from "@/assets/audios/voice/FR/BL-0017_Quelle-configuration-est-meill_24k_mono.mp3";
import q5_a1 from "@/assets/images/q5_a1.png";
import q5_v1 from "@/assets/audios/voice/BL-0019_By-placing-one-hand-at-a-corne_24k_mono.mp3";
import fr_q5_v1 from "@/assets/audios/voice/FR/BL-0019_En-plaçant-une-main-à-un-coin_24k_mono.mp3";
import q5_a2 from "@/assets/images/q5_a2.png";
import q5_v2 from "@/assets/audios/voice/BL-0018_Try-again-to-move-Darcys-elbo_24k_mono.mp3";
import fr_q5_v2 from "@/assets/audios/voice/FR/BL-0018_Essayez-à-nouveau-de-déplacer_24k_mono.mp3";

const voiceOver = computed(() => {
    if (i18n.global.locale.value === "fr") {
        return {
            q1: { q: fr_q1, v1: fr_q1_v1, v2: fr_q1_v2 },
            q2: { q: fr_q2, v1: fr_q2_v1, v2: fr_q2_v2 },
            q3: { q: fr_q3, v1: fr_q3_v1, v2: fr_q3_v2 },
            q4: { q: fr_q4, v1: fr_q4_v1, v2: fr_q4_v2 },
            q5: { q: fr_q5, v1: fr_q5_v1, v2: fr_q5_v2 },
        };
    } else {
        return {
            q1: { q: q1, v1: q1_v1, v2: q1_v2 },
            q2: { q: q2, v1: q2_v1, v2: q2_v2 },
            q3: { q: q3, v1: q3_v1, v2: q3_v2 },
            q4: { q: q4, v1: q4_v1, v2: q4_v2 },
            q5: { q: q5, v1: q5_v1, v2: q5_v2 },
        };
    }
});

export default computed(() => [
    {
        text: i18n.global.t("Question_1.text"),
        textAudio: voiceOver.value.q1.q,
        answers: [
            { option: q1_a1, tip: i18n.global.t("Question_1.oops_tip"), voice: voiceOver.value.q1.v1 },
            { option: q1_a2, correct: true, tip: i18n.global.t("Question_1.correct_tip"), voice: voiceOver.value.q1.v2 },
        ],
    }, {
        text: i18n.global.t("Question_2.text"),
        textAudio: voiceOver.value.q2.q,
        answers: [
            { option: q2_a1, correct: true, tip: i18n.global.t("Question_2.correct_tip"), voice: voiceOver.value.q2.v1 },
            { option: q2_a2, tip: i18n.global.t("Question_2.oops_tip"), voice: voiceOver.value.q2.v2 },
        ],
    }, {
        text: i18n.global.t("Question_3.text"),
        textAudio: voiceOver.value.q3.q,
        answers: [
            { option: q3_a1, correct: true, tip: i18n.global.t("Question_3.correct_tip"), voice: voiceOver.value.q3.v1 },
            { option: q3_a2, tip: i18n.global.t("Question_3.oops_tip"), voice: voiceOver.value.q3.v2 },
        ],
    }, {
        text: i18n.global.t("Question_4.text"),
        textAudio: voiceOver.value.q4.q,
        answers: [
            { option: q4_a1, tip: i18n.global.t("Question_4.oops_tip"), voice: voiceOver.value.q4.v1 },
            { option: q4_a2, correct: true, tip: i18n.global.t("Question_4.correct_tip"), voice: voiceOver.value.q4.v2 },
        ],
    }, {
        text: i18n.global.t("Question_5.text"),
        textAudio: voiceOver.value.q5.q,
        answers: [
            { option: q5_a1, correct: true, tip: i18n.global.t("Question_5.correct_tip"), voice: voiceOver.value.q5.v1 },
            { option: q5_a2, tip: i18n.global.t("Question_5.oops_tip"), voice: voiceOver.value.q5.v2 },
        ],
    },
]);