basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (JoyCar.linefinder(SensorLCRSelection.Left) && JoyCar.linefinder(SensorLCRSelection.Right)) {
        JoyCar.drive(FRDirection.Forward, 50)
    } else if (JoyCar.linefinder(SensorLCRSelection.Left)) {
        JoyCar.turn(
        FRDirection.Forward,
        LRDirection.Right,
        50,
        0
        )
    } else if (JoyCar.linefinder(SensorLCRSelection.Right)) {
        JoyCar.turn(
        FRDirection.Forward,
        LRDirection.Left,
        50,
        0
        )
    } else if (JoyCar.obstacleavoidance(SensorLRSelection.Left)) {
        JoyCar.stop(StopIntensity.Soft)
    } else if (JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
        JoyCar.stop(StopIntensity.Soft)
    } else {
    	
    }
})
