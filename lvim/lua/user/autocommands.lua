local M = {}
local create_aucmd = vim.api.nvim_create_autocmd

M.config = function()
  vim.api.nvim_create_augroup("_lvim_user", {})

  -- Set NvimTree transparency
  if lvim.colorscheme == "moonlight" then
    create_aucmd("WinEnter", { group = "_lvim_user", pattern = "*", command = "highlight NvimTreeNormal guibg=none" })
  end

  -- Autocommands
  if lvim.builtin.nonumber_unfocus then
    create_aucmd("WinEnter", { group = "_lvim_user", pattern = "*", command = "set relativenumber number cursorline" })
    create_aucmd(
      "WinLeave",
      { group = "_lvim_user", pattern = "*", command = "set norelativenumber nonumber nocursorline" }
    )
  end
  -- Add Blade file support
  create_aucmd({"BufRead", "BufNewFile"}, { group = "_lvim_user", pattern = "*.blade.php", command = "set filetype=blade" })


  -- create_aucmd("FileType", {
  --   group = "_lvim_user",
  --   pattern = { "typescript", "typescriptreact" },
  --   callback = function()
  --     vim.keymap.set("n", "<leader>lA", "<Cmd>TsLspImportAll<CR>")
  --     vim.keymap.set("n", "<leader>lR", "<Cmd>TSLspRenameFile<CR>")
  --     vim.keymap.set("n", "<leader>lO", "<Cmd>TSLspOrganize<CR>")
  --   end,
  -- })

  local codelens_viewer = "lua require('user.codelens').show_line_sign()"
    create_aucmd("CursorHold", {
      group = "_lvim_user",
      pattern = { "*.ts", "*.tsx" },
      command = codelens_viewer,
    })
  end
return M
