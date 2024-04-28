"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const planet_1 = require("./planet");
// Implementa una función genérica para recolectar recursos
function collectResources(planet, resourceType) {
    console.log(`Recolectando recursos del planeta...`);
    // Lógica real de recolección de recursos: calcular cantidad, tipo, etc.
    let resources;
    // Lógica para determinar los recursos basada en el tipo especificado
    switch (resourceType) {
        case planet_1.ResourceType.Water:
            resources = 'Agua'; // Ejemplo: asignación de recursos de agua como cadena
            break;
        case planet_1.ResourceType.Oxygen:
            resources = 100; // Ejemplo: asignación de recursos de oxígeno como número
            break;
        case planet_1.ResourceType.Minerals:
            resources = true; // Ejemplo: asignación de recursos minerales como booleano
            break;
        default:
            throw new Error('Tipo de recurso no válido');
    }
    return resources;
}
exports.default = collectResources;
