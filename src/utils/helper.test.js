import { handleClick } from './helper'

it('handleClick', () => {
  global.open = jest.fn();
  const event = {
    preventDefault: jest.fn(),
    stopPropagation: jest.fn()
  }
  handleClick(event, 'xyz', '2');
  expect(global.open).toBeCalledWith(`https://news.ycombinator.com/xyz?id=2`, "_blank")
  expect(event.preventDefault).toBeCalled()
  expect(event.stopPropagation).toBeCalled()
});
