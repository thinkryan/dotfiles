local M = {}

-- Plugin engine with Packer
M.config = function()
  lvim.plugins = {
    {
      "folke/trouble.nvim",
      requires = {
        "kyazdani42/nvim-web-devicons",
        "nvim-telescope/telescope.nvim",
      },
      config = function()
        require("user.trouble").config()
      end,
      event = "BufWinEnter",
    },
    {
      "windwp/nvim-spectre",
      event = "BufRead",
      config = function()
        require("user.spectre").config()
      end,
    },
    {
      "andymass/vim-matchup",
      event = "BufReadPost",
      config = function()
        vim.g.matchup_enabled = 1
        vim.g.matchup_surround_enabled = 1
        vim.g.matchup_matchparen_deferred = 1
        vim.g.matchup_matchparen_offscreen = { method = "popup" }
      end,
    },
    {
      "karb94/neoscroll.nvim",
      require("neoscroll").setup(),
    },
    {
      "tpope/vim-surround",
    },
    {
      "tpope/vim-fugitive",
    },
    {
      "onsails/lspkind-nvim",
    },
    {
      "tpope/vim-sleuth",
    },
    {
      "norcalli/nvim-colorizer.lua",
      require("colorizer").setup(),
    },
    {
      "rose-pine/neovim",
      as = "rose-pine",
      require("user.theme").rose_pine(),
    },
    {
      "catppuccin/nvim",
      as = "catppuccin",
      require("user.theme").catppuccin(),
    },
    {
      "rebelot/kanagawa.nvim",
      require("user.theme").kanagawa(),
    },
    {
      "phaazon/hop.nvim",
      event = "BufRead",
      config = function()
        require("user.hop").config()
      end,
      disable = lvim.builtin.motion_provider ~= "hop",
    },
    {
      "ThePrimeagen/harpoon",
      require("harpoon").setup(),
    },
    {
      "jwalton512/vim-blade",
    },
    {
      "prettier/vim-prettier",
    },
    {
      "kevinhwang91/nvim-bqf",
      config = function()
        require("user.bqf").config()
      end,
      event = "BufRead",
    },
    {
      "tzachar/cmp-tabnine",
      run = "./install.sh",
      requires = "hrsh7th/nvim-cmp",
      config = function()
        local tabnine = require "cmp_tabnine.config"
        tabnine:setup {
          max_lines = 1000,
          max_num_results = 10,
          sort = true,
        }
      end,
      opt = true,
      event = "InsertEnter",
      disable = not lvim.builtin.tabnine.active,
    },
    {

      "simrat39/symbols-outline.nvim",
      setup = function()
        require("user.symbols_outline").config()
      end,
      event = "BufReadPost",
      disable = lvim.builtin.tag_provider ~= "symbols-outline",
    },
    {
      "ray-x/lsp_signature.nvim",
      config = function()
        require("user.lsp_signature").config()
      end,
      event = { "BufRead", "BufNew" },
    },
    {
      "vladdoster/remember.nvim",
      config = function()
        require("remember").setup {}
      end,
      event = "BufWinEnter",
      disable = not lvim.builtin.lastplace.active,
    },
    {
      "ggandor/lightspeed.nvim",
      config = function()
        require("user.lightspeed").config()
      end,
      disable = lvim.builtin.motion_provider ~= "lightspeed",
    },
    {
      "yamatsum/nvim-cursorline",
      opt = true,
      event = "BufWinEnter",
      disable = not lvim.builtin.cursorline.active,
    },
    {
      "jose-elias-alvarez/typescript.nvim",
      opt = true,
      event = { "BufReadPre", "BufNew" },
      config = function()
        require("user.tss").config()
      end,
      before = "williamboman/nvim-lsp-installer",
    },
    {
      "RishabhRD/nvim-cheat.sh",
      requires = "RishabhRD/popfix",
      config = function()
        vim.g.cheat_default_window_layout = "vertical_split"
      end,
      opt = true,
      cmd = { "Cheat", "CheatWithoutComments", "CheatList", "CheatListWithoutComments" },
      keys = "<leader>Q",
      disable = not lvim.builtin.cheat.active,
    },
    {
      "AckslD/nvim-neoclip.lua",
      config = function()
        require("user.neoclip").config()
      end,
      opt = true,
      keys = "<leader>y",
      disable = not lvim.builtin.neoclip.active,
    },

    {
      "sindrets/diffview.nvim",
      opt = true,
      cmd = { "DiffviewOpen", "DiffviewFileHistory" },
      module = "diffview",
      keys = "<leader>gd",
      setup = function()
        require("which-key").register { ["<leader>gd"] = "diffview: diff HEAD" }
      end,
      config = function()
        require("diffview").setup {
          enhanced_diff_hl = true,
          key_bindings = {
            file_panel = { q = "<Cmd>DiffviewClose<CR>" },
            view = { q = "<Cmd>DiffviewClose<CR>" },
          },
        }
      end,
      disable = not lvim.builtin.fancy_diff.active,
    },
    {
      "nvim-treesitter/nvim-treesitter-textobjects",
      after = "nvim-treesitter",
    },
    {
      "gfeiyou/command-center.nvim",
      config = function()
        require("user.cc").config()
      end,
      requires = "nvim-telescope/telescope.nvim",
    },
    {
      "ThePrimeagen/refactoring.nvim",
      ft = { "typescript", "javascript", "lua", "c", "cpp", "go", "python", "java", "php" },
      event = "BufRead",
      config = function()
        require("refactoring").setup {}
      end,
      disable = not lvim.builtin.refactoring.active,
    },
    {
      "mattn/emmet-vim", -- TODO: Configure this properly
    },
    {
      "lukas-reineke/indent-blankline.nvim",
      config = function()
        require("user.indentline").config()
      end,
      event = "BufRead",
    },
    {
      "windwp/nvim-ts-autotag",
    },
    {
      "TimUntersberger/neogit",
      config = function()
        require("neogit").setup {}
      end,
      disabled = not lvim.builtin.neogit.active,
    },
    {
      "shaunsingh/moonlight.nvim",
      -- require("user.theme").moonlight(),
    },
    {
      "nathom/filetype.nvim",
      config = function()
        require("user.filetype").config()
      end,
    },
    -- {
    --   "neoclide/coc.nvim",
    --   branch = "release",
    --   run = "yarn install --frozen-lockfile",
    -- },
    -- {
    --   "yaegassy/coc-blade",
    -- },
    {
      "kylechui/nvim-surround",
      config = function()
        require("nvim-surround").setup {
          -- Configuration here, or leave empty to use defaults
        }
      end,
    },
    {
      'github/copilot.vim',
    }
  }
end

-- require("packer").startup(function()
--   use {'neoclide/coc.nvim', branch = 'release', run = 'yarn install --frozen-lockfile' }
-- end)

return M
