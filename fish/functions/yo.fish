function yo
  set __user (whoami)
  if test $__user = "legion"
    return 0
  else
    return 1
  end
end
