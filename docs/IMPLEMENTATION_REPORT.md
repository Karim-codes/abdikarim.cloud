# Professional website redesign — implementation report

The approved redesign is on `feat/professional-website-redesign`, based on `main` at `c0a0622`. The initial working tree was clean and no existing uncommitted work was overwritten. The owner has approved committing and pushing this branch to GitHub. No production merge, hosting-project change or DNS change is part of that approval.

## Retained and rebuilt

Retained the repository, Git history, React/Vite/TypeScript foundation, npm workflow, `dist/` deployment output, abdikarim.cloud canonical domain and existing professional email. The GitHub link now uses the verified repository owner, `Karim-codes`, instead of the unrelated profile hard-coded in the previous UI. Recovered the LinkedIn URL and Douglas & Gordon industrial placement title from the owner’s earlier public portfolio. Exact placement dates were not available and are not guessed.

Rebuilt the complete interface, routing, typography, palette, navigation, mobile sheet, content models, experience presentation, project selection, case studies, qualification rows, About and Contact pages. The former terminal, orbit graphics, fictional service topology and unsupported Azure-engineer job positioning were removed. The current official employment title is used. The kiosk secondment remains under KFC / Yum! Brands.

The six main pages and five project case studies are statically prerendered. iTinyri is presented as the owner’s standalone app. Minaarly’s co-ownership and shared development from day one appear on Home and Projects, with brief context on About. Metadata, Open Graph tags, canonical links, Person/ProfilePage structured data, robots and sitemap are generated into the public output. A custom 404 is included. Theme controls support system preference and persistent explicit choices. Accessible dialogs provide mobile navigation, expanded architecture and screenshot viewing. Filters use shareable URL parameters. Keyboard skip navigation, focus return and browser-history scroll restoration are implemented.

## Design references and components

The design uses the written brief’s charcoal professional profile structure, two-column expertise section and immediate experience preview. It uses Geist, restrained sage accents, fine dividers, small radii and editorial project write-ups. The original homepage reference image was not attached, so an exact visual comparison with it could not be performed.

Research and limitations are recorded in [DESIGN.md](DESIGN.md). Actual public page/component content was inspected from Linear, Vercel, shadcn/ui, 21st.dev, Siteinspire and Framer’s portfolio gallery. Awwwards timed out, Behance returned 403, and one Siteinspire portfolio detail was unavailable. The in-app browser host was unavailable; local screenshots and interactions were tested in isolated headless Chrome instead.

Button and Dialog compositions are adapted from MIT-licensed shadcn/ui, with the same Button inspected through 21st.dev. No paid template was copied. Official Microsoft Azure VM, VNet and NSG icons are used unmodified in the diagram. The layout, diagram composition and social image are original. Asset licences and provenance are in [THIRD_PARTY_NOTICES.md](../THIRD_PARTY_NOTICES.md).

## Project discovery and selection

The public GitHub API returned 25 owner repositories. The existing portfolio, selected READMEs, source paths, selected source files and genuine screenshots were reviewed. Read-only local inspection also covers Shaanis, iTinyri, PolyGlotPDF and Minaarly. No sibling checkout was edited, built, installed, committed or deployed. Projects were not published just because a repository existed.

