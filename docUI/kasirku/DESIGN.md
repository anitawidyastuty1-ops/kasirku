---
name: KasirKu
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1c'
  on-surface-variant: '#4f4632'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#817660'
  outline-variant: '#d3c5ac'
  surface-tint: '#775a00'
  primary: '#775a00'
  on-primary: '#ffffff'
  primary-container: '#ffc61a'
  on-primary-container: '#6e5400'
  inverse-primary: '#f6be0a'
  secondary: '#7d5800'
  on-secondary: '#ffffff'
  secondary-container: '#febb30'
  on-secondary-container: '#6d4c00'
  tertiary: '#0053db'
  on-tertiary: '#ffffff'
  tertiary-container: '#bfcdff'
  on-tertiary-container: '#004dcc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf98'
  primary-fixed-dim: '#f6be0a'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#5a4300'
  secondary-fixed: '#ffdea9'
  secondary-fixed-dim: '#febb30'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4100'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#fcf9f8'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Epilogue
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  headline-md:
    fontFamily: Epilogue
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  title-lg:
    fontFamily: Epilogue
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  currency-display:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system establishes a warm, ultra-clear, and welcoming retail work environment tailored specifically for Indonesian neighborhood grocery stores (*warung kelontong*). The aesthetic merges modern pragmatic minimalism with approachable merchant warmth. 

The visual personality hinges on three core pillars:
- **Instant Recognition & Warmth:** A friendly, neighborhood familiarity that removes software intimidation for retail owners and frontline staff alike.
- **Operational Clarity:** High legibility, distinct visual chunking, and immediate feedback designed for high-turnover daily checkout shifts under varying lighting conditions.
- **Tactile Trust:** Grounded surfaces and structured containers that convey financial accuracy and dependable inventory control.

The system adopts a modern warm-minimal style: crisp containers, subtle amber glow accents, distinct border lines, and zero visual clutter to ensure lightning-fast transaction throughput.

## Colors

The palette is engineered for prolonged cashier usage on tablets and POS desktop displays. It avoids harsh stark whites and cold grays in favor of warm, sunlight-tempered undertones.

### Roles & Guidelines
- **Primary (`#FFC61A`):** The signature KasirKu energetic sunlit yellow. Reserved strictly for key transactional actions (e.g., "Bayar / Pay", primary cart CTA, active status highlights). Always paired with `#1E1E1E` text to guarantee AA/AAA compliance; never pair yellow with white text.
- **Secondary (`#D99B00`):** Golden ochre used for active press states, focus outlines on yellow interactive controls, and subtle categorical badges.
- **Tertiary (`#2563EB`):** A functional utility sapphire blue used exclusively for systemic notices, digital payment indicators (e.g., QRIS, bank transfers), and active receipt sync status.
- **Neutral Primary (`#1E1E1E`):** A warm dark charcoal providing peak contrast for pricing, SKU numbers, and body text without the clinical harshness of `#000000`.
- **Canvas & Surface System:** 
  - Base canvas background: Soft warm cream `#FBF9F4`.
  - Surface containers (cards, sidebars, tables): Crisp warm white `#FFFFFF`.
  - Subtle divider/stroke: Warm parchment sand `#E9E4D8`.
- **Semantic Feedback:**
  - Success: `#16A34A` (Cash received, payment complete).
  - Warning/Pending: `#D97706` (Low stock warning, unpaid balance).
  - Destructive: `#DC2626` (Void transaction, clear cart, cancel order).

## Typography

The type system blends friendly, geometric personality with high-density data utility:
- **Headlines & Store Titles:** Geometric and approachable (`Epilogue`) providing welcoming warmth, rounded structure, and community retail presence for modal headers, category dividers, and store banners.
- **Numbers, Data Tables & Body UI:** Precision-focused sans (`Inter`) used across catalog grids, scanned lists, numerical quantity steppers, and currency totals (`Rp`). 
- **Tabular Figures:** Always apply `font-variant-numeric: tabular-nums` across all pricing, cart totals, and inventory balance counts to ensure strict vertical column alignment across long receipts and transaction histories.

## Layout & Spacing

KasirKu is engineered as an ergonomic, split-surface POS interface:
- **POS Split Layout (Desktop & Landscape Tablets ≥1024px):** 
  - Catalog and product navigation occupy a fluid 7-column region.
  - Active Order Cart & NumPad checkout occupy a fixed 5-column (min 380px, max 440px) pinned right panel.
