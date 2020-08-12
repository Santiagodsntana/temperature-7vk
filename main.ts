radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
let temp = 0
radio.setGroup(1)
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    temp = input.temperature()
    radio.sendNumber(temp)
})
