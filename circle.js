
export function calculateArea(radius) {
    if (radius <= 0) {
        throw new Error('Radius must be a positive number.');
    }
    return Math.PI * radius * radius;
}
