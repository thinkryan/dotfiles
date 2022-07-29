local M = {}

M.config = function()
  require("lspconfig").prismals.setup {
    filetypes = {
      "prisma",
    },
  }
end

-- M.cmp = function ()
--   local capabilities = require('cmp_nvim_lsp').update_capabilities(vim.lsp.protocol.make_client_capabilities())
--   require('lspconfig')['prismals'].setup {
--     capabilities = capabilities
--   }
-- end

return M
