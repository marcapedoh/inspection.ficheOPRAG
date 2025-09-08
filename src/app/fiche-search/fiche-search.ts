import { Component } from '@angular/core';
import { InspectionDataService } from '../inspection-data.service';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-search',
  imports: [FormsModule, DatePipe, NgIf, NgFor],
  templateUrl: './fiche-search.html',
  styleUrl: './fiche-search.scss'
})
export class FicheSearch {
  searchTerm = '';
  searchResults: any[] = [];
  isLoading = false;
  noResults = false;

  constructor(private inspectionDataService: InspectionDataService, private router: Router) { }

  search(): void {
    if (!this.searchTerm.trim()) return;

    this.isLoading = true;
    this.noResults = false;

    this.inspectionDataService.searchReports(this.searchTerm).subscribe({
      next: (results) => {
        this.searchResults = results;
        this.noResults = results.length === 0;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.noResults = true;
      }
    });
  }

  selectReport(report: any): void {
    this.inspectionDataService.setCurrentData(report);
    // Rediriger vers le formulaire si nécessaire
    this.router.navigate(['']);
  }
}
