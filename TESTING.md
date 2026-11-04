# Portfolio Website Test Plan

**Live site:** <https://wallysaccount.github.io/Portfolio/>

**Test date:** 2026-11-03

Run browser checks against the live GitHub Pages site. Results below distinguish checks actually observed from checks that still need a browser or Lighthouse run. `Partial` and `Not run` are intentionally not counted as passes.

| ID | What is being tested | Steps | Expected result | Actual result |
|---|---|---|---|---|
| T1 | Home page on live site | Open the live site in a browser. | Home content, styles, and scripts load. | **Pass** â€” live home page rendered in Opera at laptop width and in 400 px responsive device emulation. |
| T2 | About page on live site | Open `about.html`; inspect background, education, and interests. | All three areas display and remain readable. | **Partial** â€” live About page rendered at laptop width and 400 px emulation; the browser accessibility tree showed all three areas. A full-page review remains. |
| T3 | Projects page on live site | Open `projects.html`; inspect all cards, images, descriptions, and links. | At least three projects are complete and their images load. | **Partial** â€” live page rendered at 400 px emulation and the first project illustration appeared. Source contains three illustrated project cards with alt text; all cards and outgoing links were not individually clicked. |
| T4 | Skills page on live site | Open `skills.html` at laptop and phone widths. | Skill groups display without clipping or horizontal overflow. | **Partial** â€” live page rendered at 400 px emulation. Laptop-width visual check remains. |
| T5 | Contact page on live site | Open `contact.html`; inspect the contact option and explanatory copy. | A working contact method is provided or the lack of a backend is clearly explained. | **Partial** â€” live page rendered at 400 px emulation and explains that email is not listed and there is no form/backend; GitHub repository link exists in source. Link was not followed. |
| T6 | One `<h1>` per page | Inspect the source of all five HTML pages and count `<h1>` elements. | Every page has exactly one `<h1>`. | **Pass** â€” source check found exactly one `<h1>` in each page. |
| T7 | Every navigation link on every page | On each live page, click Home, About, Projects, Skills, and Contact in the main navigation; repeat from each page. | Each link reaches the matching live page from every page. | **Partial** â€” the browser accessibility tree exposed all five main links on Home and About; source has the same five destinations on all pages, and each destination loaded during page review. All 25 link/page combinations were not individually clicked. |
| T8 | Mobile navigation menu | At phone width, open and close the menu; also press Escape while it is open. | Menu opens, exposes its expanded state, closes on Escape, and returns focus to its button. | **Pass** â€” on live About at the responsive breakpoint, the menu opened and listed all five links; Escape closed it and focus returned to the menu button. Other pages were not separately exercised. |
| T9 | Keyboard navigation on every page | On each page, press Tab through links and controls; use Enter to activate links and buttons. | Focus is visible and each control works using the keyboard. | **Not run** â€” attempted Tab did not establish page focus (Opera retained focus on its browser tab); repeat with page focus on all five pages. |
| T10 | Phone and laptop layout on every page | Open each live page at 400 px phone emulation and laptop width; inspect for clipping and sideways scrolling. | Content reflows appropriately with no horizontal overflow. | **Partial** â€” all five pages rendered at 400 px emulation; Home and About also rendered at laptop width. No sideways overflow was visible in the phone screenshots. Laptop checks for Projects, Skills, and Contact remain. |
| T11 | Project images and alternative text | Open Projects on the live site; inspect all project images and their alt text. | All three images load and have descriptive alt text. | **Partial** â€” first project illustration was visible on the live phone view. Source contains descriptive alt attributes for all three images; every image was not visually checked. |
| T12 | Light/dark theme control | On the live Home page, activate the theme button twice. | First activation switches to light theme; second restores dark theme. | **Pass** â€” both theme states visibly rendered on the live Home page. |
| T13 | Browser console and page resources | Open each live page with DevTools Console visible; inspect console and network errors. | No JavaScript errors or missing local resources appear. | **Not run** â€” no complete console/network review was captured for all five pages. |
| T14 | Lighthouse Accessibility | Run Lighthouse Accessibility on each of the five live pages and record each score. | Each page scores at least 90. | **Not run** â€” no Lighthouse report was generated; do not treat the score target as met. |
| T15 | Project image file size | Check each project image's published file size. | Every image is under 500 KB. | **Pass** â€” repository SVGs are 2,785 bytes, 2,556 bytes, and 3,975 bytes, all far below 500 KB. |

## Remaining checks

- Click every navigation destination from each of the five live pages.
- Finish laptop-width review for Projects, Skills, and Contact.
- Complete keyboard-only navigation checks on all five pages.
- Inspect all project images in the live browser and check all page console/network output.
- Run Lighthouse Accessibility on each live page and record the five scores and any failures.
