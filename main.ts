/**
 * Custom graphics block
 */
//% weight=100 color=#0D4C38 icon="\uf067" block="Engineering Day 2024"
namespace engineeringDay2024{
	
	//% block="Robot Configuration: Speed $speed|Bucket Angle offset $bucketOffset|Arm Angle offset $armOffset|"
	//% speed.min=0 speed.max=200 speed.defl=100
	//% bucketOffset.min=0 bucketOffset.max=20 bucketOffset.defl=0
	//% armOffset.min=0 armOffset.max=20 armOffset.defl=0
	export function setVariables( speed : number, bucketOffset: number, armOffset : number) {
	}
	
	//% block
	export function getDistance() {
    		return maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
	}
	//% block
	export function pickupItem(){
	}
	//% block
	export function dumpItem(){
	}
	//% block
	export function armControl(){
	}
	//% block
	export function bucketControl(){
	}
	//% block
	export function lineFollow(){
	}
	//% block
	export function forwardKinematics(Velocity: number, Rotation: number){
		// could use a two's complement to determine direction
		// negative numbers go backwards
		// this would give 0 -> 255 in forwards and 0 -> 255 in reverse
		// beware off by 1 error, but gives us 0 -> 511 range
		// we could do this with signed maths and then check the signed bit at the end.
		// return omega_l, omega_r
		
	}
	//% block
	export function moveForward(){
	}
	//% block
	export function moveBackward(){
	}
	//% block
	export function turnLeft(){
	}
	//% block
	export function turnRight(){
	}
	
}
