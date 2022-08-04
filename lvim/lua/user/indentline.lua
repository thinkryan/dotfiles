local M = {}

M.config = function()
  local status_ok, indent_blankline = pcall(require, "indent_blankline")
  if not status_ok then
    return
  end

  vim.opt.termguicolors = true
  -- Rainbow Indentation
  -- vim.cmd [[highlight IndentBlanklineIndent1 guifg=#E06C75 gui=nocombine]]
  -- vim.cmd [[highlight IndentBlanklineIndent2 guifg=#E5C07B gui=nocombine]]
  -- vim.cmd [[highlight IndentBlanklineIndent3 guifg=#98C379 gui=nocombine]]
  -- vim.cmd [[highlight IndentBlanklineIndent4 guifg=#56B6C2 gui=nocombine]]
  -- vim.cmd [[highlight IndentBlanklineIndent5 guifg=#61AFEF gui=nocombine]]
  -- vim.cmd vim.cmd [[highlight IndentBlanklineIndent1 guibg=#1f1f1f gui=nocombine]]

  -- Off pattern
  vim.cmd [[highlight IndentBlanklineIndent1 guibg=#1f1f1f gui=nocombine]]
  vim.cmd [[highlight IndentBlanklineIndent2 guibg=#1a1a1a gui=nocombine]]
  vim.opt.list = true

  indent_blankline.setup {
    bufname_exclude = { "README.md" },
    buftype_exclude = { "terminal", "nofile" },
    filetype_exclude = {
      "alpha",
      "log",
      "gitcommit",
      "dapui_scopes",
      "dapui_stacks",
      "dapui_watches",
      "dapui_breakpoints",
      "dapui_hover",
      "LuaTree",
      "dbui",
      "UltestSummary",
      "UltestOutput",
      "vimwiki",
      "markdown",
      "json",
      "txt",
      "vista",
      "NvimTree",
      "git",
      "TelescopePrompt",
      "undotree",
      "flutterToolsOutline",
      "org",
      "orgagenda",
      "help",
      "startify",
      "dashboard",
      "packer",
      "neogitstatus",
      "Outline",
      "Trouble",
      "lspinfo",
      "", -- for all buffers without a file type
    },
    enabled = 1,
    char_list = { "", "┊", "┆", "¦", "|", "¦", "┆", "┊", "" },
    show_trailing_blanking_indent = false,
    show_first_indent_level = true,
    show_curent_context = true,
    show_current_context_start = true,
    use_treesitter = true,
    space_char_blankline = " ",
    context_patterns = {
      "class",
      "return",
      "function",
      "method",
      "^if",
      "^while",
      "^for",
      "^object",
      "^table",
      "block",
      "arguments",
      "if_statement",
      "else_clause",
      "jsx_element",
      "tsx_element",
      "tsx_self_closing_element",
      "jsx_self_closing_element",
      "try_statement",
      "catch_clause",
      "import_statement",
      "operation_type",
    },
    char_highlight_list = {
        "IndentBlanklineIndent1",
        "IndentBlanklineIndent2",
    },
    space_char_highlight_list = {
        "IndentBlanklineIndent1",
        "IndentBlanklineIndent2",
    },
  }

  vim.g.indent_blankline_char = "▎"
  -- HACK: work-around for https://github.com/lukas-reineke/indent-blankline.nvim/issues/59

  -- vim.opt.listchars:append "space:⋅"
  -- vim.opt.listchars:append "space:"
  -- vim.opt.listchars:append "eol:↴"

end

return M
