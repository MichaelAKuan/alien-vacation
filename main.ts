
let ship = sprites.create(img`
    ........feebbbef........
    ........f24bdb2e........
    .......ce2222222e.......
    ......cbc22bb22e6cf.....
    ......b962e99e2b6dc.....
    ......c6b2e69e2e6bf.....
    ...cccee222ab222eeeccc..
    .fbbbddddb4eeebbbbbbbbcf
    febbddbcdddbbdddbcbbbbbf
    fe2bddcbdddcbddddccbb42f
    .f24bddddddbbdddbbbb42f.
    ..ff24bddddddddbbbb22f..
    ....fee244bbbb4444ee....
    .....fbbe2222e22ebbf....
    ......ffffbbbbfffff.....
    ..........fffff.........
`, SpriteKind.Player)
ship.setPosition(10,60)
controller.moveSprite(ship)
ship.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1000,function (){
    let bigspacerockman = sprites.create(img`
        . . . . . . . c c c a c . . . .
        . . c c b b b a c a a a c . . .
        . c c a b a c b a a a b c c . .
        . c a b e e e e f f e e e e . .
        . c a c e e e e f f e e e e e e
        . c a 8 e e f f f f f f e e a e
        c c c a e e e f e e f e e e c c
        c c a a e e e e e e e e e e b a
        c c a b e f f f f f f f f e b a
        c a b c e e e e e e e e e e b c
        c a c f e e e e e e e e e e b .
        c a 8 f e e e e e e e e e e c .
        . c b c c c c b f c a b b a c .
        . . a b b b b b b b b b b b c .
        . . . c c c c b b b b b c c . .
        . . . . . . . . c b b c . . . .
    `, SpriteKind.Enemy)
})
