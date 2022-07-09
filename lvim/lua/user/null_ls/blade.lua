local util = require "lsp.config.util"
local bin_name = "blade-formatter"

local cmd = { bin_name, "--stdio" }

if vim.fn.has "win32" == 1 then
  cmd = { "cmd.exe", "/C", bin_name, "--stdio" }
end

local function format_code()
  local params = {
    command = "blade-formatter",
    arguments = { vim.uri_from_bufnr(0) },
  }
  vim.lsp.buf.execute_command(params)
end

local function format_diff()
  local params = {
    command = "blade-formatter -c -d",
    arguments = { vim.uri_from_bufnr(0) },
  }
  vim.lsp.buf.execute_command(params)
end

-- TODO: Show diff output in Telescope
-- TODO: Add .bladeignore support

return {
  default_config = {
    cmd = cmd,
    filetypes = { "blade", "php" },
    single_file_support = true,
    root_dir = util.root_pattern(".bladeformatterrc.json", ".bladeformatterrc"),
    init_options = {
      configuration = {},
    },
  },
  commands = {
    TRBladeformat = {
      format_code,
      description = "Format blade buffer",
    },
  },
  docs = {
    description = [[ blade-formatter can be installed with via `npm` 

    ``` sh npm install -g blade-formatter
    ```
    ]],
    default_config = {
      root_dir = [[root_pattern(".bladeformatterrc.json", ".bladeformatterrc")]],
    },
  },

  -- Better way to do this?
  require("lvim.lsp.manager").setup "blade-formatter",
}
