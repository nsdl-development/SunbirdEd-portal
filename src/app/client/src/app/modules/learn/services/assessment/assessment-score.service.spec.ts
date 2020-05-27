import { CoreModule } from '@sunbird/core';
import { CourseProgressService } from '@sunbird/learn';
import { TestBed } from '@angular/core/testing';
import { SharedModule } from '@sunbird/shared';
import { AssessmentScoreService } from './assessment-score.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AssessmentScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [SharedModule.forRoot(), CoreModule, HttpClientTestingModule],
    providers: [CourseProgressService, AssessmentScoreService]
  }));

  it('should be created', () => {
    const service: AssessmentScoreService = TestBed.get(AssessmentScoreService);
    expect(service).toBeTruthy();
  });
});
