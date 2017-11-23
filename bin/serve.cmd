FOR /F "tokens=4 delims= " %%P IN ('netstat -a -n -o ^| findstr :8100') DO TaskKill.exe /PID %%P
ng serve --open --port=8100
