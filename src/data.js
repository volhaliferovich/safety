import { i18n } from "@/plugins/i18n.js";

import q1_a1 from "./assets/images/q1_a1.png";
import q1_a2 from "./assets/images/q1_a2.png";
import q2_a1 from "./assets/images/q2_a1.png";
import q2_a2 from "./assets/images/q2_a2.png";
import q3_a1 from "./assets/images/q3_a1.png";
import q3_a2 from "./assets/images/q3_a2.png";
import q4_a1 from "./assets/images/q4_a1.png";
import q4_a2 from "./assets/images/q4_a2.png";
import q5_a1 from "./assets/images/q5_a1.png";
import q5_a2 from "./assets/images/q5_a2.png";
import q1 from "./assets/audios/voice/BL-0003_Which-is-an-example-of-a-Smart_24k_mono.mp3";
import q2 from "./assets/audios/voice/BL-0008_Which-shows-the-wrist-in-a-STR_24k_mono.mp3";
import q3 from "./assets/audios/voice/BL-0011_Which-grip-is-better-for-your_24k_mono.mp3";
import q4 from "./assets/audios/voice/BL-0014_Which-wrist-position-maintains_24k_mono.mp3";
import q5 from "./assets/audios/voice/BL-0017_Which-setup-is-better-for-carr_24k_mono.mp3";
import q1_v1 from "./assets/audios/voice/BL-0006_This-position-puts-strain-on-t_24k_mono.mp3";
import q1_v2 from "./assets/audios/voice/BL-0007_In-this-case-Darcy-tips-the-b_24k_mono.mp3";
import q2_v1 from "./assets/audios/voice/BL-0010_The-end-range-puts-stress-on-y_24k_mono.mp3";
import q2_v2 from "./assets/audios/voice/BL-0009_Try-again-to-select-the-STRESS_24k_mono.mp3";
import q3_v1 from "./assets/audios/voice/BL-0013_A-relaxed-index-finger-and-thu_24k_mono.mp3";
import q3_v2 from "./assets/audios/voice/BL-0012_This-looks-stressed-try-again_24k_mono.mp3";
import q4_v1 from "./assets/audios/voice/BL-0015_The-wrist-is-more-of-an-end-ra_24k_mono.mp3";
import q4_v2 from "./assets/audios/voice/BL-0016_Push-with-the-little-finger-si_24k_mono.mp3";
import q5_v1 from "./assets/audios/voice/BL-0019_By-placing-one-hand-at-a-corne_24k_mono.mp3";
import q5_v2 from "./assets/audios/voice/BL-0018_Try-again-to-move-Darcys-elbo_24k_mono.mp3";

export default [
    {
        text: i18n.global.t("Question_1.text"),
        textAudio: q1,
        answers: [
            { option: q1_a1, tip: i18n.global.t("Question_1.oops_tip"), voice: q1_v1 },
            { option: q1_a2, correct: true, tip: i18n.global.t("Question_1.correct_tip"), voice: q1_v2 },
        ],
    }, {
        text: i18n.global.t("Question_2.text"),
        textAudio: q2,
        answers: [
            { option: q2_a1, correct: true, tip: i18n.global.t("Question_2.correct_tip"), voice: q2_v1 },
            { option: q2_a2, tip: i18n.global.t("Question_2.oops_tip"), voice: q2_v2 },
        ],
    }, {
        text: i18n.global.t("Question_3.text"),
        textAudio: q3,
        answers: [
            { option: q3_a1, correct: true, tip: i18n.global.t("Question_3.correct_tip"), voice: q3_v1 },
            { option: q3_a2, tip: i18n.global.t("Question_3.oops_tip"), voice: q3_v2 },
        ],
    }, {
        text: i18n.global.t("Question_4.text"),
        textAudio: q4,
        answers: [
            { option: q4_a1, tip: i18n.global.t("Question_4.oops_tip"), voice: q4_v1 },
            { option: q4_a2, correct: true, tip: i18n.global.t("Question_4.correct_tip"), voice: q4_v2 },
        ],
    }, {
        text: i18n.global.t("Question_5.text"),
        textAudio: q5,
        answers: [
            { option: q5_a1, correct: true, tip: i18n.global.t("Question_5.correct_tip"), voice: q5_v1 },
            { option: q5_a2, tip: i18n.global.t("Question_5.oops_tip"), voice: q5_v2 },
        ],
    },
];