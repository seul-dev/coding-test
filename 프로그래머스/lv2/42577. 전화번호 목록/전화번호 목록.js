function solution(phone_book) {
    phone_book.sort();

    for (let i = 0; i < phone_book.length - 1; i++) {
        const prefix = phone_book[i];

        if (phone_book[i + 1].startsWith(prefix)) {
            return false; 
        }
    }

    return true; 
}
