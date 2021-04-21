let y = 0
let x = 0
let i = 0
let item = game.createSprite(x, y)
forever(function on_forever() {
    let n: number;
    let f: number;
    
    while (1) {
        x = item.get(LedSpriteProperty.X)
        y = item.get(LedSpriteProperty.Y)
        if (input.buttonIsPressed(Button.A)) {
            game.pause()
            break
        }
        
        basic.pause(150)
        item.move(1)
        i += 1
        if (i == 4) {
            item.turn(Direction.Right, 90)
            i = 0
        }
        
    }
    basic.pause(500)
    if (Math.abs(item.get(LedSpriteProperty.Direction)) == 90) {
        led.plot(Math.ceil(x / 2) + 1, item.get(LedSpriteProperty.Direction) / 90 + y)
    } else {
        led.plot(x - item.get(LedSpriteProperty.Direction) / 90 + 1, Math.ceil(y / 2) + 1)
    }
    
    led.plotBrightness(2, 2, 255)
    basic.pause(200)
    for (n = 1; n < 4; n++) {
        for (f = 1; f < 4; f++) {
            if (n == 2 && f == 2) {
                continue
            }
            
            led.plotBrightness(n, f, 168)
        }
    }
    basic.pause(200)
    for (n = 0; n < 5; n++) {
        if (n == 0 || n == 4) {
            for (f = 1; f < 4; f++) {
                led.plotBrightness(f, n, 64)
            }
        } else {
            for (f = 0; f < 5; f += 4) {
                led.plotBrightness(f, n, 64)
            }
        }
        
    }
    basic.pause(400)
    images.iconImage(IconNames.Chessboard).showImage(0)
    game.resume()
})
