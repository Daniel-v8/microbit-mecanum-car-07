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
