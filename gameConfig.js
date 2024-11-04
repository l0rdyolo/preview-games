const GameConfig = {
  canvas: {
    size: 680,
    backgroundColor: [120, 120, 120],
    pixelDensity: 1
  },
  player: {
    lanePositions: [-40, 0, 40],
    enableTrail: false,
    width: 20,
    height: 10,
    depth: 10,
  },
  platform: {
    startX: 2500,
    startY: 0,
    startZ: 50,
    gap: 50,
    resetX: 3000,
  },
  ground: {
    width: 200,
    length: 1500,
    laneCount: 3,
    stripeWidth: 5,
    colorPalette: ['#0ff', '#f00', '#0f0', '#00f']
  },
  sky: {
    width: window.innerWidth * 2,
    height: window.innerHeight * 2,
    starCount: 350
  },
  terrain: {
    rows: 39,            
    cols: 8,            
    size: 70,           
    altitude: 190,     
    trench: 3,          
    color: [71, 29, 26],       
    strokeColor: [255, 255, 255]  
  },
  colors: {
    background: [8, 44, 127],
    primary: [0, 255, 248],
    secondary: [255, 0, 25],
    tertiary: [0, 29, 95]
  },
  music: {
    src: 'assets/sounds/space.mp3',
    baseSpeed: 2
  },
  types: {
    collectable: 'COLLECTABLE',
    obstacle: 'OBSTACLE',
  },

  collectable: {
    color : [0,255,0],
    size : 10
  },
  obstacle:{
    color : [255,0,0],
    size : 10
  },
  imposter : {
    color : [255,255,0],
    size :50
  }
};
