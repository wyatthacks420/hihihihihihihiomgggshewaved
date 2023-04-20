input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
})
let strip: neopixel.Strip = null
basic.showLeds(`
    # . # # #
    # . # . .
    # # # # #
    . . # . #
    # # # . #
    `)
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
})
