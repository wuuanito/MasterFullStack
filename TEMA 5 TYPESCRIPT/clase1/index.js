(() => {
    const saludo = "Hola Muendo";
    console.log(saludo);
})();
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const inputTexto = document.getElementById('texto');
    const handleSubmit = (event) => {
        event.preventDefault();
        const texto = inputTexto.value;
        console.log('Texto introducido:', texto);
        inputTexto.value = '';
    };
    formulario.addEventListener('submit', handleSubmit);
});
