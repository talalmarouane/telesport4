import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Olympic } from '../models/olympic';

/**
 * Service chargé de la récupération et du partage des données olympiques.
 * Les données sont chargées depuis un fichier JSON local via HttpClient,
 * puis diffusées à l’aide d’un BehaviorSubject pour permettre la réutilisation
 * et la mise à jour en temps réel dans les composants abonnés.
 */
@Injectable({
  providedIn: 'root'
})
export class OlympicService {

  /** URL du fichier JSON contenant les données olympiques */
  private readonly olympicUrl = '/assets/mock/olympic.json';

  /**
   * Source de données réactive stockant la liste des pays olympiques.
   * BehaviorSubject conserve la dernière valeur émise et la rediffuse
   * automatiquement à tout nouvel abonné.
   */
  private olympics$ = new BehaviorSubject<Olympic[] | null>(null);

  /**
   * Injection du client HTTP Angular permettant la récupération des données.
   */
  constructor(private http: HttpClient) {}

  /**
   * Charge les données initiales depuis le fichier JSON et met à jour le flux réactif.
   * @returns Observable émettant la liste des pays olympiques récupérés.
   */
  loadInitialData(): Observable<Olympic[]> {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((data) => {
        console.log('✅ Données chargées depuis olympic.json :', data);
        this.olympics$.next(data);
      }),
      catchError((error) => {
        console.error('❌ Erreur lors du chargement du fichier olympic.json :', error);
        this.olympics$.next(null);
        return throwError(() => error);
      })
    );
  }

  /**
   * Fournit un flux réactif permettant d’accéder aux données olympiques
   * depuis n’importe quel composant de l’application.
   * @returns Observable émettant la liste des pays ou null en cas d’erreur.
   */
  getOlympics(): Observable<Olympic[] | null> {
    return this.olympics$.asObservable();
  }
}
