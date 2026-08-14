@echo off
title VS Code Setup - Entorno Minimalista de Ejercicios
color 0b
echo =======================================================
echo    Instalando Entorno Ligero para Práctica Fullstack
echo =======================================================
echo.

:: --- INTELIGENCIA ARTIFICIAL Y ASISTENTES ---
echo [+] Instalando Asistente de IA...
call code --install-extension GitHub.copilot-chat

:: --- NÚCLEO Y LENGUAJES (Python, C#, JS/TS) ---
echo [+] Configurando Python y Pylance...
call code --install-extension ms-python.python
call code --install-extension ms-python.vscode-pylance

echo [+] Configurando herramientas para C# y .NET...
call code --install-extension ms-dotnettools.csharp
call code --install-extension ms-dotnettools.csdevkit

echo [+] Configurando soporte Web (HTML/CSS y JavaScript/TypeScript)...
call code --install-extension ritwickdey.LiveServer
call code --install-extension esbenp.prettier-vscode

:: --- CONTROL DE VERSIONES Y CALIDAD DE CÓDIGO ---
echo [+] Instalando extensiones esenciales de utilidad...
call code --install-extension ecmel.vscode-html-css
call code --install-extension PKief.material-icon-theme
call code --install-extension oderwat.indent-rainbow

echo.
echo =======================================================
echo ¡Proceso finalizado con exito!
echo Entorno listo para los ejercicios de programacion. :D
echo =======================================================
pause