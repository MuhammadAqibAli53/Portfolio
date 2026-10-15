# Developer Portfolio
### React · Front-end engineering · Project presentation

A multi-page developer portfolio presenting engineering projects, technical interests, background, and contact information.

**Skills demonstrated:** React · Component Composition · Client-Side Routing · Responsive UI · Bootstrap · Front-end Integration

## Engineering highlights
| Area | Implementation |
|---|---|
| Component architecture | Reusable components for navigation, project cards, home, about, resume, and contact |
| Client-side navigation | React Router routes for `/`, `/project`, `/about`, `/resume`, and `/contact` |
| User experience | Initial preloader, navigation, interactive styling, and scroll-to-top behavior |
| Visual presentation | Project-card imagery, React Bootstrap layout, and decorative effects |
| Maintainability | Project information kept in a `PROJECTS` array for rendering portfolio cards |

## Site architecture
```text
src/App.js
  |
  +-- Navbar
  +-- Home
  +-- Projects -> ProjectCards
  +-- About
  +-- Resume
  +-- Contact
  +-- Footer
```

## Featured skill areas
The portfolio presents work across AI/ML, computer vision, full-stack development, automation, and software engineering. **Portfolio project-card claims are promotional content and should be verified against the corresponding source repositories** before being treated as validated results.

## Tech stack
React 17, React Router 6, React Bootstrap, Bootstrap 5, react-icons, and Create React App.

## Run locally
```bash
npm install
npm start
```
Create a deployable build with `npm run build`.

## Known cleanup opportunity
Some project cards currently use placeholder GitHub/demo links. Replace those with real verified links before sharing the site professionally.

**Maintained by [Muhammad Aqib Ali](https://github.com/MuhammadAqibAli53).**
