"use strict";
var Game;
(function (Game) {
    Game.ƒ = FudgeCore;
    Game.ƒS = FudgeStory;
    console.log("main started.");
    Game.dataForSave = { nameProtagonist: "" };
    Game.transitions = {
        cloud: {
            duration: 3,
            alpha: "assets/transitions/clouds.jpg",
            edge: 1
        }
    };
    Game.sound = {
        background: "PATH"
    };
    Game.locations = {
        sky: {
            name: "Sky",
            background: "assets/backgrounds/sky.png"
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
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        // scene hierarchy
        let scenes = [
            { scene: Game.scene1, name: "scene 1" },
            { scene: Game.scene2, name: "scene 2" }
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
        Game.ƒS.Speech.hide();
        await Game.ƒS.update(2);
        await Game.ƒS.Speech.tell(Game.characters.Sticky, text.Sticky.T0000);
        await Game.ƒS.Speech.tell(Game.characters.Sticky, text.Sticky.T0001);
        await Game.ƒS.Speech.tell(Game.characters.Sticky, text.Sticky.T0002);
    }
    Game.scene2 = scene2;
})(Game || (Game = {}));
//# sourceMappingURL=game.js.map