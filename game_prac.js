Function game(){
    
    var ans = 8;
    var num;
    while(num != ans){
        num = Number(prompt("Enter a number between 0to10"));
        if(num == ans){
            alert("WellDone You Guessed it Right");
        }
        else{
            if(num<ans){
                alert(num + "is less than from the Right Number");
            }
            else{
                alert(num + "is greater than the Right Number");
            }
        }
    }alert("do you want to guess again")

}