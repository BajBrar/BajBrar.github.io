const playlists = {
  happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
  sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",
  energetic: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdxcBWuJkbcy",
  relaxed: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO"
};

function setMood(mood) {
  const player = `
    <iframe style="border-radius:12px"
      src="${playlists[mood]}"
      width="100%" height="380" frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      loading="lazy">
    </iframe>
  `;
  document.getElementById('player-container').innerHTML = player;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to MoodVibes!");

  // CTA button animation
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      ctaButton.classList.add("clicked");
      setTimeout(() => ctaButton.classList.remove("clicked"), 300);
    });
  }

  // Contact form submission handler
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.reset();
        const formResponse = document.getElementById("form-response");
        if (formResponse) {
          formResponse.classList.remove("hidden");
        }
      } else {
        alert("Oops! Something went wrong. Try again later.");
      }
    });
  }

  // Initialize particles.js
  if (typeof particlesJS === "function") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 300 } },
        color: { value: "#6c63ff" }, // your header color
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" }
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 15,
          random: true,
          anim: { enable: true, speed: 2, size_min: 5, sync: false }
        },
        line_linked: { enable: false },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false }
        }
      },
      interactivity: {
        events: { onhover: { enable: false }, onclick: { enable: false } }
      },
      retina_detect: true
    });
  } else {
    console.warn("particlesJS is not loaded.");
  }
});
