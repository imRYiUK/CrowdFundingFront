import {Project} from "./Project";

export interface Perk {
  id ?: number,
  rewards: string[],
  estimatedDelivery: Date,
  project: Project
}
