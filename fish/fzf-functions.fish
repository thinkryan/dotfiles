# FZF Functionalities when working with git repositories

function fzf-cdhist-widget -d 'cd to one of the previously visited locations'
  if [ -z "$dirprev" ]
    return
  end
  # TODO @max: Can we re-include git-ignored folders?
  string join \n $dirprev | tac | eval (__fzfcmd) +m --tiebreak=index --toggle-sort=ctrl-r $FZF_CDHIST_OPTS | read -l result
  [ "$result" ]; and cd $result
  commandline -f repaint
end

function fzf-rg-search-widget -d 'find text in files'

  set rg_command "rg --ignore-case --files-with-matches -uu --iglob='!**/.git/' --follow"
  # Start with all files; i.e. .*
  FZF_DEFAULT_COMMAND="$rg_command '.*'" SHELL=fish fzf \
    -m \
    -e \
    --ansi \
    --disabled \
    --bind "change:reload:$rg_command {q} || true" \
    # I'm not sure what this `cut` does — but remove it and the whole thing fails.
    --preview "rg -i --pretty --context 2 {q} {}" | cut -d":" -f1,2 \
    | fzf_add_to_commandline
end

# The following few `__git` functions are Heavily adapted from
# https://gist.github.com/aluxian/9c6f97557b7971c32fdff2f2b1da8209
function __git_fzf_is_in_git_repo -d "Check whether we're in a git repo"
  command -s -q git
    and git rev-parse HEAD >/dev/null 2>&1
end

function __git_fzf_git_branch -d "fzf on git branches"
  __git_fzf_is_in_git_repo; or return

  # We could use this rather than the separate function, but we get quoting issues.
  # set pattern '[\*\s]*(?:remotes/)?([^s]*)' 

  git branch -a --color=always \
    | grep -v '/HEAD\s' \
    | SHELL=fish fzf -m --ansi --preview-window=right:70% \
      --preview='git lg --color=always (echo {} | __get_branch)' \
      # This doesn't seem to print anything at all
      --bind=ctrl-s:"execute-silent(git switch  (echo {} | __get_branch) > /dev/tty )+abort" \
    | __get_branch \
    | fzf_add_to_commandline
  commandline -f repaint
end

function __git_fzf_git_tag -d "fzf on git tags"
  __git_fzf_is_in_git_repo; or return
  git tag --sort=-creatordate \
    | SHELL=fish fzf -m --ansi --no-sort \
      --preview-window=right:70% --preview='git show {} | delta' \
    | fzf_add_to_commandline
end

function __git_fzf_git_log -d "fzf on git history"
  __git_fzf_is_in_git_repo; or return
  git lg --color=always \
    | SHELL=fish fzf -m --ansi --no-sort --preview 'git show (echo {} | rg "(\w+).*" -or \'$1\') | delta' \
    | rg "(\w+).*" -or '$1' \
    | fzf_add_to_commandline
end

function __git_fzf_git_stash -d "fzf on git stashes"
  __git_fzf_is_in_git_repo; or return
  set -l pattern "(stash@[{\d}]*)"
  git stash list --color=always \
    # We seem to need delta explicitly, since git will write without using
    # delta if it's not a tty.
    | SHELL=fish fzf -m --ansi --no-sort \
      --preview "git stash show -p (echo {} | rg '$pattern' -o) | delta" \
      # This doesn't clear the fzf screen, so the output looks messy. Is there a
      # better way? Adding `clear-screen+` doesn't help.
      --bind=ctrl-p:"execute-silent(git stash pop (echo {} | rg '$pattern' -o) > /dev/tty)+abort" \
    | rg $pattern -o \
    | fzf_add_to_commandline
  commandline -f repaint
end

function git_fzf_key_bindings -d "Set custom key bindings for git+fzf"
  # `-M insert` is added, as we want these in insert mode
  #
  bind -M insert \cg\cb __git_fzf_git_branch
  # bind -M insert \cg\cd __git_fzf_git_diff
  bind -M insert \cg\ch __git_fzf_git_stash
  bind -M insert \cg\cl __git_fzf_git_log
  bind -M insert \cg\cs __git_fzf_git_status
  bind -M insert \cg\ct __git_fzf_git_tag
end

# Because files that are tracked / untracked have different forms, we can't
# currently _select_ files that are untracked — selecting them won't print
# anything to the command line.
function __git_fzf_git_status -d "fzf on files from git status"
  __git_fzf_is_in_git_repo; or return
  # We use porcelain since otherwise it's hard to handle files with quotes. We
  # lose the colors.
  #
  # The previous version was this, which didn't work for files with spaces:
  # fzf -m --ansi --preview "git diff HEAD -- {} | delta" | \
  # Another previous version did this, which gives some info about whether
  # it's added etc, but fails for new files, since their porcelain output is
  # different.
  # git status --porcelain=2 | choose -1 | \
  #
  git status --porcelain=2 | choose 1 8: \
  # We could use the field indexers, but it means we have a different command
  # for the index and the next command in the pipe. ref
  # https://github.com/junegunn/fzf/issues/1323.
  # SHELL=fish fzf -m --ansi --preview "git diff HEAD -- {-1} | delta" | \
    | SHELL=fish fzf -m --ansi --preview "git diff HEAD -- (echo {} | choose -1 ) | delta" \
    --bind=ctrl-a:"execute-silent(git add {-1})+abort" \
    | choose -1 \
    | fzf_add_to_commandline
  commandline -f repaint
end

function __get_branch -d "Parses branch name for __git_fzf_git_branch"
  read | rg '[\*\s]*(?:remotes/)?([^s]*)' -r '$1'
end
