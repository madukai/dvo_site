import React from 'react';
import './fundraiser.css';

const Fundraiser = () => {
  return (
    <div id="fundraiser-page">
      {/* Add fundraiser content here */}
    </div>
  );
};

export default Fundraiser;

/*
The `package.json` file confirms you are running Webpack's development server (`webpack serve`) manually on your EC2 instance.

Since Webpack Dev Server restricts connections to `localhost` by default to prevent security exploits, it drops requests arriving via your proxy domain name and throws that **"Invalid Host header"** screen.

The best and most permanent fix is to tell your Webpack script to bypass host checking directly from the command line, avoiding the need to edit configuration files.

---

### The Quick Fix: Update `package.json`

1. Open your `package.json` file on your AWS instance:
```bash
nano package.json

```


2. Locate your `scripts` block and update the `"start"` command by appending the `--allowed-hosts all` flag. It should look like this:
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "webpack serve --mode development --allowed-hosts all",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  "build": "webpack --mode production"
},

```


3. Save the file and exit (`Ctrl+O`, `Enter`, `Ctrl+X`).

---

### Step 2: Restart the App via PM2

Now that your script is modified, tell PM2 to kill the old instance and start a fresh one so the new arguments can take effect.

```bash
# Delete the old running process
pm2 delete react-app

# Start it back up with the modified script
pm2 start npm --name "react-app" -- start

# Save your PM2 state so it persists on system reboots
pm2 save

```

Refresh your browser at `https://davaoenos.org` or `https://www.davaoenos.org`. The "Invalid Host header" error will be replaced by your React application.

---

### ⚠️ A Crucial Note on the Best Way to Route This

Using `webpack serve` on an AWS instance works, but it forces your server to run a heavy Node development cycle 24/7. It leaks memory over time, runs slower, and opens potential security vectors on an open server.

Since your `package.json` already contains a robust **`"build": "webpack --mode production"`** script, the standard industry practice is to compile your site into tiny, ultra-fast static HTML/JS assets and let Nginx serve them natively. This skips the port `3000` process entirely.

If you ever want to transition to a true production setup, it takes under 5 minutes:

1. Run `npm run build` on your EC2 instance. This drops production-ready files into a `/dist` folder.
2. Open your Nginx file (`/etc/nginx/conf.d/yourdomain.conf`).
3. Replace the `proxy_pass http://localhost:3000;` lines inside your server blocks with:
```nginx
root /path/to/your/project-folder/dist;
index index.html;
try_files $uri $uri/ /index.html;

```


4. Reload Nginx (`sudo systemctl reload nginx`).

This setup handles heavy production traffic effortlessly, eliminating the need to worry about port crashes, PM2 processes, or host headers again!

*/
