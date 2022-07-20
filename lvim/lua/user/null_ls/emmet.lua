local M = {}

M.config = function()
  local capabilities = vim.lsp.protocol.make_client_capabilities()
  -- capabilities.textDocument.completion.completionItem.snippetSupport = true
  local options = {
    cmd = { vim.fn.stdpath "data" .. "/lsp_servers/emmet_ls/node_modules/.bin/emmet-ls", "--stdio" },
    capabilities = capabilities,
    filetypes = {
      "html",
      "svelte",
      "php",
      "xml",
    },
    root_dir = function()
      return vim.loop.cwd()
    end,
  }

  require("lvim.lsp.manager").setup("emmet_ls", options)
end

return M
