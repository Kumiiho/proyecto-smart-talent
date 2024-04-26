const {
    Builder,
    By,
    Key,
    until,
    Capabilities
} = require("selenium-webdriver");

const caps = new Capabilities();
caps.setPageLoadStrategy("eager");

//Funcion sleep, marca un tiempo de espera entre la funcion asincrona para permitir el cargue de elementos

function sleep(time)
      {
      return new Promise((resolve)=>{
      setTimeout(() => {
      console.log('Pause '+time+' ms'); 
      resolve();
      }, time);
        })
      }

//Funcion pedirCita, inicializa el navegador a utilizar, asi mismo la variable driver, permite el ajuste de la ventana a cargar


(async function pedirCita() {
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();
    await driver.manage().window().setRect({
        width: 1360,
        height: 720
    });
    await driver.get("https://katalon-demo-cura.herokuapp.com/");
   
    const botton_make_appointment = await driver.findElement(By.id('btn-make-appointment'));

    await botton_make_appointment.click()

    //Iniciar sesion demo 

        //Extraer el usuario demo
        const demo_user = await driver.findElement(By.xpath('//*[@id="login"]/div/div/div[2]/form/div[1]/div[1]/div/div/input'));

        let userName = await demo_user.getAttribute("value");

        const demo_password = await driver.findElement(By.xpath('//*[@id="login"]/div/div/div[2]/form/div[1]/div[2]/div/div/input'));

        let password = await demo_password.getAttribute("value");

    const user_account = await driver.findElement(By.id('txt-username'));
    const user_password = await driver.findElement(By.id('txt-password'));

    await user_account.sendKeys(userName);
    await user_password.sendKeys(password);

    const botton_login = await driver.findElement(By.id('btn-login'));
    await sleep(1000)
    await botton_login.click();

    //Rellenar formulario
    
    const input_facility = await driver.findElement(By.id("combo_facility"));
    
    console.log("Lista:", await input_facility.getText())
    await input_facility.sendKeys('Hongkong CURA Healthcare Center');

    const check_apply_hospital = await driver.findElement(By.id("chk_hospotal_readmission")).click();
    const healthcare_program = await driver.findElement(By.id("radio_program_medicare")).click();

    const box_comment = await driver.findElement(By.id("txt_comment"));
    const box_date = await driver.findElement(By.id("txt_visit_date"));
    const botton_book_appointment = await driver.findElement(By.id("btn-book-appointment"));

    await box_comment.sendKeys("this is a comentary");
    await box_date.sendKeys("15/02/2025");
    await sleep(1000)
    await botton_book_appointment.click();

    //volver a la pag principal
    await sleep(5000)
    const botton_go_home = await driver.findElement(By.xpath('//*[@id="summary"]/div/div/div[7]/p/a')).click();

})();