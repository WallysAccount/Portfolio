# AGENTS.md

## Project
Build a personal portfolio website for an NJIT Software Engineering student. It will introduce the student and present their background, education, interests, projects, technical skills, and contact information.

## Pages
- `index.html` — Home page with a brief introduction and links to the other pages.
- `about.html` — Personal background, education, and interests.
- `projects.html` — At least three projects, each with a description, image or screenshot, and applicable links.
- `skills.html` — Technical skills and proficiencies.
- `contact.html` — Contact details or a client-side validated form that directs visitors to email; there is no backend.

## Design
- Use a modern, professional developer portfolio style with a charcoal background (`#111827`), slightly lighter surfaces (`#1F2937`), and clear blue accents (`#38BDF8`). Keep text high contrast with near-white body text and muted gray supporting text.
- Use a readable system sans-serif font stack; do not load external fonts.
- Keep spacing consistent, navigation clear, and project and skill content in cards.
- Make layouts responsive for phones, tablets, and laptops, with no horizontal scrolling on small screens.
- Use consistent styling across every page. Update this section if the design changes.

## Technology and accessibility rules
- Use plain HTML5, CSS3, and vanilla JavaScript only. Do not use frameworks, libraries, npm, or build tools.
- Keep all site styling in the single external stylesheet `css/style.css` and all JavaScript in `js/script.js`.
- Use relative paths for local files. The site must work when `index.html` is opened locally.
- Use semantic HTML, one `<h1>` per page, accessible navigation, keyboard-operable controls, and descriptive `alt` text for every informative image.
- Include a responsive navigation menu with open and close controls, and at least one additional accessible interactive feature such as a theme toggle or contact form validation.
- Keep image files under 500 KB. Do not add backend code, API keys, passwords, or tokens.

## Git
- Work on one task at a time. Review changes before committing.
- Commit each completed task with a clear message.
- Push changes to GitHub's `main` branch only after the user approves the push.
- Never use `git reset` or force push to undo changes.

## Testing
- Maintain `TESTING.md` with test cases and actual results. Do not claim tests passed unless they have been run.
- Check all pages, navigation links, images, JavaScript features, keyboard access, browser console, and desktop and mobile layouts.
- Run Lighthouse in Chrome DevTools and aim for an Accessibility score of 90 or higher.
