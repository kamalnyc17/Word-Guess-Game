// declaring global variables
var nameList = ["julia", "meg", "jodie", "drew", "sandra", "demi", "sharon", "michelle", "gwyneth"];
var getRandomName;
var entryLeft = 15;
var tempStr = "-";
var tempName = [];
var totalEntry = [];
var newName;
var winN = 0;

// picking a name from the list
getRandomName = nameList[Math.floor(Math.random() * nameList.length)];
tempName = tempStr.repeat(getRandomName.length).split('');
document.getElementById("uguess").innerHTML = tempName;

// This is the main section of the script. the script loops through 15 times here
window.addEventListener( "keydown", function(){
    if (entryLeft > 0){
        var usercode = event.charCode || event.keyCode;  // Get the Unicode value
        var userletter = String.fromCharCode(usercode).toLowerCase();  // Convert the value into a character

        for(i=0; i<getRandomName.length; i++){
            if (userletter === getRandomName[i]){
                tempName[i]=userletter;
            }
        }     

        // updating various counter, array etc
        newName = tempName.toString().replace(/,/g, '');
        entryLeft--;
        totalEntry.push(userletter);

        // updating the screen based on updated data
        document.getElementById("uguess").innerHTML = newName;
        document.getElementById("uguessleft").innerHTML = entryLeft;
        document.getElementById("letterguessed").innerHTML = totalEntry;
        if (newName === getRandomName){
            entryLeft = -1;
            winN++;
            document.getElementById("uwin").innerHTML = winN;
            var audio = new Audio('./assets/images/winning.wav');
            audio.play();
        }
    }

    // restart after game over
    if (entryLeft <= 0){        
        document.getElementById("gameover").innerHTML = "Game Over! Press Space Bar to replay.";
        document.onkeyup = function() {            
            // check for space bar is pressed
            var spacecode = event.charCode || event.keyCode;  
            if (spacecode === 32){
                // initialize screen and all control variables once the <spacebar> is placed
                getRandomName = nameList[Math.floor(Math.random() * nameList.length)];  
                tempName = tempStr.repeat(getRandomName.length).split('');
                document.getElementById("uguess").innerHTML = tempName;
                entryLeft = 15;
                totalEntry = [];
                newName = "";

                document.getElementById("uguessleft").innerHTML = entryLeft;
                document.getElementById("letterguessed").innerHTML = totalEntry;
                document.getElementById("gameover").innerHTML = "";
            }               
        }
    }
    
})