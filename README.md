
```bash
clonedotfiles () {
# Arquivo: Arquivos de configuração de ambiente
# Criado: Dom 17/Out/2010 hs 15:13
# Last Change: Seg 19 Out 2015 16:41:15 BRT
# autor: Sérgio Luiz Araújo Silva
# site: http://vivaotux.blogspot.com
# http://www.twitter.com/voyeg3r

NEEDED_COMMANDS="git zsh"
for needed_command in $NEEDED_COMMANDS; do
    if ! hash "$needed_command" >/dev/null 2>&1; then
        printf "Command not found in PATH: %s\n" "$needed_command" >&2
        echo "instaling..."
        sudo pacman -S $needed_command
    fi
done

ssh -T git@github.com

var=`echo 3gmail.com@ | sed 's,\(^3\)\(gmail\.com\)\(\@\),voyeg\1r\3\2,g'`
git config --global user.name voyeg3r

# in the line below substitute ${var} by your e-mail
git config --global user.email ${var}

git config --global credential.helper cache
git config --global push.default simple
git config --global credential.helper 'cache --timeout=3600'
git clone git@github.com:voyeg3r/dotfiles.git ~/.dotfiles

git clone git@github.com:voyeg3r/dotfiles.git ~/.dotfiles

# porwerline fonts
git clone git@github.com:powerline/fonts.git

# how install fasd
git clone git://github.com/clvv/fasd.git && cd fasd
sudo make install

# config vundle
# https://github.com/VundleVim/Vundle.vim
rm -rf ~/.dotfiles/vim/bundle/Vundle.vim
git clone https://github.com/VundleVim/Vundle.vim.git ~/.dotfiles/vim/bundle/Vundle.vim

ln -sfvn ~/.dotfiles/vim/vimrc ~/.vimrc
ln -sfvn ~/.dotfiles/vim ~/.vim
ln -sfvn ~/.dotfiles/bashrc ~/.bashrc
ln -sfvn ~/.dotfiles/inputrc ~/.inputrc
ln -sfvn ~/.dotfiles/gitconfig ~/.gitconfig
ln -sfvn ~/.dotfiles/fonts.conf ~/.fonts.conf
ln -sfvn ~/.dotfiles/pythonstartup ~/.pythonstartup
ln -sfvn ~/.dotfiles/zshrc ~/.zshrc
ln -sfvn ~/.dotfiles/agignore ~/.agignore
ln -sfvn ~/.dotfiles/zshenv ~/.zshenv
[ ! -d ~/bin ] && ln -s ~/.dotfiles/bin ~/bin

sudo chsh -s $(which zsh) $(whoami)

# do not forget to install antigen
# A plugin manager for zsh, inspired by oh-my-zsh and vundle.
# source: http://blog.namangoel.com/zsh-with-antigen
    yaourt -S antigen-git


# installing fasdcd
git clone git@github.com:clvv/fasd.git
cd fasd && sudo make install

} && clonedotfiles
```

## Manuais do git

	http://mariomoraesneto.blogspot.com.br/2012/11/git-dicas-basicas-e-praticas.html
	http://githowto.com/

## listar configurações

	git config --list

## Configurando git submodule

reference: http://vimcasts.org/episodes/synchronizing-plugins-with-git-submodules-and-pathogen/
http://gitref.org/
http://fadamiao.github.io/git-start/

    git submodule init
    git submodule update

	git submodule add http://github.com/tpope/vim-fugitive.git bundle/fugitive
	git add .
	git commit -m "Install Fugitive.vim bundle as a submodule."

## É possível configurar alias para os comandos, exemplos


dentro do seu repositório um arquivo .git/config
dentro dele cole estas linas.

```bash
	[alias]
	co = checkout
	ci = commit
	st = status
	br = branch
	hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
	type = cat-file -t
	dump = cat-file -p
```

## Como adicionar sua chave ssh ao github


	https://help.github.com/articles/generating-ssh-keys

##  começando um novo projeto

```bash
	touch README.md
	git init
	git add README.md
	git commit -m "first commit"
	git remote add origin git@github.com:voyeg3r/dotfiles.git
	git push -u origin master
```
