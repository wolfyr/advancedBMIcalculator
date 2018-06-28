
//Eventlistners 
document.getElementById('btnMn').addEventListener('click', showMan);
document.getElementById('btnVr').addEventListener('click', showWoman);
document.getElementById('heupenBtn').addEventListener('click', heupenKleuren);
document.getElementById('buikBtn').addEventListener('click', buikKleuren);
document.getElementById('benenBtn').addEventListener('click', benenKleuren);
document.getElementById('borstBtn').addEventListener('click', borstKleuren);
document.getElementById('kinBtn').addEventListener('click', kinKleuren);
document.getElementById('knieenBtn').addEventListener('click', knieenKleuren);
document.getElementById('rugBtn').addEventListener('click', rugKleuren);
document.getElementById('armenBtn').addEventListener('click', armenKleuren);
document.getElementById('tailleBtn').addEventListener('click', tailleKleuren);
document.getElementById('nxtBtn').addEventListener('click', loadLastStep);
document.getElementById('submitBtn').addEventListener('click', calculateBmi);
document.getElementById('submitBtn2').addEventListener('click', submitForm);

//Show man svg image 
function showMan(){

    //Slide out annimation
    document.getElementById('question').style.margin = '22% 0 0 -110%';
    document.getElementById('genderPics').style.margin = '10% 0 0 -110%';
    document.getElementById('mnvrBtn').style.margin = '0% 0 0 -110%';
    
    //Display new 'slide' elements
    setTimeout(() => {
        document.getElementById('step2').classList = 'teal progresssStep center-align';
        document.getElementById('stepTitle').innerHTML = "Geef de gebieden aan waar jij je het meest aan stoort";
        document.getElementById('genderPics').style.display = 'none';
        document.getElementById('mnvrBtn').style.display = 'none';
        document.getElementById('question').style.display = 'none';
        document.getElementById('questions').style.display = 'block';
        document.getElementById('person').style.display = 'block';
        
        
    }, 410);

    //Slide in new elements 
    setTimeout(() => {
        document.getElementById('person').style.margin = '0 0 0 45%';
        document.getElementById('questions').style.margin = '8% 0 0 6%';
        
    }, 500);
    
}

//Show woman svg image 
function showWoman(){

    //Slide out annimation
    document.getElementById('question').style.margin = '22% 0 0 -110%';
    document.getElementById('genderPics').style.margin = '10% 0 0 -100%';
    document.getElementById('mnvrBtn').style.margin = '0% 0 0 -100%';

    //Display new 'slide' elements
    setTimeout(() => {
        document.getElementById('step2').classList = 'teal progresssStep center-align';
        document.getElementById('stepTitle').innerHTML = "Geef de gebieden aan waar jij je het meest aan stoort";
        document.getElementById('genderPics').style.display = 'none';
        document.getElementById('mnvrBtn').style.display = 'none';
        document.getElementById('question').style.display = 'none';
        document.getElementById('borstBtn').style.display = 'none';
        document.getElementById('questions').style.display = 'block';
        document.getElementById('person1').style.display = 'block';
        
        document.getElementById('armenBtn').style.display = 'block';
        document.getElementById('tailleBtn').style.display = 'block';
        
    }, 410);

    //Slide in new elements 
    setTimeout(() => {
        document.getElementById('person1').style.margin = '0 0 0 45%';
        document.getElementById('questions').style.margin = '8% 0 0 6%';
    }, 500);

    
}

//Color the hips from the man and woman svg img / toggle the btn color
function heupenKleuren(){

    document.getElementById('nxtBtn').classList.add('bounce');
    document.getElementById('heupenBtn').classList.toggle('red');    

    document.getElementById('heup1').classList.toggle('selected');
    document.getElementById('heup2').classList.toggle('selected');
    document.getElementById('heup3').classList.toggle('selected');
    document.getElementById('heup4').classList.toggle('selected');

    document.getElementById('heup1.1').classList.toggle('selected');
    document.getElementById('heup2.1').classList.toggle('selected');
    document.getElementById('heup3.1').classList.toggle('selected');
    document.getElementById('heup4.1').classList.toggle('selected');
}

