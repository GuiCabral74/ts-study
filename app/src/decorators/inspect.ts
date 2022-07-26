export function inspect(
  target: any,
  propertykey: string,
  description: PropertyDescriptor,
) {
  const metodoOriginal = description.value;
  description.value = function (...args: any[]) {
    console.log(`--- Método ${propertykey}`);
    console.log(`------ parâmetros; ${JSON.stringify(args)}`);
    const retorno = metodoOriginal.apply(this, args);
    console.log(`------retorno ${JSON.stringify(retorno)}`);
    return retorno;
  };
  return description;
}
