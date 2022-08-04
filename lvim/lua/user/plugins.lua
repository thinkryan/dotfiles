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
      "mattn/emmet-vim",
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
      config = function()
        require("user.ts_autotag").config()
      end,
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
    {
      "kylechui/nvim-surround",
      config = function()
        require("nvim-surround").setup()
      end,
    },
    {
      "github/copilot.vim",
    },
    {
      "nvim-telescope/telescope-ui-select.nvim",
      -- require("telescope").load_extension("ui-select"),
    },
    {
      "ThePrimeagen/refactoring.nvim",
      requires = {
        { "nvim-lua/plenary.nvim" },
        { "nvim-treesitter/nvim-treesitter" },
      },
    },
    {
      "nvim-telescope/telescope-file-browser.nvim",
      disable = not lvim.builtin.file_browser.active
    },
    {
      "stevearc/dressing.nvim",
      config = function()
        require("user.dress").config()
      end,
      event = "BufWinEnter",
    },
    {
      "mrjones2014/legendary.nvim",
      config = function()
        require("user.legendary").config()
      end,
    },
    {
      "j-hui/fidget.nvim",
      config = function()
        require("user.fidget").config()
      end,
    },
    -- {
    --   "ray-x/navigator.lua",
    --   requires = {
    --     { "ray-x/guihua.lua", run = "cd lua/fzy && make" },
    --     { "neovim/nvim-lspconfig" },
    --   },
    --   -- require("navigator").setup()
    --   require("user.navigator").config()
    -- },
  }
end

return M
