# Belle Li Portfolio Site

Static, GitHub Pages-ready portfolio for Belle Li (Learning Experience Design focus), built with plain HTML/CSS/JS and sourced from `content/portfolio_copy.md`.

## Files

- `index.html`
- `projects.html`
- `case-edci557.html`
- `case-hilink.html`
- `case-cyberlab.html`
- `styles.css`
- `script.js`
- `README.md`

## Run locally

No build step is required.

1. Open `index.html` directly in a browser, or
2. Run a static file server from the repo root (example):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages deployment (exact steps)

1. Push this repository to GitHub.
2. In GitHub, open the repository and go to `Settings`.
3. In the left menu, click `Pages`.
4. Under `Build and deployment`:
   - Set `Source` to `Deploy from a branch`.
   - Set `Branch` to `main` (or your default branch).
   - Set folder to `/ (root)`.
   - Click `Save`.
5. Wait for GitHub Pages to publish (usually 1-5 minutes).
6. Refresh the `Pages` settings screen and open the provided live URL.

## Changelog

- Created a full static portfolio site with homepage, project library, and three flagship case-study pages.
- Added a recruiter-focused summary near the top of the homepage.
- Implemented all substantial projects from source copy, grouped into four required categories.
- Added client-side filter chips on `projects.html` for category and capability.
- Applied a clean, modern black/white/gray visual system with responsive layout for mobile and desktop.
- Added contact details: `li4808@purdue.edu` and `https://www.beeelle.com/`.
