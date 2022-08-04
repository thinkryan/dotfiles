-- Plugin Specific Keymaps
-- TODO: Setup custom keymapping for TextObjects, Harpoon additionals

local M = {}

M.set_hlslens_keymaps = function()
  local opts = { noremap = true, silent = true }

  vim.api.nvim_set_keymap(
    "n",
    "n",
    "<Cmd>execute('normal! ' . v:count1 . 'n')<CR><Cmd>lua require('hlslens').start()<CR>",
    opts
  )
  vim.api.nvim_set_keymap(
    "n",
    "N",
    "<Cmd>execute('normal! ' . v:count1 . 'N')<CR><Cmd>lua require('hlslens').start()<CR>",
    opts
  )
  vim.api.nvim_set_keymap("n", "*", "*<Cmd>lua require('hlslens').start()<CR>", opts)
  vim.api.nvim_set_keymap("n", "#", "#<Cmd>lua require('hlslens').start()<CR>", opts)
  vim.api.nvim_set_keymap("n", "g*", "g*<Cmd>lua require('hlslens').start()<CR>", opts)
  vim.api.nvim_set_keymap("n", "g#", "g#<Cmd>lua require('hlslens').start()<CR>", opts)
end

M.set_hop_keymaps = function()
  local opts = { noremap = true, silent = true }
  vim.api.nvim_set_keymap("n", "s", ":HopChar2MW<cr>", opts)
  vim.api.nvim_set_keymap("n", "S", ":HopWordMW<cr>", opts)
  vim.api.nvim_set_keymap(
    "n",
    "f",
    "<cmd>lua require'hop'.hint_char1({ direction = require'hop.hint'.HintDirection.AFTER_CURSOR, current_line_only = true })<cr>",
    {}
  )
  vim.api.nvim_set_keymap(
    "n",
    "F",
    "<cmd>lua require'hop'.hint_char1({ direction = require'hop.hint'.HintDirection.BEFORE_CURSOR, current_line_only = true })<cr>",
    {}
  )
  vim.api.nvim_set_keymap(
    "o",
    "f",
    "<cmd>lua require'hop'.hint_char1({ direction = require'hop.hint'.HintDirection.AFTER_CURSOR, current_line_only = true, inclusive_jump = true })<cr>",
    {}
  )
  vim.api.nvim_set_keymap(
    "o",
    "F",
    "<cmd>lua require'hop'.hint_char1({ direction = require'hop.hint'.HintDirection.BEFORE_CURSOR, current_line_only = true, inclusive_jump = true })<cr>",
    {}
  )
  vim.api.nvim_set_keymap(
    "",
    "t",
    "<cmd>lua require'hop'.hint_char1({ direction = require'hop.hint'.HintDirection.AFTER_CURSOR, current_line_only = true })<cr>",
    {}
  )
  vim.api.nvim_set_keymap(
    "",
    "T",
    "<cmd>lua require'hop'.hint_char1({ direction = require'hop.hint'.HintDirection.BEFORE_CURSOR, current_line_only = true })<cr>",
    {}
  )
end

M.set_lightspeed_keymaps = function()
  vim.cmd [[
    nmap s <Plug>Lightspeed_s
    nmap S <Plug>Lightspeed_S
    nmap <expr> f reg_recording() . reg_executing() == "" ? "<Plug>Lightspeed_f" : "f"
    nmap <expr> F reg_recording() . reg_executing() == "" ? "<Plug>Lightspeed_F" : "F"
    nmap <expr> t reg_recording() . reg_executing() == "" ? "<Plug>Lightspeed_t" : "t"
    nmap <expr> T reg_recording() . reg_executing() == "" ? "<Plug>Lightspeed_T" : "T"
  ]]
end

local function set_lsp_wh_keymaps()
  local ok, _ = pcall(require, "vim.diagnostic")
  if ok then
    lvim.builtin.which_key.mappings["l"]["j"] = {
      "<cmd>lua vim.diagnostic.goto_next({float = {border = 'rounded', focusable = false, source = 'always'}})<cr>",
      "Next Diagnostic",
    }
    lvim.builtin.which_key.mappings["l"]["k"] = {
      "<cmd>lua vim.diagnostic.goto_prev({float = {border = 'rounded', focusable = false, source = 'always'}})<cr>",
      "Prev Diagnostic",
    }
end
end

