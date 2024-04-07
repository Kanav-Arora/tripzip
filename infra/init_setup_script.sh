#!/bin/sh

echo_header () {
    MESSAGE=$1
    echo "======================================================="
    echo "${MESSAGE}"
    echo "======================================================="
}

handle_error () {
    echo_header "Error: $1"
    exit 1
}

echo_header "Installing dependencies:"
echo_header "Installing root dependencies"
npm i
echo_header "Installing backend dependencies"
cd backend
npm i --force
echo_header "Installing frontend dependencies"
cd ..
cd frontend
npm i