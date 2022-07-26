export function inspect(target, propertykey, description) {
    const metodoOriginal = description.value;
    description.value = function (...args) {
        console.log(`--- Método ${propertykey}`);
        console.log(`------ parâmetros; ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------retorno ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return description;
}