//Color the stomach from the man and woman svg img / toggle the btn color
function buikKleuren(){
     
    document.getElementById('nxtBtn').classList.add('bounce');
    document.getElementById('buikBtn').classList.toggle('red'); 

    document.getElementById('buik').classList.toggle('selected');
    
    document.getElementById('buik.1').classList.toggle('selected');

}

//Color the legs from the man and woman svg img / toggle the btn color
function benenKleuren(){
     
    document.getElementById('nxtBtn').classList.add('bounce');
    document.getElementById('benenBtn').classList.toggle('red'); 

    document.getElementById('been1').classList.toggle('selected');
    document.getElementById('been2').classList.toggle('selected');
    document.getElementById('been3').classList.toggle('selected');
    document.getElementById('been4').classList.toggle('selected');
    document.getElementById('been5').classList.toggle('selected');
    document.getElementById('been6').classList.toggle('selected');
    document.getElementById('been7').classList.toggle('selected');
    document.getElementById('been8').classList.toggle('selected');

    document.getElementById('been1.1').classList.toggle('selected');
    document.getElementById('been2.1').classList.toggle('selected');
    document.getElementById('been3.1').classList.toggle('selected');
    document.getElementById('been4.1').classList.toggle('selected');
    document.getElementById('been5.1').classList.toggle('selected');
    document.getElementById('been6.1').classList.toggle('selected');
    document.getElementById('been7.1').classList.toggle('selected');
    document.getElementById('been8.1').classList.toggle('selected');

}

//Color the chest from the man and woman svg img / toggle the btn color
function borstKleuren(){
     
    document.getElementById('nxtBtn').classList.add('bounce');
    document.getElementById('borstBtn').classList.toggle('red'); 

    document.getElementById('borst1').classList.toggle('selected');
    document.getElementById('borst2').classList.toggle('selected');

    document.getElementById('borst1.1').classList.toggle('selected');
    document.getElementById('borst2.1').classList.toggle('selected');
    

}

//Color the chin from the man and woman svg img / toggle the btn color
function kinKleuren(){
     
    document.getElementById('nxtBtn').classList.add('bounce');
    document.getElementById('kinBtn').classList.toggle('red'); 

    document.getElementById('kin').classList.toggle('selected');
    document.getElementById('kin.1').classList.toggle('selected');
    

}

//Color the knies from the man and woman svg img / toggle the btn color
function knieenKleuren(){
    document.getElementById('nxtBtn').classList.add('bounce'); 
    document.getElementById('knieenBtn').classList.toggle('red'); 

    document.getElementById('knie1').classList.toggle('selected');
    document.getElementById('knie2').classList.toggle('selected');
    document.getElementById('knie1.1').classList.toggle('selected');
    document.getElementById('knie2.1').classList.toggle('selected');
    

}

//Color the back from the man and woman svg img / toggle the btn color
function rugKleuren(){
    document.getElementById('nxtBtn').classList.add('bounce'); 
    document.getElementById('rugBtn').classList.toggle('red'); 

    document.getElementById('rug1').classList.toggle('selected');
    document.getElementById('rug2').classList.toggle('selected');
    document.getElementById('rug3').classList.toggle('selected');
    document.getElementById('rug4').classList.toggle('selected');

    document.getElementById('rug1.1').classList.toggle('selected');
    document.getElementById('rug2.1').classList.toggle('selected');
    document.getElementById('rug3.1').classList.toggle('selected');
    document.getElementById('rug4.1').classList.toggle('selected');
    

}

//Color the arms from the man and woman svg img / toggle the btn color
function armenKleuren(){
    document.getElementById('nxtBtn').classList.add('bounce'); 
    document.getElementById('armenBtn').classList.toggle('red'); 

    document.getElementById('arm1.1').classList.toggle('selected');
    document.getElementById('arm2.1').classList.toggle('selected');
    document.getElementById('arm3.1').classList.toggle('selected');
    document.getElementById('arm4.1').classList.toggle('selected');
    

}

