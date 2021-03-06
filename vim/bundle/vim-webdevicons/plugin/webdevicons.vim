" Version: 0.6.1
" Webpage: https://github.com/ryanoasis/vim-devicons
" Maintainer: Ryan McIntyre <ryanoasis@gmail.com>
" License: see LICENSE

let s:version = '0.6.1'

" standard fix/safety: line continuation (avoiding side effects) {{{1
"========================================================================
let s:save_cpo = &cpo
set cpo&vim

" standard loading / not loading {{{1
"========================================================================

if exists('g:loaded_webdevicons')
  finish
endif

let g:loaded_webdevicons = 1

" config enable / disable settings {{{1
"========================================================================

if !exists('g:webdevicons_enable')
  let g:webdevicons_enable = 1
endif

if !exists('g:webdevicons_enable_nerdtree')
  let g:webdevicons_enable_nerdtree = 1
endif

if !exists('g:webdevicons_enable_unite')
  let g:webdevicons_enable_unite = 1
endif

if !exists('g:webdevicons_enable_vimfiler')
  let g:webdevicons_enable_vimfiler = 1
endif

if !exists('g:webdevicons_enable_ctrlp')
  let g:webdevicons_enable_ctrlp = 1
endif

if !exists('g:webdevicons_enable_airline_tabline')
  let g:webdevicons_enable_airline_tabline = 1
endif

if !exists('g:webdevicons_enable_airline_statusline')
  let g:webdevicons_enable_airline_statusline = 1
endif

if !exists('g:webdevicons_enable_airline_statusline_fileformat_symbols')
  let g:webdevicons_enable_airline_statusline_fileformat_symbols = 1
endif

if !exists('g:webdevicons_enable_flagship_statusline')
  let g:webdevicons_enable_flagship_statusline = 1
endif

if !exists('g:webdevicons_enable_flagship_statusline_fileformat_symbols')
  let g:webdevicons_enable_flagship_statusline_fileformat_symbols = 1
endif

if !exists('g:webdevicons_conceal_nerdtree_brackets')
  let g:webdevicons_conceal_nerdtree_brackets = 1
endif

" config options {{{1
"========================================================================

if !exists('g:WebDevIconsUnicodeDecorateFileNodes')
  let g:WebDevIconsUnicodeDecorateFileNodes = 1
endif

" whether to show default folder glyphs on directories:
if !exists('g:WebDevIconsUnicodeDecorateFolderNodes')
  let g:WebDevIconsUnicodeDecorateFolderNodes = 0
endif

if !exists('g:DevIconsEnableFoldersOpenClose')
  let g:DevIconsEnableFoldersOpenClose = 0
endif

" whether to try to match folder notes with any exact file node matches
" default is to match but requires WebDevIconsUnicodeDecorateFolderNodes set
" to 1:
if !exists('g:WebDevIconsUnicodeDecorateFolderNodesExactMatches')
  let g:WebDevIconsUnicodeDecorateFolderNodesExactMatches = 1
endif

if !exists('g:WebDevIconsUnicodeGlyphDoubleWidth')
  let g:WebDevIconsUnicodeGlyphDoubleWidth = 1
endif

if !exists('g:WebDevIconsNerdTreeAfterGlyphPadding')
  let g:WebDevIconsNerdTreeAfterGlyphPadding = '  '
endif

if !exists('g:WebDevIconsNerdTreeGitPluginForceVAlign')
  let g:WebDevIconsNerdTreeGitPluginForceVAlign = 1
endif

" config defaults {{{1
"========================================================================

if !exists('g:WebDevIconsUnicodeDecorateFileNodesDefaultSymbol')
  let g:WebDevIconsUnicodeDecorateFileNodesDefaultSymbol = '???'
endif

if !exists('g:WebDevIconsUnicodeDecorateFolderNodesDefaultSymbol')
  if g:DevIconsEnableFoldersOpenClose
    " use new glyph
    let g:WebDevIconsUnicodeDecorateFolderNodesDefaultSymbol = '???'
  else
    " use older glyph
    let g:WebDevIconsUnicodeDecorateFolderNodesDefaultSymbol = '???'
  endif
endif

if !exists('g:DevIconsDefaultFolderOpenSymbol')
    let g:DevIconsDefaultFolderOpenSymbol = '???'
endif

" functions {{{1
"========================================================================

" local functions {{{2
"========================================================================

