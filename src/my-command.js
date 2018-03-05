var selection
var doc

// Get the values from the 'User Defaults'
// Visible at '~/Library/Preferences/com.bohemiancoding.sketch3.plist'

// Based on the user's settings — typical 'move' amount (1)
var smallNudge = NSUserDefaults.standardUserDefaults().integerForKey('nudgeDistanceSmall')
// Based on the user's settings — typical 'shift + move' amount (10)
var largeNudge = NSUserDefaults.standardUserDefaults().integerForKey('nudgeDistanceBig')

// Used for determining whether to round to 'whole pixels'
var pixelFit = NSUserDefaults.standardUserDefaults().boolForKey('tryToFitToPixelBounds')

// Setup variables based on the context
export default function setup(context) {
  doc = context.document
  selection = context.selection
}

// ****************************
//   Plugin command handlers
// ****************************

export function increaseHorizontallyRTL(context) {
  setup(context)
  resizeFromTopRight(smallNudge)
}

export function decreaseHorizontallyRTL(context) {
  setup(context)
  resizeFromTopRight(-smallNudge)
}

export function increaseHorizontallyRTLLarge(context) {
  setup(context)
  resizeFromTopRight(largeNudge)
}

export function decreaseHorizontallyRTLLarge(context) {
  setup(context)
  resizeFromTopRight(-largeNudge)
}

function resizeFromTopRight(x) {
  selection.forEach(function(layer) {
    var frame = layer.frame()
    var newX = frame.x() - x
    var newY = frame.y()
    var width = frame.width() + x
    var height = frame.height()

    if (pixelFit) {
      newX = Math.round(newX)
      newY = Math.round(newY)
      width = Math.round(width)
      height = Math.round(height)
    }

    layer.frame().setRectByIgnoringProportions(NSMakeRect(newX, newY, width, height))

    if (layer.parentGroup()) layer.parentGroup().layerDidEndResize()
  })

  doc.reloadInspector()
}
