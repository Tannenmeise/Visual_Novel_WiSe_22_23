namespace Game {
    export async function scene2(): ƒS.SceneReturn {
        console.log("scene2 started");

        // SPEECH
        let text = {
            Sticky: {
                T0000: "Willkommen zur 2. Szene!",
                T0001: "Ich hoffe dir hat das Visual Novel gefallen.",
                T0002: ":)"
            }
        };

        ƒS.Speech.hide();
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.Sticky, text.Sticky.T0000);
        await ƒS.Speech.tell(characters.Sticky, text.Sticky.T0001);
        await ƒS.Speech.tell(characters.Sticky, text.Sticky.T0002);
    }
}
