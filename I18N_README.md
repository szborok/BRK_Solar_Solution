# Internationalization (i18n) Setup for BRK Solar Solution

## Overview
This website supports 3 languages:
- 🇬🇧 **English (en)** - Default
- 🇩🇪 **German (de)**  
- 🇭🇺 **Hungarian (hu)**

## Technology Stack
- **next-intl** - Official Next.js 13+ App Router i18n solution
- **TypeScript** - Type-safe translations
- **Middleware-based routing** - Automatic locale detection and routing

## Project Structure

```
/
├── app/
│   ├── [locale]/           # Locale-specific pages
│   │   ├── layout.tsx      # Root layout with i18n provider
│   │   └── page.tsx        # Home page
│   └── globals.css
├── components/             # All components use useTranslations()
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TargetAudience.tsx
│   ├── Services.tsx
│   ├── HowWeWork.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
├── messages/              # Translation files
│   ├── en.json           # English translations
│   ├── de.json           # German translations
│   └── hu.json           # Hungarian translations
├── middleware.ts         # Locale detection & routing
└── i18n.ts              # i18n configuration
```

## How It Works

### 1. Middleware (middleware.ts)
Automatically detects user's preferred language and redirects to appropriate locale:
- Checks `Accept-Language` header
- Remembers user's choice via cookie
- URLs: `/` (English), `/de` (German), `/hu` (Hungarian)

### 2. Layout (app/[locale]/layout.tsx)
Wraps the entire app with `NextIntlClientProvider` to make translations available.

### 3. Translation Files (messages/*.json)
Structured JSON files with nested keys for easy management:
```json
{
  "header": {
    "services": "Our Services",
    "about": "About Us"
  },
  "hero": {
    "title": "Powering a Greener Future"
  }
}
```

### 4. Components
Use the `useTranslations` hook to access translations:
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('header');
  
  return <h1>{t('services')}</h1>;
}
```

## Adding New Translations

### Step 1: Add to Translation Files
Update all three files: `messages/en.json`, `messages/de.json`, `messages/hu.json`

**Example:**
```json
{
  "newSection": {
    "title": "New Section Title",
    "description": "Description text"
  }
}
```

### Step 2: Use in Component
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function NewSection() {
  const t = useTranslations('newSection');
  
  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  );
}
```

## Language Switcher
The `LanguageSwitcher` component is already integrated in the header:
- Desktop: Shows flag + language name
- Mobile: Shows in mobile menu
- Dropdown with all available languages
- Persists across page navigation

## URL Structure
- English: `https://yoursite.com/` or `https://yoursite.com/en`
- German: `https://yoursite.com/de`
- Hungarian: `https://yoursite.com/hu`

## Components Status

### ✅ Fully Translated
- Header (with language switcher)
- Hero

### 🔄 Needs Translation Implementation
The following components have translation files ready but need code updates:
- TargetAudience
- Services
- HowWeWork
- FAQ
- Contact
- Footer

## Pattern to Update Components

### Before:
```tsx
export default function MyComponent() {
  return <h1>Hardcoded Text</h1>;
}
```

### After:
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('myComponent');
  return <h1>{t('title')}</h1>;
}
```

## Translation File Keys Reference

| Component | Translation Key | Purpose |
|-----------|----------------|---------|
| Header | `header` | Navigation menu |
| Hero | `hero` | Hero section titles and buttons |
| TargetAudience | `targetAudience` | Residential/Commercial sections |
| Services | `services` | Service cards |
| HowWeWork | `howWeWork` | Process steps |
| FAQ | `faq` | Questions and answers |
| Contact | `contact` | Contact form and info |
| Footer | `footer` | Footer links and info |

## Development Workflow

1. **Add new text content:**
   - Add to all 3 translation files first
   - Use descriptive, nested keys
   - Keep structure consistent

2. **Update component:**
   - Import `useTranslations`
   - Get translator: `const t = useTranslations('section')`
   - Replace text: `{t('key')}`

3. **Test all languages:**
   - Switch languages using the language switcher
   - Check all pages and sections
   - Verify layout works in all languages

## Tips & Best Practices

- ✅ Use clear, hierarchical keys: `hero.title` not `heroTitle`
- ✅ Keep translations in sync across all 3 files
- ✅ Use consistent terminology across pages
- ✅ Test long German words (they can break layouts!)
- ✅ Consider text length differences between languages
- ❌ Don't hardcode any user-facing text in components
- ❌ Don't forget to update all 3 language files

## Continuing the Translation Work

To complete the internationalization, update the remaining components following the pattern shown in Header.tsx and Hero.tsx:

1. Import `useTranslations` from 'next-intl'
2. Call `const t = useTranslations('componentName')` at top of component
3. Replace all hardcoded strings with `{t('key')}`
4. The translation keys are already defined in messages/*.json files

All translation content is already prepared and ready to use!