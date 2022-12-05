"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒS = FudgeStory;
    console.log("main started.");
    // put everything that should be saved/reused when saving and loading a game
    Game.dataForSave = {
        nameProtagonist: ""
        // punktesystem hier rein. z.b. aisaka points: 2
    };
    Game.items = {
        item1: {
            name: "Item 1",
            description: "Ein Item",
            image: "Assets/Graphics/...",
            static: true // true = consumable item -> consum by clicking it in inventory | false = non-consumable item
        }
    };
    function ghostAnimation() {
        return {
            start: { translation: Game.ƒS.positionPercent(-10, 100), color: Game.ƒS.Color.CSS("", 1) },
            end: { translation: Game.ƒS.positionPercent(110, 100), color: Game.ƒS.Color.CSS("", 0) },
            duration: 3,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Game.ghostAnimation = ghostAnimation;
    function getAnimation() {
        return {
            start: { translation: Game.ƒS.positions.bottomleft, rotation: -20, scaling: new Game.ƒS.Position(0.5, 1.5), color: Game.ƒS.Color.CSS("white", 0.3) },
            end: { translation: Game.ƒS.positions.bottomright, rotation: 20, scaling: new Game.ƒS.Position(1.5, 0.5), color: Game.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Game.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Game.getAnimation = getAnimation;
    // menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    let gameMenu;
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Game.ƒS.Progress.save(); // always saves, so that you start at the beginning of the scene you saved in
                break;
            case inGameMenuButtons.load:
                await Game.ƒS.Progress.load();
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
    async function handleKeyPress(_event) {
        switch (_event.code) {
            case Game.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Game.ƒS.Progress.save();
                break;
            case Game.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Game.ƒS.Progress.load();
                break;
            case Game.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case Game.ƒ.KEYBOARD_CODE.C:
                console.log("Credits");
                break;
        }
    }
    Game.transitions = {
        cloud: {
            duration: 3,
            alpha: "assets/transitions/clouds.jpg",
            edge: 1
        }
    };
    Game.sounds = {
        floorboardCreaking: "assets/sounds/floorboard_creaking.wav",
        ghost: "assets/sounds/ghost.wav",
        giggle: "assets/sounds/giggle.wav",
        windInside: "assets/sounds/wind_inside.wav",
        windOutside: "assets/sounds/wind_outside.wav"
    };
    Game.locations = {
        sky: {
            name: "Sky",
            background: "assets/backgrounds/sky.png"
        },
        hauntedHouse: {
            name: "Haunted House",
            background: "assets/backgrounds/haunted_house.png"
        }
    };
    Game.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        Sticky: {
            name: "Sticky",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "assets/characters/sticky.png"
            }
        },
        Ghost: {
            name: "Ghost",
            origin: Game.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "assets/characters/ghost.png"
            }
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Game.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        // scene hierarchy
        let scenes = [
            { scene: Game.scene0, name: "scene 0" },
            { scene: Game.scene1, name: "scene 1" },
            { scene: Game.scene2, name: "scene 2" },
            { scene: Game.scene3, name: "scene 3" },
            { scene: Game.scene4, name: "scene 4" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Game.dataForSave = Game.ƒS.Progress.setData(Game.dataForSave, uiElement);
        // start the sequence
        Game.ƒS.Progress.go(scenes);
    }
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene0() {
        console.log("FudgeStory Template Scene starting!!");
        Game.dataForSave.nameProtagonist = await Game.ƒS.Speech.getInput(); // Für Protagonist-Name Input
        await Game.ƒS.Speech.tell(Game.characters.protagonist, "Hi, it's me!", true, "Player");
        Game.ƒS.Speech.setTickerDelays(80, 5000);
        let signalDelay3 = Game.ƒS.Progress.defineSignal([() => Game.ƒS.Progress.delay(3)]);
        await Game.ƒS.Speech.tell(Game.characters.Sticky, "Hallo 1");
        signalDelay3();
        await Game.ƒS.Speech.tell(Game.characters.Sticky, "Hallo 2");
        Game.ƒS.Inventory.add(Game.items.item1);
        await Game.ƒS.Inventory.open();
    }
    Game.scene0 = scene0;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene1() {
        console.log("scene1 started");
        // SPEECH
        let text = {
            Sticky: {
                T0000: "Willkommen zur 1. Szene!",
                T0001: "...",
                T0002: "Das war es auch schon."
            }
        };
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.sky);
        await Game.ƒS.update(Game.transitions.cloud.duration, Game.transitions.cloud.alpha, Game.transitions.cloud.edge);
        await Game.ƒS.update(1);
        await Game.ƒS.Character.show(Game.characters.Sticky, Game.characters.Sticky.pose.happy, Game.ƒS.positionPercent(70, 110));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.Sticky, text.Sticky.T0000);
        await Game.ƒS.Speech.tell(Game.characters.Sticky, text.Sticky.T0001);
        await Game.ƒS.Speech.tell(Game.characters.Sticky, text.Sticky.T0002);
    }
    Game.scene1 = scene1;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene2() {
        console.log("scene2 started");
        // SPEECH
        let text = {
            Sticky: {
                T0000: "Willkommen zur 2. Szene!",
                T0001: "Ich hoffe dir hat das Visual Novel gefallen.",
                T0002: ":)"
            }
        };
        let dialogue = {
            sayYes: "Yes",
            sayOk: "Okay",
            sayNo: "No",
            sayBla: "Bla"
        };
        let dialogueElement = await Game.ƒS.Menu.getInput(dialogue, "choiceCSSClass");
        let pickedYes;
        let pickedNo;
        let pickedBla;
        let pickedOk;
        if (pickedYes || pickedBla || pickedNo) {
            delete dialogue.sayBla;
        }
        switch (dialogueElement) {
            case dialogue.sayYes:
                break;
            case dialogue.sayOk:
                break;
            case dialogue.sayNo:
                await Game.ƒS.Speech.tell(Game.characters.Sticky, "Nein");
                break;
            case dialogue.sayBla:
                break;
        }
        Game.ƒS.Speech.hide();
        await Game.ƒS.update(2);
        await Game.ƒS.Speech.tell(Game.characters.Sticky, text.Sticky.T0000);
        await Game.ƒS.Speech.tell(Game.characters.Sticky, text.Sticky.T0001);
        await Game.ƒS.Speech.tell(Game.characters.Sticky, text.Sticky.T0002);
    }
    Game.scene2 = scene2;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene3() {
        console.log("scene3 started");
        Game.ƒS.Speech.hide();
        await Game.ƒS.update();
        // show haunted house
        await Game.ƒS.Location.show(Game.locations.hauntedHouse);
        await Game.ƒS.update(1);
        // haunted house ambience
        Game.ƒS.Sound.play(Game.sounds.windInside, 1, true);
        await Game.ƒS.Sound.fade(Game.sounds.floorboardCreaking, 1, 1, true);
        // ghost event
        await Game.ƒS.Sound.fade(Game.sounds.ghost, 1, 1, true);
        // giggle event
        Game.ƒS.Sound.play(Game.sounds.giggle, 1, true);
        // show ghost
        await Game.ƒS.Character.animate(Game.characters.Ghost, Game.characters.Ghost.pose.neutral, Game.ghostAnimation());
        /*
        await ƒS.Character.show(characters.Sticky, characters.Sticky.pose.happy, ƒS.positions.bottomcenter);
        ƒS.update();

        await ƒS.Character.animate(characters.Sticky, characters.Sticky.pose.happy, ghostAnimation());
        */
    }
    Game.scene3 = scene3;
})(Game || (Game = {}));
var Game;
(function (Game) {
    async function scene4() {
        console.log("scene4 started");
        // SPEECH
        let text = {
            Sticky: {
                T0000: "Robot Fight"
            }
        };
        Game.ƒS.Speech.hide();
        await Game.ƒS.Location.show(Game.locations.sky);
        await Game.ƒS.update();
        await Game.ƒS.Character.show(Game.characters.Sticky, Game.characters.Sticky.pose.happy, Game.ƒS.positionPercent(70, 110));
        await Game.ƒS.update();
        await Game.ƒS.Speech.tell(Game.characters.Sticky, text.Sticky.T0000);
        let graph = Game.ƒS.Base.getGraph();
        // LOADING OBJECT
        let node = new Game.ƒ.Node("Quad");
        node.addComponent(new Game.ƒ.ComponentTransform(Game.ƒ.Matrix4x4.TRANSLATION(new Game.ƒ.Vector3(0, 0, 0))));
        let mesh = new Game.ƒ.MeshObj("RobotMesh");
        await mesh.load("assets/objects/test.obj");
        //let mesh: ƒ.MeshQuad = new ƒ.MeshQuad();
        let cmpMesh = new Game.ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        let mtrSolidWhite = new Game.ƒ.Material("SolidWhite", Game.ƒ.ShaderLit, new Game.ƒ.CoatColored(Game.ƒ.Color.CSS("RED")));
        let cmpMaterial = new Game.ƒ.ComponentMaterial(mtrSolidWhite);
        node.addComponent(cmpMaterial);
        graph.getChild(1).addChild(node);
        node.mtxLocal.translateX(150);
        node.mtxLocal.translateY(-100);
        node.mtxLocal.scale(new Game.ƒ.Vector3(100, 100, 100));
        await Game.ƒS.update();
        console.log(graph.getChild(1));
    }
    Game.scene4 = scene4;
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map