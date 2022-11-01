namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("main started.");

    export let dataForSave = { nameProtagonist: "" };
    export let transitions = {
        cloud: {
            duration: 3,
            alpha: "assets/transitions/clouds.jpg",
            edge: 1
        }
    };

    export let sound = {
        background: "PATH"
    };

    export let locations = {
        sky: {
            name: "Sky",
            background: "assets/backgrounds/sky.png"
        }
    };

    export let characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        Sticky: {
            name: "Sticky",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "assets/characters/sticky.png"
            }
        }
    };

    window.addEventListener("load", start);
    function start(_event: Event): void {
        // scene hierarchy
        let scenes: ƒS.Scenes = [
            { scene: scene1, name: "scene 1" },
            { scene: scene2, name: "scene 2" }
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }
}
