/* main JavaScript file */
/**
 * FileName: app.js
 * 
 * @author Victor Jdanovitch
 * @date August 21, 2016
 * 
 * StudentID: 300869472
 * website: http://comp125-s2016-assignment1-300869472.azurewebsites.net/
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
     // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    paragraphElements[3] = document.getElementById("paragraphFour");
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "My name is Victor Jdanovitch and I am a student in the Software Engineering Program at Centennial College. I am fluent in English and Russian. I have a competive nature and generally put an effort into the things that I chose to do. Some of my favourite activities are: Hiking, using a computer, playing sports (badminton, golf, tennis, volleyball, baseball etc.)";
    paragraphs[1] = "1) I have a talking African Grey parrot named Alex. It requires at least several hours of attention daily and could be taught many things. It has a long list of vocabulary and phrases that it could use. For example it can say and understand the meaning of the following: How are you?, Hello, What's up?, Water, It is cold outside, Scratch and many others. I also taught it to count to 12!";
    paragraphs[2] = "2) I have built and upgraded multiple computer systems for family members and for a private business. I picked parts that would meet price requirements and suit the tasks to be perfomed on the systems.";
    paragraphs[3] = "3) I am working to get into better shape to be able to win some badminton tournaments and to represent Centennial College on the badminton team.";
    
     // check to see if paragraph one exists
    var paragraphElementLength = paragraphElements.length;

    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) { 
        if(paragraphElements[index]) { 
         paragraphElements[index].textContent = paragraphs[index]; 

        }
    }
    
    
})();