# Unit Converter - Design System

## Overview
Modern, clean unit converter web application with a professional light theme design. Built using Tailwind CSS with a focus on clarity, usability, and visual hierarchy.

---

## Color Palette

### Primary Colors
- **Primary Blue**: `#135bec`
  - Used for: Active states, CTAs, icons, accents
  - Variations: `#135bec20` (10% opacity), `#135bec10` (5% opacity)

### Background Colors
- **Background Light**: `#f6f6f8`
  - Main app background in light mode
- **Background Dark**: `#101622`
  - Main app background in dark mode (future support)
- **Card Background Light**: `#ffffff` (white)
- **Card Background Dark**: `#1a2130`

### Text Colors
- **Primary Text**: `#111318`
  - Headlines, primary content
- **Secondary Text**: `#616f89`
  - Labels, secondary information, placeholders
- **Border Color**: `#dbdfe6`

---

## Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Display**: Inter, sans-serif

### Font Sizes
- **4xl**: Page headings (36px equivalent)
- **xl**: Section headings (20px equivalent)
- **lg**: App title (18px equivalent)
- **base**: Body text (16px equivalent)
- **sm**: Labels, buttons (14px equivalent)
- **xs**: Meta information (12px equivalent)
- **11px**: Category labels (uppercase)
- **10px**: Smallest text (account info)

### Font Weights
- **Black (900)**: Main page headings
- **Bold (700)**: Section titles, nav items
- **Semibold (600)**: Labels, button text
- **Medium (500)**: Input values
- **Regular (400)**: Body text

---

## Layout Structure

### Overall Layout
```
┌─────────────────────────────────────┐
│  [Sidebar]  │  [Main Content]       │
│   (288px)   │  (flex-1)             │
│             │                        │
└─────────────────────────────────────┘
```

### Sidebar (w-72 = 288px)
- Background: White (light) / `#1a2130` (dark)
- Border: Right border with `#dbdfe6` / gray-800
- Padding: 24px (p-6)
- Structure:
  - App logo and title
  - Navigation categories
  - Premium upsell card
  - User profile section

### Main Content
- Max width: 1024px (centered)
- Padding: 32px horizontal, 40px vertical
- Background: `#f6f6f8` (light mode)

---

## Components

### Navigation Items
- **Default State**:
  - Color: `#616f89` (secondary text)
  - Hover: `bg-gray-100` background
  - Padding: `px-3 py-2.5`
  - Border radius: `rounded-xl` (12px)

- **Active State**:
  - Background: `#135bec20` (primary with 20% opacity)
  - Text color: `#135bec` (primary)
  - Font weight: Semibold

- **Icon + Text Layout**:
  - Icon size: 22px
  - Gap: 12px (gap-3)

### Cards
- **Container**:
  - Background: White / `#1a2130` (dark)
  - Border: `#dbdfe6` / gray-800
  - Border radius: `rounded-xl` (12px)
  - Shadow: `shadow-sm`
  - Padding: 32px (p-8)

- **Card Header**:
  - Icon + Title layout
  - Icon: Primary color
  - Title: xl, bold weight
  - Margin bottom: 24px (mb-6)

### Input Fields
- **Dimensions**:
  - Height: 56px (h-14)
  - Width: Full container width
  - Border radius: `rounded-xl` (12px)

- **Styling**:
  - Background: `#f6f6f8` / gray-900 (dark)
  - Border: `#dbdfe6` / gray-700 (dark)
  - Text: xl size, medium weight
  - Padding: 16px (px-4)

- **Focus State**:
  - Ring: 2px primary color
  - Border: Transparent
  - Transition: All properties

- **Placeholder**:
  - Text: "0.00"
  - Type: Number input with step="any"

### Buttons
- **Primary Button** (History):
  - Background: White / gray-800 (dark)
  - Border: `#dbdfe6` / gray-700
  - Padding: `px-4 py-2`
  - Border radius: `rounded-lg` (8px)
  - Shadow: `shadow-sm`
  - Hover: `bg-gray-50`

- **Text Buttons**:
  - Primary action: Primary color, semibold, hover underline
  - Secondary action: `#616f89`, hover to `#111318`

### Icons
- **Icon System**: Material Symbols Outlined
- **Default Settings**:
  - FILL: 0
  - Weight: 400
  - GRAD: 0
  - Size: 24px (opsz)

