

(()=>{

    const saludo :String  = "Hola Muendo";
    console.log(saludo)
})();

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario') as HTMLFormElement;
    const inputTexto = document.getElementById('texto') as HTMLInputElement;

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        const texto: string = inputTexto.value;
        console.log('Texto introducido:', texto);
        inputTexto.value = '';
    };

    formulario.addEventListener('submit', handleSubmit);
});

type Alignment = "center" | "left" | "right";

const alignHTMLElement = (alignment: Alignment): void => {
    console.log(`Alineando elemento a: ${alignment}`);
};

alignHTMLElement("center");
alignHTMLElement("left");
alignHTMLElement("right");

const calcularPrecioConImpuestos = (precio: number, impuesto: number = 21): number => {
    return precio + (precio * impuesto / 100);
};

const addAllThisNumbers = (num1: number, num2: number, ...restOfNumbers: number[]): number => {
    return [num1, num2, ...restOfNumbers].reduce((sum, num) => sum + num, 0);
};

const printHumanReadableDate = (date: string | Date): string => {
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    
    const opciones: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    return dateObject.toLocaleDateString('es-ES', opciones);
};

// Ejemplos:
console.log(calcularPrecioConImpuestos(100));
console.log(calcularPrecioConImpuestos(100, 10));

console.log(addAllThisNumbers(5, 7));
console.log(addAllThisNumbers(99, 100, 199));

console.log(printHumanReadableDate('2025-01-15T11:56:03.673Z'));
console.log(printHumanReadableDate(new Date()));