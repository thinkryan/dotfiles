#!/usr/bin/env bash

# TODO: Finish this and set it up with fzf to quickly lookup cht.sh results

languages=$(echo "goalng c cpp typescript rust" | tr " " "\n")
core_utils=$(echo "find xargs sed awk" | tr " " "\n")
selected=$(echo -e "$languages\n$core_utils" | fzf)

read -p "Query to search: " query

if echo "$languages" | grep -qs $selected; then
  tmux split-window -p 22 -h bash -c "curl cht.sh/$selected/$(echo "$query" | tr " " "\n")"
else 
  tmux split-window -p 22 -h bash -c "curl cht.sh/$selected-$query | less"
fi 