- **Sync Icon Container**:
  - Size: 40px (size-10)
  - Border radius: Full (circle)
  - Background: `#135bec10` (primary 10% opacity)
  - Icon color: Primary

---

## Spacing System

### Gaps
- **Extra Small**: 4px (gap-1)
- **Small**: 8px (gap-2)
- **Medium**: 12px (gap-3)
- **Large**: 16px (gap-4)
- **XL**: 24px (gap-6)
- **2XL**: 32px (gap-8)

### Padding
- **Card**: 32px (p-8)
- **Sidebar**: 24px (p-6)
- **Button**: 16px/8px (px-4 py-2)
- **Nav Item**: 12px/10px (px-3 py-2.5)
- **Input**: 16px (px-4)

### Margins
- **Section Spacing**: 24px (mb-6)
- **Heading Bottom**: 40px (mb-10)
- **Footer Top**: 48px (mt-12)

---

## Border Radius

- **DEFAULT**: 0.25rem (4px)
- **lg**: 0.5rem (8px) - Small buttons
- **xl**: 0.75rem (12px) - Cards, inputs, large elements
- **full**: 9999px - Circular elements (avatars, icon containers)

---

## Grid System

### Conversion Row Layout
```css
grid-cols-1 md:grid-cols-[1fr_48px_1fr]
```
- Mobile: Stack vertically (1 column)
- Desktop: [Input] [Icon] [Input] (3 columns)
- Icon column: Fixed 48px width
- Gap: 24px (gap-6)

---

## Responsive Design

### Breakpoints (Tailwind defaults)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Mobile Considerations
- Single column layout for conversion pairs
- Full-width inputs
- Stacked navigation (if sidebar collapses)

---

## Interactive States

### Transitions
- **Default**: `transition-colors duration-200`
- **Focus**: `transition-all` (inputs)
- Colors transition on hover/active states

### Hover Effects
- Navigation items: Background color change
- Buttons: Background lightness change
- Text links: Underline or color change

### Focus States
- Inputs: 2px primary ring, transparent border
- Buttons: System default focus ring

---

## Dark Mode Support

Design includes dark mode classes throughout:
- Toggle via `class="light"` or `class="dark"` on `<html>`
- All components have `dark:` variants defined
- Color scheme switches between light/dark backgrounds and text

**Note**: Dark mode toggle UI not yet implemented in current version

---

## Accessibility

- Semantic HTML elements used throughout
- Proper label/input associations
- Icon text alternatives via data-alt attributes
- Focus states clearly visible
- Sufficient color contrast ratios

---

## Assets & Dependencies

### External Resources
1. **Tailwind CSS**: CDN with forms and container-queries plugins
2. **Google Fonts**: Inter (weights 300-900)
3. **Material Symbols**: Outlined variant

### Custom Styling
- Minimal custom CSS (limited to font loading and active nav states)
- Utility-first approach with Tailwind classes

---

## Component Hierarchy

```
App Container
├── Sidebar
│   ├── Logo & Title
│   ├── Navigation
│   │   ├── Length (active)
│   │   ├── Weight
│   │   ├── Temperature
│   │   └── Speed
│   ├── Premium Card
│   └── User Profile
└── Main Content
    ├── Page Header
    │   ├── Title & Description
    │   └── History Button
    └── Conversion Sections
        ├── Kilometers/Miles Card
        ├── Meters/Feet Card
        └── Centimeters/Inches Card
```

---

## Future Enhancements

### Planned Design Additions
1. Weight conversion page (kg/lb, g/oz)
2. Temperature conversion page (C/F/K)
3. Speed conversion page
4. Dark mode toggle button
5. History modal/drawer
6. Premium features modal
7. Settings panel
8. Mobile sidebar collapse/hamburger menu
9. Conversion animation effects
10. Copy confirmation toast/snackbar

---

## Design Principles

1. **Clarity**: Clear visual hierarchy, readable typography
2. **Consistency**: Unified spacing, color usage, component styling
3. **Simplicity**: Minimal, focused interface without clutter
4. **Professionalism**: Modern aesthetic with subtle shadows and refined details
5. **Responsiveness**: Flexible layout adapting to different screen sizes

---

*Design generated using Google Stitch AI*
*Last updated: 2026-01-28*
