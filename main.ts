radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("E F C5 C5 G A G F ", 120)
    music.playMelody("E F A A G G F F ", 120)
    music.playMelody("E E E E D D C C ", 190)
    basic.showString("WELCOME TOTHE GAME!")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showString("CO POTREBUJES: 3x PAPIER,PERO")
    basic.showString("................................... CO MAS NAKRESLIT:")
    basic.showString("MAS NAKRESLIT PRAZDNICH 25 STVORCEKOV DO 2 PAPIEROV V ROZMERE 5x5.")
    basic.showString(".................................................................................................. CO ROBIT PRI HRE: ")
    basic.showString("MAS VYFARBIT KAZDY STVORCEK KTORY TI MICROBIT PRIKAZUJE VYFARBIT. A TAK TI VZNIKNE OBRAZOK.")
    basic.showString("ZACINA SA HRA!")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.pause(5000)
    basic.showString("NOVY OBRAZOK.")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showString("A NAKONIEC NA POSLEDNY PAPIER MICROBIT. VZNIKLA TI VETA SO SRDCOM. UZ SI TO MOZES NAPISAT HOCIKDE.")
    basic.showString("DAKUJEME ZE PODPORUJETE MICROBIT. (:")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showString("Welcome")
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("E F G F G B A G ", 120)
    music.playMelody("G C5 G C5 G A G F ", 120)
    music.playMelody("F G D F E A F G ", 120)
    music.playMelody("G G G G G G G G ", 500)
    music.playMelody("- - - - - - - - ", 300)
    music.playMelody("A B A B E E - - ", 170)
    music.playMelody("C5 C5 C5 B A G B G ", 290)
    for (let index = 0; index < 2; index++) {
        music.playMelody("B G B G E E F G ", 290)
    }
    music.playMelody("E E A G A G F E ", 290)
    music.playMelody("D D D E E F E D ", 290)
    music.playMelody("D D - - - - - - ", 290)
    music.playMelody("- C D C E D G F ", 40)
    music.playMelody("D E A G F D E D ", 40)
    basic.showString("The end.")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showString("Welcome")
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("F F F G A G A F ", 120)
    for (let index = 0; index < 3; index++) {
        music.playMelody("G F A G B C5 B B ", 120)
    }
    music.playMelody("- - - - - - - - ", 160)
    music.playMelody("F G A F G E E F ", 190)
    for (let index = 0; index < 2; index++) {
        music.playMelody("G F G A G A B A ", 190)
    }
    music.playMelody("- - - F G A G F ", 80)
    music.playMelody("F G E F E F G A ", 80)
    music.playMelody("A G A G F F G F ", 80)
    music.playMelody("D C E D F E C D ", 80)
    music.playMelody("C C - E D C - - ", 80)
    for (let index = 0; index < 3; index++) {
        music.playMelody("G A A G A B G A ", 200)
    }
    music.playMelody("F F E F D E A F ", 200)
    music.playMelody("D E D C E D C A ", 200)
    music.playMelody("E G F A E G F G ", 550)
    music.playMelody("F F F F G E G D ", 550)
    for (let index = 0; index < 2; index++) {
        music.playMelody("D D D - - C D C ", 550)
        music.playMelody("C D D C E D C D ", 550)
    }
    music.playMelody("- - - - - - - - ", 170)
    for (let index = 0; index < 4; index++) {
        music.playMelody("F A F A F F F A ", 800)
    }
    music.playMelody("C5 C5 C5 C5 C5 C5 - - ", 120)
    music.playMelody("D E C E D F D E ", 40)
    music.playMelody("- C D C E C D C ", 20)
    music.playMelody("- - E F D F E G ", 120)
    music.playMelody("- - - C C C C C ", 120)
    basic.pause(2000)
    basic.showString("The end.")
})
let I = 0
radio.setGroup(0)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
wuKong.setLightMode(wuKong.LightMode.BREATH)
I = 99
basic.showString("Ready to play!")
basic.forever(function () {
    if (I == 1) {
        wuKong.mecanumRun(wuKong.RunList.rear)
    }
    if (I == 2) {
        wuKong.mecanumRun(wuKong.RunList.Front)
    }
    if (I == 3) {
        wuKong.mecanumRun(wuKong.RunList.left)
    }
    if (I == 4) {
        wuKong.mecanumRun(wuKong.RunList.right)
    }
    if (I == 5) {
        wuKong.mecanumSpin(wuKong.TurnList.Left)
    }
    if (I == 6) {
        wuKong.mecanumSpin(wuKong.TurnList.Right)
    }
    if (I == 0) {
        wuKong.mecanumRun(wuKong.RunList.stop)
    }
    if (I == 7) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (I == 8) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (I == 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        music.playMelody("C E G B G A G G ", 110)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (I == 11) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playMelody("- D E E C - - - ", 120)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (I == 12) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        for (let index = 0; index < 2; index++) {
            music.playMelody("A B A B A B A B ", 120)
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
