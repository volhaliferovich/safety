import { createI18n } from "vue-i18n";

const messages = {
    en: {
        Overlay: {
            game_time: "Time for a game!",
            continue: "Continue",
        },
        Intro: {
            safety_select: "Safety Select",
            help_manager: "Help Operations Manager Darcy Fraser choose better hand, wrist, and finger positions!"
        },
        Finish: {
            game_over: "Game over.",
            play_again: "Play again",
            continue: "or click \"next\" below to continue"
        },
        Exclamation: {
            oops: "Oops!",
            correct: "Correct!"
        },
        Question_1: {
            text: "Which is an example of a Smart Setup?",
            correct_tip: "Darcy positions himself closer to the box, allowing his wrist to be in the mid-range and less stressed.",
            oops_tip: "This position puts strain on the body. Try Again."
        },
        Question_2: {
            text: "Which shows the wrist in a STRESSED end-range position?",
            correct_tip: "The end-range puts stress on your wrist. Darcy's body can become more stressed if he chooses to scan like this!",
            oops_tip: "Try again to select the STRESSED image."
        },
        Question_3: {
            text: "Which grip is better for your hands and forearms?",
            correct_tip: "A relaxed index finger and thumb reduce fatigue.",
            oops_tip: "This looks stressed, try again."
        },
        Question_4: {
            text: "Which wrist position maintains the mid-range?",
            correct_tip: "Push with the little finger side of your hand.",
            oops_tip: "The wrist is more of an end-range, which stresses the wrist. Try Again."
        },
        Question_5: {
            text: "Which setup is better for carrying this freight?",
            correct_tip: "By placing one hand at a corner, Darcy can have his elbow closer to his body in the green zone.",
            oops_tip: "Try again to move Darcy's elbows from the yellow to the green zone!"
        }
    },
    fr: {
        Overlay: {
            game_time: "Temps de jouer à un jeu !",
            continue: "Continuer",
        },
        Intro: {
            safety_select: "Sécurité Sélection",
            help_manager: "Aidez Darcy Fraser, gestionnaire des opérations, à choisir de meilleures positions pour les mains, les poignets et les doigts !"
        },
        Finish: {
            game_over: "Partie terminée.",
            play_again: "Jouez à nouveau",
            continue: "ou cliquez sur \"suivant\" ci-dessous pour continuer."
        },
        Exclamation: {
            oops: "Oups !",
            correct: "Correct !"
        },
        Question_1: {
            text: "Quel est un exemple de configuration intelligente ?",
            correct_tip: "Darcy se positionne plus près de la boîte, ce qui permet à son poignet d'être dans la plage médiane et moins stressé.",
            oops_tip: "Cette position met une tension sur le corps. Essayez à nouveau."
        },
        Question_2: {
            text: "Quelle image montre le poignet dans une position extrême STRESSÉE ?",
            correct_tip: "La position extrême met une tension sur votre poignet. Le corps de Darcy peut être encore plus stressé s'il choisit de scanner de cette manière !",
            oops_tip: "Essayez à nouveau de sélectionner l'image STRESSÉE."
        },
        Question_3: {
            text: "Quelle prise est meilleure pour vos mains et avant-bras ?",
            correct_tip: "Un index et un pouce détendus réduisent la fatigue.",
            oops_tip: "Cela semble stressant, essayez à nouveau."
        },
        Question_4: {
            text: "Quelle position du poignet maintient la plage médiane ?",
            correct_tip: "Poussez avec le côté du petit doigt de votre main.",
            oops_tip: "Le poignet est plutôt en position extrême, ce qui le stresse. Essayez à nouveau."
        },
        Question_5: {
            text: "Quelle configuration est meilleure pour transporter cette cargaison ?",
            correct_tip: "En plaçant une main à un coin, Darcy peut avoir son coude plus près de son corps dans la zone verte.",
            oops_tip: "Essayez à nouveau de déplacer les coudes de Darcy de la zone jaune à la zone verte !"
        }
    }
};

export const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages,
});