local M = {}

M.config = function()
  local status_ok, navigator = pcall(require, "navigator")
  if not status_ok then
    return
  end

  navigator.setup({
    treesitter_analysis = true,
    lsp_signature_help = false,
    lsp = {
      enable = false,
      diagnostic = {
        virtual_text = false,
        update_in_insert = false
      }
    }
  })

end

return M
