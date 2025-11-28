# SpringboardPro WordPress Integration
## For Elementor FREE Version + Gedit Theme

---

## ⚠️ IMPORTANT: Elementor Free Limitations

Elementor Free does NOT have:
- ❌ Theme Builder (no custom header/footer templates)
- ❌ Custom CSS per widget in Style tab

Elementor Free DOES have:
- ✅ CSS Classes field in Advanced tab
- ✅ HTML widget for custom code
- ✅ All basic widgets

**Solution:** Install "Header Footer Elementor" free plugin OR use theme's built-in header/footer settings.

---

## 📋 STEP-BY-STEP INSTRUCTIONS

### STEP 1: Add Custom CSS (REQUIRED)

1. Go to **WordPress Admin → Appearance → Customize**
2. Click **Additional CSS**
3. Open `wordpress-custom-css.css` file
4. **Copy ALL the code** and paste it
5. Click **Publish**

---

### STEP 2: Install Header Footer Plugin (RECOMMENDED)

Since Elementor Free doesn't have Theme Builder:

1. Go to **Plugins → Add New**
2. Search for **"Header Footer Elementor"** (by developer Starter Templates)
3. Click **Install Now** → **Activate**
4. Go to **Appearance → Header Footer Builder**
5. Click **Add New** → Select "Header" → Create
6. Design your header with Elementor
7. Add class `spb-header` to the main section

**Alternative:** Use Gedit theme's header settings if available.

---

### STEP 3: Create Your Header

1. After creating header template, click **Edit with Elementor**
2. Add a **Section** → set to **Full Width**
3. Add widgets:
   - **Image** or **Heading** for logo
   - **Nav Menu** widget for navigation
   - **Button** for CTA
4. Select the main **Section** (click 6-dot handle)
5. Go to **Advanced** tab → **CSS Classes**
6. Type: `spb-header`
7. For the CTA button widget, add class: `spb-header-cta`
8. Click **Publish**

---

### STEP 4: Edit Home Page - Hero Section

1. Go to **Pages → Home → Edit with Elementor**
2. Select or create your hero **Section**
3. Click the **Section** settings (6-dot icon)
4. Go to **Advanced** tab → **CSS Classes**
5. Add: `spb-hero`
6. Add your content widgets inside

**For Buttons:**
1. Add a **Button** widget for primary action
2. Select the button widget
3. Go to **Advanced** → **CSS Classes**
4. Add: `spb-btn-primary`

5. Add another **Button** widget for secondary action
6. Add class: `spb-btn-secondary`

---

### STEP 5: Add Animated Graphics (Optional)

1. In the hero section, add an **HTML** widget
2. Copy this code:

```html
<style>
.spb-orbit-box {
    position: relative;
    width: 350px;
    height: 350px;
    margin: 0 auto;
}
.spb-orbit {
    position: absolute;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 50%;
    animation: spbRotate 30s linear infinite;
}
.spb-o1 { width: 100%; height: 100%; top: 0; left: 0; }
.spb-o2 { width: 70%; height: 70%; top: 15%; left: 15%; animation-direction: reverse; }
.spb-o3 { width: 40%; height: 40%; top: 30%; left: 30%; }
@keyframes spbRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.spb-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: #ffffff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
}
</style>
<div class="spb-orbit-box">
    <div class="spb-orbit spb-o1"></div>
    <div class="spb-orbit spb-o2"></div>
    <div class="spb-orbit spb-o3"></div>
    <div class="spb-center">🚀</div>
</div>
```

---

### STEP 6: Create VMV Section (Vision/Mission/Values)

1. Add a **Section** below the hero
2. Add class `spb-gray` to the section (for gray background)
3. Create an **Inner Section** with 3 columns
4. In each column, add:
   - Icon Box or Icon + Heading + Text widgets
5. Select each **column** and add class: `spb-vmv-card`

---

### STEP 7: Create Focus Cards (Burgundy Cards)

1. Add a **Section** → add class: `spb-gray` or leave white
2. Create 3 columns
3. Add content to each column
4. Select each **column** and add class: `spb-focus-card`

---

### STEP 8: Create CTA Section

