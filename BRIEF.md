# Expert Judiciaire — Site Web Professionnel

## Contexte du projet

Créer un site web complet pour un expert judiciaire agréé spécialisé en évaluation immobilière. Le site doit inspirer autorité, rigueur et confiance immédiate auprès d'une clientèle de magistrats, avocats, notaires et entreprises.

---

## Stack technique

- Framework : Next.js 14 (App Router)
- Styling : Tailwind CSS + CSS custom properties
- Animations : Framer Motion
- Formulaire de contact : React Hook Form + Resend (emailing)
- Fonts : Cormorant Garamond (titres) + DM Sans (body) via next/font
- Icons : Lucide React
- Déploiement cible : Vercel

---

## Design System

### Palette de couleurs (CSS variables dans globals.css)

```css
:root {
  --color-navy: #0D1B2A;
  --color-navy-light: #1A2E42;
  --color-gold: #C9A84C;
  --color-gold-light: #E2C97E;
  --color-ivory: #F8F6F1;
  --color-grey-light: #E8E6E1;
  --color-grey-mid: #9A9590;
  --color-text: #1C1C1C;
}
```

### Typographie

- Titres H1/H2 : Cormorant Garamond, weight 400-600, letter-spacing tight
- Body / UI : DM Sans, weight 300-500
- Accent (citations, labels) : DM Sans italic, gold color

### Composants de base à créer dans /components/ui/

- `Button.tsx` — variantes : primary (gold), secondary (outline navy), ghost
- `SectionWrapper.tsx` — wrapper avec padding vertical cohérent (py-20 lg:py-32)
- `Badge.tsx` — petits labels dorés pour certifications
- `Divider.tsx` — ligne fine gold avec espacement
- `AnimatedText.tsx` — fade-in staggered pour les titres hero

---

## Architecture des fichiers

```
/app
  layout.tsx           — font setup, metadata globale, header/footer
  page.tsx             — Home
  /cabinet
    page.tsx           — À propos / Présentation du cabinet
  /expertises
    page.tsx           — Liste des domaines d'expertise
    /[slug]
      page.tsx         — Page détail expertise (dynamique)
  /expertise-judiciaire
    page.tsx           — Focus sur la mission judiciaire
  /publications
    page.tsx           — Articles, interventions, presse
  /contact
    page.tsx           — Formulaire de contact

/components
  /layout
    Header.tsx
    Footer.tsx
    MobileMenu.tsx
  /sections
    Hero.tsx
    TrustBar.tsx
    ExpertiseGrid.tsx
    Timeline.tsx
    ProcessSteps.tsx
    Testimonials.tsx
    PublicationsGrid.tsx
    ContactForm.tsx
    MapEmbed.tsx
  /ui
    Button.tsx
    Badge.tsx
    SectionWrapper.tsx
    Divider.tsx
    AnimatedText.tsx
    AccordionFAQ.tsx
    ExpertiseCard.tsx

/lib
  expertises.ts        — données statiques des domaines d'expertise
  publications.ts      — données statiques des publications
  metadata.ts          — helper SEO

/public
  /images             — photos d'architecture, portrait expert
```

---

## Pages — Contenu & Mise en page

### 1. HOME (app/page.tsx)

**Hero section :**

- Fond : image plein écran d'architecture (Palais de Justice ou immeuble haussmannien) avec overlay navy à 85% d'opacité
- Titre centré en Cormorant : "Clarté. Rigueur. Autorité."
- Sous-titre : "Expert judiciaire agréé près la Cour d'appel — Évaluations immobilières opposables devant les tribunaux"
- Deux boutons CTA : "Découvrir le cabinet" (gold) + "Prendre contact" (outline)
- Scroll indicator animé (chevron)

**Trust Bar :**

- Bande horizontale ivoire avec 4 éléments séparés par dividers dorés :
  ✦ Inscrit près la Cour d'appel
  ✦ +20 ans d'expérience
  ✦ +500 rapports délivrés
  ✦ Normes européennes REV

**Intro section :**

- Deux colonnes : texte gauche + citation encadrée gold à droite
- Texte : mission, valeurs, engagement de rigueur

**Grille Expertises :**

- 3 colonnes (6 cards au total), icône Lucide + titre + description courte
- Hover : fond navy, texte ivoire, bordure gold
- CTA "Voir toutes nos expertises" en bas

