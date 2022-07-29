local M = {}

M.rose_pine = function()
  require("rose-pine").setup {
    ---@usage 'main'|'moon'
    dark_variant = "moon",
    bold_vert_split = false,
    dim_nc_background = true,
    disable_background = true,
    disable_float_background = true,
    disable_italics = true,
    ---@usage string hex value or named color from rosepinetheme.com/palette
    groups = {
      border = "highlight_med",
      comment = "subtle",
      link = "iris",
      punctuation = "subtle",

      error = "love",
      hint = "iris",
      info = "foam",
      warn = "gold",

      git_add = "foam",
      git_change = "rose",
      git_delete = "love",
      git_dirty = "rose",
      git_ignore = "muted",
      git_merge = "iris",
      git_rename = "pine",
      git_stage = "iris",
      git_text = "rose",

      headings = {
        h1 = "iris",
        h2 = "foam",
        h3 = "rose",
        h4 = "gold",
        h5 = "pine",
        h6 = "foam",
      },
    },
    highlight_groups = {
      Boolean = { fg = "love" },
      DiagnosticError = { fg = "love" }
    },
  }
end

M.moonlight = function()
  local moonlight = require "moonlight"
  vim.g.moonlight_italic_comments = true
  vim.g.moonlight_contrast = true
  vim.g.moonlight_borders = false
  vim.g.moonlight_disable_background = true
  moonlight.set()
end

-- M.catppuccin = function()
--   local catppuccin = require "catppuccin"
--   catppuccin.setup {
--     transparent_background = true,
--     catppuccin_flavour = "frappe",
--     term_colors = false,
--     styles = {
--       comments = "NONE",
--       keywords = "italic",
--     },
--     integrations = {
--       lsp_trouble = true,
--       nvimtree = {
--         transparent_panel = true,
--       },
--       which_key = true,
--       lightspeed = lvim.builtin.motion_provider == "lightspeed",
--       hop = lvim.builtin.motion_provider == "hop",
--     },
--   }
-- end

M.kanagawa = function()
  local kanagawa = require "kanagawa"
  kanagawa.setup {
    undercurl = true, -- enable undercurls
    commentStyle = {},
    functionStyle = {},
    keywordStyle = { italic = true },
    statementStyle = { italic = true },
    typeStyle = {},
    variablebuiltinStyle = { italic = true },
    specialReturn = true, -- special highlight for the return keyword
    specialException = true, -- special highlight for exception handling keywords
    dimInactive = lvim.builtin.global_statusline, -- dim inactive window `:h hl-NormalNC`
    globalStatus = lvim.builtin.global_statusline, -- adjust window separators highlight for laststatus=3
    transparent = lvim.transparent_window,
    colors = { sumiInk1b = "#1b1b23" },
    overrides = {
      diffRemoved = { fg = "#E46876" },
    },
  }
end

