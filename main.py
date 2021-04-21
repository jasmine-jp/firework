y = 0
x = 0
i = 0
item = game.create_sprite(x, y)

def on_forever():
    global x, y, i
    while 1:
        x = item.get(LedSpriteProperty.X)
        y = item.get(LedSpriteProperty.Y)
        if input.button_is_pressed(Button.A):
            game.pause()
            break
        basic.pause(150)
        item.move(1)
        i += 1
        if i == 4:
            item.turn(Direction.RIGHT, 90)
            i = 0
    basic.pause(500)
    if abs(item.get(LedSpriteProperty.DIRECTION)) == 90:
        led.plot(Math.ceil(x / 2) + 1,
            item.get(LedSpriteProperty.DIRECTION) / 90 + y)
    else:
        led.plot(x - item.get(LedSpriteProperty.DIRECTION) / 90 + 1,
            Math.ceil(y / 2) + 1)
    led.plot_brightness(2, 2, 255)
    basic.pause(200)
    for n in range(1, 4):
        for f in range(1, 4):
            if n == 2 and f == 2:
                continue
            led.plot_brightness(n, f, 168)
    basic.pause(200)
    for n in range(5):
        if n == 0 or n == 4:
            for f in range(1, 4):
                led.plot_brightness(f, n, 64)
        else:
            for f in range(0, 5, 4):
                led.plot_brightness(f, n, 64)
    basic.pause(400)
    images.icon_image(IconNames.CHESSBOARD).show_image(0)
    game.resume()
forever(on_forever)
