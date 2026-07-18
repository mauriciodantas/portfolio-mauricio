# Portfolio Hiring Evaluation — portfolio.mdantas.net

**Evaluated:** July 2026 · Full source review + rendered desktop (1440px) and mobile (390px) walkthroughs in PT and EN.
**Evaluator lens:** Senior UX Researcher / Hiring Manager / Tech Recruiter / Portfolio Reviewer.
**Central question:** Would this portfolio convince someone to schedule an interview with Mauricio Dantas?

> **Positioning note (owner feedback, post-review):** Mauricio has stated that although he worked with banking/fiscal integrations, his experience is broader and he does **not** want that niche to be the focal point. Recommendations below have been revised accordingly: the positioning axis shifts from *"Brazilian fiscal/banking niche specialist"* to *"senior engineer for critical systems and complex integrations across domains"* (finance, logistics, fiscal, insurance, media/e-commerce, mobile, and now AI/ML), with banking/fiscal work presented as one credential among several rather than the headline. The practical consequence: breadth-based positioning competes in a larger pool, so **proof of impact (metrics, case studies from different sectors) becomes even more critical** — versatility is only convincing when each chapter shows depth.

---

## Executive Summary

This is a technically well-built, visually memorable single-page portfolio with a genuine, defensible niche — **Java specialist for Brazilian critical systems (NF-e fiscal, banking/CNAB, insurance, ERP)** — wrapped in a cohesive 8-bit/CRT retro-terminal aesthetic. The code quality behind it (React 19, TypeScript, Tailwind 4, clean componentization, bilingual i18n with persistence, scroll-spy nav) is itself evidence of competence.

However, the portfolio currently **under-converts**. It is optimized for being admired, not for being acted on. The three-minute visitor — which is nearly every visitor — hits four conversion killers:

1. **No resume/CV download.** The single most requested artifact by recruiters does not exist.
2. **No contact CTA in the hero.** The primary buttons are "View Trajectory" and "Education" — the funnel points at credentials, not at conversation.
3. **No mobile navigation.** Nav links are `hidden md:flex` with no hamburger fallback (`Navbar.tsx:54`); a phone visitor can only scroll blindly.
4. **Claims without proof.** "The most popular on GitHub," "used by hundreds of companies" — zero star counts, links to merged PRs, metrics, or testimonials to back them.

The biggest content gap is proof: nothing on the page quantifies what "13+ years in critical systems" produced (volumes processed, systems modernized, integrations shipped, teams led). With a breadth-based positioning (see note above), this proof gap is the single most important thing to fix — range without depth stories reads as generic.

| Score | Value | Rationale |
|---|---|---|
| **Overall Portfolio Score** | **58 / 100** | Strong craft and identity; weak conversion mechanics and proof |
| Hiring Readiness | 52 / 100 | No resume, no direct CTA, proof gaps block the recruiter workflow |
| UX Score | 60 / 100 | Effortless on desktop; broken nav on mobile; legibility strained by theme |
| Personal Branding | 68 / 100 | Distinctive and memorable, but theme partially fights the "critical systems" message |
| Technical Communication | 50 / 100 | Lists technologies well; almost never communicates impact, scale, or decisions |
| Trust Score | 55 / 100 | Real OSS links and a custom domain help; unverifiable superlatives and no testimonials hurt |

---

## Top Strengths

1. **Verifiable, multi-domain track record.** Thirteen years across finance, logistics, fiscal, insurance, and media/e-commerce systems, with hard-to-fake credentials (OSS contributions such as `wmixvideo/nfe`, a shipped iOS game, an AI/ML postgraduate in progress). The banking/fiscal work is one strong chapter in a broader "critical systems, many domains" story — per the owner's direction, breadth and adaptability are the intended differentiators, not the niche itself.
2. **Coherent, memorable visual identity.** The 8-bit/CRT theme is executed with unusual consistency — pixel corners, scanlines, typing effect, canvas pixel background, Press Start 2P headings. Recruiters see dozens of identical Tailwind portfolios a week; this one is remembered.
3. **Complete, honest career timeline.** Seven roles from IT trainee (2011) to Senior Development Analyst, each with dates, companies, and tech stacks (`Experience.tsx`). The trainee-to-senior arc reads as authentic, not inflated.
4. **Bilingual PT/EN with localStorage persistence** (`LanguageContext.tsx`) — signals awareness of both local and international markets.
5. **Continuous-learning signal:** current AI/ML postgraduate at PUC Minas, FIAP MBA, plus an AI/ML skills category with concrete techniques (K-Means, regression) rather than buzzwords.
6. **The site itself is a code sample:** fast, no framework bloat at runtime, componentized, typed, accessible repo.

