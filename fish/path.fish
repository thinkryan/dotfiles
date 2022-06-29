# Path environment management

function add-to-path --argument dir --description "adds argument to path if it doesn't exist in path yet."
  if test -d $dir
    if not contains -- $dir $PATH
      set -p PATH $dir
    end
  end
end

add-to-path ~/.tmux/bin
