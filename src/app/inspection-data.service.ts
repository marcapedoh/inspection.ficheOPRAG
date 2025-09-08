import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';


export interface InspectionData {
  rapport_id: string;
  date: string;
  societe: string;
  localisation: string;
  designation: string;
  plaque: string;
  annee: string;
  marque: string;
  model: string;
  parc: string;
  serie: string;
  normeSaisie: string;
  documents: {
    notice: boolean;
    maintenance: boolean;
    conformite: boolean;
    rapport: boolean;
    paye: boolean;
  };
  condition: string;
  acces: string;
  partiel: string;
  conducteur: string;
  motif: string;
  blockingPoints: Array<{ label: string; value: string }>;
  nonBlockingPoints: Array<{ label: string; value: string }>;
  observations: string;
  avis: string;
  recommandations: string;
}

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

  private sampleData: InspectionData[] = [
    {
      rapport_id: "RPT-2023-001",
      date: "2023-05-15",
      normeSaisie: "AP-RGL-2025",
      societe: "Transport Dupont SA",
      localisation: "Entrepôt principal, Zone Industrielle",
      designation: "Camion frigorifique 20T",
      plaque: "AB-123-CD",
      annee: "2018",
      marque: "Volvo",
      model: "FH 460",
      parc: "PARC-001",
      serie: "V123456789012345678901234567890",
      documents: {
        notice: true,
        maintenance: true,
        conformite: true,
        rapport: false,
        paye: false
      },
      condition: "Bonnes conditions météo",
      acces: "Accès facile",
      partiel: "Non",
      conducteur: "Martin Jean",
      motif: "Contrôle périodique",
      blockingPoints: [
        { label: "Freinage principal", value: "C" },
        { label: "Freinage de stationnement", value: "C" },
        { label: "Direction", value: "C" },
        { label: "Suspension", value: "N.C" },
        { label: "État du châssis", value: "B.E" },
        { label: "État de la caisse", value: "B.E" },
        { label: "État des essieux", value: "B.E" },
        { label: "État des pneus", value: "M.E" }
      ],
      nonBlockingPoints: [
        { label: "État des rétroviseurs", value: "C" },
        { label: "État des feux", value: "N.C" },
        { label: "État des essuie-glaces", value: "C" },
        { label: "État des sièges", value: "B.E" },
        { label: "État de la cabine", value: "B.E" },
        { label: "État du tableau de bord", value: "B.E" }
      ],
      observations: "Pneus à changer rapidement. Suspension à vérifier.",
      avis: "Favorable",
      recommandations: "Remplacer les pneus avant 1000 km. Vérifier le système de suspension."
    },
    {
      rapport_id: "RPT-2023-002",
      date: "2023-06-20",
      normeSaisie: "AP-RGL-2025",
      societe: "Logistique Martin",
      localisation: "Site secondaire, Rue des Industries",
      designation: "Camion plateau 15T",
      plaque: "EF-456-GH",
      annee: "2020",
      marque: "Mercedes",
      model: "Actros",
      parc: "PARC-002",
      serie: "M987654321098765432109876543210",
      documents: {
        notice: true,
        maintenance: false,
        conformite: true,
        rapport: true,
        paye: false
      },
      condition: "Pluie légère",
      acces: "Accès restreint",
      partiel: "Oui",
      conducteur: "Durand Pierre",
      motif: "Contrôle après réparation",
      blockingPoints: [
        { label: "Freinage principal", value: "C" },
        { label: "Freinage de stationnement", value: "C" },
        { label: "Direction", value: "C" },
        { label: "Suspension", value: "C" },
        { label: "État du châssis", value: "B.E" },
        { label: "État de la caisse", value: "B.E" },
        { label: "État des essieux", value: "B.E" },
        { label: "État des pneus", value: "B.E" }
      ],
      nonBlockingPoints: [
        { label: "État des rétroviseurs", value: "C" },
        { label: "État des feux", value: "C" },
        { label: "État des essuie-glaces", value: "N.C" },
        { label: "État des sièges", value: "M.E" },
        { label: "État de la cabine", value: "B.E" },
        { label: "État du tableau de bord", value: "B.E" }
      ],
      observations: "Essuie-glaces à remplacer. Sièges très usés.",
      avis: "Favorable",
      recommandations: "Remplacer les essuie-glaces et les sièges conducteur et passager."
    }
  ];

  private currentData = new BehaviorSubject<InspectionData | null>(null);
  currentData$ = this.currentData.asObservable();
  constructor() { }

  searchReports(rapportId: string): Observable<InspectionData[]> {
    // Simuler une recherche avec délai
    const results = this.sampleData.filter(item =>
      item.rapport_id.toLowerCase().includes(rapportId.toLowerCase())
    );

    return of(results).pipe(delay(500)); // Simuler un délai réseau
  }

  setCurrentData(data: InspectionData): void {
    this.currentData.next(data);
  }

  getCurrentData(): InspectionData | null {
    return this.currentData.value;
  }
}
