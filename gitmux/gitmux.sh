# gitmux -
# This script will handle outputting Gitmux into Tmux 
# This can simply be included into Nova by referencing this specific SH

if git rev-parse --git-dir > /dev/null 2>&1; then
  tmux source-file "~/.config/gitmux/gitmux.conf"
fi
