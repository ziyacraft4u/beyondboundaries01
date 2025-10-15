How to create a GitHub repo and push this project

Option A — using GitHub CLI (recommended, run locally):
1. Install Git and GitHub CLI (gh) and authenticate: `gh auth login`
2. Init, add, commit, create remote and push:

```powershell
cd 'C:\Users\jgvvd\crickettournament'
git init
git add .
git commit -m "Initial commit: scaffold static site"
# create repo under your account, private by default (change flags as needed)
gh repo create my-cricket-tournament --private --source=. --remote=origin --push
```

Option B — using Git only (run locally):
1. Create the repo on GitHub (via website) and copy the HTTPS/SSH URL.
2. Then run:

```powershell
cd 'C:\Users\jgvvd\crickettournament'
git init
git add .
git commit -m "Initial commit"
# Replace <URL> with the repo URL you created
git remote add origin <URL>
git push -u origin main
```

Option C — use GitHub REST API with curl (for advanced users):
1. Create a token with repo permissions, set it as an env var: `$env:GITHUB_TOKEN = 'ghp_...'
2. Create repo (replace fields as needed):

```powershell
$body = '{"name":"my-cricket-tournament","private":true}'
curl -H "Authorization: token $env:GITHUB_TOKEN" -d $body https://api.github.com/user/repos
```

Then follow Option B steps to push your local repo.

Notes:
- If your default branch is `main`, push using `main`. If git complains about branch names, use `git branch -M main` before pushing.
- After pushing, consider enabling GitHub Pages (Settings → Pages) to host the site.