" scope: local
function! s:strip(input)
  return substitute(a:input, '^\s*\(.\{-}\)\s*$', '\1', '')
endfunction

" scope: local
function! s:setDictionaries()

	let s:file_node_extensions = {
		\	'styl'     : '???',
		\	'scss'     : '???',
		\	'htm'      : '???',
		\	'html'     : '???',
		\	'slim'     : '???',
		\	'ejs'      : '???',
		\	'css'      : '???',
		\	'less'     : '???',
		\	'md'       : '???',
		\	'markdown' : '???',
		\	'json'     : '???',
		\	'js'       : '???',
		\	'jsx'      : '???',
		\	'rb'       : '???',
		\	'php'      : '???',
		\	'py'       : '???',
		\	'pyc'      : '???',
		\	'pyo'      : '???',
		\	'pyd'      : '???',
		\	'coffee'   : '???',
		\	'mustache' : '???',
		\	'hbs'      : '???',
		\	'conf'     : '???',
		\	'ini'      : '???',
		\	'yml'      : '???',
		\	'bat'      : '???',
		\	'jpg'      : '???',
		\	'jpeg'     : '???',
		\	'bmp'      : '???',
		\	'png'      : '???',
		\	'gif'      : '???',
		\	'ico'      : '???',
		\	'twig'     : '???',
		\	'cpp'      : '???',
		\	'c++'      : '???',
		\	'cxx'      : '???',
		\	'cc'       : '???',
		\	'cp'       : '???',
		\	'c'        : '???',
		\	'hs'       : '???',
		\	'lhs'      : '???',
		\	'lua'      : '???',
		\	'java'     : '???',
		\	'sh'       : '???',
		\	'fish'     : '???',
		\	'ml'       : '??',
		\	'mli'      : '??',
		\	'diff'     : '???',
		\	'db'       : '???',
		\	'sql'      : '???',
		\	'dump'     : '???',
		\	'clj'      : '???',
		\	'cljs'     : '???',
		\	'edn'      : '???',
		\	'scala'    : '???',
		\	'go'       : '???',
		\	'dart'     : '???',
		\	'xul'      : '???',
		\	'sln'      : '???',
		\	'suo'      : '???',
		\	'pl'       : '???',
		\	'pm'       : '???',
		\	't'        : '???',
		\	'rss'      : '???',
		\	'f#'       : '???',
		\	'fsscript' : '???',
		\	'fsx'      : '???',
		\	'fs'       : '???',
		\	'fsi'      : '???',
		\	'rs'       : '???',
		\	'rlib'     : '???',
		\	'd'        : '???',
		\	'erl'      : '???',
		\	'hrl'      : '???',
		\	'vim'      : '???',
		\	'ai'       : '???',
		\	'psd'      : '???',
		\	'psb'      : '???',
		\	'ts'       : '???',
		\	'jl'       : '???'
	\}

	let s:file_node_exact_matches = {
		\	'exact-match-case-sensitive-1.txt' : 'X1',
		\	'exact-match-case-sensitive-2'     : 'X2',
		\	'gruntfile.coffee'                 : '???',
		\	'gruntfile.js'                     : '???',
		\	'gruntfile.ls'                     : '???',
		\	'gulpfile.coffee'                  : '???',
		\	'gulpfile.js'                      : '???',
		\	'gulpfile.ls'                      : '???',
		\	'dropbox'                          : '???',
		\	'.ds_store'                        : '???',
		\	'.gitconfig'                       : '???',
		\	'.gitignore'                       : '???',
		\	'.bashrc'                          : '???',
		\	'.bashprofile'                     : '???',
		\	'favicon.ico'                      : '???',
		\	'license'                          : '???',
		\	'node_modules'                     : '???',
		\	'react.jsx'                        : '???',
		\	'procfile'                         : '???',
	\}

	let s:file_node_pattern_matches = {
		\ '.*jquery.*\.js$'       : '???',
		\ '.*angular.*\.js$'      : '???',
		\ '.*backbone.*\.js$'     : '???',
		\ '.*require.*\.js$'      : '???',
		\ '.*materialize.*\.js$'  : '???',
		\ '.*materialize.*\.css$' : '???',
		\ '.*mootools.*\.js$'     : '???'
	\}

  if !exists('g:WebDevIconsUnicodeDecorateFileNodesExtensionSymbols')
    let g:WebDevIconsUnicodeDecorateFileNodesExtensionSymbols = {}
  endif

  if !exists('g:WebDevIconsUnicodeDecorateFileNodesExactSymbols')
    " do not remove: exact-match-case-sensitive-*
    let g:WebDevIconsUnicodeDecorateFileNodesExactSymbols = {}
  endif

  if !exists('g:WebDevIconsUnicodeDecorateFileNodesPatternSymbols')
    let g:WebDevIconsUnicodeDecorateFileNodesPatternSymbols = {}
  endif

  " iterate to fix allow user overriding of specific individual keys in vimrc (only gvimrc was working previously)
  for [key, val] in items(s:file_node_extensions)
    if !has_key(g:WebDevIconsUnicodeDecorateFileNodesExtensionSymbols, key)
      let g:WebDevIconsUnicodeDecorateFileNodesExtensionSymbols[key] = val
    endif
  endfor

  " iterate to fix allow user overriding of specific individual keys in vimrc (only gvimrc was working previously)
  for [key, val] in items(s:file_node_exact_matches)
    if !has_key(g:WebDevIconsUnicodeDecorateFileNodesExactSymbols, key)
      let g:WebDevIconsUnicodeDecorateFileNodesExactSymbols[key] = val
    endif
  endfor

  " iterate to fix allow user overriding of specific individual keys in vimrc (only gvimrc was working previously)
  for [key, val] in items(s:file_node_pattern_matches)
    if !has_key(g:WebDevIconsUnicodeDecorateFileNodesPatternSymbols, key)
      let g:WebDevIconsUnicodeDecorateFileNodesPatternSymbols[key] = val
    endif
  endfor

