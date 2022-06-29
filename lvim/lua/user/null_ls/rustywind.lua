-- local M = {}

-- -- Add RustyWind to null-ls formatters

-- local formatters = require "lvim.lsp.null-ls.formatters"
-- local formatters_table = {},

-- local project_has_prettier_config = function()
-- 	return (vim.fn.glob(".prettierrc*") ~= "" or utils.is_in_package_json("prettier"))
-- end

-- local project_has_eslint_config = function()
-- 	return (vim.fn.glob(".eslintrc*") ~= "" or utils.is_in_package_json("eslint"))
-- end
-- if project_has_prettier_config() == true then
-- 	table.insert(formatters_table, {
-- 		command = "prettier",
-- 		extra_args = { "--no-semi", "--single-quote", "--trailing-comma=all", "--arrow-parens=avoid" },
-- 		filetypes = {
-- 			"html",
-- 			"javascript",
-- 			"javascriptreact",
-- 			"json",
-- 			"markdown",
-- 			"svelte",
-- 			"typescript",
-- 			"typescriptreact",
-- 			"vue",
-- 			"yaml",
-- 		},
-- 	})
-- else
-- 	table.insert(formatters_table, {
-- 		command = "prettier",
-- 		filetypes = {
-- 			"html",
-- 			"json",
-- 			"markdown",
-- 			"yaml",
-- 		},
-- 	})
-- end

-- table.insert(formatters_table, { command = "rustywind" })

-- return M
