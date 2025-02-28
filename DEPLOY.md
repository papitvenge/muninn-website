# Deployment Guide for Muninn Website

This guide explains how to deploy the Muninn website to one.com hosting.

## Production Files

The production build is located in the `dist/public` folder of this repository:

- `index.html` - The main HTML file
- `assets/` - Contains all CSS, JavaScript, and other assets

## Deployment Steps for one.com

### 1. Access your one.com Control Panel

- Log in to your one.com account
- Navigate to the "File Manager" or "FTP" section

### 2. Upload Files

**Option 1: Using one.com File Manager**

1. Navigate to the public root directory (usually `public_html` or `www`)
2. Upload the contents of the `dist/public` folder:
   - `index.html`
   - The entire `assets` folder

**Option 2: Using FTP Client (FileZilla, etc.)**

1. Connect to your one.com hosting using your FTP credentials:
   - Host: usually `ftp.yourdomain.com`
   - Username: provided by one.com
   - Password: your one.com password
   - Port: 21 (default FTP port)
2. Navigate to the public root directory
3. Upload the contents of the `dist/public` folder

### 3. Domain Configuration

- In your one.com control panel, make sure your domain points to the directory where you uploaded the files
- If using a subdomain, configure it in the one.com DNS settings

### 4. Test Your Website

- Visit your domain to make sure the website loads correctly
- Test on different devices and browsers
- Check that language switching works properly
- Verify all animations and interactive elements

## Troubleshooting

### Common Issues

1. **White Screen / 404 Error**
   - Make sure `index.html` is in the root directory
   - Check that the assets folder is in the correct location

2. **Missing Styles/JavaScript**
   - Verify that the entire `assets` folder was uploaded
   - Check browser console for specific errors

3. **Broken Links**
   - If using a subdomain or custom path, you may need to adjust base paths

## Rebuilding for Production

If you need to update the website, follow these steps:

1. Make your changes to the source code
2. Run the build command: `npm run build`
3. The new production files will be generated in the `dist/public` folder
4. Upload these new files to your hosting, replacing the old ones

## Contact

If you encounter any issues with deployment, please contact the development team.
