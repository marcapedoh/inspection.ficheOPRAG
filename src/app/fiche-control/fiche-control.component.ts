import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InspectionData, InspectionDataService } from '../inspection-data.service';

@Component({
  selector: 'app-fiche-control',
  templateUrl: './fiche-control.component.html',
  styleUrls: ['./fiche-control.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class FicheControlComponent implements OnInit {
  formData: InspectionData | null = null;

  // Initialiser avec une structure vide
  emptyForm: InspectionData = {
    rapport_id: '',
    date: '',
    societe: '',
    localisation: '',
    designation: '',
    plaque: '',
    annee: '',
    marque: '',
    model: '',
    parc: '',
    serie: '',
    documents: {
      notice: false,
      maintenance: false,
      conformite: false,
      rapport: false,
      paye: false
    },
    condition: '',
    acces: '',
    partiel: '',
    normeSaisie: "",
    conducteur: '',
    motif: '',
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
    observations: '',
    avis: '',
    recommandations: ''
  };


  constructor(private inspectionDataService: InspectionDataService) { }

  ngOnInit(): void {
    // S'abonner aux changements de données
    this.inspectionDataService.currentData$.subscribe(data => {
      if (data) {
        this.formData = { ...data };
      } else {
        this.formData = { ...this.emptyForm };
      }
    });

    // Initialiser avec les données actuelles si elles existent
    const currentData = this.inspectionDataService.getCurrentData();
    if (currentData) {
      this.formData = { ...currentData };
    } else {
      this.formData = { ...this.emptyForm };
    }
  }

  print(): void {
    window.print();
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
}
