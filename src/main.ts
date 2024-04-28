// main.ts

import Spacecraft from './spacecraft';
import { Planet, ResourceType } from './planet';
import Event from './event';
import navigate from './exploration';
import collectResources from './resourceCollection';
import handleEvent from './eventHandling';
import { getUserInput, displayMessage } from './userInterface';

// Lógica 
async function main() {
  const spaceship: Spacecraft = { health: 100, cargoCapacity: 50, speed: 10 };
  const currentPlanet: Planet = new Planet(ResourceType.Water, ['Storms', 'Floods']);
  const randomEvent: Event = new Event('Meteor Shower', 'Damage to hull');

  navigate('east');
  const collectedResources: string = collectResources<string>(currentPlanet, ResourceType.Water);
  displayMessage(`Recursos recolectados: ${collectedResources}`);
  
  handleEvent(randomEvent);

  const userInput: string = await getUserInput();
  displayMessage(`Usuario ingresó: ${userInput}`);
}

main();
