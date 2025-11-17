# Design Guidelines: Bed & Breakfast Booking Platform (French)

## Design Approach

**Hybrid Strategy**: Airbnb-inspired presentation for engaging property discovery combined with boutique hotel aesthetics for trust and elegance.

**Rationale**: Hospitality platform requiring visual appeal and trust (boutique hotel style) with intuitive booking experience that drives conversions (Airbnb patterns).

## Typography

**Primary Font**: Inter (Google Fonts) - excellent French character support, professional appearance
- Headlines: 32px/36px (font-semibold) for page titles
- Section Titles: 24px/28px (font-semibold)
- Body Text: 16px/24px (font-normal) - optimal for French text readability
- Labels/Metadata: 14px/20px (font-medium)
- Small Text: 12px/16px (font-normal) for captions

**Secondary Font**: Space Grotesk for accent elements (logos, feature callouts)

## Layout System

**Spacing Units**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: 2, 4 (between related elements)
- Component spacing: 6, 8 (within cards, forms)
- Section spacing: 12, 16, 20 (between major sections)
- Page margins: 16, 24 (responsive container padding)

**Grid Structure**:
- Room cards: 3 columns (lg:grid-cols-3 md:grid-cols-2 grid-cols-1)
- Dashboard metrics: 4 columns (lg:grid-cols-4)
- Form layouts: 2 columns for efficiency
- Container: max-w-7xl with px-6

## Component Library

### Navigation
**Main Header**: Sticky navigation with logo, search bar, user profile dropdown
- Height: 16 units (h-16)
- SSO indicators: Small badge showing auth method (Google/GitHub icons)
- French navigation labels: "Accueil", "Mes Réservations", "Chambres", "Profil"

### Room Cards
**Airbnb-Inspired Design**:
- Card structure: Image (aspect-ratio-4/3), room name, capacity/amenities icons, availability indicator, price per night
- Hover: Subtle elevation increase (shadow-lg)
- Quick booking button overlay on hover
- Status badges: "Disponible", "Réservé", "Complet"

### Calendar Component
**Monthly View**: Material Design-influenced calendar
- Large date cells (min-h-24) with availability dots
- Color-coded bookings visible at-a-glance
- Click interaction opens booking modal
- French date formatting (jour/mois/année)

### Booking Flow
**Modal-Based**: 
- Step indicator: 3 steps ("Dates", "Voyageurs", "Confirmation")
- Form fields: Generous spacing (gap-6), clear validation
- Guest information: Number of guests, special requests
- CTA: "Confirmer la réservation" (prominent, w-full button)

### Dashboard Components
**Metrics Cards**: 
- 4-column grid showing key stats
- Icon + number + label pattern
- Subtle borders (border-gray-200)
- Padding: p-6

**Booking List Table**:
- Striped rows for readability
- Action buttons column (right-aligned)
- Sortable headers with French labels
- Status pills with semantic meaning

### Authentication
**SSO Interface**:
- Centered auth card (max-w-md)
- Provider buttons: Full-width, branded (Google, GitHub colors)
- Security badges below: "Authentification Sécurisée", "Cryptage SSL"
- Enterprise messaging: "Connexion SSO d'Entreprise"

### Forms
**Enterprise Form Standards**:
- Label above input pattern
- Required field indicator: Asterisk + "(obligatoire)"
- Validation: Inline error messages in French
- Inputs: h-12 with rounded-lg, border focus states
- Helper text: text-sm, text-gray-600

## Images

**Hero Section**: Full-width hero with cozy bedroom image
- Image: Welcoming bed and breakfast room with warm lighting
- Overlay: Semi-transparent gradient (bottom to top)
- Headline overlay: "Réservez Votre Chambre d'Hôtes Idéale"
- CTA buttons with blurred backgrounds (backdrop-blur-sm)
- Height: h-[500px]

**Room Card Images**: 
- High-quality bedroom photos (suites, double rooms, family rooms)
- Aspect ratio: 4:3 for consistency
- Lazy loading for performance

**Trust Indicators**:
- Security badge icons (small, 24x24px)
- Enterprise customer logos (if applicable)

## Enterprise Security Visual Elements

**Security Indicators**:
- Lock icons next to secure actions
- SSL badge in footer
- "Connexion Sécurisée" badge in header
- Role badges: Subtle pills showing "Administrateur", "Utilisateur"

**Trust Elements**:
- Encryption badge in auth flows
- Compliance logos (GDPR, ISO) in footer
- Audit trail timestamps in booking details

## French Language Considerations

- Date formats: "14 janvier 2024" style
- Time: 24-hour format (14:00 instead of 2:00 PM)
- Proper accent support in all typography
- Error messages: Polite, professional tone ("Veuillez...", "Merci de...")
- Button text: Action-oriented ("Réserver", "Confirmer", "Annuler")

## Page Layouts

**Homepage**: Hero + Search section + Featured rooms grid (3 columns) + Trust/Features section (2 columns) + CTA section

**Rooms Listing**: Filter sidebar (left, 1/4 width) + Room cards grid (3 columns, 3/4 width)

**Booking Dashboard**: Metrics row (4 columns) + Booking table + Quick actions sidebar

**Room Detail**: Image gallery (large) + Booking form (right sidebar, 1/3 width) + Amenities list + Availability calendar