let game2 = 0
input.onGesture(Gesture.Shake, function () {
    game2 = randint(1, 3)
    if (game2 == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (game2 == 2) {
        basic.showIcon(IconNames.Square)
    } else if (game2 == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
    	
    }
})