M.colors = {

  moonlight_colors = {
    white = "#EEFFFF",
    gray = "#a1abe0",
    black = "#000000",
    red = "#ff757f",
    green = "#2df4c0",
    yellow = "#ffc777",
    paleblue = "#d6e7f0",
    cyan = "#b994f1",
    blue = "#04d1f9",
    purple = "#b4a4f4",
    orange = "#f67f81",
    pink = "#ecb2f0",

    bg = "#212337",
    bg_alt = "#1B1E2B",
    fg = "#e4f3fa",
    text = "#757dac",
    comments = "#7486d6",
    selection = "#403c64",
    contrast = "#1b1c2b",
    active = "#414863",
    border = "#414863",
    line_numbers = "#596399",
    highlight = "#a1abe0",
    disabled = "#515772",
    cursor = "#5cb4fc",
    accent = "#a3ace1",

    error = "#FF5370",
    link = "#80CBC4",

    none = "NONE",
    git = {
      add = "#84Cee4",
      change = "#c4a7e7",
      delete = "#eb6f92",
      conflict = "#f6c177",
    },
  },

  rose_pine_colors = {
    none = "NONE",
    bg = "#2a273f",
    fg = "#e0def4",
    fg_gutter = "#3b4261",
    black = "#393b44",
    gray = "#2a2e36",
    red = "#eb6f92",
    green = "#97c374",
    yellow = "#f6c177",
    blue = "#9ccfd8",
    magenta = "#c4a7e7",
    cyan = "#9ccfd8",
    white = "#dfdfe0",
    orange = "#ea9a97",
    pink = "#D67AD2",
    black_br = "#7f8c98",
    red_br = "#e06c75",
    green_br = "#58cd8b",
    yellow_br = "#FFE37E",
    bg_br = "#393552",
    blue_br = "#84CEE4",
    violet = "#B8A1E3",
    cyan_br = "#59F0FF",
    white_br = "#FDEBC3",
    orange_br = "#F6A878",
    pink_br = "#DF97DB",
    comment = "#526175",
    bg_alt = "#191724",
    git = {
      add = "#84Cee4",
      change = "#c4a7e7",
      delete = "#eb6f92",
      conflict = "#f6c177",
    },
  },

  catppuccin_colors = {
    rosewater = "#F5E0DC",
    flamingo = "#F2CDCD",
    violet = "#DDB6F2",
    pink = "#F5C2E7",
    red = "#F28FAD",
    maroon = "#E8A2AF",
    orange = "#F8BD96",
    yellow = "#FAE3B0",
    green = "#ABE9B3",
    blue = "#96CDFB",
    cyan = "#89DCEB",
    teal = "#B5E8E0",
    lavender = "#C9CBFF",
    white = "#D9E0EE",
    gray2 = "#C3BAC6",
    gray1 = "#988BA2",
    gray0 = "#6E6C7E",
    black4 = "#575268",
    bg_br = "#302D41",
    bg = "#1A1826",
    bg_alt = "#1E1E2E",
    fg = "#D9E0EE",
    black = "#1A1826",
    git = {
      add = "#ABE9B3",
      change = "#96CDFB",
      delete = "#F28FAD",
      conflict = "#FAE3B0",
    },
  },

  kanagawa_colors = {
    bg = "#16161D",
    bg_alt = "#1F1F28",
    bg_br = "#363646",
    fg = "#DCD7BA",
    red = "#E46876",
    orange = "#FFA066",
    yellow = "#DCA561",
    blue = "#7FB4CA",
    cyan = "#658594",
    violet = "#957FB8",
    magenta = "#938AA9",
    green = "#76946A",
    git = {
      add = "#76946A",
      conflict = "#252535",
      delete = "#C34043",
      change = "#DCA561",
    },
  },
}

M.current_colors = function()
  -- local colors = M.colors.moonlight_colors
  local colors = M.colors.rose_pine_colors
  return colors
end

M.hi_colors = function()
  local colors = {
    bg = "#16161D",
    bg_alt = "#1F1F28",
    fg = "#DCD7BA",
    green = "#76946A",
    red = "#E46876",
  }
  local color_binds = {
    bg = { group = "NormalFloat", property = "background" },
    bg_alt = { group = "Cursor", property = "foreground" },
    fg = { group = "Cursor", property = "background" },
    green = { group = "diffAdded", property = "foreground" },
    red = { group = "diffRemoved", property = "foreground" },
  }
  local function get_hl_by_name(name)
    local ret = vim.api.nvim_get_hl_by_name(name.group, true)
    return string.format("#%06x", ret[name.property])
  end

  for k, v in pairs(color_binds) do
    local found, color = pcall(get_hl_by_name, v)
    if found then
      colors[k] = color
    end
  end
  return colors
end

M.telescope_theme = function()
  local function set_bg(group, bg)
    vim.cmd("hi " .. group .. " guibg=" .. bg)
  end

  local function set_fg_bg(group, fg, bg)
    vim.cmd("hi " .. group .. " guifg=" .. fg .. " guibg=" .. bg)
  end

  local colors = M.hi_colors()
  -- set_fg_bg("WinSeparator", colors.bg, "None")
  set_fg_bg("Cursor", colors.fg, colors.bg)
  set_fg_bg("NormalFloat", colors.fg, colors.bg)
  set_fg_bg("FloatBorder", colors.fg, colors.bg)
  set_fg_bg("TelescopeBorder", colors.bg_alt, colors.bg)
  set_fg_bg("TelescopePromptBorder", colors.bg, colors.bg)
  set_fg_bg("TelescopePromptNormal", colors.fg, colors.bg_alt)
  set_fg_bg("TelescopePromptPrefix", colors.red, colors.bg)
  set_bg("TelescopeNormal", colors.bg)
  set_fg_bg("TelescopePreviewTitle", colors.bg, colors.green)
  set_fg_bg("LvimInfoHeader", colors.bg, colors.green)
  set_fg_bg("LvimInfoIdentifier", colors.red, colors.bg_alt)
  set_fg_bg("TelescopePromptTitle", colors.bg, colors.red)
  set_fg_bg("TelescopeResultsTitle", colors.bg, colors.bg)
  set_fg_bg("TelescopeResultsBorder", colors.bg, colors.bg)
  set_bg("TelescopeSelection", colors.bg_alt)
end

return M
