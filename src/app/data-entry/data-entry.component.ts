import { Component } from '@angular/core';
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
export class DataEntryComponent {
  step = 1;
  formData: any = {};

  blockingPoints: CheckListItem[] = [
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
    { label: 'Roues, Jantes et leurs Fixations', value: '' },
    { label: 'Klaxon', value: '' },
    { label: 'Rétroviseurs', value: '' },
    { label: 'État de la Benne / Plateau', value: '' },
    { label: "Main d'accouplement", value: '' },
    { label: 'Diagnostic pannes électroniques', value: '' },
    { label: 'Tolérance usure', value: '' },
    { label: 'Système de charge batterie', value: '' },
    { label: 'Essai freinage', value: '' },
    { label: 'Fonctionnement manomètre de pression', value: '' },
    { label: 'Flexibles de freinage', value: '' },
    { label: 'Suspension', value: '' },
    { label: 'Amortisseurs', value: '' },
    { label: 'Bavette Arrière / Couvre roue', value: '' },
    { label: "État des bonbonnes d'air", value: '' }
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
  nonBlockingPoints: CheckListItem[] = [
    { label: "Plaques d'immatriculation", value: '' },
    { label: 'Trousse premier secours', value: '' },
    { label: 'Feux de détresses', value: '' },
    { label: 'Gyrophares', value: '' },
    { label: 'Essuie-Glaces', value: '' },
    { label: 'Ceinture de Sécurité', value: '' },
    { label: 'Coupe batterie', value: '' },
    { label: 'Carrosserie', value: '' },
    { label: 'Cabine / habitacle', value: '' },
    { label: 'Pneu et Pneu de secours', value: '' }
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

  onCheckboxChange(item: CheckListItem, value: string) {
    if (item.value === value) {
      item.value = '';
    } else {
      item.value = value;
    }
  }

  addRow(tableType: 'blocking' | 'non-blocking') {
    const newItem: CheckListItem = { label: '', value: '', isNew: true };
    if (tableType === 'blocking') {
      this.blockingPoints = [...this.blockingPoints, newItem];
    } else {
      this.nonBlockingPoints = [...this.nonBlockingPoints, newItem];
    }
  }

  onSubmit() {
    this.inspectionDataService.formData = this.formData;
    this.inspectionDataService.formData.blockingPoints = this.blockingPoints
    this.inspectionDataService.formData.nonBlockingPoints = this.nonBlockingPoints
    this.inspectionDataService.formData.avis = this.avis;
    this.router.navigate(['/sheet']);
  }
}
