import { Planet, ResourceType } from './planet';

// Implementa una función genérica para recolectar recursos
function collectResources<T>(planet: Planet, resourceType: ResourceType): T {
  console.log(`Recolectando recursos del planeta...`);
  // Lógica real de recolección de recursos: calcular cantidad, tipo, etc.
  let resources: T;

  // Lógica para determinar los recursos basada en el tipo especificado
  switch (resourceType) {
    case ResourceType.Water:
      resources = 'Agua' as unknown as T; // Ejemplo: asignación de recursos de agua como cadena
      break;
    case ResourceType.Oxygen:
      resources = 100 as unknown as T; // Ejemplo: asignación de recursos de oxígeno como número
      break;
    case ResourceType.Minerals:
      resources = true as unknown as T; // Ejemplo: asignación de recursos minerales como booleano
      break;
    default:
      throw new Error('Tipo de recurso no válido');
  }

  return resources;
}

export default collectResources;