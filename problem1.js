function checkVotingEligibility(age){
    if(age>=18){
        return "Eligible for votting";
    }
    else{
       return "not eligible"; 
    }
}
console.log(checkVotingEligibility(20));
console.log(checkVotingEligibility(16));