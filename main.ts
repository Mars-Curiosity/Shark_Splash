namespace SpriteKind {
    export const Decoration = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    if (true) {
        game.setGameOverEffect(true, effects.confetti)
        game.over(true)
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (true) {
        info.changeScoreBy(-1)
    } else {
        game.setGameOverEffect(false, effects.splatter)
    }
})
let fish_food: Sprite = null
let myenemy: Sprite = null
let mydecor: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(25)
scene.setBackgroundImage(assets.image`ocean1`)
for (let index = 0; index < 10; index++) {
    mydecor = sprites.create(assets.image`decoration`, SpriteKind.Decoration)
}
mydecor.setPosition(randint(0, 160), 96)
game.splash("Note: The longer you touch a submarine the more points will be taken!")
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
game.onUpdateInterval(5000, function () {
    myenemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    myenemy.setPosition(scene.screenWidth(), randint(1, 100))
    myenemy.vx = -41
})
game.onUpdateInterval(1200, function () {
    fish_food = sprites.create(assets.image`food`, SpriteKind.Food)
    fish_food.setPosition(scene.screenWidth(), randint(5, 115))
    fish_food.vx = -75
})
