function tellTime(hour, minute, period) {

    var description = "";

    if (minute > 0 && minute < 15) {
        description = "just after";
    } else if (minute == 15) {
        description = "quarter past";
    } else if (minute > 15 && minute < 30) {
        description = "a bit past";
    } else if (minute == 30) {
        description = "half past";
    } else if (minute > 30 && minute < 45) {
        description = "getting towards";
        hour += 1;
    } else if (minute == 45) {
        description = "quarter to";
        hour += 1;
    } else if (minute > 45) {
        description = "almost";
        hour += 1;
    }

    var partOfDay = "";

    if (period == "AM") {
        if (hour == 12 && minute == 0) {
            description = "midnight.";
            hour = "";
        } else {
            partOfDay = "in the morning."
        }
    } else {
        if (hour == 12 && minute == 0) {
            description = "noon.";
            hour = "";
        } else if (hour == 12 || hour < 4) {
            partOfDay = "in the afternoon.";
        } else if (hour < 7) {
            partOfDay = "in the evening.";
        } else {
            partOfDay = "at night.";
        }
    }

    console.log("It's",description,hour,partOfDay);
}

tellTime(12, 1, "PM");