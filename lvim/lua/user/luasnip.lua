local M = {}

M.config = function()
  local function setupCustomSnippets()
    -- The directories will have to be structured like eg. <https://github.com/rafamadriz/friendly-snippets> (include
    -- a similar `package.json`)
    require("luasnip.loaders.from_vscode").load { paths = { "../../snippets/" } }

    -- You can also use lazy loading so you only get in memory snippets of languages you use
    require("luasnip.loaders.from_vscode").lazy_load() -- You can pass { paths = "./my-snippets/"} as well

    -- You can also use snippets in snipmate format, for example <https://github.com/honza/vim-snippets>.
    -- The usage is similar to vscode.

    -- One peculiarity of honza/vim-snippets is that the file with the global snippets is _.snippets, so global snippets
    -- are stored in `ls.snippets._`.
    -- We need to tell luasnip that "_" contains global snippets:
  end

  setupCustomSnippets()
end

return M