## Top Weaknesses

1. No downloadable resume/CV anywhere.
2. Hero CTAs don't lead to contact; contact is buried at the bottom with a passive "feel free to reach out."
3. Mobile navigation is absent (no hamburger menu).
4. Unverifiable claims; no metrics, testimonials, star counts, or links to actual merged PRs.
5. Experience descriptions are one generic sentence each — no scale, impact, or outcomes ("Working on enterprise solutions and complex integrations…" says nothing a hiring manager can grade).
6. Default language is Portuguese while `index.html` declares `lang="en"`; an international recruiter's first paint is in a language they may not read, and screen readers get the wrong language.
7. Title inconsistency: "Software Engineer" (hero typing), "Senior Development Analyst" (experience), "Engenheiro de software" (about card) — three labels, none of them "Senior Java Engineer," the term recruiters search for.
8. Legibility strained by the theme: body copy at 10–11px classes (boosted to 14–15px via `!important` hacks in `index.css:29-34`), zinc-500/600 text on near-black, six stacked CRT overlay layers dimming everything.
9. Zero SEO/social meta: no `<meta name="description">`, no Open Graph/Twitter cards — the link shared into a hiring Slack channel unfurls as nothing.
10. Repo hygiene leaks: `package.json` still named `react-example`, stray `alien-isolation-site.html` at root, unused deps (`@google/genai`, `express`, duplicate `framer-motion`+`motion`), README is the single word "Portfólio." Engineers who view source will notice.

## Critical Issues (blockers to conversion)

| # | Issue | Evidence | Severity |
|---|---|---|---|
| C1 | No resume download | No PDF/link anywhere in `src/` | Critical |
| C2 | No mobile nav menu | `Navbar.tsx:54` — `hidden md:flex`, no fallback | Critical |
| C3 | Hero CTA funnel points away from contact | `Hero.tsx:67-72` | Critical |
| C4 | Claims without evidence | `Projects.tsx:31-32` ("most popular on GitHub"), `Projects.tsx:78-79` ("hundreds of companies") | High |
| C5 | PT-first for international visitors + wrong `lang` attr | `LanguageContext.tsx:16`, `index.html:2` | High |
| C6 | No meta description / OG tags | `index.html` head | High |

---

## Phase 1 — Portfolio Context Analysis

- **Positioning:** Senior backend Java specialist, 13+ years, critical systems in Brazil's financial/logistics/fiscal sectors; currently broadening into AI/ML.
- **Personal brand:** Retro-gaming/hacker-terminal identity ("Alien Isolation CRT" per `App.tsx:29`), Vulcan-salute sign-off, matrix-green accent. Playful-nerd persona layered on a serious enterprise résumé.
- **Target audience (implied):** Brazilian tech recruiters and companies needing fiscal/banking integrations; secondarily international remote employers (EN toggle).
- **Specialization:** Java/Spring, Brazilian government/banking integrations (NF-e, CNAB, Correios, boleto), legacy modernization; emerging ML.
- **Differentiators:** The NF-e/fiscal niche + OSS contributions to the ecosystem's key library.
- **Career narrative:** Trainee → sysadmin → Java dev → full-stack → senior analyst; 7-year tenure at Imagem Filmes signals stability.
- **Main CTA (as built):** "View Trajectory" — i.e., *read more about me*, not *talk to me*.
- **Business objective:** Professional conversion (interviews/clients), currently unsupported by the funnel design.

