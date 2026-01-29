/** RR JS - Boa Vista - Natural-jungle with deep and light greens */
const STATE_CONFIG = {
  stateCode: 'rr',
  capital: 'Boa Vista',
  formspreeUrl: 'https://formspree.io/f/xrrqbddb',
  colors: { primary: '#2d5016', secondary: '#32cd32', accent: '#90ee90' },
  animations: {"enabled": true, "header": {"type": "mountRoraimaSlide", "duration": "0.9s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "plateauReveal", "duration": "1.2s", "easing": "ease-in-out", "stagger": "0.2s"}, "hero": {"type": "mountainParallax", "speed": 0.3, "direction": "vertical"}, "cards": {"type": "cloudFloat", "ethereal": true, "light": true}, "images": {"type": "mysticalReveal", "ancient": true, "duration": "1.3s"}},
  interactions: {"hover": "cloud-lift", "scroll": "mountain-ascend", "transitions": "mystical-fade", "click": "thunder-flash"},
  premiumEffects: ["roraima-gradient", "cloud-layers", "mist-overlay", "ancient-atmosphere"]
};

const SECTIONS = ["rr-index-section--map", "rr-index-section-frequently-asked-questions-about-living-in-", "rr-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
