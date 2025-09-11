import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InspectionDataService } from '../inspection-data.service';

@Component({
  selector: 'app-fiche-control',
  templateUrl: './fiche-control.component.html',
  styleUrls: ['./fiche-control.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class FicheControlComponent implements OnInit {
  formData: any | null = null;
  
  // Constants for pagination calculation (adjusted for footer space)
  private readonly LINES_PER_COLUMN_PAGE1 = 15; // Lines available on page 1 (after header/meta, before footer)
  private readonly LINES_PER_COLUMN_PAGE2 = 18; // Lines available on page 2 (before obs/signatures/footer)
  private readonly TARGET_PAGES = 2;
  private readonly FOOTER_HEIGHT = 80; // Footer height in pixels

  // Initialiser avec une structure vide
  emptyForm: any = {
    numeroRapport: '',
    creationDate: '',
    societe: '',
    localisationCertificationFait: '',
    vehicule: {
      numeroAssurance: '',
      numeroCarteGrise: ''
    },
    utilisateur: {
      nom: '',
      prenom: '',
      inspection: { code: '' }
    },
    noticeInstruction: false,
    livretMaintenance: false,
    conformeReglement: false,
    paye: false,
    moyenAccess: false,
    moyenAccessPartiel: false,
    moyenAccessConducteur: false,
    motifControle: '',
    normeFabrication: '',
    blockingPoints: [
      { label: "Freinage principal", value: "" },
      { label: "Freinage de stationnement", value: "" },
      { label: "Direction", value: "" },
      { label: "Suspension", value: "" },
      { label: "État du châssis", value: "" },
      { label: "État de la caisse", value: "" },
      { label: "État des essieux", value: "" },
      { label: "État des pneus", value: "" }
    ],
    nonBlockingPoints: [
      { label: "État des rétroviseurs", value: "" },
      { label: "État des feux", value: "" },
      { label: "État des essuie-glaces", value: "" },
      { label: "État des sièges", value: "" },
      { label: "État de la cabine", value: "" },
      { label: "État du tableau de bord", value: "" }
    ],
    observationRecommendation: ''
  };

  recommendation: string = ''

  constructor(private inspectionDataService: InspectionDataService) { }

  ngOnInit(): void {
    // S'abonner aux changements de données
    this.inspectionDataService.currentData$.subscribe(data => {
      if (data) {
        this.formData = {
          ...this.emptyForm,
          ...data,
          vehicule: {
            ...this.emptyForm.vehicule,
            ...data.vehicule
          },
          utilisateur: {
            ...this.emptyForm.utilisateur,
            ...data.utilisateur,
            inspection: {
              ...this.emptyForm.utilisateur.inspection,
              ...data.utilisateur?.inspection
            }
          }
        };
        console.log("📄 Données reçues :", this.formData);
        // Calculate optimal distribution for 2-page layout
        this.distributeControlPoints();

      } else {
        this.formData = { ...this.emptyForm };
        this.distributeControlPoints();
      }
    });

    // Initialiser avec les données actuelles si elles existent
    // const currentData = this.inspectionDataService.getCurrentData();
    // if (currentData) {
    //   this.formData = { ...currentData };
    // } else {
    //   this.formData = { ...this.emptyForm };
    // }
  }

  print(): void {
    window.print();
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  // Méthode pour mettre à jour la valeur d'un point de contrôle
  updatePointValue(point: any, value: string): void {
    point.value = value;
  }

  // Méthode pour réinitialiser le formulaire
  resetForm(): void {
    this.formData = { ...this.emptyForm };
    this.inspectionDataService.setCurrentData(this.emptyForm);
  }

  // Calculate optimal distribution for 2-page, 2-column layout
  private distributeControlPoints(): void {
    if (!this.formData) {
      return;
    }

    // Ensure blocking and non-blocking points exist
    const blockingPoints = this.formData.blockingPoints || [];
    const nonBlockingPoints = this.formData.nonBlockingPoints || [];
    const allPoints = [...blockingPoints, ...nonBlockingPoints];
    
    // Calculate total available space across both pages
    const page1Capacity = this.LINES_PER_COLUMN_PAGE1 * 2; // 2 columns on page 1
    const page2Capacity = this.LINES_PER_COLUMN_PAGE2 * 2; // 2 columns on page 2
    const totalCapacity = page1Capacity + page2Capacity;
    
    // Determine if we need to add empty rows to fill the structure evenly
    const targetTotalPoints = Math.min(totalCapacity, Math.max(allPoints.length, page1Capacity));
    const emptyPointsNeeded = Math.max(0, targetTotalPoints - allPoints.length);
    
    // Add empty points to maintain structure
    for (let i = 0; i < emptyPointsNeeded; i++) {
      allPoints.push({ label: '', value: '' });
    }

    // Smart distribution: Fill page 1 first, then page 2
    const pointsForPage1 = Math.min(allPoints.length, page1Capacity);
    const pointsPerColumnPage1 = Math.ceil(pointsForPage1 / 2);
    
    // Page 1 columns
    this.formData.controlPoints1 = allPoints.slice(0, pointsPerColumnPage1);
    this.formData.controlPoints2 = allPoints.slice(pointsPerColumnPage1, pointsForPage1);
    
    // Page 2 columns (remaining points)
    const remainingPoints = allPoints.slice(pointsForPage1);
    const pointsPerColumnPage2 = Math.ceil(remainingPoints.length / 2);
    
    this.formData.controlPoints3 = remainingPoints.slice(0, pointsPerColumnPage2);
    this.formData.controlPoints4 = remainingPoints.slice(pointsPerColumnPage2);

    // Ensure all arrays exist even if empty
    this.formData.controlPoints1 = this.formData.controlPoints1 || [];
    this.formData.controlPoints2 = this.formData.controlPoints2 || [];
    this.formData.controlPoints3 = this.formData.controlPoints3 || [];
    this.formData.controlPoints4 = this.formData.controlPoints4 || [];

    console.log('Smart Distribution:', {
      total: allPoints.length,
      page1Total: pointsForPage1,
      page2Total: remainingPoints.length,
      col1: this.formData.controlPoints1.length,
      col2: this.formData.controlPoints2.length,
      col3: this.formData.controlPoints3.length,
      col4: this.formData.controlPoints4.length
    });
  }
}
