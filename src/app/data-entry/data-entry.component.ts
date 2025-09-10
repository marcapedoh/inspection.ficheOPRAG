import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InspectionDataService } from '../inspection-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CheckListItem {
  label: string;
  value: string;
  isNew?: boolean;
}

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class DataEntryComponent implements OnInit {
  step = 1;
  formData: any = {};

  allPoints: any[] = [
    { label: 'Roues, Jantes et leurs Fixations', value: '' },
    { label: 'Diagnostic pannes électroniques', value: '' },
    { label: 'Fonctionnement manomètre de pression', value: '' },
    { label: 'Bavette Arrière / Couvre roue', value: '' },
    { label: "État des bonbonnes d'air", value: '' },
    { label: 'Twist Lock + Sangles,Chaînes', value: '' },
    { label: 'Usure Grue camion multi-lève', value: '' },
    { label: 'Dommage visible grue multi-lève', value: '' },
    { label: 'Vérification chassie multi-lève', value: '' },
    { label: 'Vérification vérins multi-lève', value: '' },
    { label: 'Vérification axes,goupilles,galets de guidage', value: '' },
    { label: 'Essai de fonctionnement multi-lève', value: '' },
    { label: 'Assurance', value: '' },
    { label: 'Visite Technique', value: '' },
    { label: 'Carte Grise', value: '' },
    { label: 'Extincteur', value: '' },
    { label: 'EPI', value: '' },
    { label: 'Phares', value: '' },
    { label: 'Clignotants AV/ARR', value: '' },
    { label: 'Feux Gabarit', value: '' },
    { label: 'Feux arrière / Feux Stop', value: '' },
    { label: 'Bip de recul', value: '' },
    { label: 'Klaxon', value: '' },
    { label: 'Rétroviseurs', value: '' },
    { label: 'État de la Benne / Plateau', value: '' },
    { label: "Main d'accouplement", value: '' },
    { label: 'Tolérance usure', value: '' },
    { label: 'Système de charge batterie', value: '' },
    { label: 'Essai freinage', value: '' },
    { label: 'Flexibles de freinage', value: '' },
    { label: 'Suspension', value: '' },
    { label: 'Amortisseurs', value: '' },
    { label: 'Etat des Béquilles', value: '' },
    { label: "Dispositif d'attelage", value: '' },
    { label: 'Usure maillon crochets', value: '' },
    { label: 'Marquage charge multi-lève', value: '' },
    { label: "Plaques d'immatriculation", value: '' },
    { label: 'Trousse premier secours', value: '' },
    { label: 'Feux de détresses', value: '' },
    { label: 'Gyrophares', value: '' },
    { label: 'Essuie-Glaces', value: '' },
    { label: 'Ceinture de Sécurité', value: '' },
    { label: 'Coupe batterie', value: '' },
    { label: 'Etat de la Carrosserie', value: '' },
    { label: 'Etat Cabine / habitacle', value: '' },
    { label: 'Pneu et Pneu de secours', value: '' }
  ];

  moisOptions = [
    { value: 'UN_MOIS', label: '1 MOIS' },
    { value: 'DEUX_MOIS', label: '2 MOIS' },
    { value: 'TROIS_MOIS', label: '3 MOIS' },
    { value: 'QUATRE_MOIS', label: '4 MOIS' },
    { value: 'CINQ_MOIS', label: '5 MOIS' },
    { value: 'SIX_MOIS', label: '6 MOIS' },
    { value: 'SEPT_MOIS', label: '7 MOIS' },
    { value: 'HUIT_MOIS', label: '8 MOIS' },
    { value: 'NEUF_MOIS', label: '9 MOIS' },
    { value: 'DIX_MOIS', label: '10 MOIS' },
    { value: 'ONZE_MOIS', label: '11 MOIS' },
    { value: 'DOUZE_MOIS', label: '12 MOIS' },
    { value: 'TREIZE_MOIS', label: '13 MOIS' },
    { value: 'QUATORZE_MOIS', label: '14 MOIS' },
    { value: 'QUINZE_MOIS', label: '15 MOIS' },
    { value: 'SEIZE_MOIS', label: '16 MOIS' },
    { value: 'DIX_SEPT_MOIS', label: '17 MOIS' },
    { value: 'DIX_HUIT_MOIS', label: '18 MOIS' },
    { value: 'DIX_NEUF_MOIS', label: '19 MOIS' },
    { value: 'VINGT_MOIS', label: '20 MOIS' },
    { value: 'VINGT_UN_MOIS', label: '21 MOIS' },
    { value: 'VINGT_DEUX_MOIS', label: '22 MOIS' },
    { value: 'VINGT_TROIS_MOIS', label: '23 MOIS' },
    { value: 'VINGT_QUATRE_MOIS', label: '24 MOIS' },
  ];

  avis: string = '';

  constructor(
    private router: Router,
    private inspectionDataService: InspectionDataService
  ) { }

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  ngOnInit(): void {
    this.updateColumns();
  }


  onCheckboxChange(item: CheckListItem, value: string) {
    if (item.value === value) {
      item.value = '';
    } else {
      item.value = value;
    }
  }
  points1: any[] = [];
  points2: any[] = [];

  updateColumns(): void {
    const middleIndex = Math.ceil(this.allPoints.length / 2);
    this.points1 = this.allPoints.slice(0, middleIndex);
    this.points2 = this.allPoints.slice(middleIndex);
  }
  addRow() {
    const newItem: CheckListItem = { label: '', value: '', isNew: true };
    this.allPoints.push(newItem);
    this.updateColumns();
  }


  onSubmit() {
    const data = {
      ...this.inspectionDataService.getCurrentData(),
      blockingPoints: this.allPoints,
      nonBlockingPoints: [],
      avis: this.avis
    };

    console.log("🚀 Données envoyées :", data);

    this.inspectionDataService.setCurrentData(data);

    this.router.navigate(['/sheet']);

  }
}