## Phase 2 — Reviewer Personas

1. **Renata — Corporate Tech Recruiter (Brazil, agency).** Goal: fill a Senior Java req this week. Criteria: searchable title match, years, stack keywords, downloadable CV to forward. Rejects when: she can't extract a CV in 60 seconds. Continues when: title + stack + CV are frictionless.
2. **Daniel — Startup CTO (fintech, São Paulo).** Goal: find someone who has *actually* shipped banking/fiscal integrations. Criteria: proof of depth — code, PRs, war stories, architecture decisions. Trust: real OSS links, specific domain vocabulary. Rejects: vague claims, no depth behind the links.
3. **Priya — Engineering Manager (US company hiring remote LATAM).** Goal: assess seniority and English readiness. Criteria: EN content quality, impact metrics, system-design signal. Concern: "Senior Development Analyst" is an unfamiliar title; is this a true senior engineer?
4. **Carlos — Product Manager (logistics scale-up).** Goal: judge whether this engineer understands business outcomes. Criteria: does the text talk about value or only tools? Rejects: pure tech listing.
5. **Fernanda — Freelance Client (SMB owner needing NF-e integration).** Non-technical. Goal: find a trustworthy expert. Criteria: does the site say "I solve your invoice problem"? Trust: testimonials, plain language, easy contact. Concern: the hacker-terminal look reads alien to her.
6. **Lucas — Senior Software Engineer (peer/referral).** Goal: decide whether to refer. Criteria: code quality of the site itself, GitHub activity, OSS legitimacy. Will read the repo.
7. **Ana — HR Professional (enterprise, panel coordinator).** Goal: pre-screen against a checklist. Criteria: education, tenure, location, contact. Needs: printable/forwardable summary. Concern: tiny neon-on-black text is hard to skim and impossible to print.

## Phase 3 — Persona Simulations (first person, condensed)

**Renata (Recruiter, ~90s on site):** "Big pixel name, cool. The typing effect is still spelling out the role… okay, 'Java Specialist, 13 years' — good, that's my keyword match. Now where's the CV? Scrolling… experience cards, nice dates… no download button. Contact section has GitHub, LinkedIn, email. I'll grab the LinkedIn instead and build the profile from there. Honestly, I never came back to the site." → *Interview likelihood: moderate — but via LinkedIn, the portfolio added little.*

**Daniel (Startup CTO, ~3min):" "It opened in Portuguese — fine for me. The retro theme is fun, self-aware. 'Contributor to wmixvideo/nfe' — I know that library, we use it. That's a real signal. But 'most popular on GitHub' with no star count, and 'Contributor' — how much did he contribute? One PR or fifty? I want a link to his merged PRs and I don't get one. Experience at Sigga: 'enterprise solutions and complex integrations' — that's a sentence that says nothing. I'm interested, but I'm interviewing to find out what the portfolio should have told me." → *Interview likelihood: decent, on the strength of the niche alone.*

**Priya (US EM, ~2min):** "The page loaded in Portuguese. I'm hunting for the language toggle… found PT/EN top right. Hero says 13 years, Java — but the current title 'Senior Development Analyst' at companies I don't know makes leveling hard. No metrics anywhere: no team size, no scale, no latency/throughput numbers. English copy is clean, which helps. No resume to drop into Greenhouse. I'd need a recruiter screen just to level him — that's friction." → *Interview likelihood: low-moderate; would shortlist only if sourcing specifically in LATAM.*

**Carlos (PM):** "Every card is a technology list. The one line I loved: 'tools used by hundreds of companies in Brazil' — that's impact! But it's not substantiated and it's the only line like it. I can't tell if he thinks in outcomes." → *Neutral; wouldn't veto, wouldn't champion.*

**Fernanda (SMB client, ~45s):** "It looks like a video game screen. Green text, static noise. I don't understand 'CNAB' or 'microservices.' Is this person a professional I can pay to fix my invoice system? There's no 'services' section, no 'how I work,' no WhatsApp, no testimonials from businesses like mine. I closed the tab." → *Conversion: near zero — this audience is effectively unserved.*

