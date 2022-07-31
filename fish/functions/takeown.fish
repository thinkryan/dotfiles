function takeown --description 'alias takeown sudo chown (whoami):(whoami) -R'
# sudo chown -R (whoami):(whoami) $argv;
sudo chown -R (whoami) $argv;
end