local function set_bufferline_keymaps()
  -- TODO: Does bufferline support buffer splitting?
  lvim.keys.normal_mode["<S-x>"] = "<Cmd>BufferKill<CR>"
  -- TODO: Remove duplicate keymaps for cycling and use the one that is more natural
  lvim.keys.normal_mode["<S-l>"] = "<Cmd>BufferLineCycleNext<CR>"
  lvim.keys.normal_mode["<S-h>"] = "<Cmd>BufferLineCyclePrev<CR>"
  lvim.keys.normal_mode["[b"] = "<Cmd>BufferLineMoveNext<CR>"
  lvim.keys.normal_mode["]b"] = "<Cmd>BufferLineMovePrev<CR>"
  lvim.builtin.which_key.mappings["c"] = {}
  lvim.builtin.which_key.mappings.b = {
    name = "﩯Buffer",
    ["1"] = { "<Cmd>BufferLineGoToBuffer 1<CR>", "goto 1" },
    ["2"] = { "<Cmd>BufferLineGoToBuffer 2<CR>", "goto 2" },
    ["3"] = { "<Cmd>BufferLineGoToBuffer 3<CR>", "goto 3" },
    ["4"] = { "<Cmd>BufferLineGoToBuffer 4<CR>", "goto 4" },
    ["5"] = { "<Cmd>BufferLineGoToBuffer 5<CR>", "goto 5" },
    ["6"] = { "<Cmd>BufferLineGoToBuffer 6<CR>", "goto 6" },
    ["7"] = { "<Cmd>BufferLineGoToBuffer 7<CR>", "goto 7" },
    ["8"] = { "<Cmd>BufferLineGoToBuffer 8<CR>", "goto 8" },
    ["9"] = { "<Cmd>BufferLineGoToBuffer 9<CR>", "goto 9" },
    c = { "<Cmd>BufferLinePickClose<CR>", "delete buffer" },
    p = { "<Cmd>BufferLineTogglePin<CR>", "toggle pin" },
    s = { "<Cmd>BufferLinePick<CR>", "pick buffer" },
    t = { "<Cmd>BufferLineGroupToggle docs<CR>", "toggle groups" },
    f = { "<cmd>Telescope buffers<cr>", "Find" },
    b = { "<cmd>b#<cr>", "Previous" },
    h = { "<cmd>BufferLineCloseLeft<cr>", "Close all to the left" },
    l = {
      "<cmd>BufferLineCloseRight<cr>",
      "Close all to the right",
    },
    D = {
      "<cmd>BufferLineSortByDirectory<cr>",
      "Sort by directory",
    },
    L = {
      "<cmd>BufferLineSortByExtension<cr>",
      "Sort by language",
    },
  }
end

local function set_telescope_keymaps()

    lvim.builtin.which_key.mappings["F"] = {
    name = " Find",
    b = { "<cmd>lua require('user.telescope').builtin()<cr>", "Builtin" },
    f = { "<cmd>lua require('user.telescope').curbuf()<cr>", "Current Buffer" },
    g = { "<cmd>lua require('user.telescope').git_files()<cr>", "Git Files" },
    i = { "<cmd>lua require('user.telescope').installed_plugins()<cr>", "Installed Plugins" },
    l = {
      "<cmd>lua require('telescope.builtin').resume()<cr>",
      "Last Search",
    },
    p = { "<cmd>lua require('user.telescope').project_search()<cr>", "Project" },
    s = { "<cmd>lua require('user.telescope').git_status()<cr>", "Git Status" },
    z = { "<cmd>lua require('user.telescope').search_only_certain_files()<cr>", "Certain Filetype" },
  }

  lvim.keys.normal_mode["<leader>i"] = ":Telescope current_buffer_fuzzy_find case_mode=ignore_case<cr>"
  lvim.keys.normal_mode["<C-p>"] = ":Telescope find_files<cr>"
  lvim.keys.normal_mode["<M-p>"] = ":Telescope buffers<cr>"
  lvim.keys.normal_mode["<M-s>"] = ":Telescope lsp_document_symbols<cr>"

  lvim.builtin.which_key.mappings["f"] = {
    require("lvim.core.telescope.custom-finders").find_project_files,
    " Find File",
  }

end

local function set_refactoring_keymaps()
  lvim.keys.normal_mode["<leader>la"] = "<Esc><cmd>lua require('telescope').extensions.refactoring.refactors()<CR>"
end

