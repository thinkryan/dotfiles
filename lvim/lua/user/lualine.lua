local Lualine = {}

Lualine.config = function()
  if not lvim.builtin.lualine.active then
    return
  end

  local components = require "lvim.core.lualine.components"

  lvim.builtin.lualine.options.theme = "moonlight"

  lvim.builtin.lualine.sections.lualine_x = {
    components.mode,
    components.diagnostics,
    components.lsp,
    components.filetype
  }

  lvim.builtin.lualine.sections.lualine_z = {
    components.location
  }

end

return Lualine
