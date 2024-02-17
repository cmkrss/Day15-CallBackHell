// Countdown function using callback hell
setTimeout(function() {
    document.getElementById("countdownDisplay").textContent = 10;
    setTimeout(function() {
        document.getElementById("countdownDisplay").textContent = 9;
        
        setTimeout(function() {
            document.getElementById("countdownDisplay").textContent = 8;
            
            setTimeout(function() {
                document.getElementById("countdownDisplay").textContent = 7;
                
                setTimeout(function() {
                    document.getElementById("countdownDisplay").textContent = 6;
                    
                    setTimeout(function() {
                        document.getElementById("countdownDisplay").textContent = 5;
                        
                        setTimeout(function() {
                            document.getElementById("countdownDisplay").textContent = 4;
                            
                            setTimeout(function() {
                                document.getElementById("countdownDisplay").textContent = 3;
                                
                                setTimeout(function() {
                                    document.getElementById("countdownDisplay").textContent = 2;
                                    
                                    setTimeout(function() {
                                        document.getElementById("countdownDisplay").textContent = 1;
                                        
                                        setTimeout(function() {
                                            document.getElementById("countdownDisplay").textContent = "Happy Independence Day!";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


