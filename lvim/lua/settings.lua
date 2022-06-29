vim.cmd "set shell=/bin/bash"

-- Relative row numbers
vim.go.relativenumber = true
vim.wo.colorcolumn = "99999"

-- kitty
-- https://sw.kovidgoyal.net/kitty/faq/#some-special-symbols-are-rendered-small-truncated-in-kitty
vim.cmd [[let &t_ut='']]

vim.cmd "set iskeyword+=-" -- Treat dash separated words as a text-object
vim.cmd "set autoindent"
vim.cmd "set copyindent"
vim.cmd "set whichwrap+=<,>,[,],h,l" -- move to next line with theses keys
vim.o.showmode = true
vim.o.updatetime = 300 -- Faster completion
vim.o.clipboard = "unnamedplus" -- Copy paste between vim and everything else
