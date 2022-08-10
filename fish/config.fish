# Set vim bindings
fish_vi_key_bindings

set -gx TERM xterm-256color
set -g GIT_EDITOR lvim
set -g EDITOR lvim

# Path vars
source (dirname (status --current-filename))/path.fish

# Keymaps
source (dirname (status --current-filename))/keymaps.fish

# FZF Functions
source (dirname (status --current-filename))/fzf-functions.fish

# Alias
source (dirname (status --current-filename))/alias.fish

# FZF Vars
source (dirname (status --current-filename))/fzf-vars.fish

# Fundle Plugin Manager
if not functions -q fundle# eval (curl -sfL https://git.io/fundle-install); end
fundle plugin 'oh-my-fish/plugin-osx' # helper functionality to work the osx environment
fundle plugin 'edc/bass' # helps making virtualenv and other utilities available to fish shell
fundle plugin 'tuvistavie/fish-fastdir' # d -> list out directories -> press # -> go to directory -> good alternative to z if you cant remember a dir in your history
fundle plugin 'jorgebucaran/getopts.fish'
fundle plugin 'jorgebucaran/autopair.fish' # insert, erase and skip matching pairs as you type in the CLI
fundle plugin '0rax/fish-bd' # bd (back dir) -> intelligenty traverse back directories quickly -> if in /cool/foo/bar/hello -> bd -s fo will go to /cool/foo
fundle plugin 'FabioAntunes/fish-nvm' # nvm_alias_helper create-react-app -> creates intelligent aliases for package management systems
fundle plugin 'tuvistavie/oh-my-fish-core' # add omf core to fundle as a plugin for easy compatibility
fundle init 

if status is-interactive
    # Commands to run in interactive sessions can go here
end

source (starship init fish --print-full-init | psub)
