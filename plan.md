# Multi-Language Web Portal Architectural Plan

## Overview
This document outlines the architecture for a scalable, high-performance multi-language web portal for Vitabirr, supporting English ('en'), Somali ('so'), Amharic ('am'), and Afaan Oromoo ('om').

## 1. i18n Architecture

### Data Storage & Folder Structure
- **Current Strategy**: Centralized in `src/i18n/translations.ts`.
- **Proposed Scalable Strategy**:
  - `src/i18n/locales/`
    - `en.json`: Primary source of truth.
    - `so.json`: Somali translations.
    - `am.json`: Amharic (Ge'ez script) translations.
    - `om.json`: Afaan Oromoo translations.
  - **Reasoning**: JSON files allow for easier integration with translation management systems (TMS) and prevent `translations.ts` from becoming a multi-thousand line file that causes IDE lag or syntax errors.

### Language Detection Logic
1. **User Preference**: Check `localStorage` for a saved `preferred_language`.
2. **Browser Setting**: Check `navigator.language` to see if the user's browser is set to one of our supported locales.
3. **Fallback**: Default to English ('en').

### Fallback Logic
- The `t()` function in `LanguageContext` will first look for the key in the active language.
- If the key is missing or the value is an empty string, it will recursively look for the key in the English ('en') dictionary.
- This ensures the UI never breaks or shows raw keys to the user.

## 2. Database Schema (For Dynamic Content)
If Vitabirr moves beyond static text to dynamic content (blogs, team bios) stored in a database (e.g., Supabase):

### Table: `translations`
- `id` (UUID, PK)
- `key` (Text, Unique): e.g., "hero.title"
- `en` (Text)
- `so` (Text)
- `am` (Text)
- `om` (Text)
- `updated_at` (Timestamp)

### Alternative (JSONB):
For tables like `blog_posts`:
- `id` (UUID)
- `content` (JSONB): `{"en": "...", "so": "...", "am": "..."}`
- **Reasoning**: Easier to query the whole object at once and select the specific key in the frontend.

## 3. Content Migration Strategy
1. **Extraction**: Use a script or manual audit to move all hardcoded strings from `.tsx` files into `src/i18n/locales/en.json`.
2. **Translation Queue**: Send `en.json` to professional translators for Somali, Amharic, and Afaan Oromoo.
3. **Validation**: Use native speakers to verify natural phrasing, especially for technical fintech terms in Somali and the Ge'ez script rendering for Amharic.
4. **Implementation**: Replace hardcoded instances with `t.section.key`.

## 4. Current Critical Path (Immediate Actions)

### Phase 1: Critical Fixes
- **Action**: Fix syntax errors in `src/i18n/LanguageContext.tsx` (Lines 258, 259, 261).
- **Owner**: `quick_fix_engineer`

### Phase 2: Structural Refactor
- **Action**: Split `translations.ts` into individual JSON files if size exceeds 500 lines.
- **Owner**: `frontend_engineer`

### Phase 3: Somali Integration
- **Action**: Ensure `Registration.tsx` and `VitabirrETSwitch.tsx` are fully mapped to the Somali dictionary.
- **Owner**: `frontend_engineer`

## 5. Risk Management
- **Font Rendering**: Amharic (Ge'ez) requires specific font support to look professional. Ensure `Inter` or a fallback font handles these characters correctly.
- **RTL Support**: If Arabic-script languages are added later, the entire CSS layout will need an audit. (Somali uses Latin script, so not an immediate risk).
