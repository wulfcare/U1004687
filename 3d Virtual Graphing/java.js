Plotly.d3.csv('https://raw.githubusercontent.com/wulfcare/U1004687/main/JavaScript%20Prac/Book1.csv', function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) {return parseFloat(row[key]); });
}

var data = [
    {
        type: "isosurface",
        x: unpack(rows, 'x'),
        y: unpack(rows, 'y'),
        z: unpack(rows, 'z'),
        value: unpack(rows, 'value'),
        isomin: -10,
        isomax: 10,
        surface: {show: true, count: 4, fill: 1, pattern: 'odd'},
        caps: {
            x: {show: true},
            y: {show: true},
            z: {show: true}
        },
    }
];

var layout = {
    margin: {t:0, l:0, b:0},
    scene: {
        camera: {
            eye: {
                x: 1.86,
                y: 0.61,
                z: 0.98
            }
        }
    }
};

Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});
});

