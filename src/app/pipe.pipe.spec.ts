import { Component } from '@angular/core';
import { PipePipe } from './pipe.pipe';

describe('PipePipe', () => {
  it('create an instance', () => {
    const pipe = new PipePipe();
    expect(pipe).toBeTruthy();
  });
  it('testing', () => {
    const pipe = new PipePipe();
    const data=pipe.transform("rash",2);
    expect(data).toEqual("rashrash");
  });
});
