input.onButtonPressed(Button.A, function () {
    if (Button_A_Value == 0) {
        Player_1_number = randint(1, 5)
        if (Player_1_number == 1) {
            basic.showNumber(1)
        } else if (Player_1_number == 2) {
            basic.showNumber(2)
        } else if (Player_1_number == 3) {
            basic.showNumber(3)
        } else if (Player_1_number == 4) {
            basic.showNumber(4)
        } else if (Player_1_number == 5) {
            basic.showNumber(5)
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        Player_1_number = Added_number + Player_1_number
        if (Player_1_number == 1) {
            basic.showNumber(1)
        } else if (Player_1_number == 2) {
            basic.showNumber(2)
        } else if (Player_1_number == 3) {
            basic.showNumber(3)
        } else if (Player_1_number == 4) {
            basic.showNumber(4)
        } else if (Player_1_number == 5) {
            basic.showNumber(5)
        } else if (Player_1_number == 6) {
            basic.showNumber(6)
        } else if (Player_1_number == 7) {
            basic.showNumber(7)
        } else if (Player_1_number == 8) {
            basic.showNumber(8)
        } else if (Player_1_number == 9) {
            basic.showNumber(9)
        } else if (Player_1_number == 11) {
            basic.showNumber(11)
        } else if (Player_1_number == 10) {
            basic.showNumber(10)
        }
        Added_number = randint(1, 5)
    }
    Button_A_Value = Button_A_Value + 1
    if (Player_1_number > 11) {
        basic.showString("Too High")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Button_B_Value == 0) {
        Player_2_Number = randint(1, 5)
        if (Player_2_Number == 1) {
            basic.showNumber(1)
        } else if (Player_2_Number == 2) {
            basic.showNumber(2)
        } else if (Player_2_Number == 3) {
            basic.showNumber(3)
        } else if (Player_2_Number == 4) {
            basic.showNumber(4)
        } else if (Player_2_Number == 5) {
            basic.showNumber(5)
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        Player_2_Number = Added_number_2 + Player_2_Number
        if (Player_2_Number == 1) {
            basic.showNumber(1)
        } else if (Player_2_Number == 2) {
            basic.showNumber(2)
        } else if (Player_2_Number == 3) {
            basic.showNumber(3)
        } else if (Player_2_Number == 4) {
            basic.showNumber(4)
        } else if (Player_2_Number == 5) {
            basic.showNumber(5)
        } else if (Player_2_Number == 6) {
            basic.showNumber(6)
        } else if (Player_2_Number == 7) {
            basic.showNumber(7)
        } else if (Player_2_Number == 8) {
            basic.showNumber(8)
        } else if (Player_2_Number == 9) {
            basic.showNumber(9)
        } else if (Player_2_Number == 11) {
            basic.showNumber(11)
        } else if (Player_2_Number == 10) {
            basic.showNumber(10)
        }
        Added_number_2 = randint(1, 5)
    }
    Button_B_Value = Button_B_Value + 1
    if (Player_2_Number > 11) {
        basic.showString("Too High")
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Player_1_points == 0) {
        basic.showString("P1 0 ")
    } else if (Player_1_points == 1) {
        basic.showString("P1 1 ")
    } else if (Player_1_points == 2) {
        basic.showString("P1 2 ")
    } else {
        basic.showString("P1 3 ")
    }
    if (Player_2_points == 0) {
        basic.showString("P2 0")
    } else if (Player_2_points == 1) {
        basic.showString("P2 1")
    } else if (Player_2_points == 2) {
        basic.showString("P2 2")
    } else {
        basic.showString("P2 3")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Player_1_number > 11) {
        basic.showString("P1 Too High")
        Player_1_number = 0
    }
    if (Player_2_Number > 11) {
        basic.showString("P2 Too High")
        Player_2_Number = 0
    }
    if (Player_1_number > Player_2_Number) {
        basic.showString("P1 point")
        Player_1_points = Player_1_points + 1
    } else if (Player_2_Number > Player_1_number) {
        basic.showString("P2 point")
        Player_2_points = Player_2_points + 1
    } else {
        basic.showString("Tie")
    }
    Player_2_Number = 0
    Player_1_number = 0
    Added_number_2 = 0
    Added_number = 0
    Button_B_Value = 0
    Button_A_Value = 0
})
let Player_2_Number = 0
let Player_1_number = 0
let Player_2_points = 0
let Player_1_points = 0
let Added_number_2 = 0
let Added_number = 0
let Button_B_Value = 0
let Button_A_Value = 0
Button_A_Value = 0
Button_B_Value = 0
Added_number = randint(1, 5)
Added_number_2 = randint(1, 5)
Player_1_points = 0
Player_2_points = 0
basic.forever(function () {
    if (Player_1_points == 3) {
        basic.showString("P1 Wins")
    }
    if (Player_2_points == 3) {
        basic.showString("P2 Wins")
    }
})
