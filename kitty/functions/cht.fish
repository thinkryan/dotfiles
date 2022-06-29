#!/usr/bin/env bash

languages=$(echo "goalng c cpp typescript rust" | tr " " "\n")
core_utils=$(echo "find xargs sed awk" | tr " " "\n")
selected=$(echo -e "$languages\n$core_utils" | fzf)

read -p "Query to search: " query

if echo "$languages" | grep -qs $selected; then
  tmux split-window -p 22 -h bash -c "curl cht.sh/$selected/$(echo "$query" | tr " " "\n")"
else 
  tmux split-window -p 22 -h bash -c "curl cht.sh/$selected-$query | less"
fi 
