namespace EngineeringDay2024{
	export class Robot{ }

	export function createRobot{}: Robot {
		return undefined;
	}
	export function getDistance () {
    		return maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
	}
}
