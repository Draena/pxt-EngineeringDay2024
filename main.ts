/**
 * Custom graphics block
 */
//% weight=100 color=#0D4C38 icon="\uf800" block="EngineeringDay2024"
namespace EngineeringDay2024{
	export class Robot{ }

	export function createRobot{}: Robot {
		return undefined;
	}
	export function getDistance () {
    		return readUltrasonic(DigitalPin.P13, DigitalPin.P14)
	}
	    /**
     * Acquiring ultrasonic data
     * @param trig trig pin selection enumeration, eg:DigitalPin.P13
     * @param echo echo pin selection enumeration, eg:DigitalPin.P14
     */

    //% block="set ultrasonic sensor TRIG pin %trig ECHO pin %echo read data unit:cm"
    //% weight=94
    function readUltrasonic(trig:DigitalPin, echo:DigitalPin):number{
        let data;
        pins.digitalWritePin(trig, 1);
        basic.pause(1);
        pins.digitalWritePin(trig, 0)
        if(pins.digitalReadPin(echo) == 0){
            pins.digitalWritePin(trig, 0);
            pins.digitalWritePin(trig, 1);
            basic.pause(20);
            pins.digitalWritePin(trig, 0);
            data = pins.pulseIn(echo, PulseValue.High,500*58);
        }else{
            pins.digitalWritePin(trig, 1);
            pins.digitalWritePin(trig, 0);
            basic.pause(20);
            pins.digitalWritePin(trig, 0);
            data = pins.pulseIn(echo, PulseValue.High,500*58)
        }
        data = data / 59;
        if(data <= 0)
            return 0;
        if(data > 500)
            return 500;
        return Math.round(data);
    }
}
