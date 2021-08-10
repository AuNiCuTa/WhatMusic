import {
  fetchArtists
} from './musicBrainz';

describe('musicBrainz routes', () => {
  it('fetches Korn', async () => {
    const Korn = await fetchArtists('Korn');

    expect(Korn[0].id).toEqual('ac865b2e-bba8-4f5a-8756-dd40d5e39f46');
  });
});
