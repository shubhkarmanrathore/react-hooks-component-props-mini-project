export function minutesToRead(minutes) {
    if (minutes < 30) {
       const coffeeCount = Math.ceil(minutes / 5)
       return ` • ${"☕️".repeat(coffeeCount)} ${minutes} min read`
    } else {
       const bentoCount = Math.ceil(minutes / 10)
       return ` • ${"🍱".repeat(bentoCount)} ${minutes} min read`
    }
 }