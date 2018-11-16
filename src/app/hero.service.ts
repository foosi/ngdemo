import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api



  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  // dummy method to return the mock HEROES data
  getHeroesByMock(): Hero[] {
    return HEROES;
  }

  // dummy method to return the mock HEROES data by using Observable
  getHeroesByObservable(): Observable<Hero[]> {
    return of(HEROES);
  }

  // real http API call to return the HEROES data
  getHeroes(): Observable<Hero[]> {

    // return of(HEROES);
    this.log('get heroes from herosurl...');
    // return this.http.get<Hero[]>(this.heroesUrl);

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes: ' + heroes)),
        tap(heroes => this.log('fetched heroes x: ' + heroes)),
        catchError(this.handleError('getHeroes', []))
      );

    // return this.http.get<Hero[]>(this.heroesUrl);

  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the heros
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));

    // convert to string
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );


  }

  /** PUT: update the hero on the server */
updateHero (hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}

searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
