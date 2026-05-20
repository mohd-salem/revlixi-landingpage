// ─── content/legal.ts ─────────────────────────────────────────────────────────
// Full text for all four REVLIXI legal documents rendered in footer modals.
// ──────────────────────────────────────────────────────────────────────────────

export interface LegalSection {
  heading?: string;
  body: string;
}

export interface LegalDoc {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

// ─── Privacy Policy ───────────────────────────────────────────────────────────

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  lastUpdated: "May 2026",
  sections: [
    {
      body: "REVLIXI (\"we,\" \"us,\" or \"our\") respects your privacy. This policy describes what information we collect, how we use it, and how we protect it.",
    },
    {
      heading: "1. Information We Collect",
      body: "We collect only the minimum information needed to operate the REVLIXI service:\n\n• Order & account information: When you register your REVLIXI product or access the free dashboard, we may collect your email address and Amazon order number.\n• Usage data: We collect anonymised tap and scan counts to provide analytics inside your dashboard. No personally identifying information is attached to these events.\n• Support communications: If you contact us by email, we retain that correspondence to resolve your request.",
    },
    {
      heading: "2. How We Use Your Information",
      body: "• To activate and operate your REVLIXI redirect link.\n• To provide your analytics dashboard showing tap/scan counts.\n• To respond to warranty claims and support requests.\n• We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    },
    {
      heading: "3. Amazon Purchases",
      body: "All REVLIXI products are purchased through Amazon. Payment processing, order fulfilment, and shipping data are handled entirely by Amazon and are subject to Amazon's own Privacy Notice available at amazon.com/privacy. We do not receive or store your payment card details.",
    },
    {
      heading: "4. Cookies & Analytics",
      body: "Our marketing website may use standard analytics cookies (e.g. anonymised page-view tracking) to understand general visitor behaviour. No cookies are used for advertising or cross-site tracking. You can disable cookies in your browser settings at any time.",
    },
    {
      heading: "5. Data Retention",
      body: "We retain your account and dashboard data for as long as your REVLIXI is active. You may request deletion of your account and associated data at any time by emailing support@revlixi.com.",
    },
    {
      heading: "6. Security",
      body: "We use industry-standard measures to protect your data. However, no method of transmission over the internet is 100% secure. We encourage you to keep your dashboard login credentials confidential.",
    },
    {
      heading: "7. Changes to This Policy",
      body: "We may update this policy from time to time. The updated version will be posted here with a revised date. Continued use of REVLIXI after changes constitutes acceptance.",
    },
    {
      heading: "8. Contact",
      body: "Questions about this policy? Email us at support@revlixi.com.",
    },
  ],
};

// ─── Terms of Service ─────────────────────────────────────────────────────────

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  lastUpdated: "May 2026",
  sections: [
    {
      body: "By purchasing or using any REVLIXI product, you agree to the following terms. Please read them carefully.",
    },
    {
      heading: "1. Use of Products",
      body: "REVLIXI products (stands, cards, and stickers) are intended for lawful commercial use to direct customers to legitimate review platforms. You may not use REVLIXI to:\n\n• Redirect customers to fraudulent, misleading, or prohibited content.\n• Circumvent review platform policies in a manner that violates those platforms' terms.\n• Resell, reproduce, or reverse-engineer any REVLIXI product without written permission.",
    },
    {
      heading: "2. Free Dashboard",
      body: "Access to the REVLIXI link management dashboard is provided free of charge with every purchase. We reserve the right to suspend or terminate dashboard access if misuse, abuse, or violation of these terms is detected. There are no monthly fees or subscriptions associated with the dashboard.",
    },
    {
      heading: "3. Purchases via Amazon",
      body: "All REVLIXI purchases are completed through Amazon.com. Amazon's own Conditions of Use and all applicable Amazon policies govern the purchase transaction. REVLIXI is not responsible for delays, errors, or issues arising from Amazon's fulfilment process.",
    },
    {
      heading: "4. One-Time Purchase",
      body: "REVLIXI is a one-time purchase — there are no recurring charges. The redirect dashboard and analytics features are included at no ongoing cost.",
    },
    {
      heading: "5. Intellectual Property",
      body: "All REVLIXI branding, product design, and software are the intellectual property of REVLIXI. Nothing in these terms grants you any licence to use REVLIXI trademarks or copyrighted material.",
    },
    {
      heading: "6. Limitation of Liability",
      body: "To the fullest extent permitted by law, REVLIXI's total liability to you for any claim is limited to the original purchase price of the product in question. We are not liable for indirect, incidental, or consequential damages.",
    },
    {
      heading: "7. Warranty",
      body: "All products carry a 12-month limited warranty. See the Warranty section for full details.",
    },
    {
      heading: "8. Changes to These Terms",
      body: "We may update these terms at any time. The current version is always available in the footer of this website. Continued use of REVLIXI products or the dashboard after changes constitutes your acceptance of the updated terms.",
    },
    {
      heading: "9. Contact",
      body: "Questions? Email support@revlixi.com.",
    },
  ],
};

