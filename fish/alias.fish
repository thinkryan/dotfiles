# Listing files / LS (exa)

# Tropical
if test -e (dirname (status --current-filename))/tropical.fish
    source (dirname (status --current-filename))/tropical.fish
end

# NOTE: Add some additional colorls options and figure out a way to reduce padding on -l output views
if type -q colorls 
    alias ll "colorls -l"
    alias lla "colorls -l -a"
end

if type -q bat
    alias cat "bat"
end

if type -q mkcd
    alias mkcd "mkcd"  
end

alias bfzf "fzf --preview 'bat --style=numbers --color=always --line-range :500 {}'"

# Git Specific

alias g "git"

# Docker
if type -q docker
    alias dcu "docker compose up -d"
    alias dcd "docker compose down"
end

# OVN (OpenVPN)
alias vpn "z ovn && sudo /opt/homebrew/sbin/openvpn  --config ./client.ovpn"

# Tig CLI

alias tt "tig status"
alias tl "tig log"
alias ts "tig show"

# Helpers

alias cfg "z config && lvim ."

alias cl "clear"
