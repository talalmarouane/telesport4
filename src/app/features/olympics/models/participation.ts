/**
 * Interface représentant la participation d’un pays à une édition des Jeux Olympiques.
 */
export interface Participation {
  /** Identifiant unique de la participation */
  id: number;

  /** Année de l’édition des Jeux Olympiques */
  year: number;

  /** Ville hôte de l’édition des Jeux Olympiques */
  city: string;

  /** Nombre total de médailles remportées par le pays */
  medalsCount: number;

  /** Nombre total d’athlètes ayant participé pour ce pays */
  athleteCount: number;
}
