# Infinite Scroll

_Implemented using `HTML`, `CSS` and `JavaScript`_

## Description

This simple app renders random images while scrolling vertically which gives you a feeling of going over endless collection of images.

## How it works

New images are fetched using **_Lorem Picsum API_** which takes images from **_Unsplash API_**.

---

Why didn't I just use Unsplash API then?

1. I have no experience in back-end and I haven't learned yet how to secure API keys
2. I wanted to practice making API calls :)

## Issues

- Img size values defined in `app.js` have no effect on the returned images.
  - The reason for that is swaping URLs while fetching data.
  - However, it is necessary to get metadata like source, author, etc.