| Project | Selection and evidence |
| --- | --- |
| **Azure Infrastructure Lab** | Published locally and featured. Uses the supplied lab facts plus the separate `azure-secure-terraform` README. The public repository documents a hardened Ubuntu/NSG/Nginx foundation and Terraform conversion. The supplied brief provides the private subnet and DNS/TLS lab scope. The write-up explicitly explains that the repository documents HTTP serving and a subset of the wider lab. Planned Azure services are listed separately. |
| **Qasd** | Published locally and featured, marked **In development**. Verified Expo/React Native/TypeScript structure, local progress documentation, counters, persistence design and test paths. Actual exported application screens are used with synthetic-data captions. Preparation checklists, audio, caching and a complete accessibility review remain planned. No app-store availability claim. |
| **Minaarly** | Presented as **Co-owner & developer**. The owner confirmed that he and a friend own the app together and both built it from day one. Linked to its App Store listing. |
| **iTinyri** | Published as a **standalone app built by the owner**, completed and live on iOS. Has its own featured showcase and case study. The Flutter/Dart/Riverpod stack is verified in the local app’s package metadata and feature structure. Genuine published App Store product images are used, with a verified store link. |
| CloudTutor | Typed registry entry with `published: false`. README confirms only a local app/health endpoint and governance planning; RAG and Azure deployment are future work. Hold until substantial learning functionality is implemented. |
| **Shaanis** | Published locally and featured, **Completed and live on iOS**. The owner confirmed completed team-play validation, physical-device/release acceptance, accounts, public profiles and competitive statistics on 26 November 2026. This supersedes the older local checkout’s development notes. The UK App Store listing was verified through Apple’s public lookup API and linked. Genuine widget renders use an offline test fixture; private source remains undisclosed. |
| **PolyGlotPDF** | Replaces Somali Chess Hub at the owner’s request. **Completed and live** at polyglotpdf.com. The actual public homepage was inspected and captured without login or document upload. Local React/TypeScript source paths and service exports verify PDF processing, Gemini requests, progress states, generated-markup sanitisation and document chat. No usage totals, accuracy metrics or processing benchmarks are claimed. |
| Somali Chess Hub | Removed from the public registry, routes, sitemap, previews and screenshots at the owner’s request. Its sibling checkout is untouched. |
| Azure Containerized Web Architecture | Excluded despite being the previous site’s only case study. Its public README links to a CodeRaxa-associated domain, which conflicts with the explicit separation requirement. No images or links from that project enter this build. |
| SyncSupport / FYP-Project-SyncSupport | Additional academic project discovered. README and selected code show NLP/helpdesk and Socket.io work, but a source file contains an embedded database credential. Excluded under the instruction to omit projects containing sensitive information. No credential value was copied. The owner should revoke/rotate the exposed credential and clean the source/history before reconsidering publication. This redesign did not modify that external repository. |
| Snake-game | Reviewed game logic with movement, food, scoring and collision handling. Existing third-party attribution and contribution provenance need review before presenting it as independent authored work. Not selected. |
| bill-manager | Boilerplate README does not verify useful product scope. Held for implementation/status details. |
| qasd-website | Verified pre-launch marketing site; treated as supporting context for Qasd, not a duplicate project. Its recreated marketing previews were not reused as application evidence. |
| Karim-portfolio | Used only to recover verified placement and LinkedIn details. Not presented as a new engineering project. |
| abdikarim.cloud | Retained repository; not duplicated as a featured project. |
| meatery, zakifx | Explicitly excluded by the brief. |
| MIK-Treatz, MR-PERI-S, ChartStep, kawaa, muscle-massacre-app, IT-Bot | Not selected: purpose, ownership context, public-safety and status were not sufficiently reviewed. No commercial association is assumed from a repository name alone. |
| blog, blog-react, random-Ayah, scholarly-quote | Not selected for this first curated set; product scope, current status and authorship evidence need review. |
| waa-citaan, XAMAR-Streets-of-Muqdisho | Empty public repositories; excluded. |

Only published registry records are serialised by the build-time Vite content plugin. Tests scan all public text output to ensure unpublished project names and excluded associations do not leak into the JavaScript, HTML or sitemap. Original Qasd/Shaanis PNGs, iTinyri App Store JPEGs and the cropped live PolyGlotPDF PNG are kept in `content/assets/`, outside the public output; WebP full-size and thumbnail variants are generated for display.

## Content and assets still needed

- The referenced homepage design screenshot, if a closer visual match is desired.
- A current, public-safe CV. No CV exists in this repository, so download links are hidden.
- An optional professional portrait. The hero uses a current-role note until a photo is configured.
- Douglas & Gordon placement dates and any additional verified responsibilities.
- Certification verification links or official achieved badges. Current issuer marks are not achievement badges. The supplied July 2026 dates are retained without invented credential IDs.
- Optional additional public source or demonstration links. Shaanis, Minaarly and iTinyri now have verified UK App Store links.
- Further CloudTutor functionality and screenshots before featuring it.
- Confirmation of the wider Azure lab’s current infrastructure/repository relationship if the public Terraform repository is to become a complete source for every diagrammed component.

## Validation

