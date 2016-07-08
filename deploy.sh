#!/bin/bash
ssh root@atl.staging.wheat.co "cd ATL && git pull origin master && npm install && forever restartall"