endfunction

" scope: local
function! s:setSyntax()
  if g:webdevicons_enable_nerdtree == 1 && g:webdevicons_conceal_nerdtree_brackets == 1
    augroup webdevicons_conceal_nerdtree_brackets
      au!
      autocmd FileType nerdtree syntax match hideBracketsInNerdTree "\]" contained conceal containedin=ALL
      autocmd FileType nerdtree syntax match hideBracketsInNerdTree "\[" contained conceal containedin=ALL
      autocmd FileType nerdtree setlocal conceallevel=3
      autocmd FileType nerdtree setlocal concealcursor=nvic
    augroup END
  endif
endfunction

" scope: local
" stole solution/idea from nerdtree-git-plugin :)
function! s:setCursorHold()
  if g:webdevicons_enable_nerdtree
    augroup webdevicons_cursor_hold
      autocmd CursorHold * silent! call s:CursorHoldUpdate()
    augroup END
  endif
endfunction

" scope: local
" stole solution/idea from nerdtree-git-plugin :)
function! s:CursorHoldUpdate()
  if g:NERDTreeUpdateOnCursorHold != 1
    return
  endif

  if !g:NERDTree.IsOpen()
    return
  endif

  b:NERDTreeRoot.refreshFlags()
endfunction

" scope: local
function! s:hardRefreshNerdTree()
  if g:webdevicons_enable_nerdtree == 1 && g:webdevicons_conceal_nerdtree_brackets == 1 && g:NERDTree.IsOpen()
    NERDTreeClose
    NERDTree
  endif
endfunction

" for vim-flagship plugin {{{3
"========================================================================

" scope: local
function! s:initializeFlagship()
  if exists("g:loaded_flagship") && g:webdevicons_enable_flagship_statusline
    autocmd User Flags call Hoist("buffer", "WebDevIconsGetFileTypeSymbol")
  endif

  if exists("g:loaded_flagship") && g:webdevicons_enable_flagship_statusline_fileformat_symbols
    autocmd User Flags call Hoist("buffer", "WebDevIconsGetFileFormatSymbol")
  endif

endfunction

" for unite plugin {{{3
"========================================================================

" scope: local
function! s:initializeUnite()
  if exists("g:loaded_unite") && g:webdevicons_enable_unite
    let s:filters = {
          \   "name" : "devicons_converter",
          \}

    function! s:filters.filter(candidates, context)
      for candidate in a:candidates

        if has_key(candidate, "action__buffer_nr")
          let bufname = bufname(candidate.action__buffer_nr)
          let filename = fnamemodify(bufname, ':p:t')
          let path = fnamemodify(bufname, ':p:h')
        elseif has_key(candidate, "word") && has_key(candidate, "action__path")
          let path = candidate.action__path
          let filename = candidate.word
        endif

        let icon = WebDevIconsGetFileTypeSymbol(filename, isdirectory(filename))

        " prevent filenames of buffers getting 'lost'
        if filename != path
          let path = printf("%s %s", filename, path)
        endif

        " Customize output format.
        let candidate.abbr = printf("%s %s", icon, path)
      endfor
      return a:candidates
    endfunction

    call unite#define_filter(s:filters)
    unlet s:filters

    call unite#custom#source('file,file_rec,buffer', 'converters', 'devicons_converter')
  endif
