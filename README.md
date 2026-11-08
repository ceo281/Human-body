# Human Body Explorer

An interactive, clickable diagram of the human body. Tap an organ to see what it does, how big it is and some key facts, or filter by body system (nervous, cardiovascular, respiratory, digestive, urinary, endocrine, lymphatic).

## Run it

It's plain HTML, CSS and JavaScript with no build step. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then go to http://localhost:8000.

It can be deployed as-is to any static host (GitHub Pages, Vercel, Netlify).

## Structure

- `index.html` — page layout, styles and the body outline
- `app.js` — draws the organs, handles selection and filtering
- `data/organs.js` — organ and body-system data; add an entry here to add an organ

## Disclaimer

General educational information only. It is not medical advice.
