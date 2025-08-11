# Git Ignore Demo

## Objective
Demonstrate how to use `.gitignore` to ignore unwanted files and folders.

## Steps
1. Create unwanted files/folders (e.g., `.log` files and a `log` folder).
2. Update `.gitignore` to exclude them from Git tracking.
3. Verify using `git status` that these files are ignored.

## Example `.gitignore` content
```
*.log
log/
```

## Git Commands
```bash
# Initialize repo
git init

# Check status
git status

# Add all files
git add .

# Commit tracked files
git commit -m "Initial commit without log files"

# Push to remote
git remote add origin <your-repo-url>
git push -u origin master
```
