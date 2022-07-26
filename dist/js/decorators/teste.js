export function teste(target, property, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`teeeeeeeete!!!`);
        const retorno = metodoOriginal.applay(this, args);
        console.log(`aaaaaaaah ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