endfunction

" for vimfiler plugin {{{3
"========================================================================

" scope: local
function! s:initializeVimfiler()
  if exists("g:loaded_vimfiler") && g:webdevicons_enable_vimfiler
    call vimfiler#custom#profile('default', 'context', {
      \ 'columns' : 'type:devicons:size:time'
      \ })
  endif
endfunction

" for ctrlp plugin {{{3
"========================================================================

" scope: local
" Either initialize for: kien/ctrlp.vim OR up to date fork: ctrlpvim/ctrlp.vim
" mostly a hack/overwrite to add icons to the official inactive ctrlP repo
" only overwriting the necessary functions to make it work
" unless we detect the newer active ctrlp fork
" @TODO implementation for CtrlP buffer and find file mode
function! s:initializeCtrlP()
  if exists("g:loaded_ctrlp") && g:webdevicons_enable_ctrlp
    let g:ctrlp_open_func = {
      \ 'mru files': 'webdevicons#ctrlPOpenFunc'
      \ }

    if exists("g:ctrlp_mruf_map_string")
      " logic for ctrlpvim/ctrlp.vim:
      let g:ctrlp_mruf_map_string = '!stridx(v:val, cwd) ? WebDevIconsGetFileTypeSymbol(strpart(v:val, strridx(v:val, "/"))) . " " . strpart(v:val, idx) : g:WebDevIconsUnicodeDecorateFileNodesDefaultSymbol . " " . v:val'
    else
      " logic for kien/ctrlp.vim:
      call s:initializeCtrlPOverwrite()
    endif
  endif
endfunction

