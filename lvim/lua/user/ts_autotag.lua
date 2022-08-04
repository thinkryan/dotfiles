local M = {}

M.config = function()
  local status_ok, tsat = pcall(require, "nvim-ts-autotag")
  if not status_ok then
    return
  end

  tsat.filetypes = {
    {
      "html",
      "javascript",
      "typescript",
      "javascriptreact",
      "typescriptreact",
      "svelte",
      "vue",
      "tsx",
      "jsx",
      "rescript",
      "xml",
      "php",
      "markdown",
      "glimmer",
      "handlebars",
      "hbs",
    },
  }
end

return M
