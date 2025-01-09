export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`modificando prototype ${target.constructor.name} para injetar em ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando elementod do DOM no seletor
                     ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
