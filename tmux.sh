#!/bin/bash

cd ~/tools/keyboard-presentation

# we don't do this now, just attach to whatever was the last tmux
# tmux new-session -ds launched-programs # create session called main (fail if already there)

tmux new-window -n keyboard-presentation "npm run start"
tmux send-keys yes enter
tmux split-window -v
tmux send-keys npm space run space start:server space enter

tmux split-window -h
sleep 20
tmux send-keys npm space run space start:electron space enter
