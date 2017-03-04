#!/bin/bash

ARG=$1

if [[ "$ARG" == "" ]]; then
    D="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/"
    export RUN_PROJ=$D`basename $0`
    terminator -m -l myProject

elif [[ "$ARG" == "t0" ]]; then
    echo "=======> T0"
    bash

elif [[ "$ARG" == "t1" ]]; then
    echo "=======> T1"
    bash

elif [[ "$ARG" == "t2" ]]; then
    echo "=======> T2"
    bash

elif [[ "$ARG" == "t3" ]]; then
    echo "=======> T3"
    bash

elif [[ "$ARG" == "t4" ]]; then
    echo "=======> T4"
    bash

elif [[ "$ARG" == "t5" ]]; then
    echo "=======> T5"
    bash

else
    echo "invalid arg"

fi