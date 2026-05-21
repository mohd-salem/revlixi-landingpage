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
      body: "This website (revlixi.com) is a marketing landing page. Its sole purpose is to present REVLIXI products and direct visitors to our Amazon store.",
    },
    {
      heading: "No Data Collection",
      body: "We do not collect, store, or process any personal information from visitors to this website. There are no contact forms, no account registrations, no email sign-ups, and no tracking of any kind on this page.",
    },
    {
      heading: "No Cookies or Analytics",
      body: "This website does not use cookies, analytics tools, or any third-party tracking scripts. We do not track your browsing behaviour, device, or location.",
    },
    {
      heading: "Amazon",
      body: "When you click any purchase link on this page, you are redirected to Amazon.com. All transactions, order data, and personal information are handled exclusively by Amazon and are subject to Amazon's own Privacy Notice, available at amazon.com/privacy.",
    },
    {
      heading: "Changes",
      body: "If this policy changes in the future, the updated version will be posted here with a revised date.",
    },
  ],
};

// ─── Terms of Service ─────────────────────────────────────────────────────────

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  lastUpdated: "May 2026",
  sections: [
    {
      body: "By visiting revlixi.com, you agree to the following terms.",
    },
    {
      heading: "Nature of This Website",
      body: "This website is a product marketing page only. It does not process orders, accept payments, or collect personal data. All purchases are made directly through Amazon.com.",
    },
    {
      heading: "Purchases",
      body: "All REVLIXI products are sold on Amazon. Amazon's Conditions of Use and applicable Amazon policies govern every transaction. REVLIXI is not a party to the purchase contract between you and Amazon.",
    },
    {
      heading: "Intellectual Property",
      body: "All content on this website — including text, images, and branding — is the property of REVLIXI. You may not reproduce or redistribute any content without written permission.",
    },
    {
      heading: "Limitation of Liability",
      body: "This website is provided as-is. REVLIXI is not liable for any damages arising from your use of this website or from products purchased through Amazon.",
    },
    {
      heading: "Warranty",
      body: "All REVLIXI products include a 12-month limited warranty. See the Warranty section for details.",
    },
    {
      heading: "Changes",
      body: "We may update these terms at any time. The current version is always available in the footer of this website.",
    },
  ],
};

// ─── Shipping Policy ──────────────────────────────────────────────────────────

export const shippingPolicy: LegalDoc = {
  title: "Shipping Policy",
  lastUpdated: "May 2026",
  sections: [
    {
      body: "All REVLIXI products are sold and shipped exclusively through Amazon, using Amazon's Fulfilled by Amazon (FBA) programme. REVLIXI does not ship orders directly.",
    },
    {
      heading: "Fulfilment by Amazon (FBA)",
      body: "Your order is stored, packed, and dispatched by Amazon from one of their fulfilment centres. This means you get the same reliable Amazon delivery experience you are used to.",
    },
    {
      heading: "Processing Time",
      body: "Orders are typically processed and dispatched by Amazon within 1–2 business days of purchase.",
    },
    {
      heading: "Shipping Options",
      body: "All available shipping speeds and estimated delivery dates are shown at checkout on Amazon. Options vary by location and may include Standard, Expedited, and Same-Day delivery.",
    },
    {
      heading: "Amazon Prime",
      body: "Most REVLIXI listings are Amazon Prime eligible. Prime members can take advantage of free, fast shipping where available.",
    },
    {
      heading: "International Orders",
      body: "International shipping is available to eligible countries through Amazon's international shipping programme. Any applicable customs duties or import taxes are the responsibility of the buyer and are determined by the destination country.",
    },
    {
      heading: "Order Tracking",
      body: "Once your order ships, Amazon will send a confirmation email with tracking information. You can also track your order at any time from the \"Your Orders\" section of your Amazon account.",
    },
    {
      heading: "Returns & Refunds",
      body: "All returns and refunds are handled through Amazon's standard return policy. To start a return, go to the \"Your Orders\" section of your Amazon account. Products with a manufacturing defect within 12 months of purchase are covered under our Warranty Policy.",
    },
  ],
};

// ─── Warranty Policy ──────────────────────────────────────────────────────────

export const warrantyPolicy: LegalDoc = {
  title: "Warranty Policy",
  lastUpdated: "May 2026",
  sections: [
    {
      body: "We stand behind every single REVLIXI product — no exceptions. If anything goes wrong, we've got you covered. Simple as that.",
    },
    {
      heading: "12-Month Full Coverage",
      body: "Every REVLIXI comes with a full 12-month (1-year) warranty from the date of purchase. If your product has any issue at all within that period, we will send you a replacement immediately — at absolutely no cost to you.",
    },
    {
      heading: "We Cover Everything",
      body: "Whatever the issue — whether it's the NFC chip, the QR code, the finish, or anything else — if your REVLIXI isn't working the way it should, we will take care of it. No back-and-forth, no hoops to jump through.",
    },
    {
      heading: "How to Get a Replacement",
      body: "Just open a support case through your Amazon order, select the REVLIXI item, and let us know what happened. That's it. We'll handle everything from there and get a replacement out to you right away.",
    },
    {
      heading: "Our Promise",
      body: "We want you to feel 100% confident in your purchase. If for any reason you're not happy with your REVLIXI, reach out and we will make it right — immediately and without question. Your satisfaction is our priority.",
    },
  ],
};

