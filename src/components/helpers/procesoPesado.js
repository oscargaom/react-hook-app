
export const procesoPesado = (iteraciones) => {
        
    for (let index = 0; index < iteraciones; index++) {

        console.log("Proceso pesado en ejecución");
    }

    return `El proceso ha ejecutado ${iteraciones} iteraciones.`;
}