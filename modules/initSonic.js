var circle = new Sonic({
 
    width: 50,
    height: 50,
    padding: 50,
 
    strokeColor: '#000',
 
    pointDistance: .01,
    stepsPerFrame: 3,
    trailLength: .7,
 
    step: 'fader',
 
    setup: function() {
        this._.lineWidth = 5;
    },
 
    path: [
        ['arc', 25, 25, 25, 0, 360]
    ]
 
    });
 
    circle.play();
    document.getElementById('loader').appendChild(circle.canvas);