**Section processus (judiciaire) :**

- 4 étapes numérotées horizontalement avec ligne de connexion dorée :
  1. Désignation par le juge
  2. Analyse du dossier
  3. Investigations terrain
  4. Rapport motivé

**Testimonials / Références :**

- Citations anonymisées de clients (avocats, juges, entreprises)
- Design : grande guillemet décorative gold, texte en italique Cormorant

**CTA final :**

- Fond navy, texte ivoire, bouton gold : "Prendre contact — Réponse sous 48h"

---

### 2. LE CABINET (app/cabinet/page.tsx)

- Hero sobre avec titre "Le Cabinet" et fil d'Ariane
- Layout deux colonnes : photo portrait gauche (arrondie, ombre douce) + biographie droite
- Mettre en avant : agréments, formations, membre d'associations
- Timeline verticale avec Framer Motion : jalons de carrière (années clés, nominations, publications majeures)
- Section affiliations : logos IFEI, ICH, REV, etc.

---

### 3. EXPERTISES (app/expertises/page.tsx)

Créer un tableau de données statiques dans /lib/expertises.ts (voir implémentation dans le code source).

- Page liste : grid 2 colonnes, cards avec image de fond subtile + overlay
- Page détail `[slug]` :
  - Hero titre + breadcrumb
  - Description longue en deux colonnes
  - Cas d'usage (liste stylisée avec checkmarks dorés)
  - Accordion FAQ contextuelle (composant AccordionFAQ.tsx)
  - CTA latéral sticky "Nous contacter pour ce besoin"

---

### 4. EXPERTISE JUDICIAIRE (app/expertise-judiciaire/page.tsx)

- Explication du cadre légal (NCPC articles 232 et suivants)
- Processus step-by-step (composant ProcessSteps.tsx) :
  Saisine → Acceptation mission → Réunion d'expertise → Pré-rapport → Observations parties → Rapport définitif
- Section "Expert désigné vs Expert amiable" : tableau comparatif (2 colonnes, fond alterné ivory/white)
- Accordion FAQ (questions types honoraires, durée, contestation, etc.)

---

### 5. PUBLICATIONS (app/publications/page.tsx)

Données statiques dans /lib/publications.ts.

- Filtres par catégorie : Presse / Conférences / Articles / Interviews
- Grid masonry 3 colonnes
- Chaque card : date, source, titre, extrait, lien externe (icône ExternalLink)

---

### 6. CONTACT (app/contact/page.tsx)

- Layout 60/40 : formulaire gauche, infos + map droite
- Formulaire (React Hook Form + validation Zod)
- Colonne droite : adresse, téléphone, email, mention 48h, iframe carte (style sepia)

---

## Header & Navigation (components/layout/Header.tsx)

- Logo : "Cabinet [NOM]" en Cormorant + "Expert Judiciaire" en petit DM Sans gold
- Liens : Accueil / Le Cabinet / Expertises / Expertise Judiciaire / Publications / Contact
- Sticky avec backdrop-blur sur scroll
- Active state : underline gold animé
- Mobile : hamburger → drawer full-screen navy
- CTA button "Contact" toujours visible (gold)

---

## Footer (components/layout/Footer.tsx)

- 4 colonnes : Logo+baseline / Navigation / Contact / Certifications
- Fond navy, texte ivory
- Liens LinkedIn, mentions légales, politique de confidentialité
- Copyright + "Réalisé par [studio]"

---

## SEO & Metadata (lib/metadata.ts)

- title pattern via layout template
- description unique par page
- OpenGraph image `/og` (1200x630)
- Schema.org JSON-LD : ProfessionalService + LegalService
- Sitemap : next-sitemap (postbuild)

---

## Variables d'environnement (.env.local)

```
RESEND_API_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY=
NEXT_PUBLIC_SITE_URL=
```

Voir `.env.local.example` pour les clés complètes (RESEND_FROM, CONTACT_EMAIL).

---

## Instructions de démarrage

1. `npx create-next-app@latest cabinet-expert --typescript --tailwind --app`
2. `npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react resend`
3. Configurer les fonts dans `app/layout.tsx`
4. Design system dans `/components/ui/` puis pages

Collez ce fichier comme contexte permanent du projet. Référencer **BRIEF.md** pour toute nouvelle création de composant ou de page.
