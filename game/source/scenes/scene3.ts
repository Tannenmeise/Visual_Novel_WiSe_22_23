namespace Game {
    export async function scene3(): ƒS.SceneReturn {
        console.log("scene3 started");

        ƒS.Speech.hide();
        await ƒS.update();

        // show haunted house
        await ƒS.Location.show(locations.hauntedHouse);
        await ƒS.update(1);

        // haunted house ambience
        ƒS.Sound.play(sounds.windInside, 1, true);

        await ƒS.Sound.fade(sounds.floorboardCreaking, 1, 1, true);

        // ghost event
        await ƒS.Sound.fade(sounds.ghost, 1, 1, true);

        // giggle event
        ƒS.Sound.play(sounds.giggle, 1, true);

        // show ghost
        await ƒS.Character.animate(characters.Ghost, characters.Ghost.pose.neutral, ghostAnimation());


        /*
        await ƒS.Character.show(characters.Sticky, characters.Sticky.pose.happy, ƒS.positions.bottomcenter);
        ƒS.update();

        await ƒS.Character.animate(characters.Sticky, characters.Sticky.pose.happy, ghostAnimation());
        */
    }
}