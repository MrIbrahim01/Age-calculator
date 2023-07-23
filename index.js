function isLeap(year) {

    /**************Don't change the code above****************/

    //Write your code here.    

    if (year % 4 === 0) {
        var interpretation = "Yes";
    } else if (year % 100 === 0) {
        interpretation = "No";
    } else if (year % 400 === 0) {
        interpretation = "Yes";
    } else {
        interpretation = "No";
    }
    return interpretation;

    /**************Don't change the code below****************/

}
// Getting Todays Date
var d = new Date();
var todayDate = d.getDate();
var todayMonth = d.getMonth() + 1;
var todayYear = d.getFullYear();

// console.log(date);
// console.log(todayMonth);
// console.log(todayYear);
$(".button-icon").click(function () {
    $(".year-result").text("--");
    $(".month-result").text("--");
    $(".days-result").text("--");
    // Getting input values 
    var day = $(".day").val();
    var month = $(".month").val();
    var year = $(".year").val();
    var leapCheck = isLeap(year);
    console.log(leapCheck);
    // Calculating results
    if (month > todayMonth) {

        var monthChecker = Math.abs(todayMonth - month);
        var monthCheck = 12 - monthChecker;
        var yearCheck = (todayYear - year) - 1;

    } else if (month < todayMonth) {
        // dayCheck = todayDate - day;
        monthCheck = todayMonth - month;
        yearCheck = todayYear - year;

    } else if (month == todayMonth) {
        // dayCheck = todayDate - day;
        monthCheck = todayMonth - month;
        yearCheck = todayYear - year;

    }
    if (day > todayDate) {
        var dayChecker = Math.abs(todayDate - day);
        if (todayMonth == 1 || todayMonth == 3 || todayMonth == 5 || todayMonth == 7 || todayMonth == 8 || todayMonth == 10 || todayMonth == 12) {
            var dayCheck = 31 - dayChecker;

        } else if (todayMonth == 4 || todayMonth == 6 || todayMonth == 9 || todayMonth == 11) {
            var dayCheck = 30 - dayChecker;

        } else if (todayMonth == 2) {
            if (leapCheck === "Yes") {
                var dayCheck = 29 - dayChecker;

            } else if (leapCheck === "No") {
                var dayCheck = 28 - dayChecker;

            }
        }
    } else if (day < todayDate) {
        dayCheck = todayDate - day;
    } else if (day == todayDate) {
        dayCheck = todayDate - day;
    }
    if (dayCheck === 0 && monthCheck === 0) {
        console.log("Happy Birthday");
        $(".hbd").removeClass("dis-none");
        $(".button-icon").on("click", function () {
            $(".hbd").addClass("dis-none");

        })
    }

    // console.log(leapCheck);
    // console.log(day);
    // var date =  month + " " + day + " ," + year;
    // var ans = Date.parse(date);
    // console.log(ans);
    
    // Validating Entered Date
    // Checking Date
    


    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {

        if (day > 31) {
            rightDate = "Wrong Date";
            console.log("Wrong Date");

            $(".day-p").text("Must be a valid day");
    
    
            $(".day-label").addClass("wrong-label");
            $(".day-input").addClass("wrong-date");
            $(".day-p").addClass("p-wrong");
        } else if (day <= 31) {
            var rightDate = "Correct Date";
            console.log("Correct Date");
            $(".day-input").removeClass("wrong-date");
            $(".day-label").removeClass("wrong-label");
            $(".day-p").removeClass("p-wrong");
    
    
        }
    }
    if (month == 2) {
        if (leapCheck == "No") {
            if (day > 28) {
    
                rightDate = "Wrong Date";
                console.log("Wrong Date");
    
                $(".day-p").text("Must be a valid day");
    
    
                $(".day-label").addClass("wrong-label");
                $(".day-input").addClass("wrong-date");
                $(".day-p").addClass("p-wrong");
            } else if (day <= 28) {
                rightDate = "Correct Date";
                console.log("Correct Date");
                $(".day-input").removeClass("wrong-date");
                $(".day-label").removeClass("wrong-label");
                $(".day-p").removeClass("p-wrong");
            }
        }
        else if (leapCheck == "Yes") {
            if (day <= 29) {
                rightDate = "Correct Date";
                console.log("Correct Date");
                $(".day-input").removeClass("wrong-date");
                $(".day-label").removeClass("wrong-label");
                $(".day-p").removeClass("p-wrong");

            } else if (day > 29) {
                rightDate = "Wrong Date";
                console.log("Wrong Date");

                $(".day-p").text("Must be a valid day");


                $(".day-label").addClass("wrong-label");
                $(".day-input").addClass("wrong-date");
                $(".day-p").addClass("p-wrong");
            }
        } 

    }
    if (month == 4 || month == 6 || month == 9 || month == 11) {

        if (day > 30) {
            rightDate = "Wrong Date";
            console.log("Wrong Date");
    
            $(".day-p").text("Must be a valid day");
    
    
            $(".day-label").addClass("wrong-label");
            $(".day-input").addClass("wrong-date");
            $(".day-p").addClass("p-wrong");
        } else if (day <= 30) {
            rightDate = "Correct Date";
            console.log("Correct Date");
            $(".day-input").removeClass("wrong-date");
            $(".day-label").removeClass("wrong-label");
            $(".day-p").removeClass("p-wrong");
        }
    }
    // Checking Month
    if (month <= 12) {
        var rightMonth = "Correct Month";
        console.log("Correct Month");
        $(".month-input").removeClass("wrong-date");
        $(".year-input").removeClass("wrong-date");
        $(".month-label").removeClass("wrong-label");
    } else if (month > 12) {
        rightMonth = "Wrong Month";
        console.log("Wrong Month");

        $(".day-p").text("Must be a valid day");
        $(".day-label").addClass("wrong-label");
        $(".day-input").addClass("wrong-date");
        $(".day-p").addClass("p-wrong");

        $(".month-p").text("Must be a valid Month");


        $(".month-input").addClass("wrong-date");
        $(".month-label").addClass("wrong-label");
        $(".month-p").addClass("p-wrong");
    }
    // Checking Year
    if (year <= todayYear) {
        var rightYear = "Correct Year";
        console.log("Correct Year");
        $(".year-label").removeClass("wrong-label");
        $(".month-p").removeClass("p-wrong");
        $(".year-p").removeClass("p-wrong");
    } else if (year > todayYear) {
        rightYear = "Wrong Year";
        console.log("Wrong Year");


        $(".year-p").text("Must be in the past");

        $(".year-input").addClass("wrong-date");
        $(".year-label").addClass("wrong-label");
        $(".year-p").addClass("p-wrong");
    }
    if (day.length === 0) {
        console.log("wrong date");
        rightDate = "Wrong Date";
        $(".day-p").text("This field is required");
        $(".day-label").addClass("wrong-label");
        $(".day-input").addClass("wrong-date");
        $(".day-p").addClass("p-wrong");
    }
    if (month.length === 0) {
        console.log("wrong month");
        rightMonth = "Wrong Month";
        $(".month-p").text("This field is required");
        $(".month-input").addClass("wrong-date");
        $(".month-label").addClass("wrong-label");
        $(".month-p").addClass("p-wrong");
    }
    if (year.length === 0) {
        console.log("wrong year");
        rightYear = "Wrong Year";
        $(".year-p").text("This field is required");
        $(".year-input").addClass("wrong-date");
        $(".year-label").addClass("wrong-label");
        $(".year-p").addClass("p-wrong");
    }
    if (rightDate == "Correct Date" && rightMonth == "Correct Month" && rightYear == "Correct Year") {
        $(".year-result").text(yearCheck);
        $(".month-result").text(monthCheck);
        $(".days-result").text(dayCheck);
    }
    // if (leapCheck === "Yes") {
    //     if (day <= 29 && month == 2 && year <= todayYear) {
    //         console.log("correct date");
    //         $(".day-input").removeClass("wrong-date");
    //         $(".month-input").removeClass("wrong-date");
    //         $(".year-input").removeClass("wrong-date");
    //         $(".day-label").removeClass("wrong-label");
    //         $(".month-label").removeClass("wrong-label");
    //         $(".year-label").removeClass("wrong-label");
    //         $(".day-p").removeClass("p-wrong");
    //         $(".month-p").removeClass("p-wrong");
    //         $(".year-p").removeClass("p-wrong");

    //         $(".year-result").text(yearCheck);
    //         $(".month-result").text(monthChecker);
    //         $(".days-result").text(dayCheck);

    //     }  else if (day <= 31 && month <= 12 && year <= todayYear) {
    //         console.log("correct date");
    //         $(".day-input").removeClass("wrong-date");
    //         $(".month-input").removeClass("wrong-date");
    //         $(".year-input").removeClass("wrong-date");
    //         $(".day-label").removeClass("wrong-label");
    //         $(".month-label").removeClass("wrong-label");
    //         $(".year-label").removeClass("wrong-label");
    //         $(".day-p").removeClass("p-wrong");
    //         $(".month-p").removeClass("p-wrong");
    //         $(".year-p").removeClass("p-wrong");

    //         $(".year-result").text(yearCheck);
    //         $(".month-result").text(monthChecker);
    //         $(".days-result").text(dayCheck);
    //     } else if (day > 31 && month > 12 && year > todayYear) {
    //         console.log("wrong date");
    //         $(".day-input").addClass("wrong-date");
    //         $(".month-input").addClass("wrong-date");
    //         $(".year-input").addClass("wrong-date");
    //         $(".day-label").addClass("wrong-label");
    //         $(".month-label").addClass("wrong-label");
    //         $(".year-label").addClass("wrong-label");
    //         $(".day-p").addClass("p-wrong");
    //         $(".month-p").addClass("p-wrong");
    //         $(".year-p").addClass("p-wrong");
    //     } else if (day > 31 && month <= 12 && year <= todayYear) {
    //         console.log("wrong date");
    //         $(".day-label").addClass("wrong-label");
    //         $(".day-input").addClass("wrong-date");
    //         $(".day-p").addClass("p-wrong");
    //     } else if (day <= 31 && month > 12 && year <= todayYear) {
    //         console.log("wrong date");
    //         $(".month-input").addClass("wrong-date");
    //         $(".month-label").addClass("wrong-label");
    //         $(".month-p").addClass("p-wrong");

    //     } else if (day <= 31 && month <= 12 && year > todayYear) {
    //         console.log("wrong date");
    //         $(".year-input").addClass("wrong-date");
    //         $(".year-label").addClass("wrong-label");
    //         $(".year-p").addClass("p-wrong");
    //     }

    // } else if (leapCheck === "No") {
    //     if (day > 28 && month == 2 && year <= todayYear) {
    //         console.log("Wrong date");
    //         $(".day-label").addClass("wrong-label");
    //         $(".day-input").addClass("wrong-date");
    //         $(".day-p").addClass("p-wrong");

    //     } else if (day <= 31 && month <= 12 && year <= todayYear) {
    //         console.log("correct date");
    //         $(".day-input").removeClass("wrong-date");
    //         $(".month-input").removeClass("wrong-date");
    //         $(".year-input").removeClass("wrong-date");
    //         $(".day-label").removeClass("wrong-label");
    //         $(".month-label").removeClass("wrong-label");
    //         $(".year-label").removeClass("wrong-label");
    //         $(".day-p").removeClass("p-wrong");
    //         $(".month-p").removeClass("p-wrong");
    //         $(".year-p").removeClass("p-wrong");

    //         $(".year-result").text(yearCheck);
    //         $(".month-result").text(monthChecker);
    //         $(".days-result").text(dayCheck);
    //     } else if (day > 31 && month > 12 && year > todayYear) {
    //         console.log("wrong date");
    //         $(".day-input").addClass("wrong-date");
    //         $(".month-input").addClass("wrong-date");
    //         $(".year-input").addClass("wrong-date");
    //         $(".day-label").addClass("wrong-label");
    //         $(".month-label").addClass("wrong-label");
    //         $(".year-label").addClass("wrong-label");
    //         $(".day-p").addClass("p-wrong");
    //         $(".month-p").addClass("p-wrong");
    //         $(".year-p").addClass("p-wrong");

    //     } else if (day > 31 && month <= 12 && year <= todayYear) {
    //         console.log("wrong date");
    //         $(".day-label").addClass("wrong-label");
    //         $(".day-input").addClass("wrong-date");
    //         $(".day-p").addClass("p-wrong");
    //     } else if (day <= 31 && month > 12 && year <= todayYear) {
    //         console.log("wrong date");
    //         $(".month-input").addClass("wrong-date");
    //         $(".month-label").addClass("wrong-label");
    //         $(".month-p").addClass("p-wrong");
    //     } else if (day <= 31 && month <= 12 && year > todayYear) {
    //         console.log("wrong date");
    //         $(".year-input").addClass("wrong-date");
    //         $(".year-label").addClass("wrong-label");
    //         $(".year-p").addClass("p-wrong");
    //     }
    // }
})