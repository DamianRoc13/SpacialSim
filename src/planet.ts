enum ResourceType {
    Water,
    Oxygen,
    Minerals,
  }
  
  // Define la clase para representar un planeta
  class Planet {
    constructor(public resourceType: ResourceType, public hazards: string[]) {}
  }
  
  export { Planet, ResourceType };