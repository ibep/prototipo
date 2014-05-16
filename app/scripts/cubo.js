// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: false,
  history: true,
  center: true,
  loop: true,
  previewLinks: true,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: 'cube', // default/cube/page/concave/zoom/linear/fade/none

  // Parallax scrolling
  // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
  // parallaxBackgroundSize: '2100px 900px',

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: 'scripts/class.js', condition: function() { return !document.body.classList; } },
  ]
});
