@echo off
echo ========================================================
echo [CABIBUSQUE] Iniciando Ambiente de Desenvolvimento...
echo ========================================================
echo.

echo Iniciando o Backend (Django)...
start "Backend Django" cmd /k "cd backend && python manage.py runserver"

echo Iniciando o Frontend (React/Vite) exposto na rede...
start "Frontend React" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================================
echo SERVIDORES INICIADOS!
echo ========================================================
echo 1. O frontend Vite proxyara as requisicoes da API (/api)
echo    diretamente para o Django (http://127.0.0.1:8000).
echo.
echo 2. Para acessar no celular, olhe a janela do Frontend,
echo    procure por "Network: http://192.168.X.X:5173/".
echo    Digite esse link no navegador do celular!
echo.
echo [!] Para desligar os servidores, basta fechar as duas 
echo     janelas extras que abriram.
echo ========================================================
pause
