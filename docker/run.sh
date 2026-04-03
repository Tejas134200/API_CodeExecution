#!/bin/bash

rm -f main Main.class

if [ "$LANGUAGE" = "cpp" ]; then
    g++ main.cpp -o main 2> compile_error.txt

    if [ $? -ne 0 ]; then
        cat compile_error.txt
        exit 1
    fi

    timeout 2s ./main < input.txt

elif [ "$LANGUAGE" = "python" ]; then
    timeout 2s python3 main.py < input.txt

elif [ "$LANGUAGE" = "java" ]; then
    javac Main.java 2> compile_error.txt

    if [ $? -ne 0 ]; then
        cat compile_error.txt
        exit 1
    fi

    timeout 2s java Main < input.txt

else
    echo "Unsupported language"
fi