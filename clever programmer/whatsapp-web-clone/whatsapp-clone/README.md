npm install -g firebase-tools
npm i @material-ui/core
npm i @material-ui/icons

# Make buttons clickable

Wrap with IconOutlined

# Placing name above message

.chat\_\_message {
position: relative;
width: fit-content;
}

.chat\_\_name {
position: absolute;
top: -15px;
}

# Fitting timestamp

.chat\_\_timestamp {
vertical-align: bottom;
margin-left: 10px;
font-size: xx-small;
}

# Placement of own messages to the right

.chat\_\_receiver {
margin-left: auto;
background-color: greenyellow;
}

# Hide button typing a msg

```.chat__footer > form > button {
display: none;
}```

# Change styles of MUI buttons to blend them in background

.chat\_\_footer > .MuiSvgIcon-root {
padding: 10px;
color: gray;
}

# Set up react router dom in index.js

Wrap with BrowserRouter

# Remove underline from links

a{
text-decoration: none !important;
color:black;
}
````
