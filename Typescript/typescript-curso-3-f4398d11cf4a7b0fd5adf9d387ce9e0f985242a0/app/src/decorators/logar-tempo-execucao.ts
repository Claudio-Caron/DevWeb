export function logarTempoDeExecucao(emSegundos : boolean = false){
    return function(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>){
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos){
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            //implementar a chamada do método pelo desc riptor original do parâmetro
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de de execução : ${(t2-t1)/divisor} ${unidade}`);
            return retorno;
        }
        
        return descriptor;
    }
}