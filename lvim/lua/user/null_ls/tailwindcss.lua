local M = {}

M.config = function()
  local options = {
    cmd = {
      vim.fn.stdpath "data" .. "/lsp_servers/tailwindcss_npm/node_modules/.bin/tailwindcss-language-server",
      "--stdio",
    },
    filetypes = {
      "html",
      "svelte",
      "mdx",
      "vue",
      "javascript",
      "javascriptreact",
      "typescriptreact",
      "php", -- For blade templates TODO: Adjus for *.blade.php?
    }
  }

  require("lvim.lsp.manager").setup("tailwindcss", options)
end

return M
