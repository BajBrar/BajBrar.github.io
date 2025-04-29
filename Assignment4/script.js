const instructions = [
    "Sit comfortably. Relax your hands and body",
    "Inhale through your nose. Exhale through your mouth.",
    "Close your eyes for a moment. Listen to the sounds around you",
    "Feel the support of the ground under you.",
    "Inhale slowly. Count to 4. Exhale slowly. Count to 4.",
    "Inhale again. Feel the breath fill your ribs. Exhale gently.",
    "Take one last full breath. Hold. Release."
  ];
  
  let currentInstruction = 0;
  let instructionTimer;
  let voices = [];
  
  function startJourney() {
    document.getElementById('welcome-screen').classList.add('d-none');
    document.getElementById('instruction-screen').classList.remove('d-none');
    showInstruction();
    startTimer();
  }
  
  function showInstruction() {
    const instructionText = document.getElementById('instruction-text');
    instructionText.classList.remove('fade-in');
    void instructionText.offsetWidth;
    instructionText.classList.add('fade-in');
    instructionText.textContent = instructions[currentInstruction];
    updateProgressBar();
  }
  
  function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = ((currentInstruction + 1) / instructions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress.toFixed(0));
  }
  
  function startTimer() {
    instructionTimer = setInterval(() => {
      nextInstruction();
    }, 10000); // 10 seconds per prompt
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
    clearInterval(instructionTimer);
    document.getElementById('instruction-screen').classList.add('d-none');
    document.getElementById('end-screen').classList.remove('d-none');
  }
  
 
  