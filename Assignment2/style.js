//scene objects so I can adjust them easily
const scenes = {
    ocean: {
      color: '#3895cf',
      title: 'Ocean',
      text: "Why don't fish ever go online? Because they’re afraid of getting caught in the net!",
      images: [
        'images/water1.jpg',
        'images/water2.jpg',
        'images/water3.jpeg'
    ]
    },
    fire: {
      color: '#a62d2d',
      title: 'Fire',
      text: "Why doesn’t fire use the internet? Because it’s always afraid of getting burned by a bad connection!",
      images: [
        'images/fire1.jpg',
        'images/fire2.jpg',
        'images/fire3.jpg'
      ]
    },
    sunlight: {
      color: '#deb33e',
      title: 'Sunlight',
      text: "Why did the sunlight stop browsing the web? Because it couldn’t handle the dark mode!",
      images: [
        'images/sun1.jpg',
        'images/sun2.jpg',
        'images/sun3.jpg'
      ]
    },
    forest: {
      color: '#206e33',
      title: 'Forest',
      text: "Why don't trees ever go to the internet? Because they don’t want to get logged on!",
      images: [
        'images/forest1.jpg',
        'images/forest2.jpg',
        'images/forest3.jpg'
      ]
    },
    galaxy: {
      color: '#391947',
      title: 'Space',
      text: "Why did the internet go to space? Because it wanted to get to the cloud!",
      images: [
        'images/space1.jpg',
        'images/space2.jpg',
        'images/space3.jpg'
      ]
    }
  };
  //array to hold the order of the scenes(needed this for the space-bar to work properly)
  const sceneOrder = ['ocean', 'fire', 'sunlight', 'forest', 'galaxy'];
  //also needs for the interactions but had to set it to -1 to start so its starts at 0 when the first scene is clicked on
  let currentSceneIndex = -1;
  
  //these just grab refrences to my objects that were created in the html
  const title = document.getElementById('mood-title');
  const text = document.getElementById('mood-text');
  const colors = document.querySelectorAll('.color');
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');
  
  function applyScene(scene) {
    const setting = scenes[scene];
    document.body.style.backgroundColor = setting.color;
    title.textContent = setting.title;
    text.textContent = setting.text;
  
    img1.src = setting.images[0];
    img2.src = setting.images[1];
    img3.src = setting.images[2];
  
    //this I got online to fix a problem I was having with the images not showing up when I clicked on the colors
    document.querySelector('.image-grid').style.display = 'grid'; 
  }
  
  // Click interaction
  colors.forEach(color => {
    color.addEventListener('click', () => {
      const scene = color.getAttribute('data-scene');
      currentSceneIndex = sceneOrder.indexOf(scene);
      applyScene(scene);
    });
  });
  
  // Spacebar to cycle scenes
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      currentSceneIndex = (currentSceneIndex + 1) % sceneOrder.length;
      applyScene(sceneOrder[currentSceneIndex]);
    }
  });
  