cd ~/tools/keyboard-presentation

tmux new-session -A -s launched-programs # connect to existing session if it exists

tmux new-window -n keyboard-presentation "npm run start"
tmux send-keys yes enter
tmux split-window -v
tmux send-keys npm space run space start:server space enter