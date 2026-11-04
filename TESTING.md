# Portfolio Website Test Plan

Run these checks after the corresponding pages and features are implemented. Record the observed outcome in **Actual result** after each run. Browser, device, and Lighthouse checks below have not yet been run because the site pages have not been built.

| ID | What is being tested | Steps | Expected result | Actual result |
|---|---|---|---|---|
| T1 | Home page loads locally | Open `index.html` from the repository in a browser. | Home page renders with an introduction and no missing local assets. | Not run — page does not exist yet. |
| T2 | About page content | Open `about.html` and inspect background, education, and interests. | All three content areas are present and readable. | Not run — page does not exist yet. |
| T3 | Projects page count and detail | Open `projects.html`; count cards and review their content. | At least three projects have descriptions, images/screenshots, and applicable links. | Not run — page does not exist yet. |
| T4 | Skills page | Open `skills.html` and review the skills and proficiency information. | Technical skills and proficiency levels are clearly presented. | Not run — page does not exist yet. |
| T5 | Contact page | Open `contact.html`; inspect contact details or form. | Contact information is available, or a form explains it is client-side and directs visitors to email. | Not run — page does not exist yet. |
| T6 | One main heading per page | Inspect each of the five pages and count `<h1>` elements. | Each page contains exactly one `<h1>`. | Not run — pages do not exist yet. |
| T7 | Navigation links | Use navigation links from each page to visit every other page. | Every link points to the correct local page and works. | Not run — pages do not exist yet. |
| T8 | Mobile navigation controls | At a phone-sized viewport, open and close the navigation using its controls. | Menu responds correctly, controls expose their state, and page content remains usable. | Not run — navigation is not implemented yet. |
| T9 | Keyboard navigation | Use Tab, Shift+Tab, Enter, and Space to navigate and operate controls. | Focus is visible, order is logical, and all controls work without a mouse. | Not run — site is not implemented yet. |
| T10 | Responsive layout and overflow | Inspect all pages at phone, tablet, and laptop widths. | Layout adapts at each width and there is no sideways scrolling on mobile. | Not run — site is not implemented yet. |
| T11 | Images and alternatives | Load every page; inspect image loading and each informative image's `alt` text. | Images load from relative paths and have descriptive alternative text. | Not run — pages and images do not exist yet. |
| T12 | Interactive feature | Operate the additional interaction (such as theme toggle or contact form validation). | Interaction works by keyboard and pointer; invalid form input is explained accessibly if a form is used. | Not run — feature is not implemented yet. |
| T13 | Browser console | Open each page with DevTools Console visible and exercise the controls. | No JavaScript errors or missing-resource errors appear. | Not run — pages are not implemented yet. |
| T14 | Lighthouse accessibility | Run Lighthouse in Chrome DevTools on the completed site. | Accessibility score is 90 or higher; record the score and any issues here. | Not run — site is not implemented yet. |
| T15 | Image file size | Check each project image's file size. | Every image is under 500 KB. | Not run — images do not exist yet. |
