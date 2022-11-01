namespace Game {
    export async function scene1(): ƒS.SceneReturn {
        console.log("scene1 started");

        // SPEECH
        let text = {
            Sticky: {
                T0000: "Willkommen zur 1. Szene!",
                T0001: "...",
                T0002: "Das war es auch schon."
            }
        };

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.sky);
        await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Sticky, characters.Sticky.pose.happy, ƒS.positionPercent(70, 110));
        await ƒS.update();
        await ƒS.Speech.tell(characters.Sticky, text.Sticky.T0000);
        await ƒS.Speech.tell(characters.Sticky, text.Sticky.T0001);
        await ƒS.Speech.tell(characters.Sticky, text.Sticky.T0002);
    }
}
