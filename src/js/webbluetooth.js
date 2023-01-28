const UUID_1 = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const UUID_2 = '6e400002-b5a3-f393-e0a9-e50e24dcca9e'; // Write
const UUID_3 = '6e400003-b5a3-f393-e0a9-e50e24dcca9e'; // Notify


// 通信対象となっているBLE機器が持っているUUID

var bluetoothDevice;
var characteristic;

async function connect() {
    const device = await navigator.bluetooth.requestDevice({
        filters: [{ namePrefix: 'M5' }],
        optionalServices: [UUID_1, UUID_2, UUID_3]
    })
    device.gatt.connect();

    const server = await device.gatt.connect();
    console.log("Getting Service...");
    const service = await server.getPrimaryService(UUID_1)

    // 読み込み用
    const characteristic = await service.getCharacteristic(UUID_3)
    characteristic.startNotifications()

}

function handler(event) {
    console.log("TEST")
    const value = event.target.value
    // // データがStringの場合
    // const decoder = new TextDecoder('utf-8')
    // const str = decoder.decode(value)
    // console.log(str)

    // // データがnumberの場合
    // const num = getUintN(value)
    // console.log(num)
}


document.querySelector('#connect').addEventListener("click", connect)