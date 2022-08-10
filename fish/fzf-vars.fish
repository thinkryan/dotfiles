set -gx FZF_DEFAULT_COMMAND "rg --files --follow --smart-case --hidden --no-ignore -g "!{.DS_Store,.cache,venv,.git,.clangd,.ccls-cache,*.o,build,*.dSYM}" 2> /dev/null"
set -gx FZF_CTRL_T_COMMAND $FZF_DEFAULT_COMMAND
set -gx FZF_DEFAULT_OPTS "--reverse --height 50%"
set -gx FZF_CTRL_T_OPTS '--preview "bat --style=numbers,changes --color always --theme Coldark-Dark --line-range :500 {}"'
set -gx FZF_TMUX_OPTS "-p"
set -gx FZF_CTRL_R_OPTS "--reverse --preview 'echo {}' --preview-window down:3:hidden:wrap --bind '?:toggle-preview'"
