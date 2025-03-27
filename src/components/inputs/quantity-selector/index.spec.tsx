import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { QuantitySelector } from './index';

describe('QuantitySelector', () => {
  let incrementHandler: VoidFunction;
  let decrementHandler: VoidFunction;

  beforeEach(() => {
    incrementHandler = vi.fn();
    decrementHandler = vi.fn();
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('Should render all elements of the QuantitySelector', () => {
    render(
      <QuantitySelector
        currentQuantity={0}
        increment={incrementHandler}
        decrement={decrementHandler}
      />,
    );

    expect(screen.getByRole('button', { name: '-' })).toBeDefined();
    expect(screen.getByRole('button', { name: '+' })).toBeDefined();
    expect(screen.getByRole('textbox')).toBeDefined();
  });

  it('Should display the current quantity in the textbox', () => {
    render(
      <QuantitySelector
        currentQuantity={0}
        increment={incrementHandler}
        decrement={decrementHandler}
      />,
    );

    expect(screen.getByRole('textbox')).toHaveProperty('value', '0');
  });

  it('Should disable decrement button when current quantity is 0', () => {
    render(
      <QuantitySelector
        currentQuantity={0}
        increment={incrementHandler}
        decrement={decrementHandler}
      />,
    );

    expect(screen.getByRole('button', { name: '-' })).toHaveProperty(
      'disabled',
      true,
    );
  });

  it('Should disable increment button when current quantity is max', () => {
    render(
      <QuantitySelector
        currentQuantity={99}
        increment={incrementHandler}
        decrement={decrementHandler}
      />,
    );

    expect(screen.getByRole('button', { name: '+' })).toHaveProperty(
      'disabled',
      true,
    );
  });

  it('Should disable increment button when current quantity is max according to "maxQuantity" prop', () => {
    render(
      <QuantitySelector
        currentQuantity={7}
        maxQuantity={7}
        increment={incrementHandler}
        decrement={decrementHandler}
      />,
    );

    expect(screen.getByRole('button', { name: '+' })).toHaveProperty(
      'disabled',
      true,
    );
  });

  it('Should trigger increment handler when increment button is clicked', () => {
    render(
      <QuantitySelector
        currentQuantity={0}
        increment={incrementHandler}
        decrement={decrementHandler}
      />,
    );

    const incrementButton = screen.getByRole('button', { name: '+' });

    fireEvent.click(incrementButton);

    expect(incrementHandler).toHaveBeenCalled();
  });

  it('Should trigger decrement handler when decrement button is clicked', () => {
    render(
      <QuantitySelector
        currentQuantity={1}
        increment={incrementHandler}
        decrement={decrementHandler}
      />,
    );

    const decrementButton = screen.getByRole('button', { name: '-' });

    fireEvent.click(decrementButton);

    expect(decrementHandler).toHaveBeenCalled();
  });
});