1. Add a **Section**
2. Add class: `spb-black`
3. Add your CTA content (heading, text, button)

---

### STEP 9: Create Footer

**Using Header Footer Plugin:**
1. Go to **Appearance → Header Footer Builder**
2. Click **Add New** → Select "Footer"
3. Design your footer with Elementor
4. Select the main **Section**
5. Add class: `spb-footer`
6. For copyright row, add class: `spb-footer-bottom`

**Using Theme Footer:**
If using Gedit theme's footer, add custom CSS to style it.

---

### STEP 10: Style Contact Page

1. Edit your contact page with Elementor
2. Add a **Form** widget (or use Contact Form 7)
3. Select the form container/column
4. Add class: `spb-form`

---

## 🏷️ CSS CLASS QUICK REFERENCE

### Sections
| Class | Use For |
|-------|---------|
| `spb-header` | Header section |
| `spb-hero` | Hero/banner section |
| `spb-page-hero` | Inner page headers |
| `spb-dark` | Burgundy background section |
| `spb-black` | Black background section |
| `spb-gray` | Light gray background section |
| `spb-footer` | Footer section |
| `spb-footer-bottom` | Footer copyright row |

### Cards/Containers
| Class | Use For |
|-------|---------|
| `spb-card` | Service/feature cards (white) |
| `spb-vmv-card` | Vision/Mission/Values cards |
| `spb-focus-card` | Burgundy feature cards |
| `spb-form` | Contact form container |

### Buttons
| Class | Use For |
|-------|---------|
| `spb-header-cta` | Header CTA button |
| `spb-btn-primary` | Primary button (white) |
| `spb-btn-secondary` | Secondary button (outline) |

### Counters
| Class | Use For |
|-------|---------|
| `spb-stats` | Counter on light background |
| `spb-stats-light` | Counter on dark background |

### Utilities
| Class | Effect |
|-------|--------|
| `spb-text-white` | White text |
| `spb-text-burgundy` | Burgundy text |
| `spb-rounded` | Rounded corners |
| `spb-shadow` | Box shadow |

---

## 📝 CONTENT TO UPDATE

### Header
- Logo: "SpringboardPro" or upload image
- Menu: Home | Who We Are | What We Offer | Why Us | Contact
- CTA Button: "Get in Touch"

### Hero
- Title: "PMO Consulting. Simplified. Scaled. Successful."
- Subtitle: "Propel your success from strategy to execution"
- Primary Button: "Get Started"
- Secondary Button: "Explore Services"

### Footer
- Phone: +91 9148317322
- Email: reachus@springboardpro.in
- Address: No.17, 2nd Floor, 7th Main Road, II Stage Indiranagar, Bangalore 560038

---

## 🔧 HOW TO ADD CSS CLASS IN ELEMENTOR FREE

1. Select any widget, column, or section
2. Click the **Advanced** tab (in left panel)
3. Find **CSS Classes** field
4. Type the class name (without the dot)
5. Multiple classes: separate with spaces

Example: `spb-card spb-shadow`

---

## ✅ CHECKLIST

- [ ] Custom CSS added to Customizer
- [ ] Header Footer plugin installed (if needed)
- [ ] Header has `spb-header` class
- [ ] Hero has `spb-hero` class
- [ ] VMV cards have `spb-vmv-card` class
- [ ] Service cards have `spb-card` class
- [ ] Footer has `spb-footer` class
- [ ] Contact form has `spb-form` class
- [ ] All content updated with SpringboardPro info
- [ ] Cache cleared

---

## 🆘 TROUBLESHOOTING

**CSS not working?**
1. Clear browser cache (Ctrl+Shift+R)
2. Clear WordPress cache (if using cache plugin)
3. Check class name spelling (no dots, lowercase)
4. Make sure CSS is saved in Additional CSS

**Header not fixed?**
- Make sure you added `spb-header` to the Section, not inner elements
- Check if theme has conflicting header styles

**Colors still showing old theme colors?**
- The `!important` declarations should override theme styles
- If not, check theme settings for color options and set to neutral

**Mobile menu not working?**
- This depends on the Nav Menu widget and theme
- May need additional CSS for mobile styling

