#!/bin/bash
# This script is used to check out the Yao source code from Git repositories.

rm -rf ./data/source/*
git clone https://github.com/yaoapp/yao.git ./data/source/yao
git clone https://github.com/yaoapp/gou.git ./data/source/gou
git clone https://github.com/yaoapp/xgen.git ./data/source/xgen
git clone git@github.com:YaoApp/dsl-schema.git ./data/source/dsl-schema