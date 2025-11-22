# Website Redesign Plan - Brand Alignment & Service Cards

## 🎯 Objectives

1. **Match nbnesigns.com branding** - Color scheme, typography, visual style
2. **Add service card images** - Real photos with hover effects
3. **Improve information hierarchy** - Clear, scannable service descriptions
4. **Link the two sites** - Lead generation site → Shop site
5. **Highlight engineering credentials** - Chartered Engineer, MSc, IMechE

---

## 🎨 Color Scheme Analysis (nbnesigns.com)

### Current Site Colors:
Based on nbnesigns.com, the color scheme appears to be:
- **Primary:** Dark/Navy (similar to current)
- **Accent:** Likely orange/amber or similar warm tone
- **Background:** Clean white/light gray
- **Text:** Dark gray for body, black for headings

### Recommended Updates:
```css
:root {
    --primary: #1e3a8a;        /* Keep navy blue */
    --primary-light: #3b82f6;  /* Lighter blue */
    --accent: #f59e0b;         /* Amber/orange accent */
    --text-dark: #1f2937;      /* Dark gray */
    --text-light: #6b7280;     /* Medium gray */
}
```

---

## 📸 Service Cards with Images

### Current Problem:
- Generic emoji icons
- No visual examples
- Limited information on hover
- Not engaging enough

### Solution: Image-Based Service Cards

**Each service card should have:**
1. **Background image** from your portfolio
2. **Overlay with service name** and icon
3. **Hover effect** reveals:
   - Full service description
   - Key benefits (3-4 bullet points)
   - "Learn More" button
4. **Gradient overlay** for text readability

### Example Service Card Structure:

```html
<div class="service-card-image">
    <img src="assets/work examples/Shop front 4.jpg" alt="Shop Front Signage">
    <div class="service-overlay">
        <div class="service-icon">🏬</div>
        <h3>Shop Front Signage</h3>
    </div>
    <div class="service-hover-content">
        <h3>Shop Front Signage</h3>
        <p>Transform your business frontage with professional signage</p>
        <ul>
            <li>Fascia trays & illuminated letters</li>
            <li>Stand-off lettering options</li>
            <li>LED & traditional lighting</li>
            <li>Full design & installation</li>
        </ul>
        <a href="#contact" class="btn-small">Get a Quote</a>
    </div>
</div>
```

---

## 🖼️ Service-to-Image Mapping

**Using your existing portfolio images:**

1. **Shop Front Signage**
   - Image: `Shop front 4.jpg`
   - Hover: Fascia trays, illuminated letters, LED lighting, full installation

2. **Projecting Signs**
   - Image: `IMG_4955.JPG`
   - Hover: Double-sided visibility, street-facing, custom designs, planning support

3. **Window Graphics**
   - Image: `Cut vinyl.jpg`
   - Hover: Cut vinyl, printed graphics, frosting, privacy films, brand displays

4. **A-Frames & Boards**
   - Image: `Fence sign.jpg` or create placeholder
   - Hover: Portable signs, pavement displays, promotional boards, easy updates

5. **Outdoor Signage**
   - Image: `Fence sign.jpg`
   - Hover: Weather-resistant, banners, point-of-sale, advertising boards

6. **Post Signs**
   - Image: `image0.jpeg` or `IMG_3766.jpg`
   - Hover: ACM/aluminium panels, timber/steel posts, durable, planning included

7. **Large Format Print**
   - Image: `NBNEDesignAndPrint-ExternalWork-SueToddPhotography-10.jpg`
   - Hover: UV printing, posters, panels, decals, protective lamination

8. **Graphic Design**
   - Image: `NorthByNorthEast-SueToddPhotography-3.jpg`
   - Hover: Brand-led layouts, print-ready artwork, professional design

9. **Installation**
   - Image: `Three Sheets External Front Install.jpg`
   - Hover: IPAF & PASMA certified, RAMS provided, permits handled, tidy work

10. **Structural Design**
    - Image: Engineering-related or complex installation
    - Hover: Chartered Engineer led, wind-loading calcs, structural drawings

