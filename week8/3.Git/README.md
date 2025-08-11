# Git Branch & Merge Demo

## Objective
Demonstrate how to create a branch, make changes, and merge it into master.

## Steps

### Branching
```bash
# Create a new branch
git branch GitNewBranch

# List all branches
git branch -a

# Switch to the new branch
git checkout GitNewBranch

# Create a new file
echo "This is a file in GitNewBranch" > branch_file.txt

# Add and commit
git add branch_file.txt
git commit -m "Added branch_file.txt in GitNewBranch"

# Check status
git status
```

### Merging
```bash
# Switch to master
git checkout master

# List differences in CLI
git diff master GitNewBranch

# View differences in P4Merge (if configured)
git difftool master GitNewBranch

# Merge branch into master
git merge GitNewBranch

# View commit graph
git log --oneline --graph --decorate

# Delete branch
git branch -d GitNewBranch

# Check status
git status
```

### GitLab Merge Request
1. Push both `master` and `GitNewBranch` to GitLab.
2. Go to your GitLab repo, click **Merge Requests**.
3. Select source branch (`GitNewBranch`) and target branch (`master`).
4. Create Merge Request and confirm.
