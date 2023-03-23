@echo off    


type ascii.txt

echo This installation is only needed to use the injected chat.
echo /!\ Make sure you have node installed: https://nodejs.org/en/download
echo To verify, open a command prompt and type "node -v"
echo If you get a version number, you're good to go.

set /p choice="Press enter to start installation..."

if exist .env (
    echo .env file found, continuing...
    echo Installing project dependencies...
    npm install
    echo Building the app...
    npm run build:dev
    echo Done, enjoy CheatGPT!
    set /p choicee="Press enter to close..."
) else (
    echo ERROR : .env file not found, please create one using the .env.example file as a template and try again.
    echo If you don't know how to do this, please refer to the README.md file https://github.com/anthonyissa/CheatGPT#readme
    set /p choicee="Press enter to close..."
)
