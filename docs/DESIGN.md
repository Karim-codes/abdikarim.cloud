# Design research and decisions

Reviewed 26 November 2026. The supplied attachment contained the written brief only. The referenced homepage screenshot was not present in the attachment directory, and no existing image assets were in this repository. The written description therefore defines the primary structure: charcoal, compact navigation, four expertise cards in two columns, immediate professional experience, restrained colour and clear typography.

## References inspected

| Source | Inspection and resulting decision |
| --- | --- |
| [Linear](https://linear.app) | Inspected its public page structure, navigation and product presentation. Adopt a restrained neutral frame, clear hierarchy and purposeful surface separation; omit its marketing scale and animated product treatment. |
| [Vercel](https://vercel.com) | Inspected its navigation and technical product hierarchy. Use crisp rules, narrow typography tracking and explicit technical labels; keep the personal introduction human and compact. |
| [shadcn/ui Button](https://ui.shadcn.com/docs/components/button) | Inspected component composition and variants. Adapted the MIT-licensed Slot/CVA Button to the portfolio’s smaller radii and sage accent. |
| [shadcn/ui Sheet](https://ui.shadcn.com/docs/components/radix/sheet) | Inspected its Dialog-based composition. Adapted the accessible Radix Dialog pattern for the mobile navigation sheet and project viewers, including focus trapping, Escape and focus return. |
| [21st.dev Button by shadcn](https://contact_2a72bbaa.21st.dev/%40shadcn/components/button) | Inspected usage, dependencies and the MIT licence. Selected the same small primitive rather than introducing a second button system. |
| [21st.dev Border Trail](https://contact_2a72bbaa.21st.dev/%40ibelick/components/border-trail) | Inspected the motion border example and its licence; rejected it because animated ornamental borders would add noise to this professional profile. No source copied. |
| [Siteinspire](https://www.siteinspire.com) | Inspected its typographic, minimal and portfolio categories and selected-work index. Use editorial sections and consistent dividers rather than repeating card grids. A linked individual portfolio detail was unavailable. |
| [Framer portfolio gallery](https://www.framer.com/marketplace/templates/categories/portfolio/) | Inspected the gallery’s project-first case-study positioning and resume category. Use project previews with a clear path to the write-up. No paid template or template code copied. |
| [Awwwards portfolio gallery](https://www.awwwards.com/websites/portfolio/) | Fetch timed out. No design claim or copied component relies on it. |
| [Behance portfolio search](https://www.behance.net/search/projects?search=developer%20portfolio) | HTTP 403. Continued with available references. |

Research used actual fetched page/component content. The in-app browser host was unavailable, limiting interactive visual inspection of external references. Local rendered work was inspected separately using isolated headless Chrome screenshots and browser tests.

## Design system

- Geist Variable, self-hosted Latin font; no external font request. Body copy starts at 16px, with larger introductions and compact supporting metadata.
- Dark charcoal `#191a1c`, warm light background `#f7f6f2`, sage accents and subtle neutral rules. The light secondary text colour was darkened after automated contrast testing.
- 1064px maximum primary content width at the requested desktop sizes; 20px mobile gutters. Two-column expertise grid becomes a single column on phones.
- Five-pixel component radii, no background gradients, no decorative illustration, no generated photos or fake application imagery.
- Editorial timeline, split project showcases, credential rows, a sticky desktop case-study contents list, and a readable prose measure. Cards are reserved for expertise and specific scope groupings.
- Small page opacity transition through Motion; CSS reduced-motion overrides and Motion preference detection suppress animation when requested.
- Theme controls offer Light, Dark and System. Local persistence is optional; a blocked storage API does not break interaction.

## Assets and provenance

Qasd screenshots are actual exported application screens from the owner’s public repository. Its `docs/home-and-offline-progress.md` explicitly identifies the itinerary as synthetic data. The image captions retain that distinction. The cloud diagram uses the supplied lab network ranges, with no private workload inferred and no planned gateway or security service shown as deployed. Official Azure VM, VNet and NSG icons come from Microsoft’s V25 architecture icon download and are used unmodified within the diagram, with product labels. Full asset notices are in `THIRD_PARTY_NOTICES.md`.

The final project selection includes Shaanis, iTinyri and PolyGlotPDF. Shaanis uses genuine Flutter widget captures with an offline test fixture labelled as such. iTinyri uses the owner’s published App Store product images. PolyGlotPDF uses a genuine live-site capture focused on its upload and translation introduction, without usage/rating counters. The owner confirmed iTinyri as a standalone app and Minaarly as an app co-owned and built together with a friend from day one; Minaarly retains the compact collaborative-work treatment.
