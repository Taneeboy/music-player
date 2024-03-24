basic.forever(function () {
    music.setVolume(255)
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.clearScreen()
        music.stopAllSounds()
        basic.showString("1")
        basic.pause(2000)
        basic.clearScreen()
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Breve))
    }
    if (input.isGesture(Gesture.TiltRight)) {
        music.stopAllSounds()
        basic.clearScreen()
        basic.showString("2")
        basic.pause(2000)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.InBackground)
        if (input.buttonIsPressed(Button.A)) {
            music.stopAllSounds()
            basic.clearScreen()
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . . . # .
                . # # # .
                `)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        }
        if (input.buttonIsPressed(Button.B)) {
            music.stopAllSounds()
            basic.showString("4")
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
        }
    }
})
