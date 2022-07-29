local M = {}

M.config = function()
  local options = {
    cmd = {
      vim.fn.stdpath "data" .. "/lsp_servers/tailwindcss_npm/node_modules/.bin/tailwindcss-language-server",
      "--stdio",
    },
    lint = {
      cssConflict = "warning",
      invalidApply = "error",
      invalidConfigPath = "error",
      invalidScreen = "error",
      invalidTailwindDirective = "error",
      invalidVariant = "error",
      recommendedVariantOrder = "warning"
    },
    experimental = {
      classRegex = {
        "tw`([^`]*)",
        "tw=\"([^\"]*)",
        "tw={\"([^\"}]*)",
        "tw\\.\\w+`([^`]*)",
        "tw\\(.*?\\)`([^`]*)"
      }
    },
    filetypes = {
      "html",
      "svelte",
      "mdx",
      "vue",
      "javascript",
      "javascriptreact",
      "typescriptreact",
      "blade",
      "css"
    }
  }

  require("lvim.lsp.manager").setup("tailwindcss", options)
end

return M
