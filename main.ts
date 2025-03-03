input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
