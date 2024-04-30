#!/bin/bash

while true; do
	for i in 0..180; do
		curl -sS "https://api.quotable.io/quotes?limit=50" >> out2.json
	done

	sleep 20
done