" scope: local
" logic for kien/ctrlp.vim
" @todo a better cleaner way? is it possible?
function! s:initializeCtrlPOverwrite()
  if g:webdevicons_enable_ctrlp
    " Static variables {{{1
    let [s:mrbs, s:mrufs] = [[], []]

    fu! ctrlp#mrufiles#opts()
    	let [pref, opts] = ['g:ctrlp_mruf_', {
    		\ 'max': ['s:max', 250],
    		\ 'include': ['s:in', ''],
    		\ 'exclude': ['s:ex', ''],
    		\ 'case_sensitive': ['s:cseno', 1],
    		\ 'relative': ['s:re', 0],
    		\ 'save_on_update': ['s:soup', 1],
    		\ }]
    	for [ke, va] in items(opts)
    		let [{va[0]}, {pref.ke}] = [pref.ke, exists(pref.ke) ? {pref.ke} : va[1]]
    	endfo
    endf
    cal ctrlp#mrufiles#opts()

    fu! s:mergelists()
    	let diskmrufs = ctrlp#utils#readfile(ctrlp#mrufiles#cachefile())
    	cal filter(diskmrufs, 'index(s:mrufs, v:val) < 0')
    	let mrufs = s:mrufs + diskmrufs
    	retu s:chop(mrufs)
    endf

    fu! s:chop(mrufs)
    	if len(a:mrufs) > {s:max} | cal remove(a:mrufs, {s:max}, -1) | en
    	retu a:mrufs
    endf

    fu! s:reformat(mrufs, ...)
    	let cwd = getcwd()
    	let cwd .= cwd !~ '[\/]$' ? ctrlp#utils#lash() : ''
    	if {s:re}
    		let cwd = exists('+ssl') ? tr(cwd, '/', '\') : cwd
    		cal filter(a:mrufs, '!stridx(v:val, cwd)')
    	en
    	if a:0 && a:1 == 'raw' | retu a:mrufs | en
    	let idx = strlen(cwd)
    	if exists('+ssl') && &ssl
    		let cwd = tr(cwd, '\', '/')
    		cal map(a:mrufs, 'tr(v:val, "\\", "/")')
    	en
    	retu map(a:mrufs, '!stridx(v:val, cwd) ? WebDevIconsGetFileTypeSymbol(strpart(v:val, strridx(v:val, "/"))) . " " . strpart(v:val, idx) : g:WebDevIconsUnicodeDecorateFileNodesDefaultSymbol . " " . v:val')
    endf

    fu! ctrlp#mrufiles#refresh(...)
    	let mrufs = s:mergelists()
    	cal filter(mrufs, '!empty(ctrlp#utils#glob(v:val, 1)) && !s:excl(v:val)')
    	if exists('+ssl')
    		cal map(mrufs, 'tr(v:val, "/", "\\")')
    		cal map(s:mrufs, 'tr(v:val, "/", "\\")')
    		let cond = 'count(mrufs, v:val, !{s:cseno}) == 1'
    		cal filter(mrufs, cond)
    		cal filter(s:mrufs, cond)
    	en
    	cal s:savetofile(mrufs)
    	retu a:0 && a:1 == 'raw' ? [] : s:reformat(mrufs)
    endf

    fu! ctrlp#mrufiles#remove(files)
    	let mrufs = []
    	if a:files != []
    		let mrufs = s:mergelists()
    		let cond = 'index(a:files, v:val, 0, !{s:cseno}) < 0'
    		cal filter(mrufs, cond)
    		cal filter(s:mrufs, cond)
    	en
    	cal s:savetofile(mrufs)
    	retu s:reformat(mrufs)
    endf

    fu! ctrlp#mrufiles#list(...)
    	retu a:0 ? a:1 == 'raw' ? s:reformat(s:mergelists(), a:1) : 0
    		\ : s:reformat(s:mergelists())
    endf
  endif
endfunction

" scope: local
function! s:initialize()
  call s:setDictionaries()
  call s:setSyntax()
  call s:setCursorHold()
  call s:initializeFlagship()
  call s:initializeUnite()
  call s:initializeVimfiler()
  call s:initializeCtrlP()
endfunction

" local initialization {{{2
"========================================================================

call s:initialize()

" public functions {{{2
"========================================================================

" scope: public
function! webdevicons#version()
  return s:version
endfunction

" scope: public
function! webdevicons#refresh()
  call s:setSyntax()
  call s:hardRefreshNerdTree()
endfunction

" scope: public
function! webdevicons#ctrlPOpenFunc(action, line)
  let line = a:line
  " Remove non-breaking space which is present (NBSP U+00A0)
  let line = substitute(line, "??", "", "")
  " Trim leading and trailing whitespace and replace private character range characters
  let line = s:strip(substitute(line, "[???-???]", "", ""))
  " Use CtrlP's default file opening function
  call call('ctrlp#acceptfile', [a:action, line])
endfunction

" a:1 (bufferName), a:2 (isDirectory)
" scope: public
function! WebDevIconsGetFileTypeSymbol(...)
  if a:0 == 0
    let fileNodeExtension = expand("%:e")
    let fileNode = expand("%:t")
    let isDirectory = 0
  else
    let fileNodeExtension = fnamemodify(a:1, ':e')
    let fileNode = fnamemodify(a:1, ':t')
    if a:0 == 2
      let isDirectory = a:2
    else
      let isDirectory = 0
    endif
  endif

  let symbol = g:WebDevIconsUnicodeDecorateFileNodesDefaultSymbol
  let fileNodeExtension = tolower(fileNodeExtension)
  let fileNode = tolower(fileNode)

  for [pattern, glyph] in items(g:WebDevIconsUnicodeDecorateFileNodesPatternSymbols)
    if match(fileNode, pattern) != -1
      let symbol = glyph
    endif
  endfor

  if symbol == g:WebDevIconsUnicodeDecorateFileNodesDefaultSymbol
    if has_key(g:WebDevIconsUnicodeDecorateFileNodesExactSymbols, fileNode)
      let symbol = g:WebDevIconsUnicodeDecorateFileNodesExactSymbols[fileNode]
    elseif has_key(g:WebDevIconsUnicodeDecorateFileNodesExtensionSymbols, fileNodeExtension)
      let symbol = g:WebDevIconsUnicodeDecorateFileNodesExtensionSymbols[fileNodeExtension]
    elseif isDirectory == 1
      let symbol = g:WebDevIconsUnicodeDecorateFolderNodesDefaultSymbol
    endif
  endif

  " Temporary (hopefully) fix for glyph issues in gvim (proper fix is with the
  " actual font patcher)
  let artifactFix = "\u00A0"

  return symbol . artifactFix

endfunction

" scope: public
function! WebDevIconsGetFileFormatSymbol(...)
  let fileformat = ""

  if &fileformat == "dos"
    let fileformat = "???"
  elseif &fileformat == "unix"
    let fileformat = "???"
  elseif &fileformat == "mac"
    let fileformat = "???"
  endif

  " Temporary (hopefully) fix for glyph issues in gvim (proper fix is with the
  " actual font patcher)
  let artifactFix = "\u00A0"

  return fileformat . artifactFix
endfunction

" for airline plugin {{{3
"========================================================================

" scope: public
function! AirlineWebDevIcons(...)
  let w:airline_section_x = get(w:, 'airline_section_x', g:airline_section_x)
  let w:airline_section_x .= ' %{WebDevIconsGetFileTypeSymbol()} '
  if g:webdevicons_enable_airline_statusline_fileformat_symbols
    let w:airline_section_y = ' %{&fenc . " " . WebDevIconsGetFileFormatSymbol()} '
  endif
endfunction

if g:webdevicons_enable == 1 && exists("g:loaded_airline") && g:loaded_airline == 1 && g:webdevicons_enable_airline_statusline
  call airline#add_statusline_func('AirlineWebDevIcons')
endif

if g:webdevicons_enable == 1 && g:webdevicons_enable_airline_tabline
  " Store original formatter.
  if exists('g:airline#extensions#tabline#formatter')
    let g:_webdevicons_airline_orig_formatter = g:airline#extensions#tabline#formatter
  else
    let g:_webdevicons_airline_orig_formatter = 'default'
  endif
  let g:airline#extensions#tabline#formatter = 'webdevicons'
endif

" for nerdtree plugin {{{3
"========================================================================

" scope: public
function! NERDTreeWebDevIconsRefreshListener(event)
  let path = a:event.subject
  let padding = g:WebDevIconsNerdTreeAfterGlyphPadding
  let prePadding = ''
  let hasGitFlags = (len(path.flagSet._flagsForScope("git")) > 0)
  let hasGitNerdTreePlugin = (exists('g:loaded_nerdtree_git_status') == 1)

  if g:WebDevIconsUnicodeGlyphDoubleWidth == 0
    let padding = ''
  endif

  if hasGitFlags && g:WebDevIconsUnicodeGlyphDoubleWidth == 1
    let prePadding = ' '
  endif

  " align vertically at the same level: non git-flag nodes with git-flag nodes
  if g:WebDevIconsNerdTreeGitPluginForceVAlign && !hasGitFlags && hasGitNerdTreePlugin
    let prePadding .= '  '
  endif

  if !path.isDirectory
    let flag = prePadding . WebDevIconsGetFileTypeSymbol(path.str()) . padding
  elseif path.isDirectory && g:WebDevIconsUnicodeDecorateFolderNodes == 1

    let directoryOpened = 0

    if g:DevIconsEnableFoldersOpenClose && len(path.flagSet._flagsForScope("webdevicons")) > 0
      " isOpen is not available on the path listener, compare using symbols
      if path.flagSet._flagsForScope("webdevicons")[0] == prePadding . g:DevIconsDefaultFolderOpenSymbol . padding
        let directoryOpened = 1
      endif
    endif

    if g:WebDevIconsUnicodeDecorateFolderNodesExactMatches == 1
      if g:DevIconsEnableFoldersOpenClose && directoryOpened
        let flag = prePadding . g:DevIconsDefaultFolderOpenSymbol . padding
      else
        let flag = prePadding . WebDevIconsGetFileTypeSymbol(path.str(), path.isDirectory) . padding
      endif
    else
      if g:DevIconsEnableFoldersOpenClose && directoryOpened
        let flag = prePadding . g:DevIconsDefaultFolderOpenSymbol . padding
      else
        let flag = prePadding . g:WebDevIconsUnicodeDecorateFolderNodesDefaultSymbol
      endif
    endif
  else
    let flag = ''
  endif

  call path.flagSet.clearFlags("webdevicons")

  if flag != ''
    call path.flagSet.addFlag("webdevicons", flag)
  endif

endfunction

" standard fix/safety: line continuation (avoiding side effects) {{{1
"========================================================================
let &cpo = s:save_cpo
unlet s:save_cpo

" modeline syntax:
" vim: fdm=marker tabstop=2 softtabstop=2 shiftwidth=2 expandtab:
