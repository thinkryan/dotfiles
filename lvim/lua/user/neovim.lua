local M = {}

M.config = function()
  local disabled_plugins = {
    "2html_plugin",
    "getscript",
    "getscriptPlugin",
    "gzip",
    "logipat",
    "netrw",
    "netrwPlugin",
    "netrwSettings",
    "netrwFileHandlers",
    "matchit",
    "tar",
    "tarPlugin",
    "rrhelper",
    "spellfile_plugin",
    "vimball",
    "vimballPlugin",
    "zip",
    "zipPlugin",
  }
  for _, plugin in pairs(disabled_plugins) do
    vim.g["loaded_" .. plugin] = 1
  end

  vim.g.ultest_summary_width = 30
  vim.g.ultest_deprecation_notice = 0
  vim.opt.completeopt = { "menu", "menuone", "noselect" }
  vim.opt.relativenumber = true
  vim.opt.diffopt = {
    "internal",
    "filler",
    "closeoff",
    "hiddenoff",
    "algorithm:minimal",
  }
  vim.opt.wrap = true
  vim.opt.termguicolors = true
  vim.opt.updatetime = 100
  vim.opt.timeoutlen = 250
  vim.opt.redrawtime = 1500
  vim.opt.ttimeoutlen = 10
  vim.opt.wrapscan = true -- Searches wrap around the end of the file
  vim.wo.foldmethod = "expr"
  vim.wo.foldexpr = "nvim_treesitter#foldexpr()"
  vim.wo.foldlevel = 4
  vim.wo.foldtext =
    [[substitute(getline(v:foldstart),'\\t',repeat('\ ',&tabstop),'g').'...'.trim(getline(v:foldend)) . ' (' . (v:foldend - v:foldstart + 1) . ' lines)']]
  vim.wo.foldnestmax = 3
  vim.wo.foldminlines = 1
  vim.opt.guifont = "MonoLisa:h14"
  vim.opt.cmdheight = 1
  vim.g.dashboard_enable_session = 0
  vim.g.dashboard_disable_statusline = 1
  vim.opt.pumblend = 10
  vim.opt.joinspaces = false
  vim.opt.list = true
  vim.opt.confirm = true -- make vim prompt me to save before doing destructive things

  if vim.fn.has "nvim-0.7" ~= 0 then
    vim.opt.fillchars = {
      fold = " ",
      eob = " ", -- suppress ~ at EndOfBuffer
      diff = "╱", -- alternatives = ⣿ ░ ─
      msgsep = "‾",
      foldopen = "▾",
      foldsep = "│",
      foldclose = "▸",
      horiz = "━",
      horizup = "┻",
      horizdown = "┳",
      vert = "┃",
      vertleft = "┫",
      vertright = "┣",
      verthoriz = "╋",
    }
  else
    vim.opt.fillchars = {
      vert = "▕", -- alternatives │
      fold = " ",
      eob = " ", -- suppress ~ at EndOfBuffer
      diff = "╱", -- alternatives = ⣿ ░ ─
      msgsep = "‾",
      foldopen = "▾",
      foldsep = "│",
      foldclose = "▸",
    }
  end
  vim.opt.wildignore = {
    "*.aux,*.out,*.toc",
    "*.o,*.obj,*.dll,*.jar,*.pyc,__pycache__,*.rbc,*.class",
    -- media
    "*.ai,*.bmp,*.gif,*.ico,*.jpg,*.jpeg,*.png,*.psd,*.webp",
    "*.avi,*.m4a,*.mp3,*.oga,*.ogg,*.wav,*.webm",
    "*.eot,*.otf,*.ttf,*.woff",
    "*.doc,*.pdf",
    -- archives
    "*.zip,*.tar.gz,*.tar.bz2,*.rar,*.tar.xz",
    -- temp/system
    "*.*~,*~ ",
    "*.swp,.lock,.DS_Store,._*,tags.lock",
    -- version control
    ".git,.svn",
  }
  vim.opt.shortmess = {
    t = true, -- truncate file messages at start
    A = true, -- ignore annoying swap file messages
    o = true, -- file-read message overwrites previous
    O = true, -- file-read message overwrites previous
    T = true, -- truncate non-file messages in middle
    f = true, -- (file x of x) instead of just (x of x
    F = true, -- Don't give file info when editing a file, NOTE: this breaks autocommand messages
    s = true,
    c = true,
    W = true, -- Don't show [w] or written when writing
  }
  vim.opt.formatoptions = {
    ["1"] = true,
    ["2"] = true, -- Use indent from 2nd line of a paragraph
    q = true, -- continue comments with gq"
    c = true, -- Auto-wrap comments using textwidth
    r = true, -- Continue comments when pressing Enter
    n = true, -- Recognize numbered lists
    t = false, -- autowrap lines using text width value
    j = true, -- remove a comment leader when joining lines.
    -- Only break if the line was not longer than 'textwidth' when the insert
    -- started and only at a white character that has been entered during the
    -- current insert command.
    l = true,
    v = true,
  }
  vim.opt.listchars = {
    eol = nil,
    tab = "│ ",
    extends = "›", -- Alternatives: … »
    precedes = "‹", -- Alternatives: … «
    trail = "•", -- BULLET (U+2022, UTF-8: E2 80 A2)
  }

  -- Cursorline highlighting control
  vim.opt.cursorline = true -- Highlight the current line
  if vim.fn.has "nvim-0.7" ~= 0 then
    local group = vim.api.nvim_create_augroup("CursorLineControl", { clear = true })
    vim.api.nvim_create_autocmd("WinLeave", {
      group = group,
      callback = function()
        vim.opt_local.cursorline = false
      end,
    })
    vim.api.nvim_create_autocmd("WinEnter", {
      group = group,
      callback = function()
        if vim.bo.filetype ~= "alpha" then
          vim.opt_local.cursorline = true
        end
      end,
    })
  end
  
end

return M
