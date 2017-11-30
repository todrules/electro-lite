FOR /F "tokens=4 delims= " %%P IN ('netstat -a -n -o ^| findstr :3000') DO TaskKill.exe /PID %%P
