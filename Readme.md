
# La automatización se realizo con lenguaje de programación JavaScript (NodeJS) utilizando Selenium WebDriver para el navegador de microsoft Edge
# Instalacion selenium
1. Para instalar Selenium a partir de la consola se utiliza el comando

```
 npm install selenium-webdriver
```
# Instalacion Microsoft edge WebDriver
2. Inicialmente se descargara el Chromedriver 
    [Descarga](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/?form=MA13LH)
Esta version debe ser compatible con la version actual de nuestro navegador

3. Se busca la variable del sistema llamada path.
4. Al darle editar se desplegara una ventana donde se agregara la ubicacion del webdriver

```
C: ...\Variable de entorno\edgedriver_win64
```
5. Para correr el script se realiza por medio del comando

```
node selenium_test.js
```
