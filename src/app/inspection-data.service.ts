import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionDataService {
  public formData: any = {
    documents: {},
    blockingPoints: [],
    nonBlockingPoints: [],
    avis: ''
  };

  private currentData = new BehaviorSubject<any | null>(null);
  currentData$ = this.currentData.asObservable();
  results: any = []
  constructor(private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    // Charger une seule fois les données quand le service est instancié
    if (isPlatformBrowser(this.platformId)) {
      // 👉 uniquement côté navigateur
      this.httpClient
        .get<any[]>("https://badge.routeafrique.com:1020/OPRAG/v0/endpoint/CertificatControls/all")
        .subscribe((res) => {
          console.log("✅ Données chargées au démarrage :", res);
          this.results = res;
        });
    }
  }

  searchReports(rapportId: string): Observable<any[]> {
    const results = this.results.filter((item: any) =>
      item.numeroRapport?.toLowerCase().includes(rapportId.toLowerCase())
    );
    return of(results); // on renvoie immédiatement les résultats
  }

  setCurrentData(data: any): void {
    this.currentData.next(data);
  }

  getCurrentData(): any | null {
    return this.currentData.value;
  }
}
