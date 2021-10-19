
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {
  MatIconHarness, MatIconTestingModule,
} from '@angular/material/icon/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTooltipHarness } from '@angular/material/tooltip/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IconButtonComponent } from './icon-button.component';

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconButtonComponent, MatIcon],
      imports: [
        MatButtonModule,
        MatIconTestingModule,
        MatTooltipModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IconButtonComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a button', async () => {
    const button = await loader.getHarness(MatButtonHarness);

    expect(button).toBeDefined();
  });

  it('should contain a button with icon inside', async () => {
    const button = await loader.getHarness(MatButtonHarness);
    const icon = await button.getHarness(MatIconHarness);

    expect(icon).toBeDefined();
    expect(await icon.getName()).toBe('favorite');
  });

  it('should contain a button with tooltip', async () => {
    const tooltip = await loader.getHarness(
      MatTooltipHarness.with({ selector: 'button' })
    );

    expect(tooltip).toBeDefined();

    await tooltip.show();
    expect(await tooltip.getTooltipText()).toBe('Favorito');
  });
});
