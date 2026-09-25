## Adding `tools-code-exec-with-text`

The external tools repository is intentionally not committed here. Clone it locally with an authenticated URL supplied through an environment variable:

```bash
export TOOLS_CODE_EXEC_REPO_URL='https://<credentials>@31b91e7f9954ad8aa334d46f012bd8ed.artifacts.cloudflare.net/git/lee-production/lee-tools-code-exec-with-text-70257f09.git'
./scripts/clone-tools-code-exec.sh
```

The script clones into `tools-code-exec-with-text/` and refuses to overwrite an existing path. Keep the authenticated URL out of shell history and source control; rotate the token that was shared if it has been exposed.
