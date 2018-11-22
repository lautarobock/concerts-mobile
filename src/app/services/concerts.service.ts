import { Injectable } from '@angular/core';
import { getJSON } from 'tns-core-modules/http';
import { environment } from '~/env/environment';

@Injectable({
    providedIn: 'root'
})
export class ConcertsService {

    findNext() {
        return getJSON<any[]>(`${environment.backendUrl}/api/concerts`);
    }
}
