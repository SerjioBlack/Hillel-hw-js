export function processInput(input: string | number): number {
    if (typeof input === 'number') {
        return input ** 2; // Повертає квадрат числа
    } else {
        return input.length; // Повертає довжину рядка
    }
}