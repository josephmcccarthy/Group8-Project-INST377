//Work on the front end graphs here. 
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "diseases count"
      },
      data: [
      {
        type: "bar",
        dataPoints: [
        { y: /*numeric data here*/, label: /*disease name*/},
        { y: /*numeric data here*/, label: /*disease name*/},
        { y: /*numeric data here*/, label: /*disease name*/},
        { y: /*numeric data here*/, label: /*disease name*/},
        { y: /*numeric data here*/, label: /*disease name*/},
        { y: /*numeric data here*/, label: /*disease name*/}
        ]
      }
      ]
    });

chart.render();
}