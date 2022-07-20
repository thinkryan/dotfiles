--                    ___                       ___           ___           ___                       ___           ___
--                   /\  \                     /\  \         /|  |         /\  \                     /\  \         /\  \
--      ___          \:\  \       ___          \:\  \       |:|  |        /::\  \         ___       /::\  \        \:\  \
--     /\__\          \:\  \     /\__\          \:\  \      |:|  |       /:/\:\__\       /|  |     /:/\:\  \        \:\  \
--    /:/  /      ___ /::\  \   /:/__/      _____\:\  \   __|:|  |      /:/ /:/  /      |:|  |    /:/ /::\  \   _____\:\  \
--   /:/__/      /\  /:/\:\__\ /::\  \     /::::::::\__\ /\ |:|__|____ /:/_/:/__/___    |:|  |   /:/_/:/\:\__\ /::::::::\__\
--  /::\  \      \:\/:/  \/__/ \/\:\  \__  \:\~~\~~\/__/ \:\/:::::/__/ \:\/:::::/  /  __|:|__|   \:\/:/  \/__/ \:\~~\~~\/__/
-- /:/\:\  \      \::/__/       ~~\:\/\__\  \:\  \        \::/~~/~      \::/~~/~~~~  /::::\  \    \::/__/       \:\  \
-- \/__\:\  \      \:\  \          \::/  /   \:\  \        \:\~~\        \:\~~\      ~~~~\:\  \    \:\  \        \:\  \
--      \:\__\      \:\__\         /:/  /     \:\__\        \:\__\        \:\__\          \:\__\    \:\__\        \:\__\
--       \/__/       \/__/         \/__/       \/__/         \/__/         \/__/           \/__/     \/__/         \/__/
--
--                                           | thinkRyan Global Configuration |
--                                                  | Ryan Dennler |
require "globals"
require "settings"
require "lvim-settings"
require "leader"
require("user.neovim").config()

-- Customization
-- =========================================
lvim.builtin.lastplace = { active = false } -- change to false if you are jumping to future
lvim.builtin.tabnine = { active = true } -- change to false if you don't like tabnine
lvim.builtin.persistence = { active = true } -- change to false if you don't want persistence
lvim.builtin.presence = { active = false } -- change to true if you want discord presence
lvim.builtin.orgmode = { active = false } -- change to true if you want orgmode.nvim
lvim.builtin.dap.active = false -- change this to enable/disable debugging
lvim.builtin.fancy_statusline = { active = true } -- enable/disable fancy statusline
lvim.builtin.fancy_wild_menu = { active = false } -- enable/disable cmp-cmdline
lvim.builtin.fancy_diff = { active = false } -- enable/disable fancier git diff
lvim.builtin.lua_dev = { active = false } -- change this to enable/disable folke/lua_dev
lvim.builtin.test_runner = { active = false } -- change this to enable/disable vim-test, ultest
lvim.builtin.cheat = { active = false } -- enable cheat.sh integration
lvim.builtin.sql_integration = { active = false } -- use sql integration
lvim.builtin.smooth_scroll = "neoscroll" -- for smoth scrolling, can be "cinnamon", "neoscroll" or ""
lvim.builtin.neoclip = { active = true, enable_persistent_history = false }
lvim.builtin.nonumber_unfocus = false -- diffrentiate between focused and non focused windows
lvim.builtin.custom_web_devicons = false -- install https://github.com/Nguyen-Hoang-Nam/mini-file-icons
lvim.builtin.harpoon = { active = true } -- use the harpoon plugin
lvim.builtin.remote_dev = { active = false } -- enable/disable remote development
lvim.builtin.cursorline = { active = true } -- use a bit fancier cursorline
lvim.builtin.motion_provider = "hop" -- change this to use different motion providers ( hop or lightspeed )
lvim.builtin.hlslens = { active = false } -- enable/disable hlslens
lvim.builtin.csv_support = false -- enable/disable csv support
lvim.builtin.sidebar = { active = false } -- enable/disable sidebar
lvim.builtin.async_tasks = { active = true } -- enable/disable async tasks
lvim.builtin.winbar_provider = "filename" -- can be "filename" or "treesitter" or ""
lvim.builtin.collaborative_editing = { active = false } -- enable/disable collaborative editing
lvim.builtin.file_browser = { active = false } -- enable/disable telescope file browser
lvim.builtin.sniprun = { active = false } -- enable/disable sniprun
lvim.builtin.tag_provider = "symbols-outline" -- change this to use different tag providers ( symbols-outline or vista )
lvim.builtin.editorconfig = { active = true } -- enable/disable editorconfig
lvim.builtin.global_statusline = true -- set true to use global statusline
lvim.builtin.dressing = { active = false } -- enable to override vim.ui.input and vim.ui.select with telescope
lvim.builtin.refactoring = { active = false } -- enable to use refactoring.nvim code_actions
lvim.builtin.tmux_lualine = false -- use vim-tpipeline to integrate lualine and tmux
lvim.builtin.neogit = { active = true } -- use neogit

lvim.builtin.notify.active = true
lvim.lsp.automatic_servers_installation = false
if lvim.builtin.cursorline.active then
  lvim.lsp.document_highlight = false
end
lvim.lsp.code_lens_refresh = true
require("user.builtins").config()

-- StatusLine
-- =========================================
if lvim.builtin.fancy_statusline.active then
  require("user.lualine").config()
end

vim.list_extend(lvim.lsp.automatic_configuration.skipped_servers, {
  "clangd",
  "dockerls",
  "gopls",
  "jdtls",
  "pyright",
  "r_language_server",
  "rust_analyzer",
  "taplo",
  "texlab",
  "yamlls",
  "tsserver"
})
require("user.plugins").config()

-- null_ls
-- =========================================
require("user.null_ls.init").config()

-- AutoPairs configuration
require("user.autopairs").config()

-- TailwindCSS - @todo refactor to separate folder
-- =========================================
require("user.null_ls.tailwindcss").config()

-- Emmet - @todo refactor to separate folder
-- =========================================
require("user.null_ls.emmet").config()

-- Additional Plugins
-- =========================================
-- require("user.treesitter").config()

lvim.colorscheme = "moonlight"
lvim.transparent_window = true

-- Custom snippets
-- =========================================
require("user.luasnip").config()

-- Autocommands
-- ###########################################
require("user.autocommands").config()

-- Keymaps
-- ###########################################
require("user.keymaps").config()
