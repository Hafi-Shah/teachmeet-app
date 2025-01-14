import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  id: number | undefined;

  constructor() {
    // Retrieve the id from sessionStorage when the service is initialized
    const storedId = sessionStorage.getItem('id');
    if (storedId) {
      this.id = Number(storedId); // Convert to number if available
    }
  }

  storeFacultyId(id: number) {
    sessionStorage.setItem('id', id.toString());
    this.id = id;
  }

  getFacultyId(): number | undefined {
    if (this.id === undefined) {
      console.error('Faculty ID is not available.');
      return undefined; // or throw an error if preferred
    }
    return this.id;
  }

  // Optional: Return a default ID or handle error centrally
  getValidFacultyId(): number {
    const id = this.getFacultyId();
    if (id === undefined) {
      throw new Error('Faculty ID is missing.');
    }
    return id;
  }
}
