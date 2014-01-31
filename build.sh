#!/bin/bash

TEMPLATE_FILE="template.html" # input file
THEME_FILE="theme.html" # output file

CSS_FILE="css/theme.css"
JS_FILE="js/scripts.js"

CSS_TEMPLATE_TAG="{ThemeCSS}"
JS_TEMPLATE_TAG="{ThemeJS}"

# Replace the first occurance of $CSS_TEMPLATE_TAG with the CSS file
# Overwrite the theme file with the modified template
sed '/'$CSS_TEMPLATE_TAG'/{
    s/'$CSS_TEMPLATE_TAG'//
    r '$CSS_FILE'
}' $TEMPLATE_FILE > $THEME_FILE

# Replace the first occurance of $JS_TEMPLATE_TAG with the JS file
# Perform the replace inline, using a .bak extension for the temp file
sed -i.bak '/'$JS_TEMPLATE_TAG'/{
    s/'$JS_TEMPLATE_TAG'//
    r '$JS_FILE'
}' $THEME_FILE

# Clean up the temporary theme file
rm "$THEME_FILE.bak"
