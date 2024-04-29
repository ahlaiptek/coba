function csvToJson(csv) {
    const lines = csv.split("\n");
    const result = [];
    const headers = lines[0].split(",");
    
    for (var i = 1; i < lines.length; i++) {
        const obj = {};
        let currentline = lines[i].split(",");

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    
    return result;
}


const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSr32TvNGwHdiCuuwVen4LbYE8AAK65bEMfpK9LtXwnz_tQ37KN9PdT_kepaZlh6Af07ha4P9wicLqV/pub?output=csv";
fetch(url).then(e => e.text()).then(e => {
    let data = csvToJson(e);
    console.log(data);
    document.body.innerHTML = JSON.stringify(data);

    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i]["Label Spesifik"]);
    // }
})