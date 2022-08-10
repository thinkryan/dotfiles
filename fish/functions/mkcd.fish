function mkcd --description Makes\ the\ directories\ if\ they\ don\'t\ exist\ and\ cd\'s\ to\ the\ last\ one.
  pushd .
  for arg in $argv
    popd
    mkdir -p $arg
    pushd $arg
  end
end
