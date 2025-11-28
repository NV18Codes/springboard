# SpringboardPro WordPress Integration Guide
## For Gedit Theme (Elementor-based)

---

## 📋 STEP-BY-STEP INSTRUCTIONS

### STEP 1: Add Custom CSS to WordPress

**Option A: Via WordPress Customizer (Easiest)**
1. Log in to your WordPress admin dashboard
2. Go to **Appearance → Customize**
3. Click on **Additional CSS**
4. Copy ALL the code from `wordpress-custom-css.css`
5. Paste it in the Additional CSS box
6. Click **Publish**

**Option B: Via Elementor Settings**
1. Go to **Elementor → Settings**
2. Click on **Custom CSS** tab (Pro version)
3. Paste the CSS code
4. Save changes

---

### STEP 2: Edit Header with Elementor

1. Go to **Templates → Theme Builder → Header**
2. Edit your header template
3. Select the header section/container
4. In **Advanced** tab → **CSS Classes**, add: `spb-header`
5. For your CTA button widget, add class: `spb-header-cta`
6. Update the header template

---

### STEP 3: Create/Edit Home Page Sections

#### Hero Section:
1. Edit your home page with Elementor
2. Select the hero section
3. Go to **Advanced** tab → **CSS Classes**
4. Add class: `spb-hero-section`
5. For primary button: add class `spb-hero-btn-primary`
6. For secondary button: add class `spb-hero-btn-secondary`

#### Vision/Mission/Values Cards:
1. Create an Inner Section with 3 columns
2. Add Icon Box widgets to each column
3. Select each column container
4. Add class: `spb-vmv-card`
5. For icon containers, add class: `spb-vmv-icon`

#### Focus/Services Section:
1. Create cards using Icon Box or Text widgets
2. Add class: `spb-focus-card` to each card container
3. For numbered badges, add a heading with class: `spb-focus-number`

#### Dark Sections:
1. Select any section you want with burgundy background
2. Add class: `spb-dark-section`

#### Black Sections (CTA):
1. Select your CTA section
2. Add class: `spb-cta-section`

---

### STEP 4: Edit Footer with Elementor

1. Go to **Templates → Theme Builder → Footer**
2. Edit your footer template
3. Select the main footer section
4. Add class: `spb-footer`
5. For the copyright row, add class: `spb-footer-bottom`
6. Update the footer template

---

### STEP 5: Style Contact Page

1. Edit your contact page
2. Select the contact form container
3. Add class: `spb-contact-form`
4. The form inputs and buttons will automatically be styled

---

## 🎨 CSS CLASS REFERENCE

| Class Name | Where to Use | Effect |
|------------|--------------|--------|
| `spb-header` | Header section | Burgundy header with blur |
| `spb-header-cta` | Header button | White CTA button |
| `spb-hero-section` | Hero section | Burgundy background with pattern |
| `spb-hero-btn-primary` | Primary button | White button with shadow |
| `spb-hero-btn-secondary` | Secondary button | Outline button |
| `spb-service-card` | Service cards | White card with hover effect |
| `spb-vmv-card` | VMV cards | Card with top border animation |
| `spb-focus-card` | Focus cards | Burgundy card with pattern |
| `spb-dark-section` | Any section | Burgundy background |
| `spb-black-section` | Any section | Black background |
| `spb-cta-section` | CTA section | Black with gradient |
| `spb-footer` | Footer section | Burgundy footer |
| `spb-contact-form` | Form container | Styled form inputs |
| `spb-stats` | Counter section | Burgundy numbers |
| `spb-stats-light` | Counter (dark bg) | White numbers |

---

## 📝 CONTENT TO UPDATE

### Replace Gedit Content with SpringboardPro Content:

**Header:**
- Logo: "SpringboardPro" (or upload your logo)
- Menu: Home, Who We Are, What We Offer (dropdown), Why Us, Contact
- CTA: "Get in Touch"

**Hero Section:**
- Headline: "PMO Consulting. Simplified. Scaled. Successful."
- Subheadline: "Propel your success from strategy to execution"
- Description: "At SpringboardPro, we go beyond frameworks — we implement projects with professionalism."
- Buttons: "Get Started" | "Explore Services"

**VMV Section:**
- Vision: "To be the trusted strategic transformational partner..."
- Mission: "To empower businesses to thrive and adapt..."
- Values: "Rooted in a commitment to excellence, innovation, integrity..."

**Focus/Services:**
1. Strategic Excellence - "Aligning projects with purpose"
2. Governance Excellence - "Delivering with discipline and control"
3. Execution Excellence - "Turning plans into measurable results"

**Footer:**
- Company: SpringboardPro
- Phone: +91 9148317322
- Email: reachus@springboardpro.in
- Address: No.17, 2nd Floor, 7th Main Road, II Stage Indiranagar, Bangalore 560038

---

## 🔧 ADVANCED: Using Code Snippet Plugin

If you prefer not to use the Customizer:

1. Install **Code Snippets** plugin
2. Go to **Snippets → Add New**
3. Name it: "SpringboardPro Custom CSS"
4. Change type to **CSS**
5. Paste the CSS code
6. Set location to: "Site-wide header"
7. Save and Activate

---

## 📱 CREATING PAGES

### Home Page
1. Edit with Elementor
2. Build sections using Gedit's pre-made blocks
3. Apply the CSS classes as described above

### Inner Pages (Who We Are, Services, etc.)
1. Create new page
2. Edit with Elementor
3. Use class `spb-dark-section` for page header
4. Add your content sections
5. Apply appropriate classes

---

## ✅ CHECKLIST

- [ ] Custom CSS added to WordPress
- [ ] Header updated with `spb-header` class
- [ ] Hero section has `spb-hero-section` class
- [ ] Service cards have `spb-service-card` class
- [ ] Footer has `spb-footer` class
- [ ] Contact form has `spb-contact-form` class
- [ ] All content replaced with SpringboardPro content
- [ ] Logo uploaded/changed
- [ ] Menu updated
- [ ] Contact information updated

---

## 🆘 TROUBLESHOOTING

**CSS not applying?**
- Clear cache (browser + WordPress cache plugin)
- Check if class names are typed correctly
- Ensure CSS is in Additional CSS or properly loaded

**Elementor not saving?**
- Check file permissions
- Increase PHP memory limit
- Disable conflicting plugins

**Colors look different?**
- Check if theme has color settings that override
- Use `!important` in CSS if needed (already included)

---

## 📞 CONTACT INFO TO UPDATE

Replace in all locations:
- **Phone:** +91 9148317322
- **Email:** reachus@springboardpro.in
- **Address:** No.17, 2nd Floor, 7th Main Road, II Stage Indiranagar, Bangalore 560038

