const inputArr: string[] = [
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]

interface Town {
    town: string;
    latitude: string;
    longitude: string;
}
function getBestPrice(inputArr: string[]): void {
    // const output {} as Town;
    const output: Town[] = [];

    for (let line of inputArr) {
        let [name, latitude, longitude] = line.split(" | ");

        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2);

        output.push({ town: name, latitude, longitude })

        // output['town'] = name;
        // output['latitude'] = latitude;
        // output['longitude']= longitude

        // console.log(output)
    }

    
    console.log(output)

}

getBestPrice(inputArr)