- **Countertop Compact (Tablets 768px - 1023px):**
  - Grid shifts to 2–3 item cards per row.
  - Cart collapses into an anchored bottom drawer with an elevated sticky action bar displaying item count, subtotal, and "Lihat Keranjang" (View Cart).
- **Mobile Handheld (<768px):**
  - Single column with full-width horizontal search and category chip scroller.
  - Bottom sticky navigation bar optimized for single-thumb operations during stock checks or mobile cashiering.
- **Touch Ergonomics:** All touch targets across buttons, category selectors, and keypad digits must preserve a minimum tap footprint of 48px × 48px to prevent erroneous inputs during fast checkouts.

## Elevation & Depth

Visual depth is achieved through structural tonal layering and warm, ambient contact shadows rather than high-contrast drops:

- **Flat Canvas:** Surface floor `#FBF9F4`.
- **Level 1 (Cards, Item Grid Tiles, Inputs):** Solid `#FFFFFF` fill bounded by a 1px border of `#E9E4D8`. No shadow in resting state. On hover/focus, cards shift to a subtle warm glow: `0px 4px 12px rgba(217, 155, 0, 0.08)`.
- **Level 2 (Active Cart Sidebar, Modals, Flyouts):** Solid `#FFFFFF` floating over base canvas with ambient shadow: `0px 8px 24px -4px rgba(30, 30, 30, 0.06), 0px 2px 6px -1px rgba(30, 30, 30, 0.04)`.
- **Level 3 (Sticky Payment Summary & Floating Modals):** Crisp white elevation backed by `0px 16px 36px -6px rgba(30, 30, 30, 0.12)` with a 1px border in `#E9E4D8`.

## Shapes

The interface embraces balanced, friendly geometric curves:
- Standard controls, text fields, catalog product cards, and list rows use an 8px (`0.5rem`) corner radius.
- Larger structural panels, modals, and the cart ledger container use 16px (`1rem`).
- Quick-filter category pills, price badge chips, and quantity increment steppers use fully pill-shaped (`rounded-full`) contours to accentuate friendly accessibility.

## Components

### Buttons
- **Primary Action (e.g., "Bayar / Pay", "Simpan Transaksi"):** Solid vibrant yellow `#FFC61A` background, text `#1E1E1E` font-semibold, 48px minimum height. Active state transitions to `#D99B00`. Focus ring: 3px solid rgba(217, 155, 0, 0.35).
- **Secondary Action (e.g., "Cetak Struk", "Tahan"):** Surface white `#FFFFFF` with 1px border `#E9E4D8`, text `#1E1E1E`. Hover background `#F5F2EA`.
- **Destructive (e.g., "Hapus Transaksi", "Batalkan"):** Surface `#FEE2E2` with text `#DC2626`. Active state `#FECACA`.

### Product Cards
- Clean white tile with 1px border `#E9E4D8`. Top section contains product image or category icon thumbnail; bottom section displays item name (`title-md` truncated to 2 lines), stock indicator badge, and bold pricing in `Inter` (`#1E1E1E`). 
- Tapping item increments active cart count with a transient 150ms scale-down haptic animation.

### Category Chips
- Horizontal scrolling container. Unselected chips: transparent background, 1px border `#E9E4D8`, text `#666155`. Selected chip: solid `#1E1E1E` text `#FFFFFF` or solid `#FFC61A` text `#1E1E1E` for active highlight.

### Input Fields & Barcode Scanners
- Background `#FFFFFF`, 1px border `#D7D1C3`, padding `space-sm space-md`, text `#1E1E1E`.
- Active focus state: border `#FFC61A` with a 2px outer aura in `rgba(255, 198, 26, 0.30)`.
- Barcode search input features an integrated right-aligned trailing action icon button for triggering camera/scanner mode.

### Active Order List (Cart Items)
- Compact row items separated by 1px solid `#F0ECE1`.
- Left: quantity modifier (+ / - controls) with minimum 36px hit targets.
- Center: item name and unit price.
- Right: line item subtotal formatted in tabular figures.

### Cash Payment Quick-Preset Buttons
- Denomination grid ($Rp 10.000$, $Rp 20.000$, $Rp 50.000$, $Rp 100.000$, "Uang Pas"): Neutral white buttons with bold typography allowing single-tap tender input during rapid checkout queues.