- `npm run lint`: passed, no warnings.
- `npm run typecheck`: passed; also rerun by the production build.
- `npm run build`: passed. Eleven prerendered public routes, custom 404, sitemap and social assets in `dist/`.
- `npm test`: 3/3 passed. Verifies unique static metadata and visible content, publication filtering, excluded-content absence, sitemap and required assets.
- `npm run test:browser`: 18/18 passed in isolated headless Chrome. All routes load directly and after refresh. No horizontal overflow at 375/768/1024/1440px in either theme. No page or console errors across the route checks. Also verifies filters, URL persistence, theme persistence/system changes/blocked storage, mobile focus trapping and Escape, project viewers, email copying, missing-image fallback, keyboard skip navigation, history scrolling and readable no-JavaScript content.
- axe checks: zero violations in the exercised WCAG 2 A/AA, 2.1 A/AA and 2.2 AA rules. Homepage checked at all four widths in both themes; every public route checked in both themes.
- Initial redesign Lighthouse mobile homepage (before the owner content update below): **Performance 96 · Accessibility 100 · Best practices 100 · SEO 100**. Local simulated mobile run; FCP 1.8s, LCP 2.5s, total blocking time 0ms, CLS 0. These are local lab measurements, not production field metrics. Raw result: [lighthouse-mobile.json](review/lighthouse-mobile.json).
- `npm audit`: zero vulnerabilities after updating inherited Vite and lint tooling to compatible patched releases.
- `git diff --check`: passed.

The rendered homepage, timeline, project pages and inner layouts were visually inspected. Light secondary text was darkened for contrast. Small labels were enlarged. Initial full-page capture artefacts after resizing were removed by reloading at each size; final screenshots were inspected again. Original PNGs are losslessly retained in source, while display assets use responsive WebP compression. No fake application screenshots were generated.

Automated checks complement visual and keyboard review; they are not a certification of universal accessibility. The supplied primary reference screenshot, real CV download and certification verification links could not be checked because those assets were absent. Existing production hosting behaviour was not exercised because deployment is intentionally withheld. A minimal Vercel clean-URL configuration is prepared for later review; no hosting settings have been changed.

## Review screenshots

The [screenshot index](review/README.md) links all 50 images: eight homepage combinations, mobile and desktop views of all ten inner routes in both themes, and the two mobile menus.

| View | Dark | Light |
| --- | --- | --- |
| Desktop homepage | [1440px](review/home-1440-dark.png) | [1440px](review/home-1440-light.png) |
| Small desktop homepage | [1024px](review/home-1024-dark.png) | [1024px](review/home-1024-light.png) |
| Tablet homepage | [768px](review/home-768-dark.png) | [768px](review/home-768-light.png) |
| Mobile homepage | [375px](review/home-375-dark.png) | [375px](review/home-375-light.png) |
| Azure case study | [Desktop](review/projects-azure-infrastructure-lab-1440-dark.png) | [Mobile](review/projects-azure-infrastructure-lab-375-light.png) |
| Qasd case study | [Desktop](review/projects-qasd-1440-dark.png) | [Mobile](review/projects-qasd-375-light.png) |

## Working tree and next review

Branch: `feat/professional-website-redesign`, created from `c0a0622`. The branch contains the approved frontend, content registry, assets, static build scripts, checks, README and review documentation. Build output, temporary server bundles and test runner reports are ignored. The owner approved pushing this branch to GitHub; `main` remains at the existing production commit. The final commit is recorded in Git history. No unrelated initial edits or sibling checkouts were changed.

Run `npm run dev` for an interactive local review, or `npm run build && npm run preview` to review the production output. Local servers used during validation are stopped at handover. The GitHub push is limited to the redesign branch; production merges and deployments remain separate.

## Owner-confirmed project scope — 26 November 2026

Shaanis is completed and live on iOS, including the owner-confirmed validation, accounts, public profiles and competitive statistics. iTinyri is the owner’s own app and has a standalone project entry and case study. Minaarly is described as an app co-owned and built together with a friend from day one. PolyGlotPDF replaces Somali Chess Hub and is marked completed/live, with its real website preview and link.

App Store identities and UK links were verified through Apple’s public lookup API: [Shaanis](https://apps.apple.com/gb/app/shaanis/id6823233140), [Minaarly](https://apps.apple.com/gb/app/minaarly/id6759989315) and [iTinyri](https://apps.apple.com/gb/app/itinyri-app/id6754219093). The live [PolyGlotPDF](https://www.polyglotpdf.com/) page was rendered and captured directly. No private mobile source, personal itinerary or credentials were copied. The new previews are real public product captures; no application mockups were generated.

The replacement build, lint, TypeScript and all 3 static content checks pass. Responsive browser results and refreshed review images are included in the validation section above. The owner has approved committing and pushing `feat/professional-website-redesign`; no production merge or deployment is included.

The owner explicitly confirmed co-ownership of Minaarly with a friend and shared development from day one. Home, Projects, About and project metadata use that confirmed ownership; the visible role is **Co-owner & developer**.
