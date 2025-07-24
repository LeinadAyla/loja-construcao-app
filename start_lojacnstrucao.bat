@echo off
title Iniciando Trae AI Build - loja-construcao-app

echo 🚫 Finalizando processos antigos...
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM adb.exe >nul 2>&1

echo ♻️ Reiniciando ADB...
cd %USERPROFILE%\AppData\Local\Android\Sdk\platform-tools
adb kill-server
adb start-server

echo 🚀 Iniciando emulador...
cd %USERPROFILE%\AppData\Local\Android\Sdk\emulator
start emulator -avd Medium_Phone_API_35

echo 🕐 Aguardando emulador iniciar...
:wait_for_device
ping -n 5 127.0.0.1 >nul
adb devices | findstr /i "device" >nul
if errorlevel 1 (
    echo ⏳ Emulador ainda iniciando...
    goto wait_for_device
)

echo ✅ Emulador pronto. Iniciando Metro Bundler com expo...
cd C:\Users\ACER\loja-construcao-app
call npx expo start --dev-client --clear

pause
