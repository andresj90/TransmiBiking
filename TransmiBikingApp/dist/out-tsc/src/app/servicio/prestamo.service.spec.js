import { TestBed } from '@angular/core/testing';
import { PrestamoService } from './prestamo.service';
describe('PrestamoService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PrestamoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=prestamo.service.spec.js.map