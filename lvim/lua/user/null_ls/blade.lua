local M = {}

M.setup = function()
  local h = require "null-ls.helpers"

  local u = require "null-ls.utils"
  local methods = require "null-ls.methods"

  local FORMATTING = methods.internal.FORMATTING

  return h.make_builtin {
    name = "blade_formatter",
    meta = {
      url = "https://github.com/shufo/blade-formatter",
      description = "An opinionated blade template formatter for Laravel that respects readability",
    },
    method = FORMATTING,
    filetypes = { "blade" },
    generator_opts = {
      command = "blade-formatter",
      args = {
        "--write",
        "$FILENAME",
      },
      cwd = h.cache.by_bufnr(function(params)
        return u.root_pattern("composer.json", "composer.lock")(params.bufname)
      end),
      to_stdin = false,
      to_temp_file = true,
    },
    factory = h.formatter_factory,
  }
end

local function setupnls()
  local status_ok, nls = pcall(require, "null-ls")
  if not status_ok then
    return
  end

  -- attach blade_formatter as an available source within null-ls
  local sources = {
    nls.builtins.formatting.blade_formatter,
  }

  nls.setup {
    debounce = 150,
    save_after_format = false,
    sources = sources,
  }
end

setupnls()

return M