**Lucas (peer engineer):** "Site is fast, scroll-spy works, the pixel canvas background is a nice touch. I opened the repo: `package.json` name is `react-example`, there's a stray `alien-isolation-site.html`, `@google/genai` and `express` in dependencies of a static site, both `framer-motion` and `motion` installed. Small things, but on a portfolio the repo *is* the product. The playable Objective-C game earned real respect though." → *Would refer, with a private nudge to clean the repo.*

**Ana (HR):** "I tried it on my phone during commute. There's no menu — just the logo and PT/EN. I scrolled a lot. Text is small and gray on black; I couldn't print or export anything for the panel. I asked the candidate to email a CV." → *Process friction: high.*

## Phase 4 — UX Evaluation (frameworks)

**Nielsen heuristics**
- *Visibility of system status:* Good — scroll-spy nav highlights the active section (`Navbar.tsx:25-43`). Severity 0.
- *Match with real world:* Mixed — "TRAJECTORY," "EQUIPMENT & SKILLS," "SYSTEM MESSAGE" are theme-flavored labels; fine for devs, opaque for HR/clients. Severity 2.
- *User control:* The game modal closes on backdrop/X, good; but no `Esc` key handler and no focus trap (`Projects.tsx:157-193`). Severity 2.
- *Consistency:* Section numbering jumps 01→02→03→04→**05**→06 with Education inserted as 03 but Skills labeled 04 and Projects 05 — internally consistent, but nav order (About, Trajectory, Education, Skills, Projects, Contact) differs from typical scanning expectation (skills before education for seniors). Severity 1.
- *Error prevention/recovery:* N/A (no forms — which is itself a conversion gap).
- *Recognition vs recall:* Good one-page anchor model.
- *Aesthetic/minimalist:* The six stacked CRT overlays (`App.tsx:30-35`) add noise by design; acceptable trade-off if legibility were protected — it isn't fully.

**Cognitive load:** Typing animation withholds the professional identity for ~2–4s (`TypingEffect.tsx` at 100ms/char); the screenshot at first paint literally reads "Es|". The one fact a 3-minute visitor needs most is the one delayed. Severity 3.

**Hick's Law:** Hero offers 2 CTAs + 6 nav links + language toggle — reasonable. But neither CTA is the conversion action, so added choices steer users away from the goal. Severity 3 (business).

**Fitts's Law:** Desktop targets fine. Mobile: PT/EN buttons are small (`px-3 py-1` at 10px font); contact cards are large and tappable — good. Severity 1.

**Information architecture:** Single-page with anchors is right for this content volume. Missing nodes: Resume, Testimonials, Services (for freelance), and any case-study depth layer. The IA is one level deep everywhere — nothing rewards a visitor who wants to go deeper. Severity 2.