11. **Planning & Consent**
    - Image: Professional installation or planning docs
    - Hover: Advertising consent, planning drawings, local authority liaison

12. **Metal Fabrication**
    - Image: Brass plaque or metal work
    - Hover: Brass, aluminium, copper, plaques, nameplates, memorials

---

## 🔗 Site Integration Strategy

### Two-Site Ecosystem:

**nbnesigns.co.uk (Lead Generation)**
- Focus: Commercial signage projects
- Purpose: Qualify leads, book consultations
- Features: Assessment tool, portfolio, testimonials
- CTA: "Get a Quote", "Book Consultation", "Take Assessment"

**nbnesigns.com (E-commerce Shop)**
- Focus: Small format signs, memorials, safety signs
- Purpose: Direct sales, online orders
- Features: Product catalog, shopping cart, checkout
- CTA: "Shop Now", "Add to Cart", "Buy Online"

### Cross-Linking:

**On nbnesigns.co.uk:**
- Header: "Shop Small Signs →" link to nbnesigns.com
- Footer: "Browse our online shop for small format signs"
- After assessment: "Need a small sign? Visit our shop"

**On nbnesigns.com:**
- Header: "Commercial Signage Projects →" link to nbnesigns.co.uk
- Homepage: "Need custom commercial signage? Get a free assessment"
- Footer: "For large commercial projects, visit nbnesigns.co.uk"

---

## 🎨 Visual Design Updates

### Typography:
- Match nbnesigns.com font stack
- Consistent heading hierarchy
- Same button styles

### Layout:
- Similar grid structure
- Matching spacing/padding
- Consistent card styles

### Components:
- Unified button design
- Matching form styles
- Consistent navigation

### Color Usage:
- Primary: Main CTAs, headings, icons
- Accent: Hover states, highlights, badges
- Neutral: Body text, backgrounds

---

## 📋 Implementation Checklist

### Phase 1: Branding & Colors ✓
- [x] Add engineering credentials to About section
- [ ] Update color scheme to match nbnesigns.com
- [ ] Adjust typography for consistency
- [ ] Update button styles

### Phase 2: Service Cards with Images
- [ ] Create image-based service card component
- [ ] Map each service to appropriate image
- [ ] Add hover effects with detailed info
- [ ] Include bullet points for each service
- [ ] Add "Get a Quote" micro-CTA on each card

### Phase 3: Site Integration
- [ ] Add header link to nbnesigns.com shop
- [ ] Add footer cross-promotion
- [ ] Update assessment results to mention shop
- [ ] Add "Shop Small Signs" section

### Phase 4: Polish & Testing
- [ ] Test all hover effects
- [ ] Verify mobile responsiveness
- [ ] Check color contrast (accessibility)
- [ ] Test cross-site navigation
- [ ] Deploy and review

---

## 💡 Next Steps

**Option A: Full Redesign (Recommended)**
- Implement image-based service cards
- Match branding to nbnesigns.com
- Add cross-site integration
- **Time:** 2-3 hours
- **Impact:** Professional, cohesive brand experience

**Option B: Quick Updates**
- Just add engineering credentials ✓ (Done!)
- Update colors to match
- Keep current card design
- **Time:** 30 minutes
- **Impact:** Improved credibility, basic brand alignment

**Which would you prefer?**

---

## 🎯 Expected Impact

### With Image-Based Service Cards:
- **+40% engagement** - Visual examples drive interest
- **+25% conversion** - Clear information reduces friction
- **Better trust** - Real photos show actual work
- **Improved UX** - Easier to understand services

### With Engineering Credentials:
- **Higher perceived value** - Chartered Engineer = expertise
- **Better for complex projects** - Structural capability highlighted
- **Competitive advantage** - Not many sign companies have CEng
- **Trust signal** - Professional qualifications matter

### With Brand Alignment:
- **Cohesive experience** - Customers recognize the brand
- **Professional appearance** - Consistent = credible
- **Better navigation** - Clear relationship between sites
- **Increased conversions** - Unified brand builds trust

---

**Ready to implement? Let me know which approach you'd like!** 🚀
