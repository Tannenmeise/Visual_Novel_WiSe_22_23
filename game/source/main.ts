namespace Game {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("main started.");

    // put everything that should be saved/reused when saving and loading a game
    export let dataForSave = {
        nameProtagonist: ""
        // punktesystem hier rein. z.b. aisaka points: 2
    };

    export let items = {
        item1: {
            name: "Item 1",
            description: "Ein Item",
            image: "Assets/Graphics/...", // 91px x 60px
            static: true // true = consumable item -> consum by clicking it in inventory | false = non-consumable item
        }
    };

    export function ghostAnimation(): ƒS.AnimationDefinition {
        return {
            start: {translation: ƒS.positionPercent(-10, 100), color: ƒS.Color.CSS("", 1)},
            end: {translation: ƒS.positionPercent(110, 100), color: ƒS.Color.CSS("", 0)},
            duration: 3,
            playmode: ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }

    export function getAnimation(): ƒS.AnimationDefinition {
        return {
        start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
        end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
        duration: 1,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }

    // menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };

    let gameMenu: ƒS.Menu;

    let menuIsOpen: boolean = true;

    async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await ƒS.Progress.save(); // always saves, so that you start at the beginning of the scene you saved in
                break;
            case inGameMenuButtons.load:
                await ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                break;
            // inventory can be added this way too!!!
        }
    }

    // menu shortcuts
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                } else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case ƒ.KEYBOARD_CODE.C:
                console.log("Credits");
                break;
        }
    }

    export let transitions = {
        cloud: {
            duration: 3,
            alpha: "assets/transitions/clouds.jpg",
            edge: 1
        }
    };

    export let sounds = {
        floorboardCreaking: "assets/sounds/floorboard_creaking.wav",
        ghost: "assets/sounds/ghost.wav",
        giggle: "assets/sounds/giggle.wav",
        windInside: "assets/sounds/wind_inside.wav",
        windOutside: "assets/sounds/wind_outside.wav"
    };

    export let locations = {
        sky: {
            name: "Sky",
            background: "assets/backgrounds/sky.png"
        },
        hauntedHouse: {
            name: "Haunted House",
            background: "assets/backgrounds/haunted_house.png"
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
        },
        Ghost: {
            name: "Ghost",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "assets/characters/ghost.png"
            }
        }
    };

    window.addEventListener("load", start);
    function start(_event: Event): void {
        gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        // scene hierarchy
        let scenes: ƒS.Scenes = [
            { scene: scene0, name: "scene 0" },
            { scene: scene1, name: "scene 1" },
            { scene: scene2, name: "scene 2" },
            { scene: scene3, name: "scene 3" },
            { scene: scene4, name: "scene 4" }
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }
}
