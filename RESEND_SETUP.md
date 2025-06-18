# Setting Up Resend Email Service

This guide explains how to set up [Resend](https://resend.com) for your contact form.

## Steps to Configure Resend

1. **Create a Resend Account**

   - Go to [Resend](https://resend.com) and sign up for an account
   - Verify your email address

2. **Verify Your Domain (Recommended)**

   - In your Resend dashboard, go to "Domains"
   - Click "Add Domain" and follow the DNS setup instructions
   - Verify your domain

3. **Create an API Key**

   - In your Resend dashboard, go to "API Keys"
   - Click "Create API Key"
   - Give it a name (e.g., "Portfolio Contact Form")
   - Copy the API key

4. **Configure Environment Variables**

   - Edit the `.env.local` file:
     ```
     RESEND_API_KEY=re_your_api_key_here
     TO_EMAIL=your-email@example.com
     ```
   - Replace `re_your_api_key_here` with your actual Resend API key
   - Replace `your-email@example.com` with your email address

5. **Update the "From" Email Address** (Optional)
   - In `src/app/api/send/route.ts`, update the `from` field to use your verified domain:
     ```typescript
     from: 'Contact Form <contact@yourdomain.com>',
     ```

## Additional Configuration

### Email Templates (Optional)

You can use Resend's React email templates to create more visually appealing emails:

1. Install React Email packages:

   ```
   npm install @react-email/components @react-email/html
   ```

2. Create a custom email template in `src/emails/ContactEmail.tsx`

3. Update the API route to use your React template

### Testing

To test the contact form:

1. Fill out the contact form with valid information
2. Submit the form
3. Check your email inbox (the one specified in `TO_EMAIL`)
4. You should receive the contact form submission

## Troubleshooting

- **Emails not being received**:
  - Check spam/junk folder
  - Verify API key is correct
  - Check Resend dashboard for failed deliveries
- **Error responses**:
  - Check the browser console for error messages
  - Verify environment variables are set correctly
