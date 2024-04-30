#!/bin/bash

while true; do
	for i in 0..5; do
		curl -sS "https://zenquotes.io/api/quotes" >>out.json
	done

	sleep 30
done
