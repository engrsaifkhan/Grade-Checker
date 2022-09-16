function percentage(){
document.querySelector("#error").innerHTML="";
document.querySelector("#grade").innerHTML="";
document.querySelector("#percent").innerHTML="";
document.querySelector("#totalMarksObtained").innerHTML="";
document.querySelector("#subjectsTotalMarks").innerHTML="";
document.querySelector("#subject1Obtmarks").style.background="white";
document.querySelector("#subject2Obtmarks").style.background="white";
document.querySelector("#subject3Obtmarks").style.background="white";
document.querySelector("#subject4Obtmarks").style.background="white";
document.querySelector("#subject5Obtmarks").style.background="white";
document.querySelector("#subject6Obtmarks").style.background="white";
document.querySelector("#subject7Obtmarks").style.background="white";
document.querySelector("#subject8Obtmarks").style.background="white";
document.querySelector("#subject9Obtmarks").style.background="white";
document.querySelector("#subject10Obtmarks").style.background="white";

let   subject1Obtmarks= +document.querySelector("#subject1Obtmarks").value;

let subject1Totmarks= +document.querySelector("#subject1Totmarks").value;


let   subject2Obtmarks= +document.querySelector("#subject2Obtmarks").value;
let subject2Totmarks= +document.querySelector("#subject2Totmarks").value;


let   subject3Obtmarks= +document.querySelector("#subject3Obtmarks").value;
let subject3Totmarks= +document.querySelector("#subject3Totmarks").value;

let   subject4Obtmarks= +document.querySelector("#subject4Obtmarks").value;
let subject4Totmarks= +document.querySelector("#subject4Totmarks").value;

let   subject5Obtmarks= +document.querySelector("#subject5Obtmarks").value;
let subject5Totmarks= +document.querySelector("#subject5Totmarks").value;

let   subject6Obtmarks= +document.querySelector("#subject6Obtmarks").value;
let subject6Totmarks= +document.querySelector("#subject6Totmarks").value;

let   subject7Obtmarks= +document.querySelector("#subject7Obtmarks").value;
let subject7Totmarks= +document.querySelector("#subject7Totmarks").value;

let   subject8Obtmarks= +document.querySelector("#subject8Obtmarks").value;
let subject8Totmarks= +document.querySelector("#subject8Totmarks").value;

let   subject9Obtmarks= +document.querySelector("#subject9Obtmarks").value;
let subject9Totmarks= +document.querySelector("#subject9Totmarks").value;

let   subject10Obtmarks= +document.querySelector("#subject10Obtmarks").value;
let subject10Totmarks= +document.querySelector("#subject10Totmarks").value;
if(subject1Obtmarks>subject1Totmarks){
  document.querySelector("#subject1Obtmarks").style.background="red";
  // document.querySelector("#error").innerHTML=`Enter Subject1 obtained marks again`;

}
if(subject2Obtmarks>subject2Totmarks){
  // return document.querySelector("#error").innerHTML=`You must enter obtained marks lower than total`;
document.querySelector("#subject2Obtmarks").style.background="red";
}
if(subject3Obtmarks>subject3Totmarks){
  // return document.querySelector("#error").innerHTML=`You must enter obtained marks lower than total`;
document.querySelector("#subject3Obtmarks").style.background="red";
}
if(subject4Obtmarks>subject4Totmarks){
  // return document.querySelector("#error").innerHTML=`You must enter obtained marks lower than total`;
document.querySelector("#subject4Obtmarks").style.background="red";
}
if(subject5Obtmarks>subject5Totmarks){
  // return document.querySelector("#error").innerHTML=`You must enter obtained marks lower than total`;
document.querySelector("#subject5Obtmarks").style.background="red";
}
if(subject6Obtmarks>subject6Totmarks){
  // return document.querySelector("#error").innerHTML=`You must enter obtained marks lower than total`;
document.querySelector("#subject6Obtmarks").style.background="red";
}
if(subject7Obtmarks>subject7Totmarks){
  // return document.querySelector("#error").innerHTML=`You must enter obtained marks lower than total`;
document.querySelector("#subject7Obtmarks").style.background="red";
}
if(subject8Obtmarks>subject8Totmarks){
  // return document.querySelector("#error").innerHTML=`You must enter obtained marks lower than total`;
document.querySelector("#subject8Obtmarks").style.background="red";
}
if(subject9Obtmarks>subject9Totmarks){
  // return document.querySelector("#error").innerHTML=`You must enter obtained marks lower than total`;
document.querySelector("#subject9Obtmarks").style.background="red";
}
if(subject10Obtmarks>subject10Totmarks){
  // return document.querySelector("#error").innerHTML=`You must enter obtained marks lower than total`;
document.querySelector("#subject10Obtmarks").style.background="red";
}


if(subject1Obtmarks<subject1Totmarks && subject2Obtmarks<subject2Totmarks && subject3Obtmarks<subject3Totmarks && subject4Obtmarks<subject4Totmarks && subject5Obtmarks<subject5Totmarks && subject6Obtmarks<subject6Totmarks && subject7Obtmarks<subject7Totmarks && subject8Obtmarks<subject8Totmarks && subject9Obtmarks<subject9Totmarks && subject10Obtmarks<subject10Totmarks){
let totalMarksObtained= subject1Obtmarks+subject2Obtmarks+subject3Obtmarks+subject4Obtmarks+subject5Obtmarks+subject6Obtmarks+subject7Obtmarks+subject8Obtmarks+subject9Obtmarks+subject10Obtmarks;
document.querySelector("#totalMarksObtained").innerHTML=`Obtained Marks = ${totalMarksObtained}`

let subjectsTotalMarks= subject1Totmarks+subject2Totmarks+subject3Totmarks+subject4Totmarks+subject5Totmarks+subject6Totmarks+subject7Totmarks+subject8Totmarks+subject9Totmarks+subject10Totmarks;
document.querySelector("#subjectsTotalMarks").innerHTML= `Total Marks = ${subjectsTotalMarks}`

let percentage=(totalMarksObtained/subjectsTotalMarks)*100;
// let percentage= parseFloat(percentage);
document.querySelector("#percent").innerHTML=`Your percentage is ${percentage} %`

if(percentage<0){
  document.querySelector("#grade").innerHTML=`Oh ho! Your grade is invalid`
}
else if(percentage>=0 && percentage<=49){
  document.querySelector("#grade").innerHTML=`Sorry! you have <i>failed<i> , focus on your studies`
}
else if(percentage>=50 && percentage<=59){
  document.querySelector("#grade").innerHTML=`You got C grade, Need much improvement`
}
else if (percentage>=60 && percentage<=69) {
  document.querySelector("#grade").innerHTML=`Good You got B grade, some fine tune to fit in the best`
}
else if (percentage>=70 && percentage<=79) {
  document.querySelector("#grade").innerHTML=`Congratulations You got A grade, one step away to be the best`
}
else if(percentage>=80 && percentage<=100){
  document.querySelector("#grade").innerHTML=`Marvellous you got A1 grade, you are the best `
}
else if(percentage>100){
  document.querySelector("#grade").innerHTML=`Oh ho! Your grade is invalid`
}
}
else{
  document.querySelector("#error").innerHTML=`Put marks lower than total marks in highlighted area`;
}
}
