import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // si standalone
import { OlympicService } from '../../services/olympic.service';
import { Olympic } from '../../models/olympic';

@Component({
  selector: 'app-testolympic-component',
  templateUrl: './testolympic-component.html',
  styleUrls: ['./testolympic-component.scss'],
  
  standalone: true,
  imports: [CommonModule],
})
export class TestolympicComponentComponent implements OnInit {
  data: Olympic[] | null = null;
  loading = true;
  error = false;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicService.loadInitialData().subscribe({
      next: (res) => { this.data = res; this.loading = false; },
      error: (err) => { console.error(err); this.error = true; this.loading = false; }
    });
  }
}
