import { Participation } from './participation';

/**
 * Interface représentant un pays participant aux Jeux Olympiques.
 * Contient les informations d'identification du pays ainsi que
 * la liste de ses participations aux différentes éditions.
 */
export interface Olympic {
  /** Identifiant unique du pays */
  id: number;

  /** Nom du pays */
  country: string;

  /**
   * Liste des participations du pays aux Jeux Olympiques.
   * Chaque participation contient les informations liées à une édition spécifique.
   */
  participations: Participation[];
}