//Color the taille from the man and woman svg img / toggle the btn color
function tailleKleuren(){
     
    document.getElementById('nxtBtn').classList.add('bounce');
    document.getElementById('tailleBtn').classList.toggle('red'); 

    document.getElementById('taille1.1').classList.toggle('selected');
    document.getElementById('taille2.1').classList.toggle('selected');
    document.getElementById('taille3.1').classList.toggle('selected');
    document.getElementById('taille4.1').classList.toggle('selected');
    

}

//Load the slide with the gange selectors 
function loadLastStep(){
    
    //Slide out the current elements
    document.getElementById('nxtBtn').style.margin = '0 0 0 -100%';
    document.getElementById('questions').style.margin = '8% 0 0 -100%';
    document.getElementById('person').style.display = 'none';
    document.getElementById('person1').style.display = 'none';

    //Display the new elements
    setTimeout(() => {
        document.getElementById('stepTitle').innerHTML = "Bereken jouw BMI";
        document.getElementById('step3').classList = 'teal progresssStep center-align';
        document.getElementById('questions').style.display = 'none';
        document.getElementById('rangeSlider').style.display = 'block';
        
    }, 410);

    //Slide in the new elements
    setTimeout(() => {
        document.getElementById('rangeSlider').style.margin = '10% 0 0 0%';
    }, 500);

}


//Calculate and display the BMI results
function calculateBmi(){

    //Slide out the range sliders
   document.getElementById('rangeSlider').style.margin = '10% 0 0 100%';

   setTimeout(() => {
    document.getElementById('stepTitle').innerHTML = '';

    //Get the valuesw from the sliders
    let lengte = document.getElementById('lengte').value;
    let leeftijd = document.getElementById('lengte').value;
    let gewicht = document.getElementById('gewicht').value;
 
    //Set the let BMI to the calculated BMI
    let bmi = parseFloat(gewicht / ((lengte / 100) * (lengte / 100))).toFixed(1) ;
    console.log(bmi);
 
    //Hide the prev slide elements 
    document.getElementById('rangeSlider').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('bmiUitslag').style.display = 'block';
 
    //Show BMI advise based on the BMI result
    if(bmi < 18){
         document.getElementById('bmiTekst').innerHTML = `Jouw BMI is ${bmi}`;
         document.getElementById('bmiAdvies').innerHTML = 'Jouw BMI is aan de lage kant. Een gezonde BMI score ligt tussen de 18 en 25';
    } else if(bmi >= 18 && bmi <= 25 ){
         document.getElementById('bmiTekst').innerHTML = `Jouw BMI is ${bmi}`;
         document.getElementById('bmiAdvies').innerHTML = 'Gefeliciteerd, jij hebt een gezonde BMI score';
    } else if(bmi > 25 && bmi <= 30){
         document.getElementById('bmiTekst').innerHTML = `Jouw BMI is ${bmi}`;
         document.getElementById('bmiAdvies').innerHTML = 'Jouw BMI is aan de hoge kant en het is aan te raden hieraan te werken';
    } else{
         document.getElementById('bmiTekst').innerHTML = `Jouw BMI is ${bmi}`;
         document.getElementById('bmiAdvies').innerHTML = 'Jouw is erg hoog en kan voor gezondheidsproblemen zorgen. Maak een plan om hieraan te werken';
    }
       
   }, 410);
   

}


//Show CTA form
function submitForm(){
    if(document.getElementById('naam').value && document.getElementById('telNr').value && document.getElementById('email').value){
        let naam = document.getElementById('naam').value;
        let telNr = document.getElementById('telNr').value;
        let email = document.getElementById('email').value;

        //Set input values back to nothing
        document.getElementById('naam').value = "";
        document.getElementById('telNr').value = "";
        document.getElementById('email').value = "";
        
        //Display success or error message
        document.getElementById('succesMessage').style.display = 'block';
        setTimeout(() => {
            document.getElementById('succesMessage').style.display = 'none';
        }, 2500);

    }else{
        document.getElementById('errorMessage').style.display = 'block';
        setTimeout(() => {
            document.getElementById('errorMessage').style.display = 'none';
        }, 2500);
    }
}
