import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MenuDisplayComponent } from './menu-display.component';
import { MenuService } from '../services/menu/menu.service';
import { Food } from '../enitities/food/food';
import { By } from '@angular/platform-browser';

describe('MenuDisplayComponent', () => {
  let component: MenuDisplayComponent;
  let fixture: ComponentFixture<MenuDisplayComponent>;
  
  let menuServiceSpy: jasmine.SpyObj<MenuService>;

  beforeEach(async(() => {
    const serviceSpy = jasmine.createSpyObj("MenuService", ["getMenu"]);

    TestBed.configureTestingModule({
      declarations: [ MenuDisplayComponent ],
      providers: [
        { provide: MenuService, useValue: serviceSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    menuServiceSpy = TestBed.inject(MenuService) as jasmine.SpyObj<MenuService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <h1> with "MENU"', () => {
    const menuElement: HTMLElement = fixture.nativeElement;
    const h1 = menuElement.querySelector("h1");

    expect(h1.textContent).toBe("MENU");
  })

  it('should get menu from MenuService', () => {
    menuServiceSpy.getMenu.and.returnValue([ new Food("hrana", 0)]);

    component.ngOnInit();

    expect(component.menu[0].name).toBe("hrana");
    expect(component.menu.length).toBe(1);
  })

  it('should call lower price', () => {
    const foodSpy = jasmine.createSpyObj("Food", ["lowerPrice"]);

    component.lowerPrice(foodSpy);

    expect(foodSpy.lowerPrice).toHaveBeenCalled();
  })

  it('should call raise price', () => {
    const foodSpy = jasmine.createSpyObj("Food", ["raisePrice"]);

    component.raisePrice(foodSpy);

    expect(foodSpy.raisePrice).toHaveBeenCalled();
  })

  it('should disable the "Lower price" button after click', () => {
    menuServiceSpy.getMenu.and.returnValue([new Food("hrana", 10)]);
    component.ngOnInit();
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector("#lower-btn");
    expect(button.disabled).toBeFalse();
    button.click();

    fixture.detectChanges();
    expect(button.disabled).toBeTrue();
  })

  it('should enable the "Lower price" button after click', () => {
    menuServiceSpy.getMenu.and.returnValue([new Food("hrana", 0)]);
    component.ngOnInit();
    fixture.detectChanges();

    const buttonLower = fixture.nativeElement.querySelector("#lower-btn");
    expect(buttonLower.disabled).toBeTrue();
    fixture.nativeElement.querySelector("#raise-btn").click();

    fixture.detectChanges();
    expect(buttonLower.disabled).toBeFalse();
  })

  it('should disable the "Raise price" button after click', () => {
    menuServiceSpy.getMenu.and.returnValue([new Food("hrana", 990)]);
    component.ngOnInit();
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector("#raise-btn");
    expect(button.disabled).toBeFalse();
    button.click();

    fixture.detectChanges();
    expect(button.disabled).toBeTrue();
  })

  it('should enable the "Raise price" button after click', () => {
    menuServiceSpy.getMenu.and.returnValue([new Food("hrana", 1000)]);
    component.ngOnInit();
    fixture.detectChanges();

    const buttonRaise = fixture.nativeElement.querySelector("#raise-btn");
    expect(buttonRaise.disabled).toBeTrue();
    fixture.nativeElement.querySelector("#lower-btn").click();

    fixture.detectChanges();
    expect(buttonRaise.disabled).toBeFalse();
  })

  it('should change status message to "Needs to be updated"', fakeAsync(() => {
    menuServiceSpy.getMenu.and.returnValue([]);
    component.ngOnInit();
    fixture.detectChanges();

    const h3 = fixture.nativeElement.querySelector("h3");
    expect(h3.textContent).toBe("Up to date");

    fixture.nativeElement.querySelector("#status-btn").click();

    tick(1000);
    fixture.detectChanges();
    
    expect(h3.textContent).toBe("Needs to be updated");
  }))

  it('should change status message to "Up to date"', fakeAsync(() => {
    menuServiceSpy.getMenu.and.returnValue([]);
    component.ngOnInit();
    component.status = "Needs to be updated";
    fixture.detectChanges();

    const h3 = fixture.nativeElement.querySelector("h3");
    expect(h3.textContent).toBe("Needs to be updated");

    fixture.nativeElement.querySelector("#status-btn").click();

    tick(1000);
    fixture.detectChanges();
    
    expect(h3.textContent).toBe("Up to date");
  }))
});
