local M = {}

M.config = function()
  -- NOTE: By default, all null-ls providers are checked on startup.
  -- If you want to avoid that or want to only set up the provider
  -- when you opening the associated file-type,
  -- then you can use filetype plugins for this purpose.
  -- https://www.lunarvim.org/languages/#lazy-loading-the-formatter-setup
  local status_ok, nls = pcall(require, "null-ls")
  if not status_ok then
    return
  end

  local custom_go_actions = require "user.null_ls.go"
  local custom_md_hover = require "user.null_ls.markdown"
  local sources = {
    nls.builtins.formatting.stylua,
    -- Support for nix files
    nls.builtins.diagnostics.ansiblelint.with {
      condition = function(utils)
        return utils.root_has_file "roles" and utils.root_has_file "inventories"
      end,
    },
    nls.builtins.diagnostics.hadolint,
    nls.builtins.diagnostics.luacheck,
    nls.builtins.diagnostics.markdownlint.with {
      filetypes = { "markdown" },
    },
    nls.builtins.diagnostics.vale.with {
      filetypes = { "markdown" },
    },
    nls.builtins.diagnostics.revive.with {
      condition = function(utils)
        return utils.root_has_file "revive.toml"
      end,
    },
    custom_go_actions.gomodifytags,
    custom_go_actions.gostructhelper,
    custom_md_hover.dictionary,

    nls.builtins.code_actions.refactoring.with {
      filetypes = {
        "typescriptreact",
        "javascriptreact",
        "javascript",
        "lua",
        "c",
        "cpp",
        "go",
        "python",
        "java",
        "php",
      },
    },
  }

  -- you can either config null-ls itself
  nls.setup {
    on_attach = require("lvim.lsp").common_on_attach,
    debounce = 150,
    save_after_format = false,
    sources = sources,
  }

end

return M
