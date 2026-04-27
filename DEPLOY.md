# Skyquesta cPanel CI/CD Setup

This project uses **GitHub Actions** to deploy only the `skyquesta/` app to cPanel when you push to `main` or `master`. Deployment is done over **SFTP**.

Workflow path:

- `.github/workflows/deploy-skyquesta-cpanel.yml`

## 1. GitHub repo

- Create a repo on GitHub and push this project.
- Ensure the branch you push is `main` or `master` (or change `branches` in `.github/workflows/deploy-skyquesta-cpanel.yml`).

## 2. cPanel – SFTP details

On your cPanel host you need:

- **Host** – Your server hostname or domain (e.g. `ftp.yourdomain.com` or `yourdomain.com`). Some hosts use a different host for SFTP (e.g. `server123.hosting.com`); check cPanel “FTP Accounts” or support.
- **Port** – Usually **22** for SFTP. If your host uses a different port (e.g. 2222), set it in the workflow under `port:`.
- **Username** – Your cPanel username (or an FTP user you created in cPanel).
- **Password** – Password for that user.
- **Remote path** – Full path to the folder that should contain the site (e.g. `/home/cpaneluser/public_html` or `/public_html`). In cPanel File Manager you can copy the path from the address bar when you’re inside that folder.

## 3. GitHub Secrets

In GitHub: **Repo → Settings → Secrets and variables → Actions → New repository secret.**  
Add these (names must match exactly):

| Secret name           | Example value              | Description        |
|-----------------------|----------------------------|--------------------|
| `CPANEL_HOST`         | `ftp.yourdomain.com`       | SFTP host          |
| `CPANEL_USERNAME`     | `cpaneluser`               | SFTP username      |
| `CPANEL_PASSWORD`     | `your-sftp-password`       | SFTP password      |
| `CPANEL_PORT`         | `22`                       | SFTP port (optional) |
| `CPANEL_REMOTE_PATH`  | `/home/cpaneluser/public_html` | Remote deploy path |

After saving, every push to `main` (or `master`) will run the workflow and deploy via SFTP.

## 4. Optional: deploy only on tag or manual run

- **Manual run:** In GitHub, go to **Actions → Deploy Skyquesta to cPanel → Run workflow**.
- **Deploy on tag only:** In `.github/workflows/deploy-skyquesta-cpanel.yml`, change `on` to:
  ```yaml
  on:
    push:
      tags: ['v*']
  ```
  Then push a tag, e.g. `git tag v1.0.0 && git push origin v1.0.0`.

## 5. Excluded from deploy

Only `skyquesta/` files are uploaded.

Before upload, the workflow creates a filtered `deploy/skyquesta/` directory and excludes:

- `.git/`
- `.github/`
- `.cursor/`
- `node_modules/`
- `cgi-bin-m/.git/`
- `error_log`
- `*.md`
- `DEPLOY.md`
- `.gitignore`

To change these exclusions, edit the `rsync --exclude` list in `.github/workflows/deploy-skyquesta-cpanel.yml`.

## 6. SFTP port

If your host uses a port other than 22, add `CPANEL_PORT` in GitHub Secrets.  
Or edit `.github/workflows/deploy-skyquesta-cpanel.yml` and set:

```yaml
port: 2222   # or whatever your host uses
```

## 7. Troubleshooting

- **Permission denied / Connection refused:** Check host, port, username and password. Confirm with your host that SFTP is enabled and which host/port to use.
- **Wrong folder updated:** Set `CPANEL_REMOTE_PATH` to the full path (e.g. `/home/username/public_html`), not a relative path.
- **Deploy not running:** Ensure the branch in the workflow (`main` or `master`) is the one you’re pushing. Check the **Actions** tab for errors and logs.
