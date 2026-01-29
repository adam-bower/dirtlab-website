# DirtLab Website Setup Guide

This guide walks you through deploying and configuring the DirtLab website.

## Quick Start

### 1. Create a Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select this repository
5. Click "Deploy"

The site will be live in ~60 seconds. Vercel's free tier is more than enough.

---

## Contact Form Setup (Monday.com Integration)

The contact form submits directly to your Monday.com board. Here's how to set it up:

### Step 1: Get Your Monday API Token
1. Go to [monday.com](https://monday.com)
2. Click your profile picture (bottom left)
3. Go to **Administration** > **API**
4. Copy your personal API token

### Step 2: Get Your Board ID
1. Open the board where you want form submissions to go
2. Look at the URL: `monday.com/boards/1234567890`
3. The number is your Board ID

### Step 3: Add Environment Variables in Vercel
1. Go to your project in Vercel
2. Click **Settings** > **Environment Variables**
3. Add these two variables:

| Name | Value |
|------|-------|
| `MONDAY_API_KEY` | Your API token from Step 1 |
| `MONDAY_BOARD_ID` | Your board ID from Step 2 |

4. Click **Save**
5. Go to **Deployments** and click **Redeploy** on the latest deployment

### Step 4: Update Column IDs (Required)

The file `api/contact.js` needs to know which columns in your Monday board to populate.

**To find your column IDs:**
1. In Monday, click on any column header
2. Click the three dots > **Column settings**
3. The column ID is shown (e.g., `text_abc123`)

**Update `api/contact.js`** around line 30. Match these to your actual column IDs:

```javascript
const columnValues = JSON.stringify({
  // Update these column IDs to match YOUR board:
  text: name,                              // Name (item name)
  email: { email, text: email },           // Email column ID
  phone: { phone, countryShortName: 'US' },// Phone column ID
  text0: businessName,                     // Business name column ID
  text1: businessRole,                     // Role column ID
  long_text: { text: needs },              // Long text column ID
  status: { label: discovery },            // Dropdown/status column ID
});
```

For example, if your email column ID is `email_mkpmg01v`, change:
```javascript
email: { email, text: email },
```
to:
```javascript
email_mkpmg01v: { email, text: email },
```

### Form Fields → Monday Columns

| Form Field | What to map it to |
|------------|-------------------|
| "Tell us about what brought you here" | Long Text column |
| Name | Usually the item name (automatic) |
| Email | Email column |
| Phone | Phone column |
| Business name | Text column |
| Role | Text column |
| "How did you discover DirtLab?" | Dropdown or Status column |

---

## Fallback

If Monday integration isn't configured or fails, the form automatically falls back to opening the user's email client with all form data pre-filled to `info@dirtlab.io`.

---

## Custom Domain (Optional)

To use `dirtlab.io` or another domain:

1. In Vercel, go to **Settings** > **Domains**
2. Add your domain
3. Update your domain's DNS:
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or use Vercel's nameservers

---

## Making Changes

The site auto-deploys when you push to GitHub:
1. Clone the repo locally
2. Run `npm install`
3. Run `npm run dev` to preview locally
4. Push changes to `master` branch
5. Vercel deploys automatically

---

## Tech Stack

- **React** + **Vite** - Frontend
- **Tailwind CSS** - Styling
- **Vercel** - Hosting & serverless functions
- **Monday.com API** - Form submissions

---

## Support

Built by AB Civil. Questions? Contact adam@ab-civil.com
