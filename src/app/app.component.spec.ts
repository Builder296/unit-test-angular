import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
fdescribe('game', () => {
  let component: AppComponent;
  let gameNo: number;

  beforeEach(() => {
    component = new AppComponent;
    gameNo = 1;
  });

  it('gameNo = 1 return should be Win!!', () => {
    expect(component.gamePlay(gameNo)).toBe('Win');
  });

  let gameNo2: number;
  beforeEach(() => {
    gameNo2 = 2;
  });
  it('gameNo = 2 return should be Win!!', () => {
    expect(component.gamePlay(gameNo2)).toBe('Win');
  });

  let gameNo3: number;
  beforeEach(() => {
    gameNo3 = 3;
  });
  it('gameNo = 3 return should be Hello!!', () => {
    expect(component.gamePlay(gameNo3)).toBe('Hello');
  });

  let gameNo4: number;
  beforeEach(() => {
    gameNo4 = 4;
  });
  it('gameNo = 4 return should be บิ้ว!!', () => {
    expect(component.gamePlay(gameNo4)).toBe('Error');
  });

  let gameNo5: number;
  beforeEach(() => {
    gameNo5 = 5;
  });
  it('gameNo = 5 return should be Win!!', () => {
    expect(component.gamePlay(gameNo5)).toBe('Win');
  });

  let gameNo6: number;
  beforeEach(() => {
    gameNo6 = 6;
  });
  it('gameNo = 6 return should be Win!!', () => {
    expect(component.gamePlay(gameNo6)).toBe('Win');
  });

  let gameNo7: number;
  beforeEach(() => {
    gameNo7 = 7;
  });
  it('gameNo = 7 return should be Win!!', () => {
    expect(component.gamePlay(gameNo7)).toBe('Win');
  });

  let gameNo33: number;
  beforeEach(() => {
    gameNo33 = 33;
  });
  it('gameNo = 13 return should be Hello!!', () => {
    expect(component.gamePlay(gameNo33)).toBe('Hello');
  });
});