// ─── Shipping Policy ──────────────────────────────────────────────────────────

export const shippingPolicy: LegalDoc = {
  title: "Shipping Policy",
  lastUpdated: "May 2026",
  sections: [
    {
      body: "All REVLIXI products are fulfilled through Amazon's Fulfilled by Amazon (FBA) programme. This means Amazon stores, packs, and ships your order directly from their warehouse network.",
    },
    {
      heading: "Fulfilment & Processing",
      body: "Orders are processed and dispatched by Amazon within 1–2 business days of purchase. Custom-engraved or custom-branded orders may require an additional 2–3 business days before handoff to Amazon for fulfilment.",
    },
    {
      heading: "Shipping Options & Delivery Times",
      body: "Available shipping speeds (Standard, Expedited, Priority, Same-Day) and estimated delivery windows are shown at checkout on Amazon and depend on your delivery address. Delivery times are provided by Amazon and may vary.",
    },
    {
      heading: "Prime Eligibility",
      body: "Most REVLIXI listings are Amazon Prime eligible. Prime members can select Free Two-Day Delivery (or faster) where available.",
    },
    {
      heading: "International Shipping",
      body: "REVLIXI ships internationally to countries supported by Amazon's international shipping programme. International delivery times and any applicable customs duties or import taxes are determined by Amazon and local regulations. REVLIXI is not responsible for customs fees.",
    },
    {
      heading: "Order Tracking",
      body: "Once your order ships, Amazon will send a shipping confirmation email with a tracking number. You can also track your order any time from the \"Your Orders\" section of your Amazon account.",
    },
    {
      heading: "Lost or Damaged Shipments",
      body: "If your order arrives damaged or does not arrive within the expected window, please contact Amazon Customer Service first, as they manage all FBA shipment issues. You can also reach us at support@revlixi.com and we will assist where possible.",
    },
    {
      heading: "Returns & Refunds",
      body: "Returns and refunds are handled through Amazon's standard return policy. You may initiate a return from the \"Your Orders\" section of your Amazon account within the return window. Products covered under our 12-month warranty are handled separately — see the Warranty section.",
    },
  ],
};

// ─── Warranty Policy ──────────────────────────────────────────────────────────

export const warrantyPolicy: LegalDoc = {
  title: "Warranty Policy",
  lastUpdated: "May 2026",
  sections: [
    {
      body: "Every REVLIXI product is backed by a 12-month (1-year) limited warranty from the date of purchase. We stand behind our products — if something is wrong, we will make it right.",
    },
    {
      heading: "What Is Covered",
      body: "• Manufacturing defects in materials or workmanship.\n• NFC chip failures under normal, intended use.\n• QR code print defects that render the code unscannable.\n• Any functional failure that occurs under normal operating conditions within 12 months of the original purchase date.",
    },
    {
      heading: "What Is Not Covered",
      body: "• Physical damage caused by misuse, accidental drops, improper installation, or modification.\n• Water or liquid damage beyond the product's rated resistance.\n• Normal cosmetic wear and tear (minor scratches, fading from prolonged UV exposure).\n• Damage caused by use outside of the product's intended purpose.",
    },
    {
      heading: "How to Make a Warranty Claim",
      body: "1. Email support@revlixi.com with the subject line \"Warranty Claim.\"\n2. Include your Amazon order number, a brief description of the issue, and a photo if relevant.\n3. We will review your claim within 2 business days.\n4. If your claim is approved, we will ship a replacement at no charge to you.",
    },
    {
      heading: "No Questions Asked",
      body: "If your REVLIXI product fails within the 12-month warranty period due to a manufacturing defect, we will replace it — no questions asked. We believe in our product and we stand behind every unit we sell.",
    },
    {
      heading: "Warranty on Custom Orders",
      body: "Custom-engraved and custom-branded REVLIXI products are covered under the same 12-month warranty. Warranty claims on custom orders are handled by email at support@revlixi.com.",
    },
    {
      heading: "Contact",
      body: "Warranty enquiries: support@revlixi.com",
    },
  ],
};
