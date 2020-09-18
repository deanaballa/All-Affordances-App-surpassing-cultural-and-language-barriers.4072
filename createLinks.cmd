@setlocal enableextensions
@cd /d "%~dp0"

cd ./server
mklink /d "public" "..\webapp\dist"

pause