local function set_harpoon_keymaps()
  lvim.keys.normal_mode["<C-Space>"] = "<cmd>lua require('harpoon.cmd-ui').toggle_quick_menu()<CR>"
  lvim.keys.normal_mode["tu"] = "<cmd>lua require('harpoon.term').gotoTerminal(1)<CR>"
  lvim.keys.normal_mode["te"] = "<cmd>lua require('harpoon.term').gotoTerminal(2)<CR>"
  lvim.keys.normal_mode["cu"] = "<cmd>lua require('harpoon.term').sendCommand(1, 1)<CR>"
  lvim.keys.normal_mode["ce"] = "<cmd>lua require('harpoon.term').sendCommand(1, 2)<CR>"
  lvim.builtin.which_key.mappings["a"] = { "<cmd>lua require('harpoon.mark').add_file()<CR>", " Add Mark" }
  lvim.builtin.which_key.mappings["<leader>"] = {
    "<cmd>lua require('harpoon.ui').toggle_quick_menu()<CR>",
    " Harpoon",
  }

  local whk_status, whk = pcall(require, "which-key")
  if not whk_status then
    return
  end
  whk.register {
    ["<leader>1"] = { "<CMD>lua require('harpoon.ui').nav_file(1)<CR>", " goto1" },
    ["<leader>2"] = { "<CMD>lua require('harpoon.ui').nav_file(2)<CR>", " goto2" },
    ["<leader>3"] = { "<CMD>lua require('harpoon.ui').nav_file(3)<CR>", " goto3" },
    ["<leader>4"] = { "<CMD>lua require('harpoon.ui').nav_file(4)<CR>", " goto4" },
  }
end

local function set_trouble_keymaps()
  lvim.keys.normal_mode["<leader>xx"] = ":TroubleToggle<cr>"
  lvim.keys.normal_mode["<leader>xw"] = ":TroubleToggle workspace_diagnostics<cr>"
  lvim.keys.normal_mode["<leader>xq"] = ":TroubleToggle quickfix<cr>"
end

local function set_neogit_keymaps()
  lvim.keys.normal_mode["<leader>gs"] = ":Neogit<cr>"
end

local function set_command_center_keymaps()
  lvim.keys.normal_mode["<leader>?c"] = ":Telescope command_center<cr>"
end

local function set_legendary_keyamsp()
  lvim.builtin.which_key.mappings["C"] = { "<cmd>lua require('legendary').find('commands')<cr>", " Command Palette" }
end

-- Additional Keybinds

M.config = function()
  set_bufferline_keymaps()

  lvim.keys.normal_mode["<leader>tf"] = ":NvimTreeFocus<cr>"

  lvim.keys.visual_mode["ga"] = "<esc><Cmd>lua vim.lsp.buf.range_code_action()<CR>"
  lvim.keys.visual_mode["<leader>st"] = "<Cmd>lua require('user.telescope').grep_string_visual()<CR>"

  set_harpoon_keymaps()

  if vim.fn.has "mac" == 1 then
    lvim.keys.normal_mode["gx"] =
      [[<cmd>lua os.execute("open " .. vim.fn.shellescape(vim.fn.expand "<cWORD>")); vim.cmd "redraw!"<cr>]]
  elseif vim.fn.has "linux" then
    lvim.keys.normal_mode["gx"] =
      [[<cmd>lua os.execute("xdg-open " .. vim.fn.shellescape(vim.fn.expand "<cWORD>")); vim.cmd "redraw!"<cr>]]
  end

  lvim.keys.insert_mode["<A-s>"] =
    "<cmd>lua require('telescope').extensions.luasnip.luasnip(require('telescope.themes').get_cursor({}))<CR>"

  -- lvim.keys.normal_mode["<leader>l"] = ":Prettier<cr>"

  ---- Commands
  lvim.keys.normal_mode["<C-s>"] = ":w<cr>"
  lvim.keys.normal_mode["<C-q>"] = ":q<cr>"

    -- Delete a word backwards in normal mode
  lvim.keys.normal_mode["dw"] = 'vb"_d'

  -- HTML selection (possibly port into Lunarvim specific keybinds)
  -- TODO: Add some handling or implement a neovim plugin to handle these more thoroughly
  lvim.keys.normal_mode["vix"] = 'va"oB'
  lvim.keys.normal_mode["vax"] = 'va"oBh'
  lvim.keys.normal_mode["dix"] = 'da"oB'
  lvim.keys.normal_mode["dax"] = 'da"oBh'
  lvim.keys.normal_mode["cix"] = 'ca"oB'
  lvim.keys.normal_mode["cax"] = 'ca"oBh'

  set_lsp_wh_keymaps()
  set_telescope_keymaps()
  set_refactoring_keymaps()
  set_trouble_keymaps()
  set_neogit_keymaps()
  set_command_center_keymaps()
  set_legendary_keyamsp()
end

return M
