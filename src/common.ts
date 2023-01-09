export function capitalize(word: string): string {
    return word
        .toLowerCase()
        .replace(/\w/, firstLetter => firstLetter.toUpperCase());
}