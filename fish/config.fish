## thinkRyan Fish Configuration
# TODO: Setup proper aliases for File management
## TODO: Setup proper functions for handling fzf autocompletion on peco actions
## TODO: Setup custom keybind for Control+S to filter through autocompletion results

# Path vars
source (dirname (status --current-filename))/path.fish

# Keymaps
source (dirname (status --current-filename))/keymaps.fish

# FZF Functions
# @TODO: Understand what these actually do because the functionality implementation is cryptic to me ATM
source (dirname (status --current-filename))/fzf-functions.fish

# Alias
source (dirname (status --current-filename))/alias.fish


set -g GIT_EDITOR lvim
set -g EDITOR lvim

set -gx FZF_DEFAULT_COMMAND   "rg --files --follow --smart-case --hidden --no-ignore -g "!{.DS_Store,.cache,venv,.git,.clangd,.ccls-cache,*.o,build,*.dSYM}" 2> /dev/null"
set -gx FZF_CTRL_T_COMMAND      $FZF_DEFAULT_COMMAND
set -gx FZF_DEFAULT_OPTS "--reverse --height 50%"

# set -gx FZF_CTRL_T_OPTS '--preview "bat --style=numbers,changes --color always --theme Coldark-Dark --line-range :500 {}"' 
# set FZF_DEFAULT_OPTS        '--reverse --height 50%'
set -gx FZF_CTRL_T_OPTS         '--preview "bat --style=numbers,changes --color always --theme Coldark-Dark --line-range :500 {}"'

set -gx TERM xterm-256color

function __history_previous_command
  switch (commandline -t)
  case "!"
    commandline -t $history[1]# commandline -f repaint
  case "*"
    commandline -i !
  end
end

function __history_previous_command_arguments
  switch (commandline -t)
  case "!"
    commandline -t ""
    commandline -f history-token-search-backward
  case "*"
    commandline -i '$'
  end
end

function backup --argument filename
    cp $filename $filename.bak
end

function mkcd --description "Makes the directories if they don't exist and cd's to the last one."
  pushd .
  for arg in $argv
    popd
    mkdir -p $arg
    pushd $arg
  end
end

if [ "$fish_key_bindings" = fish_vi_key_bindings ];
  bind -Minsert ! __history_previous_command
  bind -Minsert '$' __history_previous_command_arguments
else
  bind ! __history_previous_command
  bind '$' __history_previous_command_arguments
end

fish_vi_key_bindings

if not functions -q fundle# eval (curl -sfL https://git.io/fundle-install); end
fundle plugin 'oh-my-fish/plugin-osx' # helper functionality to work the osx environment
fundle plugin 'edc/bass' # helps making virtualenv and other utilities available to fish shell
fundle plugin 'tuvistavie/fish-fastdir' # d -> list out directories -> press # -> go to directory -> good alternative to z if you cant remember a dir in your history
fundle plugin 'jorgebucaran/getopts.fish'
fundle plugin '0rax/fish-bd' # bd (back dir) -> intelligenty traverse back directories quickly -> if in /cool/foo/bar/hello -> bd -s fo will go to /cool/foo
fundle plugin 'FabioAntunes/fish-nvm' # nvm_alias_helper create-react-app -> creates intelligent aliases for package management systems
fundle init 

if status is-interactive
    # Commands to run in interactive sessions can go here
end

set -gx FZF_TMUX_OPTS "-p"
set -gx FZF_CTRL_R_OPTS "--reverse --preview 'echo {}' --preview-window down:3:hidden:wrap --bind '?:toggle-preview'"

source (starship init fish --print-full-init | psub)

# neofetch --backend kitty --source /Users/legion/Documents/Art/va11halla.jpg
fish_add_path /Users/legion/.spicetify