**Accessibility (WCAG):**
- Contrast: `text-zinc-500` (#71717a) on #050505 ≈ 5.2:1 passes AA for normal text, but `text-zinc-600` (#52525b) ≈ 3.1:1 **fails AA** and is used for dates, section labels, and the hero's fourth-stat captions; CRT overlays reduce effective contrast further. Severity 3.
- `html lang="en"` while default content is PT (`index.html:2`) — screen readers mispronounce everything. Severity 3.
- No `prefers-reduced-motion` handling: typing loop, pulsing CTA (`animate-pulse`), canvas animation, scanline flicker run unconditionally. Severity 2.
- Modal: no focus trap, no `Esc`, no `role="dialog"`/`aria-modal`. Severity 2.
- Decorative emoji (🇧🇷, ☕, 🖖) unlabeled; flag-as-text read aloud oddly. Severity 1.
- No skip-to-content link. Severity 1.

**Mobile experience:** **No navigation menu at all** below `md` (`Navbar.tsx:54`) — the #1 mobile defect. Otherwise sections stack acceptably; hero stats collapse to 2-col. Severity 4 (highest on the page).

**Readability:** JetBrains Mono for body copy at 14–15px effective with wide tracking and all-caps labels everywhere → slow scanning. Monospace body text costs ~10–15% reading speed; combined with gray-on-black it makes the About paragraphs feel longer than they are. Severity 2.

**Visual hierarchy:** Strong at section level (numbered kickers, big headings). Weak inside cards: role, company, description, and skills all sit at nearly the same tiny size, so nothing pops for the F-pattern skimmer. Severity 2.

**Credibility & trust:** Custom domain, favicon set, privacy policy, real OSS URLs = positive. No photo, no testimonials, superlative claims unbacked, footer offers no email = negative. Net: neutral-positive for technical visitors, weak for everyone else.

**Conversion optimization:** No form, no calendar link, no resume, passive contact copy ("feel free to reach out"), conversion section last with zero CTA reinforcement en route. The page has no measurable conversion event at all — and no analytics to measure one. Severity 4 (business).

## Phase 5 — Content Evaluation

- **Hero:** Name + typing roles + one-line value prop. The value prop is decent ("13 years, critical systems, complex integrations") but generic-adjacent; "critical systems" is asserted, not evidenced. Stats row is clever but "MICRO" as a stat value is noise — a stat should be a number ("40+ integrations shipped", "5 industries served"), not an abbreviation.
- **Biography (About):** Three tidy paragraphs, warm tone, mentions OSS and AI/ML studies. Best paragraph on the site is the OSS one — it's the only place with named, verifiable artifacts.
- **Case studies:** **None.** This is the single largest content gap for a 13-year senior. There is not one story of a problem → constraint → decision → outcome anywhere.
- **Technical projects:** Four cards; three are *contributor* roles on others' repos, one personal (an iOS game with a playable web build — genuinely delightful, and the "PLAY NOW" modal works). No personal backend flagship, which is odd for a backend specialist: the portfolio's strongest role claims (fiscal/banking) have no owned artifact.
- **Resume:** Missing entirely.
- **Contact:** Three clean cards (GitHub/LinkedIn/email); no form, no scheduling, passive copy.
- **Social links:** Present but LinkedIn appears only in Contact — recruiters expect it in the header/hero region too.
- **Testimonials:** None.
- **Metrics:** None beyond "13+".
- **Achievements/storytelling:** The trainee→senior arc is implicit in the timeline but never told as a story; the 7-year Imagem Filmes tenure with "technical leadership, legacy modernization" is the richest material on the page and gets one sentence.
- **Writing quality:** Clean in both languages; EN is idiomatic. Tone consistent. But nearly every sentence is a *category* description ("worked on enterprise solutions") rather than a *specific* one.
- **Verdict on content:** Communicates *breadth and tenure* well; communicates *seniority and impact* poorly. A skeptical reader can't distinguish this from a mid-level profile with the same keywords — only the OSS links break the tie.

## Phase 6 — Benchmark Analysis

Against current senior/staff engineer portfolio norms (e.g., the pattern set by strong engineer portfolios: sharp positioning line, 2–3 deep case studies or technical write-ups, resume PDF, testimonials, blog/talks, visible GitHub metrics):

**Missing vs. peers:** resume download; case studies/technical writing (a blog post like "How Brazil's NF-e works and how we processed X invoices" would dominate this niche's search results); testimonials/social proof; OG/social meta; photo; scheduling link; analytics; personal flagship backend project; GitHub contribution stats or pinned-repo curation.

**Outdated/atypical patterns:** typing-effect hero (2018-era pattern, actively delays comprehension); skills-as-tag-clouds without proficiency context; "About me" paragraphs instead of impact bullets.

**Competitive advantages vs. peers:** genuine niche (most Java portfolios are generic Spring CRUD; this one owns Brazilian fiscal/banking); distinctive art direction executed well; bilingual; playable game (memorability spike); the site's own code quality.

**Competitive disadvantages:** an international EM comparing this against US/EU senior portfolios will find no metrics, no system-design evidence, and an unfamiliar title — it benchmarks as mid-level despite 13 years, purely due to content choices.

## Phase 7 — Prioritized Recommendations

### Quick Wins (≤1 day each)
| Rec | Hiring impact | Effort | Priority | Confidence |
|---|---|---|---|---|
| Add **"Download CV (PDF)"** button in hero + contact (PT/EN versions) | Very high — unblocks the recruiter workflow | Low | P0 | High |
| Add mobile hamburger menu (or minimal anchor list) | High — repairs ~half of first visits (mobile share) | Low | P0 | High |
| Change hero primary CTA to **"Get in touch"** (mailto or #contact); keep "View trajectory" secondary | High — points the funnel at conversion | Trivial | P0 | High |
| Sync `lang` attr with active language (`document.documentElement.lang = lang`) and default to browser language (`navigator.language`) instead of hard PT | Medium-high for international traffic | Trivial | P0 | High |
| Add meta description + OG/Twitter tags + social preview image | Medium — every shared link becomes a pitch | Low | P1 | High |
| Replace superlatives with numbers: "★ 800+ stars, used in production by N companies" (fetch real counts), link "Contributor" badges to the merged-PR list (`github.com/wmixvideo/nfe/pulls?q=author:mauriciodantas`) | High — converts claims into proof | Low | P1 | High |
| Repo hygiene: rename package, delete `alien-isolation-site.html`, drop unused deps, write a real README | Medium (peer/referral audience) | Low | P1 | High |
| Fix `text-zinc-600` contrast failures; add `prefers-reduced-motion` guards | Medium | Low | P1 | High |
| Unify title to "Senior Software Engineer · Java Specialist" everywhere | Medium — keyword match + leveling clarity | Trivial | P1 | High |

### High Impact (1–2 weeks)
1. **Rewrite experience entries as impact bullets** (2–4 per role): scale, numbers, outcomes, leadership. E.g., "Modernized a 10-year-old ERP module serving N users; cut release time from X to Y." This is the highest content-leverage change on the page. *(Impact: very high; Effort: medium — the work is remembering, not coding; Confidence: high.)*
2. **Add one flagship case study** ("Issuing NF-e at scale in Java" or the Imagem Filmes legacy-modernization story): problem → constraints → architecture → outcome. Serves CTOs, EMs, and PMs simultaneously. *(Impact: very high; Effort: medium; Confidence: high.)*
3. **Add 2–3 testimonials** (LinkedIn recommendations exist for most 13-year careers — reuse them, with permission). *(Impact: high, especially for freelance clients; Effort: low-medium; Confidence: medium-high.)*
4. **Add analytics** (Plausible/Umami — privacy-friendly fits the existing privacy policy) + define the conversion event (CV download / mailto click). *(Impact: enabling — makes every other change measurable; Effort: low; Confidence: high.)*

### Strategic Improvements (1–3 months)
5. **Decide the primary audience and fork the funnel.** If freelance clients matter: add a plain-language "Services" section (no jargon, WhatsApp contact, "how we work"). If employment is the only goal: cut the ambiguity and optimize purely for recruiters/EMs. Serving neither explicitly currently serves both badly. *(Impact: high; Effort: medium; Confidence: medium.)*
6. **Publish 2–3 technical articles** demonstrating range across domains — e.g., legacy-system modernization strategy, designing resilient third-party integrations (banking is one example among several), or applying ML to backend problems. Articles are the strongest way to make a breadth-based positioning credible, because each one shows depth in a different area. *(Impact: high, compounding; Effort: high; Confidence: medium.)*
7. **A "theme intensity" pass:** keep the 8-bit identity for structure and accents, but move body copy to a readable sans (keep mono for labels/code), raise base text contrast, and gate CRT overlays behind reduced-motion/user toggle. Keep the personality, lose the reading tax. *(Impact: medium-high across all personas; Effort: medium; Confidence: high.)*

### Long-term Enhancements
8. Build one **owned backend flagship** — a personal artifact that demonstrates the "critical systems" claim (e.g., an open-source integration toolkit, a resilience/retry library, or a public demo API). Domain is flexible; what matters is that the backend-specialist claim gets a personal, inspectable artifact.
9. Conference talks / meetup appearances (the Conference Organizer persona currently has nothing to evaluate); add a "Talks" section when they exist.
10. Bridge the AI/ML narrative with a shipped artifact (e.g., ML-assisted fiscal document classification demo) — turns "student" into "practitioner."

## 90-Day Improvement Roadmap

- **Weeks 1–2 (repair the funnel):** All Quick Wins above. Ship analytics first so before/after is measurable.
- **Weeks 3–5 (add proof):** Rewrite experience bullets with metrics; gather 3 LinkedIn recommendations; add real GitHub stats to project cards.
- **Weeks 6–9 (add depth):** Write and publish the flagship case study; add it as a portfolio section + standalone article. Run the readability/contrast pass.
- **Weeks 10–13 (differentiate):** Second article in a different domain than the first (to reinforce range); decide freelance-vs-employment focus and ship the corresponding section; start the owned flagship project.

## Validation Experiments

1. **Recruiter task test (for C1/C3).** *Hypothesis:* recruiters cannot complete "get this candidate's CV to a hiring manager" in under 2 minutes on the current site; the CV button + contact CTA reduce time-to-artifact by >70%. *Method:* 5 recruiters, moderated, task-based, before/after. *Metrics:* task completion rate, time, SUS. *Expected:* completion goes from ~20% (via LinkedIn detour) to ~100%.
2. **Mobile navigation A/B (C2).** *Hypothesis:* adding a hamburger menu increases mobile scroll-depth past Experience and contact-section reach by >30%. *Metrics:* analytics scroll-depth events, #contact reach rate on mobile.
3. **5-second test (hero comprehension).** *Hypothesis:* replacing the typing effect with a static role line raises correct recall of "what does this person do?" from <50% to >85%. *Method:* UsabilityHub-style 5-second test, 20 participants per variant, PT and EN cohorts.
4. **Proof-element A/B (C4).** *Hypothesis:* project cards with star counts + merged-PR links get >2× more GitHub click-throughs than unbacked claims. *Metrics:* outbound click events per card.
5. **Language-default experiment (C5).** *Hypothesis:* browser-language default reduces EN-visitor bounce in the first 10s by >20%. *Metrics:* bounce/toggle-usage segmented by browser locale.
6. **EM leveling interview study.** *Hypothesis:* after impact-bullet rewrite, engineering managers level the candidate "senior or above" from the portfolio alone ≥80% of the time (baseline: uncertain/mid). *Method:* 5 EMs, think-aloud review, leveling questionnaire.

---

## Final Hiring Verdict

**Would I recommend interviewing this professional based only on this portfolio? Yes — for Brazilian-market backend roles, a qualified yes; for international senior roles or freelance clients, not yet on portfolio evidence alone.**

**Why yes:** The verifiable substance is real. Thirteen years of continuous, coherent progression; contributions to `wmixvideo/nfe` — the recognized library of a genuinely hard domain (Brazilian fiscal integration); a portfolio site whose own implementation demonstrates current, clean React/TypeScript practice; and an active AI/ML postgraduate showing trajectory. A CTO who knows the Brazilian fiscal domain will recognize the niche signal immediately, and that signal alone justifies a screen.

**Why qualified:** The portfolio makes the interviewer do the portfolio's job. It asserts seniority but never demonstrates impact (no metrics, no case studies, no testimonials); it names the right technologies but tells no engineering stories; and its conversion mechanics actively leak candidates' most valuable resource — recruiter attention — by omitting a CV, a contact CTA, and a mobile menu. An international EM benchmarking this against senior candidates from stronger portfolio cultures would likely level it mid, which undersells what the timeline suggests is really there.

**Bottom line:** This is a memorable portfolio for a hireable engineer, currently converting at a fraction of its potential. The gap is not talent or taste — it's proof and plumbing. The P0 quick wins (CV, contact CTA, mobile nav, language default) are less than two days of work and would plausibly double interview conversion on their own; the impact-bullet rewrite and one flagship case study would change how the candidate is leveled. Fix those, and the same portfolio moves from "interesting, let me check his LinkedIn instead" to "schedule the call."
