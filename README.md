# Arjita Apartments — Ultra-Premium Real Estate Showcase

A state-of-the-art, high-performance real estate digital experience built with a focus on high-end architectural aesthetics, silky-smooth motion, and industry-leading performance.

---

## Premium Features

### High-End Visuals & Motion
- **Lenis Smooth Scroll**: Integrated inertia-based scrolling for a "heavy," premium feel similar to top-tier design agency portfolios.
- **Architectural Linen Theme**: A curated color palette using museum-grade `#F9F8F6` linen backgrounds and high-contrast charcoal typography.
- **Parallax Hero**: Multi-layered parallax background with dynamic mesh gradients and glowing atmospheric orbs.
- **3D Interactive Tilt**: Amenities and Gallery cards that react to mouse movement in 3D space using Framer Motion.

###  Technical Excellence
- **React 19 & Vite 7**: Leveraging the latest stable ecosystem for maximum performance and developer experience.
- **Route-Based Code Splitting**: Utilizes `React.lazy` and `Suspense` to ensure minimal initial bundle sizes.
- **Smart Intersection Observer**: Sections and heavy assets only render and animate when they enter the viewport.
- **Full SEO Engine**: Dynamic metadata management via `react-helmet-async`, including Open Graph tags and Twitter Cards.

### Responsive & Accessible
- **Mobile-First Luxury**: Fully responsive design that maintains its premium feel across all device types.
- **Keyboard Friendly**: Integrated keyboard listeners (e.g., Escape to close modals) and semantic HTML for screen readers.

### Smart Inquiry System
- **Strict Validation**: Mandatory Email, Name, and Phone validation with real-time visual error feedback.
- **EmailJS Integration**: Direct-to-inbox inquiry delivery without a backend server, utilizing the user's provided email for seamless "Reply-To" functionality.
- **Dynamic Feedback**: Integration with `Sonner` for high-end, non-intrusive notification toasts during form submission.

---

## Technology Stack

| Category | Technology |
| :--- | :--- |
| **Core** | React 19, TypeScript, Vite 7 |
| **Styling** | Tailwind CSS (v3), PostCSS |
| **Animations** | Framer Motion 12 |
| **Scrolling** | Lenis (Custom Smooth Scroll) |
| **Forms** | React Hook Form |
| **Routing** | React Router Dom 7 |
| **Communication** | EmailJS (Browser-to-Email) |
| **Icons** | React Icons |
| **UI Components** | Swiper.js, Sonner (Toasts) |

---

## Setup & Configuration

### 1. EmailJS Integration
This project use [EmailJS](https://www.emailjs.com/) to handle form submissions without a backend. To set it up:

1.  **Create an Account**: Sign up at [emailjs.com](https://www.emailjs.com/).
2.  **Add Email Service**: Connect your email provider (e.g., Gmail, Outlook).
3.  **Create Email Template**:
    *   Go to **Email Templates** and create a new one.
    *   Use the following placeholders in your template:
        *   `{{name}}`: Sender's full name
        *   `{{email}}`: Sender's email address
        *   `{{phone}}`: Sender's phone number
        *   `{{message}}`: The actual inquiry content
        *   `{{reply_to}}`: Map this to the sender's email to reply directly.
4.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your credentials:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key


    ```

 5.   **Branding Changes**:
    *   Change `PROJECT_NAME` in `src/utils/constants.ts` to your project name.
    *   Change `ADDRESS` in `src/utils/constants.ts` to your project address.
    *   Change `CONTACT_PHONE` in `src/utils/constants.ts` to your project phone number.
    *   Change `WHATSAPP_NUMBER` in `src/utils/constants.ts` to your project WhatsApp number.
    *   Change `CONTACT_EMAIL` in `src/utils/constants.ts` to your project email address.


### 2. Local Development
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`
