# Favourite Button Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/favourite-button-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable HTML/CSS/JavaScript reconstruction of the uploaded **5.2-second** screen recording (720 × 1280, 30 fps).

## Run
1. Extract `favourite-button-animation.zip`.
2. Open `index.html` in Chrome, Firefox, Safari or Edge.
3. Click **Save** or **Watch**. The star mascot flies up out of its button recess, rotates, then settles back into the button.
4. Click again to toggle the favourite state.
5. The demo also runs a short introductory stagger after page load.

No npm install, bundler, backend or API key is needed.

Optional local server:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## What is visible in the video

Title: **Favourite Button Animation**

A black background and two-line white/yellow title sit above a large pale lavender panel. The panel contains:
- A light raised **Save** button with a grey, friendly star character.
- A deep plum **Watch** button with a yellow star character.

The star has two eyes and a small mouth. The video demonstrates a star popping/flying out of the button's recessed seat, travelling upward, rotating and being pulled back into the well. The Save star changes from grey to yellow; the Watch star changes from yellow to muted purple. The creator handle below reads `@_code_and_chill_`.

The lower part of the video shows three source-preview cards: `index.html`, `app.css` and `app.js`.

## Readable source fragments transcribed from the video

The source cards are small but these lines are readable. Formatting is normalized; the exact visible identifiers and constants are retained.

### `index.html`
```html
<!-- a FLYER over a WELL: the
     button opens a hole in its own
     face and the star goes in -->
<button class="gild" data-gild
  aria-pressed="false">
  <span class="gild__seat">
    <span class="gild__well"></span>
    <span class="gild__flyer">
      <svg class="gild__star"
        viewBox="0 0 100 100">
        <path class="gild__body"
          data-star d="…" />
        <g class="gild__face">
          <ellipse cx="40.4" … />
          <ellipse cx="59.6" … />
          <path data-mouth d="…" />
        </g>
      </svg>
    </span>
  </span>
  <span class="gild__label">Save</span>
</button>
```

### `app.css`
```css
/* height and squash are WORLD-
   vertical and pivot on the star's
   FEET; the spin is about its own
   centre — scale outside rotate is
   the only order that stretches */
.gild__flyer {
  transform:
    translateY(calc(var(--h) * -1px))
    scale(var(--sx), var(--sy));
  transform-origin: 50% 88%;
  opacity: var(--a);
}
.gild__star {
  transform: rotate(var(--rot));
}

/* the well is a RECESS, not a
   shadow: a dark core, a soft edge,
   and a lit lip along the bottom */
.gild__well {
  background: radial-gradient(
    closest-side ellipse at 50% 40%,
    var(--well) 56%, #0000);
}
```

### `app.js`
```js
// MEASURED off the reference at
// 60fps. the return is a PULL, not
// a fall: 0.24s up, 0.11s back
const G_UP = 29.1;  // 0's
const SUCK = 137;   // 4.7 gravities
const DIP_H = .84, CAST_H = 1.48;

// 1 — the tell: flicked out by the
// release, then taken back
h = V_DIP * t - .5 * G_UP * t * t;
h = DIP_H - .5 * SUCK * s * s;

// 2 — the cast: it leaves the well
// MOLTEN and crystallises on
// the way up, finishing exactly
// at the apex
h = V_CAST * s - .5 * G_UP * s * s;
bloom = smooth(h / (CAST_H * .58));

// one point-step — 72°, so it
// lands upright without ever being
// upright on the way
rot = -72 * ease(s / CAST_AIR);
```

These are the readable fragments shown in the recording, not the complete original repository. The supplied implementation recreates the visible behavior using CSS keyframes and local JavaScript click state; it does not claim to reproduce the original animation engine or exact physics equations.

## Files
- `index.html` — demo panel, two favourite buttons, SVG star characters and source previews.
- `app.css` — dark canvas, pale panel, button materials, recessed well, star styling and flight animation.
- `app.js` — button state toggles, click/keyboard interaction and short intro animation.
- `README.md` — video observations, transcribed code fragments and run guide.

## Limitations
No original project files, external assets, or backend are included in the video. The SVG character, button geometry and animation have been reconstructed from the visible frames. The original snippet's measured physics constants are documented above; the runnable demo uses a CSS keyframe approximation rather than claiming pixel-identical physics.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
