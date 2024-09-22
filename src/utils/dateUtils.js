export function addOneDay(date) {
    const newDate = new Date(date); 
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
}

export function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function getChallengeStatus({ startDate, endDate}) {
    const currentDate = new Date();
    if(new Date(endDate) < currentDate) {
        return 'past';
    }
    if(new Date(startDate) > currentDate) {
        return 'upcoming';
    }
    return 'active';
}

export function timeLeft(eventDate) {
    const now = new Date();
    const eventTime = new Date(eventDate);
    // Calculate the difference in milliseconds
    const difference = eventTime - now;
    // If the event has already passed
    if (difference <= 0) {
        return "The event has already passed.";
    }
    // Calculate days, hours, and minutes
    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    return {
        days,
        hours,
        minutes,
    };
}