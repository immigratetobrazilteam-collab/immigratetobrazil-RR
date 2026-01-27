
// Master JS for State: RR - Persona: Northern Border Explorer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 780;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const rr_index_section_immigrate_to_roraima = document.getElementById('rr-index-section-immigrate-to-roraima');
  if (rr_index_section_immigrate_to_roraima) {
    gsap.fromTo('#rr-index-section-immigrate-to-roraima', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_form_immigrate_to_roraima = document.getElementById('rr-index-form-immigrate-to-roraima');
  if (rr_index_form_immigrate_to_roraima) {
    gsap.from('#rr-index-form-immigrate-to-roraima input, #rr-index-form-immigrate-to-roraima textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_state_vibe = document.getElementById('rr-index-section-state-vibe');
  if (rr_index_section_state_vibe) {
    gsap.fromTo('#rr-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_quick_facts_snapshot = document.getElementById('rr-index-section-quick-facts-snapshot');
  if (rr_index_section_quick_facts_snapshot) {
    gsap.fromTo('#rr-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_roraima_map = document.getElementById('rr-index-section-roraima-map');
  if (rr_index_section_roraima_map) {
    gsap.fromTo('#rr-index-section-roraima-map', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_cost_of_living_roraima = document.getElementById('rr-index-section-cost-of-living-roraima');
  if (rr_index_section_cost_of_living_roraima) {
    gsap.fromTo('#rr-index-section-cost-of-living-roraima', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_government_context = document.getElementById('rr-index-section-government-context');
  if (rr_index_section_government_context) {
    gsap.fromTo('#rr-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_hero_immigration_notes = document.getElementById('rr-index-hero-immigration-notes');
  if (rr_index_hero_immigration_notes) {
    gsap.fromTo('#rr-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_common_applicant_profiles = document.getElementById('rr-index-list-common-applicant-profiles');
  if (rr_index_list_common_applicant_profiles) {
    gsap.from('#rr-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_economic_drivers = document.getElementById('rr-index-list-economic-drivers');
  if (rr_index_list_economic_drivers) {
    gsap.from('#rr-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_demographics = document.getElementById('rr-index-section-demographics');
  if (rr_index_section_demographics) {
    gsap.fromTo('#rr-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_regional_challenges = document.getElementById('rr-index-section-regional-challenges');
  if (rr_index_section_regional_challenges) {
    gsap.fromTo('#rr-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_regional_opportunities = document.getElementById('rr-index-section-regional-opportunities');
  if (rr_index_section_regional_opportunities) {
    gsap.fromTo('#rr-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_culture_daily_life = document.getElementById('rr-index-section-culture-daily-life');
  if (rr_index_section_culture_daily_life) {
    gsap.fromTo('#rr-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_local_language_expressions = document.getElementById('rr-index-list-local-language-expressions');
  if (rr_index_list_local_language_expressions) {
    gsap.from('#rr-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_food_cuisine = document.getElementById('rr-index-list-food-cuisine');
  if (rr_index_list_food_cuisine) {
    gsap.from('#rr-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_festivals_traditions = document.getElementById('rr-index-list-festivals-traditions');
  if (rr_index_list_festivals_traditions) {
    gsap.from('#rr-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_music_artistic_expression = document.getElementById('rr-index-list-music-artistic-expression');
  if (rr_index_list_music_artistic_expression) {
    gsap.from('#rr-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_sports_recreation = document.getElementById('rr-index-list-sports-recreation');
  if (rr_index_list_sports_recreation) {
    gsap.from('#rr-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_landmarks_historical_sites = document.getElementById('rr-index-list-landmarks-historical-sites');
  if (rr_index_list_landmarks_historical_sites) {
    gsap.from('#rr-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_natural_features = document.getElementById('rr-index-list-natural-features');
  if (rr_index_list_natural_features) {
    gsap.from('#rr-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_parks_protected_areas = document.getElementById('rr-index-list-parks-protected-areas');
  if (rr_index_list_parks_protected_areas) {
    gsap.from('#rr-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_museums_cultural_institutions = document.getElementById('rr-index-list-museums-cultural-institutions');
  if (rr_index_list_museums_cultural_institutions) {
    gsap.from('#rr-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_image_gallery = document.getElementById('rr-index-section-image-gallery');
  if (rr_index_section_image_gallery) {
    gsap.fromTo('#rr-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_useful_government_links = document.getElementById('rr-index-section-useful-government-links');
  if (rr_index_section_useful_government_links) {
    gsap.fromTo('#rr-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_hero_federal_police_immigration_links = document.getElementById('rr-index-hero-federal-police-immigration-links');
  if (rr_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#rr-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_external_references = document.getElementById('rr-index-section-external-references');
  if (rr_index_section_external_references) {
    gsap.fromTo('#rr-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_immigration_services_overview = document.getElementById('rr-index-list-immigration-services-overview');
  if (rr_index_list_immigration_services_overview) {
    gsap.from('#rr-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_why_immigrate_here = document.getElementById('rr-index-section-why-immigrate-here');
  if (rr_index_section_why_immigrate_here) {
    gsap.fromTo('#rr-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section_legal_guidance_disclaimers = document.getElementById('rr-index-section-legal-guidance-disclaimers');
  if (rr_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#rr-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_travel_services = document.getElementById('rr-index-list-travel-services');
  if (rr_index_list_travel_services) {
    gsap.from('#rr-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_list_how_the_process_works = document.getElementById('rr-index-list-how-the-process-works');
  if (rr_index_list_how_the_process_works) {
    gsap.from('#rr-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_index_section__frequently_asked_questions_about_living_in_roraima_ = document.getElementById('rr-index-section--frequently-asked-questions-about-living-in-roraima-');
  if (rr_index_section__frequently_asked_questions_about_living_in_roraima_) {
    gsap.fromTo('#rr-index-section--frequently-asked-questions-about-living-in-roraima-', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_contactcta_section_get_started_in_roraima = document.getElementById('rr-contactcta-section-get-started-in-roraima');
  if (rr_contactcta_section_get_started_in_roraima) {
    gsap.fromTo('#rr-contactcta-section-get-started-in-roraima', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('rr-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (rr_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#rr-renouncingcitizenship-form-renounce-brazilian-citizenship input, #rr-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_list_quick_facts = document.getElementById('rr-renouncingcitizenship-list-quick-facts');
  if (rr_renouncingcitizenship_list_quick_facts) {
    gsap.from('#rr-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('rr-renouncingcitizenship-list-common-challenges-applicants-face');
  if (rr_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#rr-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('rr-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (rr_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#rr-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_section_renunciation_overview = document.getElementById('rr-renouncingcitizenship-section-renunciation-overview');
  if (rr_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#rr-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_form_who_is_this_for = document.getElementById('rr-renouncingcitizenship-form-who-is-this-for');
  if (rr_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#rr-renouncingcitizenship-form-who-is-this-for input, #rr-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_list_required_documents = document.getElementById('rr-renouncingcitizenship-list-required-documents');
  if (rr_renouncingcitizenship_list_required_documents) {
    gsap.from('#rr-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_list_process = document.getElementById('rr-renouncingcitizenship-list-process');
  if (rr_renouncingcitizenship_list_process) {
    gsap.from('#rr-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_section_timelines_deadlines = document.getElementById('rr-renouncingcitizenship-section-timelines-deadlines');
  if (rr_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#rr-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_section_fees_costs = document.getElementById('rr-renouncingcitizenship-section-fees-costs');
  if (rr_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#rr-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('rr-renouncingcitizenship-list-risks-common-mistakes');
  if (rr_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#rr-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('rr-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (rr_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_section_roraima_specific_context = document.getElementById('rr-renouncingcitizenship-section-roraima-specific-context');
  if (rr_renouncingcitizenship_section_roraima_specific_context) {
    gsap.fromTo('#rr-renouncingcitizenship-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_section_what_our_clients_say = document.getElementById('rr-renouncingcitizenship-section-what-our-clients-say');
  if (rr_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#rr-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('rr-renouncingcitizenship-section-frequently-asked-questions');
  if (rr_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#rr-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_section_international_support = document.getElementById('rr-renouncingcitizenship-section-international-support');
  if (rr_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#rr-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_list_our_credentials = document.getElementById('rr-renouncingcitizenship-list-our-credentials');
  if (rr_renouncingcitizenship_list_our_credentials) {
    gsap.from('#rr-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_list_related_services = document.getElementById('rr-renouncingcitizenship-list-related-services');
  if (rr_renouncingcitizenship_list_related_services) {
    gsap.from('#rr-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('rr-renouncingcitizenship-section-youre-in-good-hands');
  if (rr_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#rr-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_renouncingcitizenship_section_21 = document.getElementById('rr-renouncingcitizenship-section-21');
  if (rr_renouncingcitizenship_section_21) {
    gsap.fromTo('#rr-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('rr-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (rr_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#rr-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #rr-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_list_quick_facts = document.getElementById('rr-provisional-list-quick-facts');
  if (rr_provisional_list_quick_facts) {
    gsap.from('#rr-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_list_common_challenges_applicants_face = document.getElementById('rr-provisional-list-common-challenges-applicants-face');
  if (rr_provisional_list_common_challenges_applicants_face) {
    gsap.from('#rr-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_list_how_we_solve_these_challenges = document.getElementById('rr-provisional-list-how-we-solve-these-challenges');
  if (rr_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#rr-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_section_naturalisation_overview = document.getElementById('rr-provisional-section-naturalisation-overview');
  if (rr_provisional_section_naturalisation_overview) {
    gsap.fromTo('#rr-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_form_who_is_this_naturalisation_for = document.getElementById('rr-provisional-form-who-is-this-naturalisation-for');
  if (rr_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#rr-provisional-form-who-is-this-naturalisation-for input, #rr-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_list_required_documents = document.getElementById('rr-provisional-list-required-documents');
  if (rr_provisional_list_required_documents) {
    gsap.from('#rr-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_list_application_process = document.getElementById('rr-provisional-list-application-process');
  if (rr_provisional_list_application_process) {
    gsap.from('#rr-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_section_timelines_deadlines = document.getElementById('rr-provisional-section-timelines-deadlines');
  if (rr_provisional_section_timelines_deadlines) {
    gsap.fromTo('#rr-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_section_fees_costs = document.getElementById('rr-provisional-section-fees-costs');
  if (rr_provisional_section_fees_costs) {
    gsap.fromTo('#rr-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_list_risks_common_mistakes = document.getElementById('rr-provisional-list-risks-common-mistakes');
  if (rr_provisional_list_risks_common_mistakes) {
    gsap.from('#rr-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_section_diy_vs_professional_assistance = document.getElementById('rr-provisional-section-diy-vs-professional-assistance');
  if (rr_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_section_roraima_specific_context = document.getElementById('rr-provisional-section-roraima-specific-context');
  if (rr_provisional_section_roraima_specific_context) {
    gsap.fromTo('#rr-provisional-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_section_what_our_clients_say = document.getElementById('rr-provisional-section-what-our-clients-say');
  if (rr_provisional_section_what_our_clients_say) {
    gsap.fromTo('#rr-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_section_frequently_asked_questions = document.getElementById('rr-provisional-section-frequently-asked-questions');
  if (rr_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#rr-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_section_international_support = document.getElementById('rr-provisional-section-international-support');
  if (rr_provisional_section_international_support) {
    gsap.fromTo('#rr-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_list_our_credentials = document.getElementById('rr-provisional-list-our-credentials');
  if (rr_provisional_list_our_credentials) {
    gsap.from('#rr-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_list_related_services = document.getElementById('rr-provisional-list-related-services');
  if (rr_provisional_list_related_services) {
    gsap.from('#rr-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_section_youre_in_good_hands = document.getElementById('rr-provisional-section-youre-in-good-hands');
  if (rr_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#rr-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_provisional_section_21 = document.getElementById('rr-provisional-section-21');
  if (rr_provisional_section_21) {
    gsap.fromTo('#rr-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('rr-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (rr_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#rr-special-form-special-naturalisation-in-brazil-for-particular-cases input, #rr-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_list_quick_facts = document.getElementById('rr-special-list-quick-facts');
  if (rr_special_list_quick_facts) {
    gsap.from('#rr-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_list_common_challenges_applicants_face = document.getElementById('rr-special-list-common-challenges-applicants-face');
  if (rr_special_list_common_challenges_applicants_face) {
    gsap.from('#rr-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_list_how_we_solve_these_challenges = document.getElementById('rr-special-list-how-we-solve-these-challenges');
  if (rr_special_list_how_we_solve_these_challenges) {
    gsap.from('#rr-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_section_naturalisation_overview = document.getElementById('rr-special-section-naturalisation-overview');
  if (rr_special_section_naturalisation_overview) {
    gsap.fromTo('#rr-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_form_who_is_this_naturalisation_for = document.getElementById('rr-special-form-who-is-this-naturalisation-for');
  if (rr_special_form_who_is_this_naturalisation_for) {
    gsap.from('#rr-special-form-who-is-this-naturalisation-for input, #rr-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_list_required_documents = document.getElementById('rr-special-list-required-documents');
  if (rr_special_list_required_documents) {
    gsap.from('#rr-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_list_application_process = document.getElementById('rr-special-list-application-process');
  if (rr_special_list_application_process) {
    gsap.from('#rr-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_section_timelines_deadlines = document.getElementById('rr-special-section-timelines-deadlines');
  if (rr_special_section_timelines_deadlines) {
    gsap.fromTo('#rr-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_section_fees_costs = document.getElementById('rr-special-section-fees-costs');
  if (rr_special_section_fees_costs) {
    gsap.fromTo('#rr-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_list_risks_common_mistakes = document.getElementById('rr-special-list-risks-common-mistakes');
  if (rr_special_list_risks_common_mistakes) {
    gsap.from('#rr-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_section_diy_vs_professional_assistance = document.getElementById('rr-special-section-diy-vs-professional-assistance');
  if (rr_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_section_roraima_specific_context = document.getElementById('rr-special-section-roraima-specific-context');
  if (rr_special_section_roraima_specific_context) {
    gsap.fromTo('#rr-special-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_section_what_our_clients_say = document.getElementById('rr-special-section-what-our-clients-say');
  if (rr_special_section_what_our_clients_say) {
    gsap.fromTo('#rr-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_section_frequently_asked_questions = document.getElementById('rr-special-section-frequently-asked-questions');
  if (rr_special_section_frequently_asked_questions) {
    gsap.fromTo('#rr-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_section_international_support = document.getElementById('rr-special-section-international-support');
  if (rr_special_section_international_support) {
    gsap.fromTo('#rr-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_list_our_credentials = document.getElementById('rr-special-list-our-credentials');
  if (rr_special_list_our_credentials) {
    gsap.from('#rr-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_list_related_services = document.getElementById('rr-special-list-related-services');
  if (rr_special_list_related_services) {
    gsap.from('#rr-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_section_youre_in_good_hands = document.getElementById('rr-special-section-youre-in-good-hands');
  if (rr_special_section_youre_in_good_hands) {
    gsap.fromTo('#rr-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_special_section_21 = document.getElementById('rr-special-section-21');
  if (rr_special_section_21) {
    gsap.fromTo('#rr-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('rr-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (rr_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#rr-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #rr-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_list_quick_facts = document.getElementById('rr-ordinary-list-quick-facts');
  if (rr_ordinary_list_quick_facts) {
    gsap.from('#rr-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_list_common_challenges_applicants_face = document.getElementById('rr-ordinary-list-common-challenges-applicants-face');
  if (rr_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#rr-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_list_how_we_solve_these_challenges = document.getElementById('rr-ordinary-list-how-we-solve-these-challenges');
  if (rr_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#rr-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_section_naturalisation_overview = document.getElementById('rr-ordinary-section-naturalisation-overview');
  if (rr_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#rr-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_form_who_is_this_naturalisation_for = document.getElementById('rr-ordinary-form-who-is-this-naturalisation-for');
  if (rr_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#rr-ordinary-form-who-is-this-naturalisation-for input, #rr-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_list_required_documents = document.getElementById('rr-ordinary-list-required-documents');
  if (rr_ordinary_list_required_documents) {
    gsap.from('#rr-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_list_application_process = document.getElementById('rr-ordinary-list-application-process');
  if (rr_ordinary_list_application_process) {
    gsap.from('#rr-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_section_timelines_deadlines = document.getElementById('rr-ordinary-section-timelines-deadlines');
  if (rr_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#rr-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_section_fees_costs = document.getElementById('rr-ordinary-section-fees-costs');
  if (rr_ordinary_section_fees_costs) {
    gsap.fromTo('#rr-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_list_risks_common_mistakes = document.getElementById('rr-ordinary-list-risks-common-mistakes');
  if (rr_ordinary_list_risks_common_mistakes) {
    gsap.from('#rr-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_section_diy_vs_professional_assistance = document.getElementById('rr-ordinary-section-diy-vs-professional-assistance');
  if (rr_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_section_roraima_specific_context = document.getElementById('rr-ordinary-section-roraima-specific-context');
  if (rr_ordinary_section_roraima_specific_context) {
    gsap.fromTo('#rr-ordinary-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_section_what_our_clients_say = document.getElementById('rr-ordinary-section-what-our-clients-say');
  if (rr_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#rr-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_section_frequently_asked_questions = document.getElementById('rr-ordinary-section-frequently-asked-questions');
  if (rr_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#rr-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_section_international_support = document.getElementById('rr-ordinary-section-international-support');
  if (rr_ordinary_section_international_support) {
    gsap.fromTo('#rr-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_list_our_credentials = document.getElementById('rr-ordinary-list-our-credentials');
  if (rr_ordinary_list_our_credentials) {
    gsap.from('#rr-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_list_related_services = document.getElementById('rr-ordinary-list-related-services');
  if (rr_ordinary_list_related_services) {
    gsap.from('#rr-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_section_youre_in_good_hands = document.getElementById('rr-ordinary-section-youre-in-good-hands');
  if (rr_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#rr-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_ordinary_section_21 = document.getElementById('rr-ordinary-section-21');
  if (rr_ordinary_section_21) {
    gsap.fromTo('#rr-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('rr-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (rr_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#rr-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #rr-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_list_quick_facts = document.getElementById('rr-extraordinary-list-quick-facts');
  if (rr_extraordinary_list_quick_facts) {
    gsap.from('#rr-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_list_common_challenges_applicants_face = document.getElementById('rr-extraordinary-list-common-challenges-applicants-face');
  if (rr_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#rr-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_list_how_we_solve_these_challenges = document.getElementById('rr-extraordinary-list-how-we-solve-these-challenges');
  if (rr_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#rr-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_section_naturalisation_overview = document.getElementById('rr-extraordinary-section-naturalisation-overview');
  if (rr_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#rr-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('rr-extraordinary-form-who-is-this-naturalisation-for');
  if (rr_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#rr-extraordinary-form-who-is-this-naturalisation-for input, #rr-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_list_required_documents = document.getElementById('rr-extraordinary-list-required-documents');
  if (rr_extraordinary_list_required_documents) {
    gsap.from('#rr-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_list_application_process = document.getElementById('rr-extraordinary-list-application-process');
  if (rr_extraordinary_list_application_process) {
    gsap.from('#rr-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_section_timelines_deadlines = document.getElementById('rr-extraordinary-section-timelines-deadlines');
  if (rr_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#rr-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_section_fees_costs = document.getElementById('rr-extraordinary-section-fees-costs');
  if (rr_extraordinary_section_fees_costs) {
    gsap.fromTo('#rr-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_list_risks_common_mistakes = document.getElementById('rr-extraordinary-list-risks-common-mistakes');
  if (rr_extraordinary_list_risks_common_mistakes) {
    gsap.from('#rr-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_section_diy_vs_professional_assistance = document.getElementById('rr-extraordinary-section-diy-vs-professional-assistance');
  if (rr_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_section_roraima_specific_context = document.getElementById('rr-extraordinary-section-roraima-specific-context');
  if (rr_extraordinary_section_roraima_specific_context) {
    gsap.fromTo('#rr-extraordinary-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_section_what_our_clients_say = document.getElementById('rr-extraordinary-section-what-our-clients-say');
  if (rr_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#rr-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_section_frequently_asked_questions = document.getElementById('rr-extraordinary-section-frequently-asked-questions');
  if (rr_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#rr-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_section_international_support = document.getElementById('rr-extraordinary-section-international-support');
  if (rr_extraordinary_section_international_support) {
    gsap.fromTo('#rr-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_list_our_credentials = document.getElementById('rr-extraordinary-list-our-credentials');
  if (rr_extraordinary_list_our_credentials) {
    gsap.from('#rr-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_list_related_services = document.getElementById('rr-extraordinary-list-related-services');
  if (rr_extraordinary_list_related_services) {
    gsap.from('#rr-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_section_youre_in_good_hands = document.getElementById('rr-extraordinary-section-youre-in-good-hands');
  if (rr_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#rr-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extraordinary_section_21 = document.getElementById('rr-extraordinary-section-21');
  if (rr_extraordinary_section_21) {
    gsap.fromTo('#rr-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('rr-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (rr_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#rr-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #rr-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_list_quick_facts = document.getElementById('rr-reacquisitioncitizenship-list-quick-facts');
  if (rr_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#rr-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('rr-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (rr_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#rr-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('rr-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (rr_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#rr-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('rr-reacquisitioncitizenship-section-reacquisition-overview');
  if (rr_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#rr-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('rr-reacquisitioncitizenship-form-who-is-this-for');
  if (rr_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#rr-reacquisitioncitizenship-form-who-is-this-for input, #rr-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_list_required_documents = document.getElementById('rr-reacquisitioncitizenship-list-required-documents');
  if (rr_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#rr-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_list_process = document.getElementById('rr-reacquisitioncitizenship-list-process');
  if (rr_reacquisitioncitizenship_list_process) {
    gsap.from('#rr-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('rr-reacquisitioncitizenship-section-timelines-deadlines');
  if (rr_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#rr-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_section_fees_costs = document.getElementById('rr-reacquisitioncitizenship-section-fees-costs');
  if (rr_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#rr-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('rr-reacquisitioncitizenship-list-risks-common-mistakes');
  if (rr_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#rr-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('rr-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (rr_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_section_roraima_specific_context = document.getElementById('rr-reacquisitioncitizenship-section-roraima-specific-context');
  if (rr_reacquisitioncitizenship_section_roraima_specific_context) {
    gsap.fromTo('#rr-reacquisitioncitizenship-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('rr-reacquisitioncitizenship-section-what-our-clients-say');
  if (rr_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#rr-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('rr-reacquisitioncitizenship-section-frequently-asked-questions');
  if (rr_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#rr-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_section_international_support = document.getElementById('rr-reacquisitioncitizenship-section-international-support');
  if (rr_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#rr-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_list_our_credentials = document.getElementById('rr-reacquisitioncitizenship-list-our-credentials');
  if (rr_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#rr-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_list_related_services = document.getElementById('rr-reacquisitioncitizenship-list-related-services');
  if (rr_reacquisitioncitizenship_list_related_services) {
    gsap.from('#rr-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('rr-reacquisitioncitizenship-section-youre-in-good-hands');
  if (rr_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#rr-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_reacquisitioncitizenship_section_21 = document.getElementById('rr-reacquisitioncitizenship-section-21');
  if (rr_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#rr-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('rr-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (rr_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#rr-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #rr-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_list_quick_facts = document.getElementById('rr-scientificresearch-list-quick-facts');
  if (rr_scientificresearch_list_quick_facts) {
    gsap.from('#rr-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_list_common_challenges_applicants_face = document.getElementById('rr-scientificresearch-list-common-challenges-applicants-face');
  if (rr_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#rr-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('rr-scientificresearch-list-how-we-solve-these-challenges');
  if (rr_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#rr-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_section_residency_overview = document.getElementById('rr-scientificresearch-section-residency-overview');
  if (rr_scientificresearch_section_residency_overview) {
    gsap.fromTo('#rr-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_form_who_is_this_residency_for = document.getElementById('rr-scientificresearch-form-who-is-this-residency-for');
  if (rr_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#rr-scientificresearch-form-who-is-this-residency-for input, #rr-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_list_required_documents = document.getElementById('rr-scientificresearch-list-required-documents');
  if (rr_scientificresearch_list_required_documents) {
    gsap.from('#rr-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_list_application_process = document.getElementById('rr-scientificresearch-list-application-process');
  if (rr_scientificresearch_list_application_process) {
    gsap.from('#rr-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_section_timelines_deadlines = document.getElementById('rr-scientificresearch-section-timelines-deadlines');
  if (rr_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#rr-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_section_fees_costs = document.getElementById('rr-scientificresearch-section-fees-costs');
  if (rr_scientificresearch_section_fees_costs) {
    gsap.fromTo('#rr-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_list_risks_common_mistakes = document.getElementById('rr-scientificresearch-list-risks-common-mistakes');
  if (rr_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#rr-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('rr-scientificresearch-section-diy-vs-professional-assistance');
  if (rr_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_section_roraima_specific_context = document.getElementById('rr-scientificresearch-section-roraima-specific-context');
  if (rr_scientificresearch_section_roraima_specific_context) {
    gsap.fromTo('#rr-scientificresearch-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_section_what_our_clients_say = document.getElementById('rr-scientificresearch-section-what-our-clients-say');
  if (rr_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#rr-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_section_frequently_asked_questions = document.getElementById('rr-scientificresearch-section-frequently-asked-questions');
  if (rr_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#rr-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_section_international_support = document.getElementById('rr-scientificresearch-section-international-support');
  if (rr_scientificresearch_section_international_support) {
    gsap.fromTo('#rr-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_list_our_credentials = document.getElementById('rr-scientificresearch-list-our-credentials');
  if (rr_scientificresearch_list_our_credentials) {
    gsap.from('#rr-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_list_related_services = document.getElementById('rr-scientificresearch-list-related-services');
  if (rr_scientificresearch_list_related_services) {
    gsap.from('#rr-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_section_youre_in_good_hands = document.getElementById('rr-scientificresearch-section-youre-in-good-hands');
  if (rr_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#rr-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_scientificresearch_section_21 = document.getElementById('rr-scientificresearch-section-21');
  if (rr_scientificresearch_section_21) {
    gsap.fromTo('#rr-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_form_study_in_brazil_with_study_residency = document.getElementById('rr-study-form-study-in-brazil-with-study-residency');
  if (rr_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#rr-study-form-study-in-brazil-with-study-residency input, #rr-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_list_quick_facts = document.getElementById('rr-study-list-quick-facts');
  if (rr_study_list_quick_facts) {
    gsap.from('#rr-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_list_common_challenges_applicants_face = document.getElementById('rr-study-list-common-challenges-applicants-face');
  if (rr_study_list_common_challenges_applicants_face) {
    gsap.from('#rr-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_list_how_we_solve_these_challenges = document.getElementById('rr-study-list-how-we-solve-these-challenges');
  if (rr_study_list_how_we_solve_these_challenges) {
    gsap.from('#rr-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_section_residency_overview = document.getElementById('rr-study-section-residency-overview');
  if (rr_study_section_residency_overview) {
    gsap.fromTo('#rr-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_form_who_is_this_residency_for = document.getElementById('rr-study-form-who-is-this-residency-for');
  if (rr_study_form_who_is_this_residency_for) {
    gsap.from('#rr-study-form-who-is-this-residency-for input, #rr-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_list_required_documents = document.getElementById('rr-study-list-required-documents');
  if (rr_study_list_required_documents) {
    gsap.from('#rr-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_list_application_process = document.getElementById('rr-study-list-application-process');
  if (rr_study_list_application_process) {
    gsap.from('#rr-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_section_timelines_deadlines = document.getElementById('rr-study-section-timelines-deadlines');
  if (rr_study_section_timelines_deadlines) {
    gsap.fromTo('#rr-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_section_fees_costs = document.getElementById('rr-study-section-fees-costs');
  if (rr_study_section_fees_costs) {
    gsap.fromTo('#rr-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_list_risks_common_mistakes = document.getElementById('rr-study-list-risks-common-mistakes');
  if (rr_study_list_risks_common_mistakes) {
    gsap.from('#rr-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_section_diy_vs_professional_assistance = document.getElementById('rr-study-section-diy-vs-professional-assistance');
  if (rr_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_section_roraima_specific_context = document.getElementById('rr-study-section-roraima-specific-context');
  if (rr_study_section_roraima_specific_context) {
    gsap.fromTo('#rr-study-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_section_what_our_clients_say = document.getElementById('rr-study-section-what-our-clients-say');
  if (rr_study_section_what_our_clients_say) {
    gsap.fromTo('#rr-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_section_frequently_asked_questions = document.getElementById('rr-study-section-frequently-asked-questions');
  if (rr_study_section_frequently_asked_questions) {
    gsap.fromTo('#rr-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_section_international_support = document.getElementById('rr-study-section-international-support');
  if (rr_study_section_international_support) {
    gsap.fromTo('#rr-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_list_our_credentials = document.getElementById('rr-study-list-our-credentials');
  if (rr_study_list_our_credentials) {
    gsap.from('#rr-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_list_related_services = document.getElementById('rr-study-list-related-services');
  if (rr_study_list_related_services) {
    gsap.from('#rr-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_section_youre_in_good_hands = document.getElementById('rr-study-section-youre-in-good-hands');
  if (rr_study_section_youre_in_good_hands) {
    gsap.fromTo('#rr-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_study_section_21 = document.getElementById('rr-study-section-21');
  if (rr_study_section_21) {
    gsap.fromTo('#rr-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('rr-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (rr_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#rr-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #rr-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_list_quick_facts = document.getElementById('rr-educationalexchange-list-quick-facts');
  if (rr_educationalexchange_list_quick_facts) {
    gsap.from('#rr-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_list_common_challenges_applicants_face = document.getElementById('rr-educationalexchange-list-common-challenges-applicants-face');
  if (rr_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#rr-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('rr-educationalexchange-list-how-we-solve-these-challenges');
  if (rr_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#rr-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_section_residency_overview = document.getElementById('rr-educationalexchange-section-residency-overview');
  if (rr_educationalexchange_section_residency_overview) {
    gsap.fromTo('#rr-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_form_who_is_this_residency_for = document.getElementById('rr-educationalexchange-form-who-is-this-residency-for');
  if (rr_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#rr-educationalexchange-form-who-is-this-residency-for input, #rr-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_list_required_documents = document.getElementById('rr-educationalexchange-list-required-documents');
  if (rr_educationalexchange_list_required_documents) {
    gsap.from('#rr-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_list_application_process = document.getElementById('rr-educationalexchange-list-application-process');
  if (rr_educationalexchange_list_application_process) {
    gsap.from('#rr-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_section_timelines_deadlines = document.getElementById('rr-educationalexchange-section-timelines-deadlines');
  if (rr_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#rr-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_section_fees_costs = document.getElementById('rr-educationalexchange-section-fees-costs');
  if (rr_educationalexchange_section_fees_costs) {
    gsap.fromTo('#rr-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_list_risks_common_mistakes = document.getElementById('rr-educationalexchange-list-risks-common-mistakes');
  if (rr_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#rr-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('rr-educationalexchange-section-diy-vs-professional-assistance');
  if (rr_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_section_roraima_specific_context = document.getElementById('rr-educationalexchange-section-roraima-specific-context');
  if (rr_educationalexchange_section_roraima_specific_context) {
    gsap.fromTo('#rr-educationalexchange-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_section_what_our_clients_say = document.getElementById('rr-educationalexchange-section-what-our-clients-say');
  if (rr_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#rr-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_section_frequently_asked_questions = document.getElementById('rr-educationalexchange-section-frequently-asked-questions');
  if (rr_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#rr-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_section_international_support = document.getElementById('rr-educationalexchange-section-international-support');
  if (rr_educationalexchange_section_international_support) {
    gsap.fromTo('#rr-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_list_our_credentials = document.getElementById('rr-educationalexchange-list-our-credentials');
  if (rr_educationalexchange_list_our_credentials) {
    gsap.from('#rr-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_list_related_services = document.getElementById('rr-educationalexchange-list-related-services');
  if (rr_educationalexchange_list_related_services) {
    gsap.from('#rr-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_section_youre_in_good_hands = document.getElementById('rr-educationalexchange-section-youre-in-good-hands');
  if (rr_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#rr-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_educationalexchange_section_21 = document.getElementById('rr-educationalexchange-section-21');
  if (rr_educationalexchange_section_21) {
    gsap.fromTo('#rr-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('rr-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (rr_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#rr-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #rr-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_list_quick_facts = document.getElementById('rr-humanitarian-list-quick-facts');
  if (rr_humanitarian_list_quick_facts) {
    gsap.from('#rr-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_list_common_challenges_applicants_face = document.getElementById('rr-humanitarian-list-common-challenges-applicants-face');
  if (rr_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#rr-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_list_how_we_solve_these_challenges = document.getElementById('rr-humanitarian-list-how-we-solve-these-challenges');
  if (rr_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#rr-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_section_residency_overview = document.getElementById('rr-humanitarian-section-residency-overview');
  if (rr_humanitarian_section_residency_overview) {
    gsap.fromTo('#rr-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_form_who_is_this_residency_for = document.getElementById('rr-humanitarian-form-who-is-this-residency-for');
  if (rr_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#rr-humanitarian-form-who-is-this-residency-for input, #rr-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_list_required_documents = document.getElementById('rr-humanitarian-list-required-documents');
  if (rr_humanitarian_list_required_documents) {
    gsap.from('#rr-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_list_application_process = document.getElementById('rr-humanitarian-list-application-process');
  if (rr_humanitarian_list_application_process) {
    gsap.from('#rr-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_section_timelines_deadlines = document.getElementById('rr-humanitarian-section-timelines-deadlines');
  if (rr_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#rr-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_section_fees_costs = document.getElementById('rr-humanitarian-section-fees-costs');
  if (rr_humanitarian_section_fees_costs) {
    gsap.fromTo('#rr-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_list_risks_common_mistakes = document.getElementById('rr-humanitarian-list-risks-common-mistakes');
  if (rr_humanitarian_list_risks_common_mistakes) {
    gsap.from('#rr-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_section_diy_vs_professional_assistance = document.getElementById('rr-humanitarian-section-diy-vs-professional-assistance');
  if (rr_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_section_roraima_specific_context = document.getElementById('rr-humanitarian-section-roraima-specific-context');
  if (rr_humanitarian_section_roraima_specific_context) {
    gsap.fromTo('#rr-humanitarian-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_section_what_our_clients_say = document.getElementById('rr-humanitarian-section-what-our-clients-say');
  if (rr_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#rr-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_section_frequently_asked_questions = document.getElementById('rr-humanitarian-section-frequently-asked-questions');
  if (rr_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#rr-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_section_international_support = document.getElementById('rr-humanitarian-section-international-support');
  if (rr_humanitarian_section_international_support) {
    gsap.fromTo('#rr-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_list_our_credentials = document.getElementById('rr-humanitarian-list-our-credentials');
  if (rr_humanitarian_list_our_credentials) {
    gsap.from('#rr-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_list_related_services = document.getElementById('rr-humanitarian-list-related-services');
  if (rr_humanitarian_list_related_services) {
    gsap.from('#rr-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_section_youre_in_good_hands = document.getElementById('rr-humanitarian-section-youre-in-good-hands');
  if (rr_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#rr-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_humanitarian_section_21 = document.getElementById('rr-humanitarian-section-21');
  if (rr_humanitarian_section_21) {
    gsap.fromTo('#rr-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('rr-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (rr_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#rr-digitalnomad-form-digital-nomad-residency-in-brazil input, #rr-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_list_quick_facts = document.getElementById('rr-digitalnomad-list-quick-facts');
  if (rr_digitalnomad_list_quick_facts) {
    gsap.from('#rr-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_list_common_challenges_applicants_face = document.getElementById('rr-digitalnomad-list-common-challenges-applicants-face');
  if (rr_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#rr-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('rr-digitalnomad-list-how-we-solve-these-challenges');
  if (rr_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#rr-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_section_residency_overview = document.getElementById('rr-digitalnomad-section-residency-overview');
  if (rr_digitalnomad_section_residency_overview) {
    gsap.fromTo('#rr-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_form_who_is_this_residency_for = document.getElementById('rr-digitalnomad-form-who-is-this-residency-for');
  if (rr_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#rr-digitalnomad-form-who-is-this-residency-for input, #rr-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_list_required_documents = document.getElementById('rr-digitalnomad-list-required-documents');
  if (rr_digitalnomad_list_required_documents) {
    gsap.from('#rr-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_list_application_process = document.getElementById('rr-digitalnomad-list-application-process');
  if (rr_digitalnomad_list_application_process) {
    gsap.from('#rr-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_section_timelines_deadlines = document.getElementById('rr-digitalnomad-section-timelines-deadlines');
  if (rr_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#rr-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_section_fees_costs = document.getElementById('rr-digitalnomad-section-fees-costs');
  if (rr_digitalnomad_section_fees_costs) {
    gsap.fromTo('#rr-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_list_risks_common_mistakes = document.getElementById('rr-digitalnomad-list-risks-common-mistakes');
  if (rr_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#rr-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('rr-digitalnomad-section-diy-vs-professional-assistance');
  if (rr_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_section_roraima_specific_context = document.getElementById('rr-digitalnomad-section-roraima-specific-context');
  if (rr_digitalnomad_section_roraima_specific_context) {
    gsap.fromTo('#rr-digitalnomad-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_section_what_our_clients_say = document.getElementById('rr-digitalnomad-section-what-our-clients-say');
  if (rr_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#rr-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_section_frequently_asked_questions = document.getElementById('rr-digitalnomad-section-frequently-asked-questions');
  if (rr_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#rr-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_section_international_support = document.getElementById('rr-digitalnomad-section-international-support');
  if (rr_digitalnomad_section_international_support) {
    gsap.fromTo('#rr-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_list_our_credentials = document.getElementById('rr-digitalnomad-list-our-credentials');
  if (rr_digitalnomad_list_our_credentials) {
    gsap.from('#rr-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_list_related_services = document.getElementById('rr-digitalnomad-list-related-services');
  if (rr_digitalnomad_list_related_services) {
    gsap.from('#rr-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_section_youre_in_good_hands = document.getElementById('rr-digitalnomad-section-youre-in-good-hands');
  if (rr_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#rr-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_digitalnomad_section_21 = document.getElementById('rr-digitalnomad-section-21');
  if (rr_digitalnomad_section_21) {
    gsap.fromTo('#rr-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('rr-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (rr_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#rr-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #rr-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_list_quick_facts = document.getElementById('rr-familyreunion-list-quick-facts');
  if (rr_familyreunion_list_quick_facts) {
    gsap.from('#rr-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_list_common_challenges_applicants_face = document.getElementById('rr-familyreunion-list-common-challenges-applicants-face');
  if (rr_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#rr-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_list_how_we_solve_these_challenges = document.getElementById('rr-familyreunion-list-how-we-solve-these-challenges');
  if (rr_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#rr-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_section_residency_overview = document.getElementById('rr-familyreunion-section-residency-overview');
  if (rr_familyreunion_section_residency_overview) {
    gsap.fromTo('#rr-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_form_who_is_this_residency_for = document.getElementById('rr-familyreunion-form-who-is-this-residency-for');
  if (rr_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#rr-familyreunion-form-who-is-this-residency-for input, #rr-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_list_required_documents = document.getElementById('rr-familyreunion-list-required-documents');
  if (rr_familyreunion_list_required_documents) {
    gsap.from('#rr-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_list_application_process = document.getElementById('rr-familyreunion-list-application-process');
  if (rr_familyreunion_list_application_process) {
    gsap.from('#rr-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_section_timelines_deadlines = document.getElementById('rr-familyreunion-section-timelines-deadlines');
  if (rr_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#rr-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_section_fees_costs = document.getElementById('rr-familyreunion-section-fees-costs');
  if (rr_familyreunion_section_fees_costs) {
    gsap.fromTo('#rr-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_list_risks_common_mistakes = document.getElementById('rr-familyreunion-list-risks-common-mistakes');
  if (rr_familyreunion_list_risks_common_mistakes) {
    gsap.from('#rr-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_section_diy_vs_professional_assistance = document.getElementById('rr-familyreunion-section-diy-vs-professional-assistance');
  if (rr_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_section_roraima_specific_context = document.getElementById('rr-familyreunion-section-roraima-specific-context');
  if (rr_familyreunion_section_roraima_specific_context) {
    gsap.fromTo('#rr-familyreunion-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_section_what_our_clients_say = document.getElementById('rr-familyreunion-section-what-our-clients-say');
  if (rr_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#rr-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_section_frequently_asked_questions = document.getElementById('rr-familyreunion-section-frequently-asked-questions');
  if (rr_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#rr-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_section_international_support = document.getElementById('rr-familyreunion-section-international-support');
  if (rr_familyreunion_section_international_support) {
    gsap.fromTo('#rr-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_list_our_credentials = document.getElementById('rr-familyreunion-list-our-credentials');
  if (rr_familyreunion_list_our_credentials) {
    gsap.from('#rr-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_list_related_services = document.getElementById('rr-familyreunion-list-related-services');
  if (rr_familyreunion_list_related_services) {
    gsap.from('#rr-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_section_youre_in_good_hands = document.getElementById('rr-familyreunion-section-youre-in-good-hands');
  if (rr_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#rr-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_familyreunion_section_21 = document.getElementById('rr-familyreunion-section-21');
  if (rr_familyreunion_section_21) {
    gsap.fromTo('#rr-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('rr-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (rr_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#rr-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #rr-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_list_quick_facts = document.getElementById('rr-mercosul-list-quick-facts');
  if (rr_mercosul_list_quick_facts) {
    gsap.from('#rr-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_list_common_challenges_applicants_face = document.getElementById('rr-mercosul-list-common-challenges-applicants-face');
  if (rr_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#rr-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_list_how_we_solve_these_challenges = document.getElementById('rr-mercosul-list-how-we-solve-these-challenges');
  if (rr_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#rr-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_section_residency_overview = document.getElementById('rr-mercosul-section-residency-overview');
  if (rr_mercosul_section_residency_overview) {
    gsap.fromTo('#rr-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_form_who_is_this_residency_for = document.getElementById('rr-mercosul-form-who-is-this-residency-for');
  if (rr_mercosul_form_who_is_this_residency_for) {
    gsap.from('#rr-mercosul-form-who-is-this-residency-for input, #rr-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_list_required_documents = document.getElementById('rr-mercosul-list-required-documents');
  if (rr_mercosul_list_required_documents) {
    gsap.from('#rr-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_list_application_process = document.getElementById('rr-mercosul-list-application-process');
  if (rr_mercosul_list_application_process) {
    gsap.from('#rr-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_section_timelines_deadlines = document.getElementById('rr-mercosul-section-timelines-deadlines');
  if (rr_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#rr-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_section_fees_costs = document.getElementById('rr-mercosul-section-fees-costs');
  if (rr_mercosul_section_fees_costs) {
    gsap.fromTo('#rr-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_list_risks_common_mistakes = document.getElementById('rr-mercosul-list-risks-common-mistakes');
  if (rr_mercosul_list_risks_common_mistakes) {
    gsap.from('#rr-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_section_diy_vs_professional_assistance = document.getElementById('rr-mercosul-section-diy-vs-professional-assistance');
  if (rr_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_section_roraima_specific_context = document.getElementById('rr-mercosul-section-roraima-specific-context');
  if (rr_mercosul_section_roraima_specific_context) {
    gsap.fromTo('#rr-mercosul-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_section_what_our_clients_say = document.getElementById('rr-mercosul-section-what-our-clients-say');
  if (rr_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#rr-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_section_frequently_asked_questions = document.getElementById('rr-mercosul-section-frequently-asked-questions');
  if (rr_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#rr-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_section_international_support = document.getElementById('rr-mercosul-section-international-support');
  if (rr_mercosul_section_international_support) {
    gsap.fromTo('#rr-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_list_our_credentials = document.getElementById('rr-mercosul-list-our-credentials');
  if (rr_mercosul_list_our_credentials) {
    gsap.from('#rr-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_list_related_services = document.getElementById('rr-mercosul-list-related-services');
  if (rr_mercosul_list_related_services) {
    gsap.from('#rr-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_section_youre_in_good_hands = document.getElementById('rr-mercosul-section-youre-in-good-hands');
  if (rr_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#rr-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_mercosul_section_21 = document.getElementById('rr-mercosul-section-21');
  if (rr_mercosul_section_21) {
    gsap.fromTo('#rr-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('rr-retiree-form-retire-in-brazil-with-retiree-residency');
  if (rr_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#rr-retiree-form-retire-in-brazil-with-retiree-residency input, #rr-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_list_quick_facts = document.getElementById('rr-retiree-list-quick-facts');
  if (rr_retiree_list_quick_facts) {
    gsap.from('#rr-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_list_common_challenges_applicants_face = document.getElementById('rr-retiree-list-common-challenges-applicants-face');
  if (rr_retiree_list_common_challenges_applicants_face) {
    gsap.from('#rr-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_list_how_we_solve_these_challenges = document.getElementById('rr-retiree-list-how-we-solve-these-challenges');
  if (rr_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#rr-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_section_residency_overview = document.getElementById('rr-retiree-section-residency-overview');
  if (rr_retiree_section_residency_overview) {
    gsap.fromTo('#rr-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_form_who_is_this_residency_for = document.getElementById('rr-retiree-form-who-is-this-residency-for');
  if (rr_retiree_form_who_is_this_residency_for) {
    gsap.from('#rr-retiree-form-who-is-this-residency-for input, #rr-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_list_required_documents = document.getElementById('rr-retiree-list-required-documents');
  if (rr_retiree_list_required_documents) {
    gsap.from('#rr-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_list_application_process = document.getElementById('rr-retiree-list-application-process');
  if (rr_retiree_list_application_process) {
    gsap.from('#rr-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_section_timelines_deadlines = document.getElementById('rr-retiree-section-timelines-deadlines');
  if (rr_retiree_section_timelines_deadlines) {
    gsap.fromTo('#rr-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_section_fees_costs = document.getElementById('rr-retiree-section-fees-costs');
  if (rr_retiree_section_fees_costs) {
    gsap.fromTo('#rr-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_list_risks_common_mistakes = document.getElementById('rr-retiree-list-risks-common-mistakes');
  if (rr_retiree_list_risks_common_mistakes) {
    gsap.from('#rr-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_section_diy_vs_professional_assistance = document.getElementById('rr-retiree-section-diy-vs-professional-assistance');
  if (rr_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_section_roraima_specific_context = document.getElementById('rr-retiree-section-roraima-specific-context');
  if (rr_retiree_section_roraima_specific_context) {
    gsap.fromTo('#rr-retiree-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_section_what_our_clients_say = document.getElementById('rr-retiree-section-what-our-clients-say');
  if (rr_retiree_section_what_our_clients_say) {
    gsap.fromTo('#rr-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_section_frequently_asked_questions = document.getElementById('rr-retiree-section-frequently-asked-questions');
  if (rr_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#rr-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_section_international_support = document.getElementById('rr-retiree-section-international-support');
  if (rr_retiree_section_international_support) {
    gsap.fromTo('#rr-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_list_our_credentials = document.getElementById('rr-retiree-list-our-credentials');
  if (rr_retiree_list_our_credentials) {
    gsap.from('#rr-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_list_related_services = document.getElementById('rr-retiree-list-related-services');
  if (rr_retiree_list_related_services) {
    gsap.from('#rr-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_section_youre_in_good_hands = document.getElementById('rr-retiree-section-youre-in-good-hands');
  if (rr_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#rr-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_retiree_section_21 = document.getElementById('rr-retiree-section-21');
  if (rr_retiree_section_21) {
    gsap.fromTo('#rr-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('rr-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (rr_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#rr-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #rr-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_list_quick_facts = document.getElementById('rr-volunteer-list-quick-facts');
  if (rr_volunteer_list_quick_facts) {
    gsap.from('#rr-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_list_common_challenges_applicants_face = document.getElementById('rr-volunteer-list-common-challenges-applicants-face');
  if (rr_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#rr-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_list_how_we_solve_these_challenges = document.getElementById('rr-volunteer-list-how-we-solve-these-challenges');
  if (rr_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#rr-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_section_residency_overview = document.getElementById('rr-volunteer-section-residency-overview');
  if (rr_volunteer_section_residency_overview) {
    gsap.fromTo('#rr-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_form_who_is_this_residency_for = document.getElementById('rr-volunteer-form-who-is-this-residency-for');
  if (rr_volunteer_form_who_is_this_residency_for) {
    gsap.from('#rr-volunteer-form-who-is-this-residency-for input, #rr-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_list_required_documents = document.getElementById('rr-volunteer-list-required-documents');
  if (rr_volunteer_list_required_documents) {
    gsap.from('#rr-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_list_application_process = document.getElementById('rr-volunteer-list-application-process');
  if (rr_volunteer_list_application_process) {
    gsap.from('#rr-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_section_timelines_deadlines = document.getElementById('rr-volunteer-section-timelines-deadlines');
  if (rr_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#rr-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_section_fees_costs = document.getElementById('rr-volunteer-section-fees-costs');
  if (rr_volunteer_section_fees_costs) {
    gsap.fromTo('#rr-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_list_risks_common_mistakes = document.getElementById('rr-volunteer-list-risks-common-mistakes');
  if (rr_volunteer_list_risks_common_mistakes) {
    gsap.from('#rr-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_section_diy_vs_professional_assistance = document.getElementById('rr-volunteer-section-diy-vs-professional-assistance');
  if (rr_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_section_roraima_specific_context = document.getElementById('rr-volunteer-section-roraima-specific-context');
  if (rr_volunteer_section_roraima_specific_context) {
    gsap.fromTo('#rr-volunteer-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_section_what_our_clients_say = document.getElementById('rr-volunteer-section-what-our-clients-say');
  if (rr_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#rr-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_section_frequently_asked_questions = document.getElementById('rr-volunteer-section-frequently-asked-questions');
  if (rr_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#rr-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_section_international_support = document.getElementById('rr-volunteer-section-international-support');
  if (rr_volunteer_section_international_support) {
    gsap.fromTo('#rr-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_list_our_credentials = document.getElementById('rr-volunteer-list-our-credentials');
  if (rr_volunteer_list_our_credentials) {
    gsap.from('#rr-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_list_related_services = document.getElementById('rr-volunteer-list-related-services');
  if (rr_volunteer_list_related_services) {
    gsap.from('#rr-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_section_youre_in_good_hands = document.getElementById('rr-volunteer-section-youre-in-good-hands');
  if (rr_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#rr-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_volunteer_section_21 = document.getElementById('rr-volunteer-section-21');
  if (rr_volunteer_section_21) {
    gsap.fromTo('#rr-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('rr-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (rr_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#rr-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #rr-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_list_quick_facts = document.getElementById('rr-skilledworker-list-quick-facts');
  if (rr_skilledworker_list_quick_facts) {
    gsap.from('#rr-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_list_common_challenges_applicants_face = document.getElementById('rr-skilledworker-list-common-challenges-applicants-face');
  if (rr_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#rr-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_list_how_we_solve_these_challenges = document.getElementById('rr-skilledworker-list-how-we-solve-these-challenges');
  if (rr_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#rr-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_section_residency_overview = document.getElementById('rr-skilledworker-section-residency-overview');
  if (rr_skilledworker_section_residency_overview) {
    gsap.fromTo('#rr-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_form_who_is_this_residency_for = document.getElementById('rr-skilledworker-form-who-is-this-residency-for');
  if (rr_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#rr-skilledworker-form-who-is-this-residency-for input, #rr-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_list_required_documents = document.getElementById('rr-skilledworker-list-required-documents');
  if (rr_skilledworker_list_required_documents) {
    gsap.from('#rr-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_list_application_process = document.getElementById('rr-skilledworker-list-application-process');
  if (rr_skilledworker_list_application_process) {
    gsap.from('#rr-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_section_timelines_deadlines = document.getElementById('rr-skilledworker-section-timelines-deadlines');
  if (rr_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#rr-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_section_fees_costs = document.getElementById('rr-skilledworker-section-fees-costs');
  if (rr_skilledworker_section_fees_costs) {
    gsap.fromTo('#rr-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_list_risks_common_mistakes = document.getElementById('rr-skilledworker-list-risks-common-mistakes');
  if (rr_skilledworker_list_risks_common_mistakes) {
    gsap.from('#rr-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_section_diy_vs_professional_assistance = document.getElementById('rr-skilledworker-section-diy-vs-professional-assistance');
  if (rr_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_section_roraima_specific_context = document.getElementById('rr-skilledworker-section-roraima-specific-context');
  if (rr_skilledworker_section_roraima_specific_context) {
    gsap.fromTo('#rr-skilledworker-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_section_what_our_clients_say = document.getElementById('rr-skilledworker-section-what-our-clients-say');
  if (rr_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#rr-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_section_frequently_asked_questions = document.getElementById('rr-skilledworker-section-frequently-asked-questions');
  if (rr_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#rr-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_section_international_support = document.getElementById('rr-skilledworker-section-international-support');
  if (rr_skilledworker_section_international_support) {
    gsap.fromTo('#rr-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_list_our_credentials = document.getElementById('rr-skilledworker-list-our-credentials');
  if (rr_skilledworker_list_our_credentials) {
    gsap.from('#rr-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_list_related_services = document.getElementById('rr-skilledworker-list-related-services');
  if (rr_skilledworker_list_related_services) {
    gsap.from('#rr-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_section_youre_in_good_hands = document.getElementById('rr-skilledworker-section-youre-in-good-hands');
  if (rr_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#rr-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_skilledworker_section_21 = document.getElementById('rr-skilledworker-section-21');
  if (rr_skilledworker_section_21) {
    gsap.fromTo('#rr-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('rr-religious-form-religious-residency-in-brazil-for-missions');
  if (rr_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#rr-religious-form-religious-residency-in-brazil-for-missions input, #rr-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_list_quick_facts = document.getElementById('rr-religious-list-quick-facts');
  if (rr_religious_list_quick_facts) {
    gsap.from('#rr-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_list_common_challenges_applicants_face = document.getElementById('rr-religious-list-common-challenges-applicants-face');
  if (rr_religious_list_common_challenges_applicants_face) {
    gsap.from('#rr-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_list_how_we_solve_these_challenges = document.getElementById('rr-religious-list-how-we-solve-these-challenges');
  if (rr_religious_list_how_we_solve_these_challenges) {
    gsap.from('#rr-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_section_residency_overview = document.getElementById('rr-religious-section-residency-overview');
  if (rr_religious_section_residency_overview) {
    gsap.fromTo('#rr-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_form_who_is_this_residency_for = document.getElementById('rr-religious-form-who-is-this-residency-for');
  if (rr_religious_form_who_is_this_residency_for) {
    gsap.from('#rr-religious-form-who-is-this-residency-for input, #rr-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_list_required_documents = document.getElementById('rr-religious-list-required-documents');
  if (rr_religious_list_required_documents) {
    gsap.from('#rr-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_list_application_process = document.getElementById('rr-religious-list-application-process');
  if (rr_religious_list_application_process) {
    gsap.from('#rr-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_section_timelines_deadlines = document.getElementById('rr-religious-section-timelines-deadlines');
  if (rr_religious_section_timelines_deadlines) {
    gsap.fromTo('#rr-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_section_fees_costs = document.getElementById('rr-religious-section-fees-costs');
  if (rr_religious_section_fees_costs) {
    gsap.fromTo('#rr-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_list_risks_common_mistakes = document.getElementById('rr-religious-list-risks-common-mistakes');
  if (rr_religious_list_risks_common_mistakes) {
    gsap.from('#rr-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_section_diy_vs_professional_assistance = document.getElementById('rr-religious-section-diy-vs-professional-assistance');
  if (rr_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_section_roraima_specific_context = document.getElementById('rr-religious-section-roraima-specific-context');
  if (rr_religious_section_roraima_specific_context) {
    gsap.fromTo('#rr-religious-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_section_what_our_clients_say = document.getElementById('rr-religious-section-what-our-clients-say');
  if (rr_religious_section_what_our_clients_say) {
    gsap.fromTo('#rr-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_section_frequently_asked_questions = document.getElementById('rr-religious-section-frequently-asked-questions');
  if (rr_religious_section_frequently_asked_questions) {
    gsap.fromTo('#rr-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_section_international_support = document.getElementById('rr-religious-section-international-support');
  if (rr_religious_section_international_support) {
    gsap.fromTo('#rr-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_list_our_credentials = document.getElementById('rr-religious-list-our-credentials');
  if (rr_religious_list_our_credentials) {
    gsap.from('#rr-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_list_related_services = document.getElementById('rr-religious-list-related-services');
  if (rr_religious_list_related_services) {
    gsap.from('#rr-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_section_youre_in_good_hands = document.getElementById('rr-religious-section-youre-in-good-hands');
  if (rr_religious_section_youre_in_good_hands) {
    gsap.fromTo('#rr-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_religious_section_21 = document.getElementById('rr-religious-section-21');
  if (rr_religious_section_21) {
    gsap.fromTo('#rr-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('rr-investor-form-gain-residency-in-brazil-through-investment');
  if (rr_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#rr-investor-form-gain-residency-in-brazil-through-investment input, #rr-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_list_quick_facts = document.getElementById('rr-investor-list-quick-facts');
  if (rr_investor_list_quick_facts) {
    gsap.from('#rr-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_list_common_challenges_applicants_face = document.getElementById('rr-investor-list-common-challenges-applicants-face');
  if (rr_investor_list_common_challenges_applicants_face) {
    gsap.from('#rr-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_list_how_we_solve_these_challenges = document.getElementById('rr-investor-list-how-we-solve-these-challenges');
  if (rr_investor_list_how_we_solve_these_challenges) {
    gsap.from('#rr-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_section_residency_overview = document.getElementById('rr-investor-section-residency-overview');
  if (rr_investor_section_residency_overview) {
    gsap.fromTo('#rr-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_form_who_is_this_residency_for = document.getElementById('rr-investor-form-who-is-this-residency-for');
  if (rr_investor_form_who_is_this_residency_for) {
    gsap.from('#rr-investor-form-who-is-this-residency-for input, #rr-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_list_required_documents = document.getElementById('rr-investor-list-required-documents');
  if (rr_investor_list_required_documents) {
    gsap.from('#rr-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_list_application_process = document.getElementById('rr-investor-list-application-process');
  if (rr_investor_list_application_process) {
    gsap.from('#rr-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_section_timelines_deadlines = document.getElementById('rr-investor-section-timelines-deadlines');
  if (rr_investor_section_timelines_deadlines) {
    gsap.fromTo('#rr-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_section_fees_costs = document.getElementById('rr-investor-section-fees-costs');
  if (rr_investor_section_fees_costs) {
    gsap.fromTo('#rr-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_list_risks_common_mistakes = document.getElementById('rr-investor-list-risks-common-mistakes');
  if (rr_investor_list_risks_common_mistakes) {
    gsap.from('#rr-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_section_diy_vs_professional_assistance = document.getElementById('rr-investor-section-diy-vs-professional-assistance');
  if (rr_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_section_roraima_specific_context = document.getElementById('rr-investor-section-roraima-specific-context');
  if (rr_investor_section_roraima_specific_context) {
    gsap.fromTo('#rr-investor-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_section_what_our_clients_say = document.getElementById('rr-investor-section-what-our-clients-say');
  if (rr_investor_section_what_our_clients_say) {
    gsap.fromTo('#rr-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_section_frequently_asked_questions = document.getElementById('rr-investor-section-frequently-asked-questions');
  if (rr_investor_section_frequently_asked_questions) {
    gsap.fromTo('#rr-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_section_international_support = document.getElementById('rr-investor-section-international-support');
  if (rr_investor_section_international_support) {
    gsap.fromTo('#rr-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_list_our_credentials = document.getElementById('rr-investor-list-our-credentials');
  if (rr_investor_list_our_credentials) {
    gsap.from('#rr-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_list_related_services = document.getElementById('rr-investor-list-related-services');
  if (rr_investor_list_related_services) {
    gsap.from('#rr-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_section_youre_in_good_hands = document.getElementById('rr-investor-section-youre-in-good-hands');
  if (rr_investor_section_youre_in_good_hands) {
    gsap.fromTo('#rr-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_investor_section_21 = document.getElementById('rr-investor-section-21');
  if (rr_investor_section_21) {
    gsap.fromTo('#rr-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('rr-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (rr_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#rr-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #rr-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_list_quick_facts = document.getElementById('rr-healthtreatment-list-quick-facts');
  if (rr_healthtreatment_list_quick_facts) {
    gsap.from('#rr-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_list_common_challenges_applicants_face = document.getElementById('rr-healthtreatment-list-common-challenges-applicants-face');
  if (rr_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#rr-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('rr-healthtreatment-list-how-we-solve-these-challenges');
  if (rr_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#rr-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_section_residency_overview = document.getElementById('rr-healthtreatment-section-residency-overview');
  if (rr_healthtreatment_section_residency_overview) {
    gsap.fromTo('#rr-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_form_who_is_this_residency_for = document.getElementById('rr-healthtreatment-form-who-is-this-residency-for');
  if (rr_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#rr-healthtreatment-form-who-is-this-residency-for input, #rr-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_list_required_documents = document.getElementById('rr-healthtreatment-list-required-documents');
  if (rr_healthtreatment_list_required_documents) {
    gsap.from('#rr-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_list_application_process = document.getElementById('rr-healthtreatment-list-application-process');
  if (rr_healthtreatment_list_application_process) {
    gsap.from('#rr-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_section_timelines_deadlines = document.getElementById('rr-healthtreatment-section-timelines-deadlines');
  if (rr_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#rr-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_section_fees_costs = document.getElementById('rr-healthtreatment-section-fees-costs');
  if (rr_healthtreatment_section_fees_costs) {
    gsap.fromTo('#rr-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_list_risks_common_mistakes = document.getElementById('rr-healthtreatment-list-risks-common-mistakes');
  if (rr_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#rr-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('rr-healthtreatment-section-diy-vs-professional-assistance');
  if (rr_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_section_roraima_specific_context = document.getElementById('rr-healthtreatment-section-roraima-specific-context');
  if (rr_healthtreatment_section_roraima_specific_context) {
    gsap.fromTo('#rr-healthtreatment-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_section_what_our_clients_say = document.getElementById('rr-healthtreatment-section-what-our-clients-say');
  if (rr_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#rr-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_section_frequently_asked_questions = document.getElementById('rr-healthtreatment-section-frequently-asked-questions');
  if (rr_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#rr-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_section_international_support = document.getElementById('rr-healthtreatment-section-international-support');
  if (rr_healthtreatment_section_international_support) {
    gsap.fromTo('#rr-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_list_our_credentials = document.getElementById('rr-healthtreatment-list-our-credentials');
  if (rr_healthtreatment_list_our_credentials) {
    gsap.from('#rr-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_list_related_services = document.getElementById('rr-healthtreatment-list-related-services');
  if (rr_healthtreatment_list_related_services) {
    gsap.from('#rr-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_section_youre_in_good_hands = document.getElementById('rr-healthtreatment-section-youre-in-good-hands');
  if (rr_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#rr-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_healthtreatment_section_21 = document.getElementById('rr-healthtreatment-section-21');
  if (rr_healthtreatment_section_21) {
    gsap.fromTo('#rr-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('rr-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (rr_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#rr-cplp-form-residency-for-cplp-citizens-in-brazil input, #rr-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_list_quick_facts = document.getElementById('rr-cplp-list-quick-facts');
  if (rr_cplp_list_quick_facts) {
    gsap.from('#rr-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_list_common_challenges_applicants_face = document.getElementById('rr-cplp-list-common-challenges-applicants-face');
  if (rr_cplp_list_common_challenges_applicants_face) {
    gsap.from('#rr-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_list_how_we_solve_these_challenges = document.getElementById('rr-cplp-list-how-we-solve-these-challenges');
  if (rr_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#rr-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_section_residency_overview = document.getElementById('rr-cplp-section-residency-overview');
  if (rr_cplp_section_residency_overview) {
    gsap.fromTo('#rr-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_form_who_is_this_residency_for = document.getElementById('rr-cplp-form-who-is-this-residency-for');
  if (rr_cplp_form_who_is_this_residency_for) {
    gsap.from('#rr-cplp-form-who-is-this-residency-for input, #rr-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_list_required_documents = document.getElementById('rr-cplp-list-required-documents');
  if (rr_cplp_list_required_documents) {
    gsap.from('#rr-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_list_application_process = document.getElementById('rr-cplp-list-application-process');
  if (rr_cplp_list_application_process) {
    gsap.from('#rr-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_section_timelines_deadlines = document.getElementById('rr-cplp-section-timelines-deadlines');
  if (rr_cplp_section_timelines_deadlines) {
    gsap.fromTo('#rr-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_section_fees_costs = document.getElementById('rr-cplp-section-fees-costs');
  if (rr_cplp_section_fees_costs) {
    gsap.fromTo('#rr-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_list_risks_common_mistakes = document.getElementById('rr-cplp-list-risks-common-mistakes');
  if (rr_cplp_list_risks_common_mistakes) {
    gsap.from('#rr-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_section_diy_vs_professional_assistance = document.getElementById('rr-cplp-section-diy-vs-professional-assistance');
  if (rr_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_section_roraima_specific_context = document.getElementById('rr-cplp-section-roraima-specific-context');
  if (rr_cplp_section_roraima_specific_context) {
    gsap.fromTo('#rr-cplp-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_section_what_our_clients_say = document.getElementById('rr-cplp-section-what-our-clients-say');
  if (rr_cplp_section_what_our_clients_say) {
    gsap.fromTo('#rr-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_section_frequently_asked_questions = document.getElementById('rr-cplp-section-frequently-asked-questions');
  if (rr_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#rr-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_section_international_support = document.getElementById('rr-cplp-section-international-support');
  if (rr_cplp_section_international_support) {
    gsap.fromTo('#rr-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_list_our_credentials = document.getElementById('rr-cplp-list-our-credentials');
  if (rr_cplp_list_our_credentials) {
    gsap.from('#rr-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_list_related_services = document.getElementById('rr-cplp-list-related-services');
  if (rr_cplp_list_related_services) {
    gsap.from('#rr-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_section_youre_in_good_hands = document.getElementById('rr-cplp-section-youre-in-good-hands');
  if (rr_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#rr-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_cplp_section_21 = document.getElementById('rr-cplp-section-21');
  if (rr_cplp_section_21) {
    gsap.fromTo('#rr-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('rr-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (rr_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#rr-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #rr-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_list_quick_facts = document.getElementById('rr-youthexchange-list-quick-facts');
  if (rr_youthexchange_list_quick_facts) {
    gsap.from('#rr-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_list_common_challenges_applicants_face = document.getElementById('rr-youthexchange-list-common-challenges-applicants-face');
  if (rr_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#rr-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_list_how_we_solve_these_challenges = document.getElementById('rr-youthexchange-list-how-we-solve-these-challenges');
  if (rr_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#rr-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_section_residency_overview = document.getElementById('rr-youthexchange-section-residency-overview');
  if (rr_youthexchange_section_residency_overview) {
    gsap.fromTo('#rr-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_form_who_is_this_residency_for = document.getElementById('rr-youthexchange-form-who-is-this-residency-for');
  if (rr_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#rr-youthexchange-form-who-is-this-residency-for input, #rr-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_list_required_documents = document.getElementById('rr-youthexchange-list-required-documents');
  if (rr_youthexchange_list_required_documents) {
    gsap.from('#rr-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_list_application_process = document.getElementById('rr-youthexchange-list-application-process');
  if (rr_youthexchange_list_application_process) {
    gsap.from('#rr-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_section_timelines_deadlines = document.getElementById('rr-youthexchange-section-timelines-deadlines');
  if (rr_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#rr-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_section_fees_costs = document.getElementById('rr-youthexchange-section-fees-costs');
  if (rr_youthexchange_section_fees_costs) {
    gsap.fromTo('#rr-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_list_risks_common_mistakes = document.getElementById('rr-youthexchange-list-risks-common-mistakes');
  if (rr_youthexchange_list_risks_common_mistakes) {
    gsap.from('#rr-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_section_diy_vs_professional_assistance = document.getElementById('rr-youthexchange-section-diy-vs-professional-assistance');
  if (rr_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_section_roraima_specific_context = document.getElementById('rr-youthexchange-section-roraima-specific-context');
  if (rr_youthexchange_section_roraima_specific_context) {
    gsap.fromTo('#rr-youthexchange-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_section_what_our_clients_say = document.getElementById('rr-youthexchange-section-what-our-clients-say');
  if (rr_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#rr-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_section_frequently_asked_questions = document.getElementById('rr-youthexchange-section-frequently-asked-questions');
  if (rr_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#rr-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_section_international_support = document.getElementById('rr-youthexchange-section-international-support');
  if (rr_youthexchange_section_international_support) {
    gsap.fromTo('#rr-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_list_our_credentials = document.getElementById('rr-youthexchange-list-our-credentials');
  if (rr_youthexchange_list_our_credentials) {
    gsap.from('#rr-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_list_related_services = document.getElementById('rr-youthexchange-list-related-services');
  if (rr_youthexchange_list_related_services) {
    gsap.from('#rr-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_section_youre_in_good_hands = document.getElementById('rr-youthexchange-section-youre-in-good-hands');
  if (rr_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#rr-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_youthexchange_section_21 = document.getElementById('rr-youthexchange-section-21');
  if (rr_youthexchange_section_21) {
    gsap.fromTo('#rr-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('rr-work-form-work-and-reside-in-brazil-with-work-residency');
  if (rr_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#rr-work-form-work-and-reside-in-brazil-with-work-residency input, #rr-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_list_quick_facts = document.getElementById('rr-work-list-quick-facts');
  if (rr_work_list_quick_facts) {
    gsap.from('#rr-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_list_common_challenges_applicants_face = document.getElementById('rr-work-list-common-challenges-applicants-face');
  if (rr_work_list_common_challenges_applicants_face) {
    gsap.from('#rr-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_list_how_we_solve_these_challenges = document.getElementById('rr-work-list-how-we-solve-these-challenges');
  if (rr_work_list_how_we_solve_these_challenges) {
    gsap.from('#rr-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_section_residency_overview = document.getElementById('rr-work-section-residency-overview');
  if (rr_work_section_residency_overview) {
    gsap.fromTo('#rr-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_form_who_is_this_residency_for = document.getElementById('rr-work-form-who-is-this-residency-for');
  if (rr_work_form_who_is_this_residency_for) {
    gsap.from('#rr-work-form-who-is-this-residency-for input, #rr-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_list_required_documents = document.getElementById('rr-work-list-required-documents');
  if (rr_work_list_required_documents) {
    gsap.from('#rr-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_list_application_process = document.getElementById('rr-work-list-application-process');
  if (rr_work_list_application_process) {
    gsap.from('#rr-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_section_timelines_deadlines = document.getElementById('rr-work-section-timelines-deadlines');
  if (rr_work_section_timelines_deadlines) {
    gsap.fromTo('#rr-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_section_fees_costs = document.getElementById('rr-work-section-fees-costs');
  if (rr_work_section_fees_costs) {
    gsap.fromTo('#rr-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_list_risks_common_mistakes = document.getElementById('rr-work-list-risks-common-mistakes');
  if (rr_work_list_risks_common_mistakes) {
    gsap.from('#rr-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_section_diy_vs_professional_assistance = document.getElementById('rr-work-section-diy-vs-professional-assistance');
  if (rr_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_section_roraima_specific_context = document.getElementById('rr-work-section-roraima-specific-context');
  if (rr_work_section_roraima_specific_context) {
    gsap.fromTo('#rr-work-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_section_what_our_clients_say = document.getElementById('rr-work-section-what-our-clients-say');
  if (rr_work_section_what_our_clients_say) {
    gsap.fromTo('#rr-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_section_frequently_asked_questions = document.getElementById('rr-work-section-frequently-asked-questions');
  if (rr_work_section_frequently_asked_questions) {
    gsap.fromTo('#rr-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_section_international_support = document.getElementById('rr-work-section-international-support');
  if (rr_work_section_international_support) {
    gsap.fromTo('#rr-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_list_our_credentials = document.getElementById('rr-work-list-our-credentials');
  if (rr_work_list_our_credentials) {
    gsap.from('#rr-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_list_related_services = document.getElementById('rr-work-list-related-services');
  if (rr_work_list_related_services) {
    gsap.from('#rr-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_section_youre_in_good_hands = document.getElementById('rr-work-section-youre-in-good-hands');
  if (rr_work_section_youre_in_good_hands) {
    gsap.fromTo('#rr-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_work_section_21 = document.getElementById('rr-work-section-21');
  if (rr_work_section_21) {
    gsap.fromTo('#rr-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('rr-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (rr_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#rr-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #rr-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_list_quick_facts = document.getElementById('rr-startup-list-quick-facts');
  if (rr_startup_list_quick_facts) {
    gsap.from('#rr-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_list_common_challenges_applicants_face = document.getElementById('rr-startup-list-common-challenges-applicants-face');
  if (rr_startup_list_common_challenges_applicants_face) {
    gsap.from('#rr-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_list_how_we_solve_these_challenges = document.getElementById('rr-startup-list-how-we-solve-these-challenges');
  if (rr_startup_list_how_we_solve_these_challenges) {
    gsap.from('#rr-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_section_visa_overview = document.getElementById('rr-startup-section-visa-overview');
  if (rr_startup_section_visa_overview) {
    gsap.fromTo('#rr-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_form_who_is_this_visa_for = document.getElementById('rr-startup-form-who-is-this-visa-for');
  if (rr_startup_form_who_is_this_visa_for) {
    gsap.from('#rr-startup-form-who-is-this-visa-for input, #rr-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_list_required_documents = document.getElementById('rr-startup-list-required-documents');
  if (rr_startup_list_required_documents) {
    gsap.from('#rr-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_list_application_process = document.getElementById('rr-startup-list-application-process');
  if (rr_startup_list_application_process) {
    gsap.from('#rr-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_section_timelines_deadlines = document.getElementById('rr-startup-section-timelines-deadlines');
  if (rr_startup_section_timelines_deadlines) {
    gsap.fromTo('#rr-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_section_fees_costs = document.getElementById('rr-startup-section-fees-costs');
  if (rr_startup_section_fees_costs) {
    gsap.fromTo('#rr-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_list_risks_common_mistakes = document.getElementById('rr-startup-list-risks-common-mistakes');
  if (rr_startup_list_risks_common_mistakes) {
    gsap.from('#rr-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_section_diy_vs_professional_assistance = document.getElementById('rr-startup-section-diy-vs-professional-assistance');
  if (rr_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_section_roraima_specific_context = document.getElementById('rr-startup-section-roraima-specific-context');
  if (rr_startup_section_roraima_specific_context) {
    gsap.fromTo('#rr-startup-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_section_what_our_clients_say = document.getElementById('rr-startup-section-what-our-clients-say');
  if (rr_startup_section_what_our_clients_say) {
    gsap.fromTo('#rr-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_section_frequently_asked_questions = document.getElementById('rr-startup-section-frequently-asked-questions');
  if (rr_startup_section_frequently_asked_questions) {
    gsap.fromTo('#rr-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_section_international_support = document.getElementById('rr-startup-section-international-support');
  if (rr_startup_section_international_support) {
    gsap.fromTo('#rr-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_list_our_credentials = document.getElementById('rr-startup-list-our-credentials');
  if (rr_startup_list_our_credentials) {
    gsap.from('#rr-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_list_related_services = document.getElementById('rr-startup-list-related-services');
  if (rr_startup_list_related_services) {
    gsap.from('#rr-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_section_youre_in_good_hands = document.getElementById('rr-startup-section-youre-in-good-hands');
  if (rr_startup_section_youre_in_good_hands) {
    gsap.fromTo('#rr-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_startup_section_21 = document.getElementById('rr-startup-section-21');
  if (rr_startup_section_21) {
    gsap.fromTo('#rr-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('rr-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (rr_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#rr-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #rr-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_list_quick_facts = document.getElementById('rr-family-list-quick-facts');
  if (rr_family_list_quick_facts) {
    gsap.from('#rr-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_list_common_challenges_applicants_face = document.getElementById('rr-family-list-common-challenges-applicants-face');
  if (rr_family_list_common_challenges_applicants_face) {
    gsap.from('#rr-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_list_how_we_solve_these_challenges = document.getElementById('rr-family-list-how-we-solve-these-challenges');
  if (rr_family_list_how_we_solve_these_challenges) {
    gsap.from('#rr-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_section_visa_overview = document.getElementById('rr-family-section-visa-overview');
  if (rr_family_section_visa_overview) {
    gsap.fromTo('#rr-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_form_who_is_this_visa_for = document.getElementById('rr-family-form-who-is-this-visa-for');
  if (rr_family_form_who_is_this_visa_for) {
    gsap.from('#rr-family-form-who-is-this-visa-for input, #rr-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_list_required_documents = document.getElementById('rr-family-list-required-documents');
  if (rr_family_list_required_documents) {
    gsap.from('#rr-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_list_application_process = document.getElementById('rr-family-list-application-process');
  if (rr_family_list_application_process) {
    gsap.from('#rr-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_section_timelines_deadlines = document.getElementById('rr-family-section-timelines-deadlines');
  if (rr_family_section_timelines_deadlines) {
    gsap.fromTo('#rr-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_section_fees_costs = document.getElementById('rr-family-section-fees-costs');
  if (rr_family_section_fees_costs) {
    gsap.fromTo('#rr-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_list_risks_common_mistakes = document.getElementById('rr-family-list-risks-common-mistakes');
  if (rr_family_list_risks_common_mistakes) {
    gsap.from('#rr-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_section_diy_vs_professional_assistance = document.getElementById('rr-family-section-diy-vs-professional-assistance');
  if (rr_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_section_roraima_specific_context = document.getElementById('rr-family-section-roraima-specific-context');
  if (rr_family_section_roraima_specific_context) {
    gsap.fromTo('#rr-family-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_section_what_our_clients_say = document.getElementById('rr-family-section-what-our-clients-say');
  if (rr_family_section_what_our_clients_say) {
    gsap.fromTo('#rr-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_section_frequently_asked_questions = document.getElementById('rr-family-section-frequently-asked-questions');
  if (rr_family_section_frequently_asked_questions) {
    gsap.fromTo('#rr-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_section_international_support = document.getElementById('rr-family-section-international-support');
  if (rr_family_section_international_support) {
    gsap.fromTo('#rr-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_list_our_credentials = document.getElementById('rr-family-list-our-credentials');
  if (rr_family_list_our_credentials) {
    gsap.from('#rr-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_list_related_services = document.getElementById('rr-family-list-related-services');
  if (rr_family_list_related_services) {
    gsap.from('#rr-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_section_youre_in_good_hands = document.getElementById('rr-family-section-youre-in-good-hands');
  if (rr_family_section_youre_in_good_hands) {
    gsap.fromTo('#rr-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_family_section_21 = document.getElementById('rr-family-section-21');
  if (rr_family_section_21) {
    gsap.fromTo('#rr-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('rr-sports-form-compete-in-brazil-with-the-sports-visa');
  if (rr_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#rr-sports-form-compete-in-brazil-with-the-sports-visa input, #rr-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_list_quick_facts = document.getElementById('rr-sports-list-quick-facts');
  if (rr_sports_list_quick_facts) {
    gsap.from('#rr-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_list_common_challenges_applicants_face = document.getElementById('rr-sports-list-common-challenges-applicants-face');
  if (rr_sports_list_common_challenges_applicants_face) {
    gsap.from('#rr-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_list_how_we_solve_these_challenges = document.getElementById('rr-sports-list-how-we-solve-these-challenges');
  if (rr_sports_list_how_we_solve_these_challenges) {
    gsap.from('#rr-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_section_visa_overview = document.getElementById('rr-sports-section-visa-overview');
  if (rr_sports_section_visa_overview) {
    gsap.fromTo('#rr-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_form_who_is_this_visa_for = document.getElementById('rr-sports-form-who-is-this-visa-for');
  if (rr_sports_form_who_is_this_visa_for) {
    gsap.from('#rr-sports-form-who-is-this-visa-for input, #rr-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_list_required_documents = document.getElementById('rr-sports-list-required-documents');
  if (rr_sports_list_required_documents) {
    gsap.from('#rr-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_list_application_process = document.getElementById('rr-sports-list-application-process');
  if (rr_sports_list_application_process) {
    gsap.from('#rr-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_section_timelines_deadlines = document.getElementById('rr-sports-section-timelines-deadlines');
  if (rr_sports_section_timelines_deadlines) {
    gsap.fromTo('#rr-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_section_fees_costs = document.getElementById('rr-sports-section-fees-costs');
  if (rr_sports_section_fees_costs) {
    gsap.fromTo('#rr-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_list_risks_common_mistakes = document.getElementById('rr-sports-list-risks-common-mistakes');
  if (rr_sports_list_risks_common_mistakes) {
    gsap.from('#rr-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_section_diy_vs_professional_assistance = document.getElementById('rr-sports-section-diy-vs-professional-assistance');
  if (rr_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_section_roraima_specific_context = document.getElementById('rr-sports-section-roraima-specific-context');
  if (rr_sports_section_roraima_specific_context) {
    gsap.fromTo('#rr-sports-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_section_what_our_clients_say = document.getElementById('rr-sports-section-what-our-clients-say');
  if (rr_sports_section_what_our_clients_say) {
    gsap.fromTo('#rr-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_section_frequently_asked_questions = document.getElementById('rr-sports-section-frequently-asked-questions');
  if (rr_sports_section_frequently_asked_questions) {
    gsap.fromTo('#rr-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_section_international_support = document.getElementById('rr-sports-section-international-support');
  if (rr_sports_section_international_support) {
    gsap.fromTo('#rr-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_list_our_credentials = document.getElementById('rr-sports-list-our-credentials');
  if (rr_sports_list_our_credentials) {
    gsap.from('#rr-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_list_related_services = document.getElementById('rr-sports-list-related-services');
  if (rr_sports_list_related_services) {
    gsap.from('#rr-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_section_youre_in_good_hands = document.getElementById('rr-sports-section-youre-in-good-hands');
  if (rr_sports_section_youre_in_good_hands) {
    gsap.fromTo('#rr-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_sports_section_21 = document.getElementById('rr-sports-section-21');
  if (rr_sports_section_21) {
    gsap.fromTo('#rr-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('rr-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (rr_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#rr-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #rr-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_list_quick_facts = document.getElementById('rr-medical-list-quick-facts');
  if (rr_medical_list_quick_facts) {
    gsap.from('#rr-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_list_common_challenges_applicants_face = document.getElementById('rr-medical-list-common-challenges-applicants-face');
  if (rr_medical_list_common_challenges_applicants_face) {
    gsap.from('#rr-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_list_how_we_solve_these_challenges = document.getElementById('rr-medical-list-how-we-solve-these-challenges');
  if (rr_medical_list_how_we_solve_these_challenges) {
    gsap.from('#rr-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_section_visa_overview = document.getElementById('rr-medical-section-visa-overview');
  if (rr_medical_section_visa_overview) {
    gsap.fromTo('#rr-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_form_who_is_this_visa_for = document.getElementById('rr-medical-form-who-is-this-visa-for');
  if (rr_medical_form_who_is_this_visa_for) {
    gsap.from('#rr-medical-form-who-is-this-visa-for input, #rr-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_list_required_documents = document.getElementById('rr-medical-list-required-documents');
  if (rr_medical_list_required_documents) {
    gsap.from('#rr-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_list_application_process = document.getElementById('rr-medical-list-application-process');
  if (rr_medical_list_application_process) {
    gsap.from('#rr-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_section_timelines_deadlines = document.getElementById('rr-medical-section-timelines-deadlines');
  if (rr_medical_section_timelines_deadlines) {
    gsap.fromTo('#rr-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_section_fees_costs = document.getElementById('rr-medical-section-fees-costs');
  if (rr_medical_section_fees_costs) {
    gsap.fromTo('#rr-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_list_risks_common_mistakes = document.getElementById('rr-medical-list-risks-common-mistakes');
  if (rr_medical_list_risks_common_mistakes) {
    gsap.from('#rr-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_section_diy_vs_professional_assistance = document.getElementById('rr-medical-section-diy-vs-professional-assistance');
  if (rr_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_section_roraima_specific_context = document.getElementById('rr-medical-section-roraima-specific-context');
  if (rr_medical_section_roraima_specific_context) {
    gsap.fromTo('#rr-medical-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_section_what_our_clients_say = document.getElementById('rr-medical-section-what-our-clients-say');
  if (rr_medical_section_what_our_clients_say) {
    gsap.fromTo('#rr-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_section_frequently_asked_questions = document.getElementById('rr-medical-section-frequently-asked-questions');
  if (rr_medical_section_frequently_asked_questions) {
    gsap.fromTo('#rr-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_section_international_support = document.getElementById('rr-medical-section-international-support');
  if (rr_medical_section_international_support) {
    gsap.fromTo('#rr-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_list_our_credentials = document.getElementById('rr-medical-list-our-credentials');
  if (rr_medical_list_our_credentials) {
    gsap.from('#rr-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_list_related_services = document.getElementById('rr-medical-list-related-services');
  if (rr_medical_list_related_services) {
    gsap.from('#rr-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_section_youre_in_good_hands = document.getElementById('rr-medical-section-youre-in-good-hands');
  if (rr_medical_section_youre_in_good_hands) {
    gsap.fromTo('#rr-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_medical_section_21 = document.getElementById('rr-medical-section-21');
  if (rr_medical_section_21) {
    gsap.fromTo('#rr-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('rr-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (rr_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#rr-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #rr-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_list_quick_facts = document.getElementById('rr-tourist-list-quick-facts');
  if (rr_tourist_list_quick_facts) {
    gsap.from('#rr-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_list_common_challenges_applicants_face = document.getElementById('rr-tourist-list-common-challenges-applicants-face');
  if (rr_tourist_list_common_challenges_applicants_face) {
    gsap.from('#rr-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_list_how_we_solve_these_challenges = document.getElementById('rr-tourist-list-how-we-solve-these-challenges');
  if (rr_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#rr-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_section_visa_overview = document.getElementById('rr-tourist-section-visa-overview');
  if (rr_tourist_section_visa_overview) {
    gsap.fromTo('#rr-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_form_who_is_this_visa_for = document.getElementById('rr-tourist-form-who-is-this-visa-for');
  if (rr_tourist_form_who_is_this_visa_for) {
    gsap.from('#rr-tourist-form-who-is-this-visa-for input, #rr-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_list_required_documents = document.getElementById('rr-tourist-list-required-documents');
  if (rr_tourist_list_required_documents) {
    gsap.from('#rr-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_list_application_process = document.getElementById('rr-tourist-list-application-process');
  if (rr_tourist_list_application_process) {
    gsap.from('#rr-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_section_timelines_deadlines = document.getElementById('rr-tourist-section-timelines-deadlines');
  if (rr_tourist_section_timelines_deadlines) {
    gsap.fromTo('#rr-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_section_fees_costs = document.getElementById('rr-tourist-section-fees-costs');
  if (rr_tourist_section_fees_costs) {
    gsap.fromTo('#rr-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_list_risks_common_mistakes = document.getElementById('rr-tourist-list-risks-common-mistakes');
  if (rr_tourist_list_risks_common_mistakes) {
    gsap.from('#rr-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_section_diy_vs_professional_assistance = document.getElementById('rr-tourist-section-diy-vs-professional-assistance');
  if (rr_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_section_roraima_specific_context = document.getElementById('rr-tourist-section-roraima-specific-context');
  if (rr_tourist_section_roraima_specific_context) {
    gsap.fromTo('#rr-tourist-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_section_what_our_clients_say = document.getElementById('rr-tourist-section-what-our-clients-say');
  if (rr_tourist_section_what_our_clients_say) {
    gsap.fromTo('#rr-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_section_frequently_asked_questions = document.getElementById('rr-tourist-section-frequently-asked-questions');
  if (rr_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#rr-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_section_international_support = document.getElementById('rr-tourist-section-international-support');
  if (rr_tourist_section_international_support) {
    gsap.fromTo('#rr-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_list_our_credentials = document.getElementById('rr-tourist-list-our-credentials');
  if (rr_tourist_list_our_credentials) {
    gsap.from('#rr-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_list_related_services = document.getElementById('rr-tourist-list-related-services');
  if (rr_tourist_list_related_services) {
    gsap.from('#rr-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_section_youre_in_good_hands = document.getElementById('rr-tourist-section-youre-in-good-hands');
  if (rr_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#rr-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_tourist_section_21 = document.getElementById('rr-tourist-section-21');
  if (rr_tourist_section_21) {
    gsap.fromTo('#rr-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('rr-transit-form-transit-through-brazil-with-the-transit-visa');
  if (rr_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#rr-transit-form-transit-through-brazil-with-the-transit-visa input, #rr-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_list_quick_facts = document.getElementById('rr-transit-list-quick-facts');
  if (rr_transit_list_quick_facts) {
    gsap.from('#rr-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_list_common_challenges_applicants_face = document.getElementById('rr-transit-list-common-challenges-applicants-face');
  if (rr_transit_list_common_challenges_applicants_face) {
    gsap.from('#rr-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_list_how_we_solve_these_challenges = document.getElementById('rr-transit-list-how-we-solve-these-challenges');
  if (rr_transit_list_how_we_solve_these_challenges) {
    gsap.from('#rr-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_section_visa_overview = document.getElementById('rr-transit-section-visa-overview');
  if (rr_transit_section_visa_overview) {
    gsap.fromTo('#rr-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_form_who_is_this_visa_for = document.getElementById('rr-transit-form-who-is-this-visa-for');
  if (rr_transit_form_who_is_this_visa_for) {
    gsap.from('#rr-transit-form-who-is-this-visa-for input, #rr-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_list_required_documents = document.getElementById('rr-transit-list-required-documents');
  if (rr_transit_list_required_documents) {
    gsap.from('#rr-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_list_application_process = document.getElementById('rr-transit-list-application-process');
  if (rr_transit_list_application_process) {
    gsap.from('#rr-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_section_timelines_deadlines = document.getElementById('rr-transit-section-timelines-deadlines');
  if (rr_transit_section_timelines_deadlines) {
    gsap.fromTo('#rr-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_section_fees_costs = document.getElementById('rr-transit-section-fees-costs');
  if (rr_transit_section_fees_costs) {
    gsap.fromTo('#rr-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_list_risks_common_mistakes = document.getElementById('rr-transit-list-risks-common-mistakes');
  if (rr_transit_list_risks_common_mistakes) {
    gsap.from('#rr-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_section_diy_vs_professional_assistance = document.getElementById('rr-transit-section-diy-vs-professional-assistance');
  if (rr_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_section_roraima_specific_context = document.getElementById('rr-transit-section-roraima-specific-context');
  if (rr_transit_section_roraima_specific_context) {
    gsap.fromTo('#rr-transit-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_section_what_our_clients_say = document.getElementById('rr-transit-section-what-our-clients-say');
  if (rr_transit_section_what_our_clients_say) {
    gsap.fromTo('#rr-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_section_frequently_asked_questions = document.getElementById('rr-transit-section-frequently-asked-questions');
  if (rr_transit_section_frequently_asked_questions) {
    gsap.fromTo('#rr-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_section_international_support = document.getElementById('rr-transit-section-international-support');
  if (rr_transit_section_international_support) {
    gsap.fromTo('#rr-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_list_our_credentials = document.getElementById('rr-transit-list-our-credentials');
  if (rr_transit_list_our_credentials) {
    gsap.from('#rr-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_list_related_services = document.getElementById('rr-transit-list-related-services');
  if (rr_transit_list_related_services) {
    gsap.from('#rr-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_section_youre_in_good_hands = document.getElementById('rr-transit-section-youre-in-good-hands');
  if (rr_transit_section_youre_in_good_hands) {
    gsap.fromTo('#rr-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_transit_section_21 = document.getElementById('rr-transit-section-21');
  if (rr_transit_section_21) {
    gsap.fromTo('#rr-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_form_study_in_brazil_with_the_student_visa = document.getElementById('rr-student-form-study-in-brazil-with-the-student-visa');
  if (rr_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#rr-student-form-study-in-brazil-with-the-student-visa input, #rr-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_list_quick_facts = document.getElementById('rr-student-list-quick-facts');
  if (rr_student_list_quick_facts) {
    gsap.from('#rr-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_list_common_challenges_applicants_face = document.getElementById('rr-student-list-common-challenges-applicants-face');
  if (rr_student_list_common_challenges_applicants_face) {
    gsap.from('#rr-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_list_how_we_solve_these_challenges = document.getElementById('rr-student-list-how-we-solve-these-challenges');
  if (rr_student_list_how_we_solve_these_challenges) {
    gsap.from('#rr-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_section_visa_overview = document.getElementById('rr-student-section-visa-overview');
  if (rr_student_section_visa_overview) {
    gsap.fromTo('#rr-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_form_who_is_this_visa_for = document.getElementById('rr-student-form-who-is-this-visa-for');
  if (rr_student_form_who_is_this_visa_for) {
    gsap.from('#rr-student-form-who-is-this-visa-for input, #rr-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_list_required_documents = document.getElementById('rr-student-list-required-documents');
  if (rr_student_list_required_documents) {
    gsap.from('#rr-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_list_application_process = document.getElementById('rr-student-list-application-process');
  if (rr_student_list_application_process) {
    gsap.from('#rr-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_section_timelines_deadlines = document.getElementById('rr-student-section-timelines-deadlines');
  if (rr_student_section_timelines_deadlines) {
    gsap.fromTo('#rr-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_section_fees_costs = document.getElementById('rr-student-section-fees-costs');
  if (rr_student_section_fees_costs) {
    gsap.fromTo('#rr-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_list_risks_common_mistakes = document.getElementById('rr-student-list-risks-common-mistakes');
  if (rr_student_list_risks_common_mistakes) {
    gsap.from('#rr-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_section_diy_vs_professional_assistance = document.getElementById('rr-student-section-diy-vs-professional-assistance');
  if (rr_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_section_roraima_specific_context = document.getElementById('rr-student-section-roraima-specific-context');
  if (rr_student_section_roraima_specific_context) {
    gsap.fromTo('#rr-student-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_section_what_our_clients_say = document.getElementById('rr-student-section-what-our-clients-say');
  if (rr_student_section_what_our_clients_say) {
    gsap.fromTo('#rr-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_section_frequently_asked_questions = document.getElementById('rr-student-section-frequently-asked-questions');
  if (rr_student_section_frequently_asked_questions) {
    gsap.fromTo('#rr-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_section_international_support = document.getElementById('rr-student-section-international-support');
  if (rr_student_section_international_support) {
    gsap.fromTo('#rr-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_list_our_credentials = document.getElementById('rr-student-list-our-credentials');
  if (rr_student_list_our_credentials) {
    gsap.from('#rr-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_list_related_services = document.getElementById('rr-student-list-related-services');
  if (rr_student_list_related_services) {
    gsap.from('#rr-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_section_youre_in_good_hands = document.getElementById('rr-student-section-youre-in-good-hands');
  if (rr_student_section_youre_in_good_hands) {
    gsap.fromTo('#rr-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_student_section_21 = document.getElementById('rr-student-section-21');
  if (rr_student_section_21) {
    gsap.fromTo('#rr-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('rr-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (rr_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#rr-business-form-conduct-business-in-brazil-with-the-business-visa input, #rr-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_list_quick_facts = document.getElementById('rr-business-list-quick-facts');
  if (rr_business_list_quick_facts) {
    gsap.from('#rr-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_list_common_challenges_applicants_face = document.getElementById('rr-business-list-common-challenges-applicants-face');
  if (rr_business_list_common_challenges_applicants_face) {
    gsap.from('#rr-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_list_how_we_solve_these_challenges = document.getElementById('rr-business-list-how-we-solve-these-challenges');
  if (rr_business_list_how_we_solve_these_challenges) {
    gsap.from('#rr-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_section_visa_overview = document.getElementById('rr-business-section-visa-overview');
  if (rr_business_section_visa_overview) {
    gsap.fromTo('#rr-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_form_who_is_this_visa_for = document.getElementById('rr-business-form-who-is-this-visa-for');
  if (rr_business_form_who_is_this_visa_for) {
    gsap.from('#rr-business-form-who-is-this-visa-for input, #rr-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_list_required_documents = document.getElementById('rr-business-list-required-documents');
  if (rr_business_list_required_documents) {
    gsap.from('#rr-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_list_application_process = document.getElementById('rr-business-list-application-process');
  if (rr_business_list_application_process) {
    gsap.from('#rr-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_section_timelines_deadlines = document.getElementById('rr-business-section-timelines-deadlines');
  if (rr_business_section_timelines_deadlines) {
    gsap.fromTo('#rr-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_section_fees_costs = document.getElementById('rr-business-section-fees-costs');
  if (rr_business_section_fees_costs) {
    gsap.fromTo('#rr-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_list_risks_common_mistakes = document.getElementById('rr-business-list-risks-common-mistakes');
  if (rr_business_list_risks_common_mistakes) {
    gsap.from('#rr-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_section_diy_vs_professional_assistance = document.getElementById('rr-business-section-diy-vs-professional-assistance');
  if (rr_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_section_roraima_specific_context = document.getElementById('rr-business-section-roraima-specific-context');
  if (rr_business_section_roraima_specific_context) {
    gsap.fromTo('#rr-business-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_section_what_our_clients_say = document.getElementById('rr-business-section-what-our-clients-say');
  if (rr_business_section_what_our_clients_say) {
    gsap.fromTo('#rr-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_section_frequently_asked_questions = document.getElementById('rr-business-section-frequently-asked-questions');
  if (rr_business_section_frequently_asked_questions) {
    gsap.fromTo('#rr-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_section_international_support = document.getElementById('rr-business-section-international-support');
  if (rr_business_section_international_support) {
    gsap.fromTo('#rr-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_list_our_credentials = document.getElementById('rr-business-list-our-credentials');
  if (rr_business_list_our_credentials) {
    gsap.from('#rr-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_list_related_services = document.getElementById('rr-business-list-related-services');
  if (rr_business_list_related_services) {
    gsap.from('#rr-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_section_youre_in_good_hands = document.getElementById('rr-business-section-youre-in-good-hands');
  if (rr_business_section_youre_in_good_hands) {
    gsap.fromTo('#rr-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_business_section_21 = document.getElementById('rr-business-section-21');
  if (rr_business_section_21) {
    gsap.fromTo('#rr-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('rr-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (rr_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#rr-research-form-conduct-research-in-brazil-with-the-research-visa input, #rr-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_list_quick_facts = document.getElementById('rr-research-list-quick-facts');
  if (rr_research_list_quick_facts) {
    gsap.from('#rr-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_list_common_challenges_applicants_face = document.getElementById('rr-research-list-common-challenges-applicants-face');
  if (rr_research_list_common_challenges_applicants_face) {
    gsap.from('#rr-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_list_how_we_solve_these_challenges = document.getElementById('rr-research-list-how-we-solve-these-challenges');
  if (rr_research_list_how_we_solve_these_challenges) {
    gsap.from('#rr-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_section_visa_overview = document.getElementById('rr-research-section-visa-overview');
  if (rr_research_section_visa_overview) {
    gsap.fromTo('#rr-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_form_who_is_this_visa_for = document.getElementById('rr-research-form-who-is-this-visa-for');
  if (rr_research_form_who_is_this_visa_for) {
    gsap.from('#rr-research-form-who-is-this-visa-for input, #rr-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_list_required_documents = document.getElementById('rr-research-list-required-documents');
  if (rr_research_list_required_documents) {
    gsap.from('#rr-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_list_application_process = document.getElementById('rr-research-list-application-process');
  if (rr_research_list_application_process) {
    gsap.from('#rr-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_section_timelines_deadlines = document.getElementById('rr-research-section-timelines-deadlines');
  if (rr_research_section_timelines_deadlines) {
    gsap.fromTo('#rr-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_section_fees_costs = document.getElementById('rr-research-section-fees-costs');
  if (rr_research_section_fees_costs) {
    gsap.fromTo('#rr-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_list_risks_common_mistakes = document.getElementById('rr-research-list-risks-common-mistakes');
  if (rr_research_list_risks_common_mistakes) {
    gsap.from('#rr-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_section_diy_vs_professional_assistance = document.getElementById('rr-research-section-diy-vs-professional-assistance');
  if (rr_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_section_roraima_specific_context = document.getElementById('rr-research-section-roraima-specific-context');
  if (rr_research_section_roraima_specific_context) {
    gsap.fromTo('#rr-research-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_section_what_our_clients_say = document.getElementById('rr-research-section-what-our-clients-say');
  if (rr_research_section_what_our_clients_say) {
    gsap.fromTo('#rr-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_section_frequently_asked_questions = document.getElementById('rr-research-section-frequently-asked-questions');
  if (rr_research_section_frequently_asked_questions) {
    gsap.fromTo('#rr-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_section_international_support = document.getElementById('rr-research-section-international-support');
  if (rr_research_section_international_support) {
    gsap.fromTo('#rr-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_list_our_credentials = document.getElementById('rr-research-list-our-credentials');
  if (rr_research_list_our_credentials) {
    gsap.from('#rr-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_list_related_services = document.getElementById('rr-research-list-related-services');
  if (rr_research_list_related_services) {
    gsap.from('#rr-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_section_youre_in_good_hands = document.getElementById('rr-research-section-youre-in-good-hands');
  if (rr_research_section_youre_in_good_hands) {
    gsap.fromTo('#rr-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_research_section_21 = document.getElementById('rr-research-section-21');
  if (rr_research_section_21) {
    gsap.fromTo('#rr-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('rr-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (rr_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#rr-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #rr-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_list_quick_facts = document.getElementById('rr-diplomatic-list-quick-facts');
  if (rr_diplomatic_list_quick_facts) {
    gsap.from('#rr-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_list_common_challenges_applicants_face = document.getElementById('rr-diplomatic-list-common-challenges-applicants-face');
  if (rr_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#rr-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_list_how_we_solve_these_challenges = document.getElementById('rr-diplomatic-list-how-we-solve-these-challenges');
  if (rr_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#rr-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_section_visa_overview = document.getElementById('rr-diplomatic-section-visa-overview');
  if (rr_diplomatic_section_visa_overview) {
    gsap.fromTo('#rr-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_form_who_is_this_visa_for = document.getElementById('rr-diplomatic-form-who-is-this-visa-for');
  if (rr_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#rr-diplomatic-form-who-is-this-visa-for input, #rr-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_list_required_documents = document.getElementById('rr-diplomatic-list-required-documents');
  if (rr_diplomatic_list_required_documents) {
    gsap.from('#rr-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_list_application_process = document.getElementById('rr-diplomatic-list-application-process');
  if (rr_diplomatic_list_application_process) {
    gsap.from('#rr-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_section_timelines_deadlines = document.getElementById('rr-diplomatic-section-timelines-deadlines');
  if (rr_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#rr-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_section_fees_costs = document.getElementById('rr-diplomatic-section-fees-costs');
  if (rr_diplomatic_section_fees_costs) {
    gsap.fromTo('#rr-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_list_risks_common_mistakes = document.getElementById('rr-diplomatic-list-risks-common-mistakes');
  if (rr_diplomatic_list_risks_common_mistakes) {
    gsap.from('#rr-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_section_diy_vs_professional_assistance = document.getElementById('rr-diplomatic-section-diy-vs-professional-assistance');
  if (rr_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_section_roraima_specific_context = document.getElementById('rr-diplomatic-section-roraima-specific-context');
  if (rr_diplomatic_section_roraima_specific_context) {
    gsap.fromTo('#rr-diplomatic-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_section_what_our_clients_say = document.getElementById('rr-diplomatic-section-what-our-clients-say');
  if (rr_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#rr-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_section_frequently_asked_questions = document.getElementById('rr-diplomatic-section-frequently-asked-questions');
  if (rr_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#rr-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_section_international_support = document.getElementById('rr-diplomatic-section-international-support');
  if (rr_diplomatic_section_international_support) {
    gsap.fromTo('#rr-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_list_our_credentials = document.getElementById('rr-diplomatic-list-our-credentials');
  if (rr_diplomatic_list_our_credentials) {
    gsap.from('#rr-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_list_related_services = document.getElementById('rr-diplomatic-list-related-services');
  if (rr_diplomatic_list_related_services) {
    gsap.from('#rr-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_section_youre_in_good_hands = document.getElementById('rr-diplomatic-section-youre-in-good-hands');
  if (rr_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#rr-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_diplomatic_section_21 = document.getElementById('rr-diplomatic-section-21');
  if (rr_diplomatic_section_21) {
    gsap.fromTo('#rr-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('rr-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (rr_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#rr-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #rr-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_list_quick_facts = document.getElementById('rr-journalist-list-quick-facts');
  if (rr_journalist_list_quick_facts) {
    gsap.from('#rr-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_list_common_challenges_applicants_face = document.getElementById('rr-journalist-list-common-challenges-applicants-face');
  if (rr_journalist_list_common_challenges_applicants_face) {
    gsap.from('#rr-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_list_how_we_solve_these_challenges = document.getElementById('rr-journalist-list-how-we-solve-these-challenges');
  if (rr_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#rr-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_section_visa_overview = document.getElementById('rr-journalist-section-visa-overview');
  if (rr_journalist_section_visa_overview) {
    gsap.fromTo('#rr-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_form_who_is_this_visa_for = document.getElementById('rr-journalist-form-who-is-this-visa-for');
  if (rr_journalist_form_who_is_this_visa_for) {
    gsap.from('#rr-journalist-form-who-is-this-visa-for input, #rr-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_list_required_documents = document.getElementById('rr-journalist-list-required-documents');
  if (rr_journalist_list_required_documents) {
    gsap.from('#rr-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_list_application_process = document.getElementById('rr-journalist-list-application-process');
  if (rr_journalist_list_application_process) {
    gsap.from('#rr-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_section_timelines_deadlines = document.getElementById('rr-journalist-section-timelines-deadlines');
  if (rr_journalist_section_timelines_deadlines) {
    gsap.fromTo('#rr-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_section_fees_costs = document.getElementById('rr-journalist-section-fees-costs');
  if (rr_journalist_section_fees_costs) {
    gsap.fromTo('#rr-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_list_risks_common_mistakes = document.getElementById('rr-journalist-list-risks-common-mistakes');
  if (rr_journalist_list_risks_common_mistakes) {
    gsap.from('#rr-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_section_diy_vs_professional_assistance = document.getElementById('rr-journalist-section-diy-vs-professional-assistance');
  if (rr_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_section_roraima_specific_context = document.getElementById('rr-journalist-section-roraima-specific-context');
  if (rr_journalist_section_roraima_specific_context) {
    gsap.fromTo('#rr-journalist-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_section_what_our_clients_say = document.getElementById('rr-journalist-section-what-our-clients-say');
  if (rr_journalist_section_what_our_clients_say) {
    gsap.fromTo('#rr-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_section_frequently_asked_questions = document.getElementById('rr-journalist-section-frequently-asked-questions');
  if (rr_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#rr-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_section_international_support = document.getElementById('rr-journalist-section-international-support');
  if (rr_journalist_section_international_support) {
    gsap.fromTo('#rr-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_list_our_credentials = document.getElementById('rr-journalist-list-our-credentials');
  if (rr_journalist_list_our_credentials) {
    gsap.from('#rr-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_list_related_services = document.getElementById('rr-journalist-list-related-services');
  if (rr_journalist_list_related_services) {
    gsap.from('#rr-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_section_youre_in_good_hands = document.getElementById('rr-journalist-section-youre-in-good-hands');
  if (rr_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#rr-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_journalist_section_21 = document.getElementById('rr-journalist-section-21');
  if (rr_journalist_section_21) {
    gsap.fromTo('#rr-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('rr-fines-form-resolve-immigration-fines-in-brazil');
  if (rr_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#rr-fines-form-resolve-immigration-fines-in-brazil input, #rr-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_list_quick_facts = document.getElementById('rr-fines-list-quick-facts');
  if (rr_fines_list_quick_facts) {
    gsap.from('#rr-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_list_common_challenges_applicants_face = document.getElementById('rr-fines-list-common-challenges-applicants-face');
  if (rr_fines_list_common_challenges_applicants_face) {
    gsap.from('#rr-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_list_how_we_solve_these_challenges = document.getElementById('rr-fines-list-how-we-solve-these-challenges');
  if (rr_fines_list_how_we_solve_these_challenges) {
    gsap.from('#rr-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_section_service_overview = document.getElementById('rr-fines-section-service-overview');
  if (rr_fines_section_service_overview) {
    gsap.fromTo('#rr-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_form_who_is_this_service_for = document.getElementById('rr-fines-form-who-is-this-service-for');
  if (rr_fines_form_who_is_this_service_for) {
    gsap.from('#rr-fines-form-who-is-this-service-for input, #rr-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_list_required_documents = document.getElementById('rr-fines-list-required-documents');
  if (rr_fines_list_required_documents) {
    gsap.from('#rr-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_list_process = document.getElementById('rr-fines-list-process');
  if (rr_fines_list_process) {
    gsap.from('#rr-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_section_timelines_deadlines = document.getElementById('rr-fines-section-timelines-deadlines');
  if (rr_fines_section_timelines_deadlines) {
    gsap.fromTo('#rr-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_section_fees_costs = document.getElementById('rr-fines-section-fees-costs');
  if (rr_fines_section_fees_costs) {
    gsap.fromTo('#rr-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_list_risks_common_mistakes = document.getElementById('rr-fines-list-risks-common-mistakes');
  if (rr_fines_list_risks_common_mistakes) {
    gsap.from('#rr-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_section_diy_vs_professional_assistance = document.getElementById('rr-fines-section-diy-vs-professional-assistance');
  if (rr_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_section_roraima_specific_context = document.getElementById('rr-fines-section-roraima-specific-context');
  if (rr_fines_section_roraima_specific_context) {
    gsap.fromTo('#rr-fines-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_section_what_our_clients_say = document.getElementById('rr-fines-section-what-our-clients-say');
  if (rr_fines_section_what_our_clients_say) {
    gsap.fromTo('#rr-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_section_frequently_asked_questions = document.getElementById('rr-fines-section-frequently-asked-questions');
  if (rr_fines_section_frequently_asked_questions) {
    gsap.fromTo('#rr-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_section_international_support = document.getElementById('rr-fines-section-international-support');
  if (rr_fines_section_international_support) {
    gsap.fromTo('#rr-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_list_our_credentials = document.getElementById('rr-fines-list-our-credentials');
  if (rr_fines_list_our_credentials) {
    gsap.from('#rr-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_list_related_services = document.getElementById('rr-fines-list-related-services');
  if (rr_fines_list_related_services) {
    gsap.from('#rr-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_section_youre_in_good_hands = document.getElementById('rr-fines-section-youre-in-good-hands');
  if (rr_fines_section_youre_in_good_hands) {
    gsap.fromTo('#rr-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_fines_section_21 = document.getElementById('rr-fines-section-21');
  if (rr_fines_section_21) {
    gsap.fromTo('#rr-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_form_deportation_assistance_in_brazil = document.getElementById('rr-deportation-form-deportation-assistance-in-brazil');
  if (rr_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#rr-deportation-form-deportation-assistance-in-brazil input, #rr-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_list_quick_facts = document.getElementById('rr-deportation-list-quick-facts');
  if (rr_deportation_list_quick_facts) {
    gsap.from('#rr-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_list_common_challenges_applicants_face = document.getElementById('rr-deportation-list-common-challenges-applicants-face');
  if (rr_deportation_list_common_challenges_applicants_face) {
    gsap.from('#rr-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_list_how_we_solve_these_challenges = document.getElementById('rr-deportation-list-how-we-solve-these-challenges');
  if (rr_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#rr-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_section_service_overview = document.getElementById('rr-deportation-section-service-overview');
  if (rr_deportation_section_service_overview) {
    gsap.fromTo('#rr-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_form_who_is_this_service_for = document.getElementById('rr-deportation-form-who-is-this-service-for');
  if (rr_deportation_form_who_is_this_service_for) {
    gsap.from('#rr-deportation-form-who-is-this-service-for input, #rr-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_list_required_documents = document.getElementById('rr-deportation-list-required-documents');
  if (rr_deportation_list_required_documents) {
    gsap.from('#rr-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_list_process = document.getElementById('rr-deportation-list-process');
  if (rr_deportation_list_process) {
    gsap.from('#rr-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_section_timelines_deadlines = document.getElementById('rr-deportation-section-timelines-deadlines');
  if (rr_deportation_section_timelines_deadlines) {
    gsap.fromTo('#rr-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_section_fees_costs = document.getElementById('rr-deportation-section-fees-costs');
  if (rr_deportation_section_fees_costs) {
    gsap.fromTo('#rr-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_list_risks_common_mistakes = document.getElementById('rr-deportation-list-risks-common-mistakes');
  if (rr_deportation_list_risks_common_mistakes) {
    gsap.from('#rr-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_section_diy_vs_professional_assistance = document.getElementById('rr-deportation-section-diy-vs-professional-assistance');
  if (rr_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_section_roraima_specific_context = document.getElementById('rr-deportation-section-roraima-specific-context');
  if (rr_deportation_section_roraima_specific_context) {
    gsap.fromTo('#rr-deportation-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_section_what_our_clients_say = document.getElementById('rr-deportation-section-what-our-clients-say');
  if (rr_deportation_section_what_our_clients_say) {
    gsap.fromTo('#rr-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_section_frequently_asked_questions = document.getElementById('rr-deportation-section-frequently-asked-questions');
  if (rr_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#rr-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_section_international_support = document.getElementById('rr-deportation-section-international-support');
  if (rr_deportation_section_international_support) {
    gsap.fromTo('#rr-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_list_our_credentials = document.getElementById('rr-deportation-list-our-credentials');
  if (rr_deportation_list_our_credentials) {
    gsap.from('#rr-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_list_related_services = document.getElementById('rr-deportation-list-related-services');
  if (rr_deportation_list_related_services) {
    gsap.from('#rr-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_section_youre_in_good_hands = document.getElementById('rr-deportation-section-youre-in-good-hands');
  if (rr_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#rr-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_deportation_section_21 = document.getElementById('rr-deportation-section-21');
  if (rr_deportation_section_21) {
    gsap.fromTo('#rr-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('rr-translation-form-sworn-document-translation-services-in-brazil');
  if (rr_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#rr-translation-form-sworn-document-translation-services-in-brazil input, #rr-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_list_quick_facts = document.getElementById('rr-translation-list-quick-facts');
  if (rr_translation_list_quick_facts) {
    gsap.from('#rr-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_list_common_challenges_applicants_face = document.getElementById('rr-translation-list-common-challenges-applicants-face');
  if (rr_translation_list_common_challenges_applicants_face) {
    gsap.from('#rr-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_list_how_we_solve_these_challenges = document.getElementById('rr-translation-list-how-we-solve-these-challenges');
  if (rr_translation_list_how_we_solve_these_challenges) {
    gsap.from('#rr-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_section_service_overview = document.getElementById('rr-translation-section-service-overview');
  if (rr_translation_section_service_overview) {
    gsap.fromTo('#rr-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_form_who_is_this_service_for = document.getElementById('rr-translation-form-who-is-this-service-for');
  if (rr_translation_form_who_is_this_service_for) {
    gsap.from('#rr-translation-form-who-is-this-service-for input, #rr-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_list_required_documents = document.getElementById('rr-translation-list-required-documents');
  if (rr_translation_list_required_documents) {
    gsap.from('#rr-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_list_process = document.getElementById('rr-translation-list-process');
  if (rr_translation_list_process) {
    gsap.from('#rr-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_section_timelines_deadlines = document.getElementById('rr-translation-section-timelines-deadlines');
  if (rr_translation_section_timelines_deadlines) {
    gsap.fromTo('#rr-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_section_fees_costs = document.getElementById('rr-translation-section-fees-costs');
  if (rr_translation_section_fees_costs) {
    gsap.fromTo('#rr-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_list_risks_common_mistakes = document.getElementById('rr-translation-list-risks-common-mistakes');
  if (rr_translation_list_risks_common_mistakes) {
    gsap.from('#rr-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_section_diy_vs_professional_assistance = document.getElementById('rr-translation-section-diy-vs-professional-assistance');
  if (rr_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_section_roraima_specific_context = document.getElementById('rr-translation-section-roraima-specific-context');
  if (rr_translation_section_roraima_specific_context) {
    gsap.fromTo('#rr-translation-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_section_what_our_clients_say = document.getElementById('rr-translation-section-what-our-clients-say');
  if (rr_translation_section_what_our_clients_say) {
    gsap.fromTo('#rr-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_section_frequently_asked_questions = document.getElementById('rr-translation-section-frequently-asked-questions');
  if (rr_translation_section_frequently_asked_questions) {
    gsap.fromTo('#rr-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_section_international_support = document.getElementById('rr-translation-section-international-support');
  if (rr_translation_section_international_support) {
    gsap.fromTo('#rr-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_list_our_credentials = document.getElementById('rr-translation-list-our-credentials');
  if (rr_translation_list_our_credentials) {
    gsap.from('#rr-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_list_related_services = document.getElementById('rr-translation-list-related-services');
  if (rr_translation_list_related_services) {
    gsap.from('#rr-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_section_youre_in_good_hands = document.getElementById('rr-translation-section-youre-in-good-hands');
  if (rr_translation_section_youre_in_good_hands) {
    gsap.fromTo('#rr-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_translation_section_21 = document.getElementById('rr-translation-section-21');
  if (rr_translation_section_21) {
    gsap.fromTo('#rr-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('rr-expulsion-form-expulsion-assistance-in-brazil');
  if (rr_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#rr-expulsion-form-expulsion-assistance-in-brazil input, #rr-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_list_quick_facts = document.getElementById('rr-expulsion-list-quick-facts');
  if (rr_expulsion_list_quick_facts) {
    gsap.from('#rr-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_list_common_challenges_applicants_face = document.getElementById('rr-expulsion-list-common-challenges-applicants-face');
  if (rr_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#rr-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_list_how_we_solve_these_challenges = document.getElementById('rr-expulsion-list-how-we-solve-these-challenges');
  if (rr_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#rr-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_section_service_overview = document.getElementById('rr-expulsion-section-service-overview');
  if (rr_expulsion_section_service_overview) {
    gsap.fromTo('#rr-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_form_who_is_this_service_for = document.getElementById('rr-expulsion-form-who-is-this-service-for');
  if (rr_expulsion_form_who_is_this_service_for) {
    gsap.from('#rr-expulsion-form-who-is-this-service-for input, #rr-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_list_required_documents = document.getElementById('rr-expulsion-list-required-documents');
  if (rr_expulsion_list_required_documents) {
    gsap.from('#rr-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_list_process = document.getElementById('rr-expulsion-list-process');
  if (rr_expulsion_list_process) {
    gsap.from('#rr-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_section_timelines_deadlines = document.getElementById('rr-expulsion-section-timelines-deadlines');
  if (rr_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#rr-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_section_fees_costs = document.getElementById('rr-expulsion-section-fees-costs');
  if (rr_expulsion_section_fees_costs) {
    gsap.fromTo('#rr-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_list_risks_common_mistakes = document.getElementById('rr-expulsion-list-risks-common-mistakes');
  if (rr_expulsion_list_risks_common_mistakes) {
    gsap.from('#rr-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_section_diy_vs_professional_assistance = document.getElementById('rr-expulsion-section-diy-vs-professional-assistance');
  if (rr_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_section_roraima_specific_context = document.getElementById('rr-expulsion-section-roraima-specific-context');
  if (rr_expulsion_section_roraima_specific_context) {
    gsap.fromTo('#rr-expulsion-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_section_what_our_clients_say = document.getElementById('rr-expulsion-section-what-our-clients-say');
  if (rr_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#rr-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_section_frequently_asked_questions = document.getElementById('rr-expulsion-section-frequently-asked-questions');
  if (rr_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#rr-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_section_international_support = document.getElementById('rr-expulsion-section-international-support');
  if (rr_expulsion_section_international_support) {
    gsap.fromTo('#rr-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_list_our_credentials = document.getElementById('rr-expulsion-list-our-credentials');
  if (rr_expulsion_list_our_credentials) {
    gsap.from('#rr-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_list_related_services = document.getElementById('rr-expulsion-list-related-services');
  if (rr_expulsion_list_related_services) {
    gsap.from('#rr-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_section_youre_in_good_hands = document.getElementById('rr-expulsion-section-youre-in-good-hands');
  if (rr_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#rr-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_expulsion_section_21 = document.getElementById('rr-expulsion-section-21');
  if (rr_expulsion_section_21) {
    gsap.fromTo('#rr-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('rr-appeals-form-appeal-immigration-denials-in-brazil');
  if (rr_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#rr-appeals-form-appeal-immigration-denials-in-brazil input, #rr-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_list_quick_facts = document.getElementById('rr-appeals-list-quick-facts');
  if (rr_appeals_list_quick_facts) {
    gsap.from('#rr-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_list_common_challenges_applicants_face = document.getElementById('rr-appeals-list-common-challenges-applicants-face');
  if (rr_appeals_list_common_challenges_applicants_face) {
    gsap.from('#rr-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_list_how_we_solve_these_challenges = document.getElementById('rr-appeals-list-how-we-solve-these-challenges');
  if (rr_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#rr-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_section_service_overview = document.getElementById('rr-appeals-section-service-overview');
  if (rr_appeals_section_service_overview) {
    gsap.fromTo('#rr-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_form_who_is_this_service_for = document.getElementById('rr-appeals-form-who-is-this-service-for');
  if (rr_appeals_form_who_is_this_service_for) {
    gsap.from('#rr-appeals-form-who-is-this-service-for input, #rr-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_list_required_documents = document.getElementById('rr-appeals-list-required-documents');
  if (rr_appeals_list_required_documents) {
    gsap.from('#rr-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_list_appeal_process = document.getElementById('rr-appeals-list-appeal-process');
  if (rr_appeals_list_appeal_process) {
    gsap.from('#rr-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_section_timelines_deadlines = document.getElementById('rr-appeals-section-timelines-deadlines');
  if (rr_appeals_section_timelines_deadlines) {
    gsap.fromTo('#rr-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_section_fees_costs = document.getElementById('rr-appeals-section-fees-costs');
  if (rr_appeals_section_fees_costs) {
    gsap.fromTo('#rr-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_list_risks_common_mistakes = document.getElementById('rr-appeals-list-risks-common-mistakes');
  if (rr_appeals_list_risks_common_mistakes) {
    gsap.from('#rr-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_section_diy_vs_professional_assistance = document.getElementById('rr-appeals-section-diy-vs-professional-assistance');
  if (rr_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_section_roraima_specific_context = document.getElementById('rr-appeals-section-roraima-specific-context');
  if (rr_appeals_section_roraima_specific_context) {
    gsap.fromTo('#rr-appeals-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_section_what_our_clients_say = document.getElementById('rr-appeals-section-what-our-clients-say');
  if (rr_appeals_section_what_our_clients_say) {
    gsap.fromTo('#rr-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_section_frequently_asked_questions = document.getElementById('rr-appeals-section-frequently-asked-questions');
  if (rr_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#rr-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_section_international_support = document.getElementById('rr-appeals-section-international-support');
  if (rr_appeals_section_international_support) {
    gsap.fromTo('#rr-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_list_our_credentials = document.getElementById('rr-appeals-list-our-credentials');
  if (rr_appeals_list_our_credentials) {
    gsap.from('#rr-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_list_related_services = document.getElementById('rr-appeals-list-related-services');
  if (rr_appeals_list_related_services) {
    gsap.from('#rr-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_section_youre_in_good_hands = document.getElementById('rr-appeals-section-youre-in-good-hands');
  if (rr_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#rr-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_appeals_section_21 = document.getElementById('rr-appeals-section-21');
  if (rr_appeals_section_21) {
    gsap.fromTo('#rr-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('rr-consular-form-consular-services-in-brazil-for-citizens');
  if (rr_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#rr-consular-form-consular-services-in-brazil-for-citizens input, #rr-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_list_quick_facts = document.getElementById('rr-consular-list-quick-facts');
  if (rr_consular_list_quick_facts) {
    gsap.from('#rr-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_list_common_challenges_applicants_face = document.getElementById('rr-consular-list-common-challenges-applicants-face');
  if (rr_consular_list_common_challenges_applicants_face) {
    gsap.from('#rr-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_list_how_we_solve_these_challenges = document.getElementById('rr-consular-list-how-we-solve-these-challenges');
  if (rr_consular_list_how_we_solve_these_challenges) {
    gsap.from('#rr-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_section_service_overview = document.getElementById('rr-consular-section-service-overview');
  if (rr_consular_section_service_overview) {
    gsap.fromTo('#rr-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_form_who_is_this_service_for = document.getElementById('rr-consular-form-who-is-this-service-for');
  if (rr_consular_form_who_is_this_service_for) {
    gsap.from('#rr-consular-form-who-is-this-service-for input, #rr-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_list_required_documents = document.getElementById('rr-consular-list-required-documents');
  if (rr_consular_list_required_documents) {
    gsap.from('#rr-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_list_process = document.getElementById('rr-consular-list-process');
  if (rr_consular_list_process) {
    gsap.from('#rr-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_section_timelines_deadlines = document.getElementById('rr-consular-section-timelines-deadlines');
  if (rr_consular_section_timelines_deadlines) {
    gsap.fromTo('#rr-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_section_fees_costs = document.getElementById('rr-consular-section-fees-costs');
  if (rr_consular_section_fees_costs) {
    gsap.fromTo('#rr-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_list_risks_common_mistakes = document.getElementById('rr-consular-list-risks-common-mistakes');
  if (rr_consular_list_risks_common_mistakes) {
    gsap.from('#rr-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_section_diy_vs_professional_assistance = document.getElementById('rr-consular-section-diy-vs-professional-assistance');
  if (rr_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_section_roraima_specific_context = document.getElementById('rr-consular-section-roraima-specific-context');
  if (rr_consular_section_roraima_specific_context) {
    gsap.fromTo('#rr-consular-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_section_what_our_clients_say = document.getElementById('rr-consular-section-what-our-clients-say');
  if (rr_consular_section_what_our_clients_say) {
    gsap.fromTo('#rr-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_section_frequently_asked_questions = document.getElementById('rr-consular-section-frequently-asked-questions');
  if (rr_consular_section_frequently_asked_questions) {
    gsap.fromTo('#rr-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_section_international_support = document.getElementById('rr-consular-section-international-support');
  if (rr_consular_section_international_support) {
    gsap.fromTo('#rr-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_list_our_credentials = document.getElementById('rr-consular-list-our-credentials');
  if (rr_consular_list_our_credentials) {
    gsap.from('#rr-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_list_related_services = document.getElementById('rr-consular-list-related-services');
  if (rr_consular_list_related_services) {
    gsap.from('#rr-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_section_youre_in_good_hands = document.getElementById('rr-consular-section-youre-in-good-hands');
  if (rr_consular_section_youre_in_good_hands) {
    gsap.fromTo('#rr-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_consular_section_21 = document.getElementById('rr-consular-section-21');
  if (rr_consular_section_21) {
    gsap.fromTo('#rr-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('rr-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (rr_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#rr-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #rr-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_list_quick_facts = document.getElementById('rr-criminalrecords-list-quick-facts');
  if (rr_criminalrecords_list_quick_facts) {
    gsap.from('#rr-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_list_common_challenges_applicants_face = document.getElementById('rr-criminalrecords-list-common-challenges-applicants-face');
  if (rr_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#rr-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('rr-criminalrecords-list-how-we-solve-these-challenges');
  if (rr_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#rr-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_section_service_overview = document.getElementById('rr-criminalrecords-section-service-overview');
  if (rr_criminalrecords_section_service_overview) {
    gsap.fromTo('#rr-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_form_who_is_this_service_for = document.getElementById('rr-criminalrecords-form-who-is-this-service-for');
  if (rr_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#rr-criminalrecords-form-who-is-this-service-for input, #rr-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_list_required_documents = document.getElementById('rr-criminalrecords-list-required-documents');
  if (rr_criminalrecords_list_required_documents) {
    gsap.from('#rr-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_list_process = document.getElementById('rr-criminalrecords-list-process');
  if (rr_criminalrecords_list_process) {
    gsap.from('#rr-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_section_timelines_deadlines = document.getElementById('rr-criminalrecords-section-timelines-deadlines');
  if (rr_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#rr-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_section_fees_costs = document.getElementById('rr-criminalrecords-section-fees-costs');
  if (rr_criminalrecords_section_fees_costs) {
    gsap.fromTo('#rr-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_list_risks_common_mistakes = document.getElementById('rr-criminalrecords-list-risks-common-mistakes');
  if (rr_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#rr-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('rr-criminalrecords-section-diy-vs-professional-assistance');
  if (rr_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_section_roraima_specific_context = document.getElementById('rr-criminalrecords-section-roraima-specific-context');
  if (rr_criminalrecords_section_roraima_specific_context) {
    gsap.fromTo('#rr-criminalrecords-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_section_what_our_clients_say = document.getElementById('rr-criminalrecords-section-what-our-clients-say');
  if (rr_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#rr-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_section_frequently_asked_questions = document.getElementById('rr-criminalrecords-section-frequently-asked-questions');
  if (rr_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#rr-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_section_international_support = document.getElementById('rr-criminalrecords-section-international-support');
  if (rr_criminalrecords_section_international_support) {
    gsap.fromTo('#rr-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_list_our_credentials = document.getElementById('rr-criminalrecords-list-our-credentials');
  if (rr_criminalrecords_list_our_credentials) {
    gsap.from('#rr-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_list_related_services = document.getElementById('rr-criminalrecords-list-related-services');
  if (rr_criminalrecords_list_related_services) {
    gsap.from('#rr-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_section_youre_in_good_hands = document.getElementById('rr-criminalrecords-section-youre-in-good-hands');
  if (rr_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#rr-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_criminalrecords_section_21 = document.getElementById('rr-criminalrecords-section-21');
  if (rr_criminalrecords_section_21) {
    gsap.fromTo('#rr-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_form_extradition_assistance_in_brazil = document.getElementById('rr-extradition-form-extradition-assistance-in-brazil');
  if (rr_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#rr-extradition-form-extradition-assistance-in-brazil input, #rr-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_list_quick_facts = document.getElementById('rr-extradition-list-quick-facts');
  if (rr_extradition_list_quick_facts) {
    gsap.from('#rr-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_list_common_challenges_applicants_face = document.getElementById('rr-extradition-list-common-challenges-applicants-face');
  if (rr_extradition_list_common_challenges_applicants_face) {
    gsap.from('#rr-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_list_how_we_solve_these_challenges = document.getElementById('rr-extradition-list-how-we-solve-these-challenges');
  if (rr_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#rr-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_section_service_overview = document.getElementById('rr-extradition-section-service-overview');
  if (rr_extradition_section_service_overview) {
    gsap.fromTo('#rr-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_form_who_is_this_service_for = document.getElementById('rr-extradition-form-who-is-this-service-for');
  if (rr_extradition_form_who_is_this_service_for) {
    gsap.from('#rr-extradition-form-who-is-this-service-for input, #rr-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_list_required_documents = document.getElementById('rr-extradition-list-required-documents');
  if (rr_extradition_list_required_documents) {
    gsap.from('#rr-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_list_process = document.getElementById('rr-extradition-list-process');
  if (rr_extradition_list_process) {
    gsap.from('#rr-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_section_timelines_deadlines = document.getElementById('rr-extradition-section-timelines-deadlines');
  if (rr_extradition_section_timelines_deadlines) {
    gsap.fromTo('#rr-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_section_fees_costs = document.getElementById('rr-extradition-section-fees-costs');
  if (rr_extradition_section_fees_costs) {
    gsap.fromTo('#rr-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_list_risks_common_mistakes = document.getElementById('rr-extradition-list-risks-common-mistakes');
  if (rr_extradition_list_risks_common_mistakes) {
    gsap.from('#rr-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_section_diy_vs_professional_assistance = document.getElementById('rr-extradition-section-diy-vs-professional-assistance');
  if (rr_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_section_roraima_specific_context = document.getElementById('rr-extradition-section-roraima-specific-context');
  if (rr_extradition_section_roraima_specific_context) {
    gsap.fromTo('#rr-extradition-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_section_what_our_clients_say = document.getElementById('rr-extradition-section-what-our-clients-say');
  if (rr_extradition_section_what_our_clients_say) {
    gsap.fromTo('#rr-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_section_frequently_asked_questions = document.getElementById('rr-extradition-section-frequently-asked-questions');
  if (rr_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#rr-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_section_international_support = document.getElementById('rr-extradition-section-international-support');
  if (rr_extradition_section_international_support) {
    gsap.fromTo('#rr-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_list_our_credentials = document.getElementById('rr-extradition-list-our-credentials');
  if (rr_extradition_list_our_credentials) {
    gsap.from('#rr-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_list_related_services = document.getElementById('rr-extradition-list-related-services');
  if (rr_extradition_list_related_services) {
    gsap.from('#rr-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_section_youre_in_good_hands = document.getElementById('rr-extradition-section-youre-in-good-hands');
  if (rr_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#rr-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_extradition_section_21 = document.getElementById('rr-extradition-section-21');
  if (rr_extradition_section_21) {
    gsap.fromTo('#rr-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_form_discover_the_north_amazon_and_beyond = document.getElementById('rr-north-form-discover-the-north-amazon-and-beyond');
  if (rr_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#rr-north-form-discover-the-north-amazon-and-beyond input, #rr-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_list_quick_facts = document.getElementById('rr-north-list-quick-facts');
  if (rr_north_list_quick_facts) {
    gsap.from('#rr-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_list_common_challenges_applicants_face = document.getElementById('rr-north-list-common-challenges-applicants-face');
  if (rr_north_list_common_challenges_applicants_face) {
    gsap.from('#rr-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_list_how_we_solve_these_challenges = document.getElementById('rr-north-list-how-we-solve-these-challenges');
  if (rr_north_list_how_we_solve_these_challenges) {
    gsap.from('#rr-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_section_trip_overview = document.getElementById('rr-north-section-trip-overview');
  if (rr_north_section_trip_overview) {
    gsap.fromTo('#rr-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_form_who_is_this_trip_for = document.getElementById('rr-north-form-who-is-this-trip-for');
  if (rr_north_form_who_is_this_trip_for) {
    gsap.from('#rr-north-form-who-is-this-trip-for input, #rr-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_list_required_documents = document.getElementById('rr-north-list-required-documents');
  if (rr_north_list_required_documents) {
    gsap.from('#rr-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_list_booking_process = document.getElementById('rr-north-list-booking-process');
  if (rr_north_list_booking_process) {
    gsap.from('#rr-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_section_timelines_deadlines = document.getElementById('rr-north-section-timelines-deadlines');
  if (rr_north_section_timelines_deadlines) {
    gsap.fromTo('#rr-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_section_fees_costs = document.getElementById('rr-north-section-fees-costs');
  if (rr_north_section_fees_costs) {
    gsap.fromTo('#rr-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_list_risks_common_mistakes = document.getElementById('rr-north-list-risks-common-mistakes');
  if (rr_north_list_risks_common_mistakes) {
    gsap.from('#rr-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_section_diy_vs_professional_assistance = document.getElementById('rr-north-section-diy-vs-professional-assistance');
  if (rr_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_section_roraima_specific_context = document.getElementById('rr-north-section-roraima-specific-context');
  if (rr_north_section_roraima_specific_context) {
    gsap.fromTo('#rr-north-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_section_what_our_clients_say = document.getElementById('rr-north-section-what-our-clients-say');
  if (rr_north_section_what_our_clients_say) {
    gsap.fromTo('#rr-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_section_frequently_asked_questions = document.getElementById('rr-north-section-frequently-asked-questions');
  if (rr_north_section_frequently_asked_questions) {
    gsap.fromTo('#rr-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_section_international_support = document.getElementById('rr-north-section-international-support');
  if (rr_north_section_international_support) {
    gsap.fromTo('#rr-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_list_our_credentials = document.getElementById('rr-north-list-our-credentials');
  if (rr_north_list_our_credentials) {
    gsap.from('#rr-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_list_related_services = document.getElementById('rr-north-list-related-services');
  if (rr_north_list_related_services) {
    gsap.from('#rr-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_section_youre_in_good_hands = document.getElementById('rr-north-section-youre-in-good-hands');
  if (rr_north_section_youre_in_good_hands) {
    gsap.fromTo('#rr-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_north_section_21 = document.getElementById('rr-north-section-21');
  if (rr_north_section_21) {
    gsap.fromTo('#rr-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('rr-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (rr_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#rr-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #rr-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_list_quick_facts = document.getElementById('rr-centralwest-list-quick-facts');
  if (rr_centralwest_list_quick_facts) {
    gsap.from('#rr-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_list_common_challenges_applicants_face = document.getElementById('rr-centralwest-list-common-challenges-applicants-face');
  if (rr_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#rr-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_list_how_we_solve_these_challenges = document.getElementById('rr-centralwest-list-how-we-solve-these-challenges');
  if (rr_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#rr-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_section_trip_overview = document.getElementById('rr-centralwest-section-trip-overview');
  if (rr_centralwest_section_trip_overview) {
    gsap.fromTo('#rr-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_form_who_is_this_trip_for = document.getElementById('rr-centralwest-form-who-is-this-trip-for');
  if (rr_centralwest_form_who_is_this_trip_for) {
    gsap.from('#rr-centralwest-form-who-is-this-trip-for input, #rr-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_list_required_documents = document.getElementById('rr-centralwest-list-required-documents');
  if (rr_centralwest_list_required_documents) {
    gsap.from('#rr-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_list_booking_process = document.getElementById('rr-centralwest-list-booking-process');
  if (rr_centralwest_list_booking_process) {
    gsap.from('#rr-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_section_timelines_deadlines = document.getElementById('rr-centralwest-section-timelines-deadlines');
  if (rr_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#rr-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_section_fees_costs = document.getElementById('rr-centralwest-section-fees-costs');
  if (rr_centralwest_section_fees_costs) {
    gsap.fromTo('#rr-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_list_risks_common_mistakes = document.getElementById('rr-centralwest-list-risks-common-mistakes');
  if (rr_centralwest_list_risks_common_mistakes) {
    gsap.from('#rr-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_section_diy_vs_professional_assistance = document.getElementById('rr-centralwest-section-diy-vs-professional-assistance');
  if (rr_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_section_roraima_specific_context = document.getElementById('rr-centralwest-section-roraima-specific-context');
  if (rr_centralwest_section_roraima_specific_context) {
    gsap.fromTo('#rr-centralwest-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_section_what_our_clients_say = document.getElementById('rr-centralwest-section-what-our-clients-say');
  if (rr_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#rr-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_section_frequently_asked_questions = document.getElementById('rr-centralwest-section-frequently-asked-questions');
  if (rr_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#rr-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_section_international_support = document.getElementById('rr-centralwest-section-international-support');
  if (rr_centralwest_section_international_support) {
    gsap.fromTo('#rr-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_list_our_credentials = document.getElementById('rr-centralwest-list-our-credentials');
  if (rr_centralwest_list_our_credentials) {
    gsap.from('#rr-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_list_related_services = document.getElementById('rr-centralwest-list-related-services');
  if (rr_centralwest_list_related_services) {
    gsap.from('#rr-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_section_youre_in_good_hands = document.getElementById('rr-centralwest-section-youre-in-good-hands');
  if (rr_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#rr-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_centralwest_section_21 = document.getElementById('rr-centralwest-section-21');
  if (rr_centralwest_section_21) {
    gsap.fromTo('#rr-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('rr-southeast-form-dynamic-southeast-cities-and-history');
  if (rr_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#rr-southeast-form-dynamic-southeast-cities-and-history input, #rr-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_list_quick_facts = document.getElementById('rr-southeast-list-quick-facts');
  if (rr_southeast_list_quick_facts) {
    gsap.from('#rr-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_list_common_challenges_applicants_face = document.getElementById('rr-southeast-list-common-challenges-applicants-face');
  if (rr_southeast_list_common_challenges_applicants_face) {
    gsap.from('#rr-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_list_how_we_solve_these_challenges = document.getElementById('rr-southeast-list-how-we-solve-these-challenges');
  if (rr_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#rr-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_section_trip_overview = document.getElementById('rr-southeast-section-trip-overview');
  if (rr_southeast_section_trip_overview) {
    gsap.fromTo('#rr-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_form_who_is_this_trip_for = document.getElementById('rr-southeast-form-who-is-this-trip-for');
  if (rr_southeast_form_who_is_this_trip_for) {
    gsap.from('#rr-southeast-form-who-is-this-trip-for input, #rr-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_list_required_documents = document.getElementById('rr-southeast-list-required-documents');
  if (rr_southeast_list_required_documents) {
    gsap.from('#rr-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_list_booking_process = document.getElementById('rr-southeast-list-booking-process');
  if (rr_southeast_list_booking_process) {
    gsap.from('#rr-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_section_timelines_deadlines = document.getElementById('rr-southeast-section-timelines-deadlines');
  if (rr_southeast_section_timelines_deadlines) {
    gsap.fromTo('#rr-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_section_fees_costs = document.getElementById('rr-southeast-section-fees-costs');
  if (rr_southeast_section_fees_costs) {
    gsap.fromTo('#rr-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_list_risks_common_mistakes = document.getElementById('rr-southeast-list-risks-common-mistakes');
  if (rr_southeast_list_risks_common_mistakes) {
    gsap.from('#rr-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_section_diy_vs_professional_assistance = document.getElementById('rr-southeast-section-diy-vs-professional-assistance');
  if (rr_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_section_roraima_specific_context = document.getElementById('rr-southeast-section-roraima-specific-context');
  if (rr_southeast_section_roraima_specific_context) {
    gsap.fromTo('#rr-southeast-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_section_what_our_clients_say = document.getElementById('rr-southeast-section-what-our-clients-say');
  if (rr_southeast_section_what_our_clients_say) {
    gsap.fromTo('#rr-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_section_frequently_asked_questions = document.getElementById('rr-southeast-section-frequently-asked-questions');
  if (rr_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#rr-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_section_international_support = document.getElementById('rr-southeast-section-international-support');
  if (rr_southeast_section_international_support) {
    gsap.fromTo('#rr-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_list_our_credentials = document.getElementById('rr-southeast-list-our-credentials');
  if (rr_southeast_list_our_credentials) {
    gsap.from('#rr-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_list_related_services = document.getElementById('rr-southeast-list-related-services');
  if (rr_southeast_list_related_services) {
    gsap.from('#rr-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_section_youre_in_good_hands = document.getElementById('rr-southeast-section-youre-in-good-hands');
  if (rr_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#rr-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_southeast_section_21 = document.getElementById('rr-southeast-section-21');
  if (rr_southeast_section_21) {
    gsap.fromTo('#rr-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('rr-northeast-form-vibrant-northeast-beaches-and-culture');
  if (rr_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#rr-northeast-form-vibrant-northeast-beaches-and-culture input, #rr-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_list_quick_facts = document.getElementById('rr-northeast-list-quick-facts');
  if (rr_northeast_list_quick_facts) {
    gsap.from('#rr-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_list_common_challenges_applicants_face = document.getElementById('rr-northeast-list-common-challenges-applicants-face');
  if (rr_northeast_list_common_challenges_applicants_face) {
    gsap.from('#rr-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_list_how_we_solve_these_challenges = document.getElementById('rr-northeast-list-how-we-solve-these-challenges');
  if (rr_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#rr-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_section_trip_overview = document.getElementById('rr-northeast-section-trip-overview');
  if (rr_northeast_section_trip_overview) {
    gsap.fromTo('#rr-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_form_who_is_this_trip_for = document.getElementById('rr-northeast-form-who-is-this-trip-for');
  if (rr_northeast_form_who_is_this_trip_for) {
    gsap.from('#rr-northeast-form-who-is-this-trip-for input, #rr-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_list_required_documents = document.getElementById('rr-northeast-list-required-documents');
  if (rr_northeast_list_required_documents) {
    gsap.from('#rr-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_list_booking_process = document.getElementById('rr-northeast-list-booking-process');
  if (rr_northeast_list_booking_process) {
    gsap.from('#rr-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_section_timelines_deadlines = document.getElementById('rr-northeast-section-timelines-deadlines');
  if (rr_northeast_section_timelines_deadlines) {
    gsap.fromTo('#rr-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_section_fees_costs = document.getElementById('rr-northeast-section-fees-costs');
  if (rr_northeast_section_fees_costs) {
    gsap.fromTo('#rr-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_list_risks_common_mistakes = document.getElementById('rr-northeast-list-risks-common-mistakes');
  if (rr_northeast_list_risks_common_mistakes) {
    gsap.from('#rr-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_section_diy_vs_professional_assistance = document.getElementById('rr-northeast-section-diy-vs-professional-assistance');
  if (rr_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_section_roraima_specific_context = document.getElementById('rr-northeast-section-roraima-specific-context');
  if (rr_northeast_section_roraima_specific_context) {
    gsap.fromTo('#rr-northeast-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_section_what_our_clients_say = document.getElementById('rr-northeast-section-what-our-clients-say');
  if (rr_northeast_section_what_our_clients_say) {
    gsap.fromTo('#rr-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_section_frequently_asked_questions = document.getElementById('rr-northeast-section-frequently-asked-questions');
  if (rr_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#rr-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_section_international_support = document.getElementById('rr-northeast-section-international-support');
  if (rr_northeast_section_international_support) {
    gsap.fromTo('#rr-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_list_our_credentials = document.getElementById('rr-northeast-list-our-credentials');
  if (rr_northeast_list_our_credentials) {
    gsap.from('#rr-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_list_related_services = document.getElementById('rr-northeast-list-related-services');
  if (rr_northeast_list_related_services) {
    gsap.from('#rr-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_section_youre_in_good_hands = document.getElementById('rr-northeast-section-youre-in-good-hands');
  if (rr_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#rr-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_northeast_section_21 = document.getElementById('rr-northeast-section-21');
  if (rr_northeast_section_21) {
    gsap.fromTo('#rr-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_form_charming_south_wine_and_gauchos = document.getElementById('rr-south-form-charming-south-wine-and-gauchos');
  if (rr_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#rr-south-form-charming-south-wine-and-gauchos input, #rr-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_list_quick_facts = document.getElementById('rr-south-list-quick-facts');
  if (rr_south_list_quick_facts) {
    gsap.from('#rr-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_list_common_challenges_applicants_face = document.getElementById('rr-south-list-common-challenges-applicants-face');
  if (rr_south_list_common_challenges_applicants_face) {
    gsap.from('#rr-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_list_how_we_solve_these_challenges = document.getElementById('rr-south-list-how-we-solve-these-challenges');
  if (rr_south_list_how_we_solve_these_challenges) {
    gsap.from('#rr-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_section_trip_overview = document.getElementById('rr-south-section-trip-overview');
  if (rr_south_section_trip_overview) {
    gsap.fromTo('#rr-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_form_who_is_this_trip_for = document.getElementById('rr-south-form-who-is-this-trip-for');
  if (rr_south_form_who_is_this_trip_for) {
    gsap.from('#rr-south-form-who-is-this-trip-for input, #rr-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_list_required_documents = document.getElementById('rr-south-list-required-documents');
  if (rr_south_list_required_documents) {
    gsap.from('#rr-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_list_booking_process = document.getElementById('rr-south-list-booking-process');
  if (rr_south_list_booking_process) {
    gsap.from('#rr-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_section_timelines_deadlines = document.getElementById('rr-south-section-timelines-deadlines');
  if (rr_south_section_timelines_deadlines) {
    gsap.fromTo('#rr-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_section_fees_costs = document.getElementById('rr-south-section-fees-costs');
  if (rr_south_section_fees_costs) {
    gsap.fromTo('#rr-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_list_risks_common_mistakes = document.getElementById('rr-south-list-risks-common-mistakes');
  if (rr_south_list_risks_common_mistakes) {
    gsap.from('#rr-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_section_diy_vs_professional_assistance = document.getElementById('rr-south-section-diy-vs-professional-assistance');
  if (rr_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rr-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_section_roraima_specific_context = document.getElementById('rr-south-section-roraima-specific-context');
  if (rr_south_section_roraima_specific_context) {
    gsap.fromTo('#rr-south-section-roraima-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_section_what_our_clients_say = document.getElementById('rr-south-section-what-our-clients-say');
  if (rr_south_section_what_our_clients_say) {
    gsap.fromTo('#rr-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_section_frequently_asked_questions = document.getElementById('rr-south-section-frequently-asked-questions');
  if (rr_south_section_frequently_asked_questions) {
    gsap.fromTo('#rr-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_section_international_support = document.getElementById('rr-south-section-international-support');
  if (rr_south_section_international_support) {
    gsap.fromTo('#rr-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_list_our_credentials = document.getElementById('rr-south-list-our-credentials');
  if (rr_south_list_our_credentials) {
    gsap.from('#rr-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_list_related_services = document.getElementById('rr-south-list-related-services');
  if (rr_south_list_related_services) {
    gsap.from('#rr-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_section_youre_in_good_hands = document.getElementById('rr-south-section-youre-in-good-hands');
  if (rr_south_section_youre_in_good_hands) {
    gsap.fromTo('#rr-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

  const rr_south_section_21 = document.getElementById('rr-south-section-21');
  if (rr_south_section_21) {
    gsap.fromTo('#rr-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'back.out(1.7)'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
