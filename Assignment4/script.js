const instructions = [
    "Sit comfortably. Rest your hands on your knees.",
    "Inhale through your nose. Exhale through your mouth.",
    "Close your eyes, if you feel safe. Listen for the wind or birds.",
    "Notice the smell of the wood or the air.",
    "Feel the support of the ground under you.",
    "Inhale slowly. Count to 4. Exhale slowly. Count to 4.",
    "Open your eyes. Find a pattern in the wood around you.",
    "Inhale again. Feel the breath fill your ribs. Exhale gently.",
    "Look at the circle you're sitting in. Breathe together, silently.",
    "Take one last full breath. Hold. Release."
  ];
  
  let currentInstruction = 0;
  
  function startJourney() {
    document.getElementById('welcome-screen').classList.add('d-none');
    document.getElementById('instruction-screen').classList.remove('d-none');
    showInstruction();
  }
  
  function showInstruction() {
    const instructionText = document.getElementById('instruction-text');
    instructionText.classList.remove('fade-in'); 
    void instructionText.offsetWidth; // force reflow
    instructionText.classList.add('fade-in');
    instructionText.textContent = instructions[currentInstruction];
  }
  
  function nextInstruction() {
    currentInstruction++;
    if (currentInstruction < instructions.length) {
      showInstruction();
    } else {
      endJourney();
    }
  }
  
  function endJourney() {
    document.getElementById('instruction-screen').classList.add('d-none');
    document.getElementById('end-screen').classList.remove('d-none');
  }
  