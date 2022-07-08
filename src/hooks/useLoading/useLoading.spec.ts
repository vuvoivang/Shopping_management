import {useLoading} from './useLoading';
describe('useLoading', () => {
  it('call async func and dispatch', async () => {
    const asyncAction = jest.fn().mockResolvedValue('call');
    const dispatch = jest.fn();
    // await to wait for endLoading
    await useLoading(asyncAction)({}, { dispatch });
    expect(asyncAction).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
