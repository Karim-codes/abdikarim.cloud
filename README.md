# abdikarim.cloud

Abdikarim Ahmed’s personal professional portfolio. React 19, Vite, TypeScript, Tailwind CSS v4, React Router, Motion and Lucide. Accessible Button and Dialog primitives adapted from shadcn/ui; see [third-party notices](THIRD_PARTY_NOTICES.md).

The output is entirely static. Node is used for development and build-time prerendering only. No database, authentication, form service or runtime API is required.

## Local development

Use Node 22.17 or a compatible newer Node release.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Theme defaults to the operating system; a visitor can choose Light, Dark or System. An explicit choice is stored locally. Storage being disabled does not prevent the switcher from working.

## Production checks and local review

```sh
npm run lint
npm run typecheck
npm run build
npm test
npm run preview
npm run test:browser
```

The Playwright configuration starts or reuses a production preview on `127.0.0.1:4187`. It uses an isolated headless Google Chrome profile. To use Playwright’s Chromium instead:

```sh
npx playwright install chromium
PLAYWRIGHT_CHANNEL=chromium npm run test:browser
```

Browser tests check all public routes, refreshes, mobile navigation, focus, theme preferences, filters, viewers, copying, missing images, no-JavaScript content and automated accessibility. Screenshots are written to `docs/review/` at 375, 768, 1024 and 1440 pixels, in both themes. `playwright-report/` and `test-results/` are ignored.

## Update professional content

Edit `src/data/site.ts` for the name, location, contact links, navigation, experience, technical skills, education, certifications and page metadata. British English is used throughout.

- **Experience:** preserve official titles. The engineering secondment stays nested under KFC / Yum! Brands. The previous placement’s dates have not been supplied; add verified dates to `experience` when available.
- **Qualifications:** `status: 'Achieved'` and `status: 'In progress'` are separate displays. Add a genuine `verificationUrl` when available; no credential IDs or badge URLs are inferred.
- **Availability:** disabled by default with an empty label. To display it, explicitly set `availability.enabled` to `true` and supply the desired label.
- **Social links:** edit `github`, `linkedin` and `email`. Empty values hide unavailable contact methods. For future additional methods, follow the conditional rendering in `Layout.tsx` and `Contact.tsx`.
- **Photograph:** place a public-safe, optimised image under `public/` and set `portrait` to its root-relative path. The hero uses a professional current-role note until a portrait is supplied.
- **CV:** no CV was found, so no download is shown. Review the PDF for accuracy and private contact details, place it under `public/`, then set `cv`, for example `'/abdikarim-ahmed-cv.pdf'`. The hero and Contact page then expose the download automatically.

`site.url` remains `https://abdikarim.cloud`. If site metadata changes, also update the default values in `index.html` and the social preview assets. The build writes route-specific titles, descriptions, canonical URLs and structured data. `public/social-preview.png` is the 1200 × 630 sharing image; its editable vector source is beside it.

## Add or edit a project

The typed registry is `content/projects.ts`, with the `Project` model in `src/types.ts`. Public App Store links use `appStoreUrl` and appear automatically in showcases and case studies. Minaarly’s co-ownership and shared development from day one are configured in `src/data/contributions.ts`; it appears on Home and Projects. iTinyri is a standalone, owner-built app in the project registry.

1. Copy an existing entry and give it a unique lowercase hyphenated `slug`.
2. Add verified descriptions, scope, decisions, challenges and development status.
3. Set `published: false` until ownership, content, links, screenshots and status are reviewed.
4. Use `featured: true` for the homepage, `order` to control sorting, and `latest: true` to label the latest work. Use `liveLabel` to customise the live-app link text. Update `lastUpdated` when the write-up is reviewed.
5. Keep original screenshots in `content/assets/` and generate publication-approved previews under `public/projects/`. Each screenshot needs descriptive alternative text and a caption identifying its provenance. Avoid private data and do not substitute generated application screens.
6. Set `published: true` to automatically create the showcase, filter category, case-study route and sitemap entry on the next build. No route file needs editing.

Supported statuses are `Completed`, `In development`, `Experimental`, `Planned` and `Archived`. `published` is independent of development status. A project can be experimental and still have meaningful implemented work; planned features are always separate from implemented scope.

The Vite plugin reads the registry **in Node** and emits only published records through `virtual:portfolio-projects`. Unpublished descriptions, slugs and links are absent from the public JavaScript, HTML and sitemap. Tests verify this. Registry changes restart Vite through its config dependency tracking.

The registry is part of the source repository and is not a place for secrets or confidential notes. Files under `public/` are always copied into `dist/`; only put publication-approved assets there, even when the corresponding project is unpublished. Publishing a new category with a missing preview is supported, but add a new preview renderer in `ProjectShowcase.tsx` when you have meaningful genuine assets.

## Static deployment

`npm run build` creates `dist/`. React’s static prerender API generates eleven public routes plus `404.html`, then removes the temporary server bundle. Public content is readable before JavaScript runs. `sitemap.xml` is generated from published routes, and `robots.txt` points to it.

The small routes are currently rendered together to keep prerendering and hydration straightforward; there is no artificial loading screen. Asset files and the self-hosted Latin Geist font use content hashes. Source maps are not published. Genuine Qasd and Shaanis PNGs, iTinyri App Store JPEGs and a live PolyGlotPDF capture are retained in `content/assets/`; `npm run assets:optimise` generates full-size WebP images and appropriately sized previews. Responsive `srcSet` values let previews load smaller images.

The repository’s Vite build command and `dist/` output are retained. The public repository’s homepage identifies Vercel as the existing provider; no original deployment configuration was tracked. `vercel.json` only sets clean URLs and removes trailing slashes. Static route directories and `404.html` are included. No hosting project, domain, DNS or production setting has been changed.

For another static server, serve files and directory indexes before a custom 404. For example, an existing Nginx static location can use `try_files $uri $uri/index.html =404;` with `error_page 404 /404.html;`. Do not rewrite every route to the homepage: each public route has its own generated HTML and sharing metadata. The client also detects a mismatched fallback document and mounts the requested route without a hydration error.

Existing homepage anchors `#work` and `#contact` are retained. The old capabilities and about anchors map to the appropriate homepage sections. There were no previous path-based routes in this repository.

The owner has approved pushing the redesign branch to GitHub. Keep production merges and deployments separate; neither is authorised by that push approval.

## Review documents

- [Implementation and content report](docs/IMPLEMENTATION_REPORT.md)
- [Design research and decisions](docs/DESIGN.md)
- [Responsive screenshots](docs/review/)
