/**
 * Custom graphics block
 */
//% weight=100 color=#0D4C38 icon="\uf800" block="engineeringDay2024"
namespace engineeringDay2024{
	
	//% block
	export function setVariables( speed : number ) {
	}
	
	//% block
	export function getDistance() {
    		return maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
	}
}
