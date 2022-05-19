import * as DefaultHello from './Default/index';
import * as PlanetHello from './Planet/index';
import * as WorldHello from './World/index';

export const Default = DefaultHello.component;
export const DefaultTypes = DefaultHello.types;
export const Planet = PlanetHello.component;
export const PlanetTypes = PlanetHello.types;
export const World = WorldHello.component;
export const WorldTypes = WorldHello.types;

export default {
  Default,
  DefaultTypes,
  Planet,
  PlanetTypes,
  World,
  WorldTypes,
};
