# Web3Forms Setup Instructions

## How to Get Your Web3Forms Access Key

Follow these steps to activate the contact form email functionality:

### Step 1: Visit Web3Forms
Go to [https://web3forms.com/](https://web3forms.com/)

### Step 2: Sign Up (Free)
1. Click on "Get Started" or "Sign Up"
2. Enter your email address: **reachus@springboardpro.in**
3. Verify your email address

### Step 3: Get Your Access Key
1. After verification, you'll receive your unique Access Key
2. Copy this access key

### Step 4: Update Your Website
1. Open the file: `contact.html`
2. Find this line (around line 1043):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

### Example:
If your access key is `abc123xyz456`, the line should look like:
```html
<input type="hidden" name="access_key" value="abc123xyz456">
```

## What's Been Fixed

### ✅ Social Media Links
All social media icons now link to your actual profiles:
- **Facebook**: https://www.facebook.com/springboardproedgeofficial
- **Instagram**: https://www.instagram.com/springboardproedge/
- **Twitter/X**: https://x.com/sprinboardpro
- **YouTube**: https://www.youtube.com/channel/UCbVfgDuiHHcQuiKNemZrnmw
- **LinkedIn**: https://www.linkedin.com/company/springboardpro (you may need to verify this URL)

### ✅ Contact Form Email Integration
The contact form now uses Web3Forms to send emails to **reachus@springboardpro.in**

Form submissions will include:
- Full Name
- Email Address
- Phone Number
- Service Interest
- Message

## Testing

After adding your access key:
1. Open `contact.html` in your browser
2. Fill out the contact form
3. Submit the form
4. You should receive an email at reachus@springboardpro.in
5. A success message will appear on the page

## Troubleshooting

**If emails aren't arriving:**
1. Check your spam/junk folder
2. Verify the access key is correct
3. Make sure you verified your email with Web3Forms
4. Check the browser console for any errors (F12 → Console tab)

## Additional Features

The form now includes:
- ✅ Real-time validation
- ✅ Loading state during submission
- ✅ Success/error messages
- ✅ Automatic form reset after successful submission
- ✅ Beautiful animations

## Support

If you need help:
- Web3Forms Documentation: https://docs.web3forms.com/
- Web3Forms Support: support@web3forms.com

---

**Note**: Web3Forms free plan includes:
- Unlimited form submissions
- No monthly limits
- Email notifications
- Spam filtering
- GDPR compliant
