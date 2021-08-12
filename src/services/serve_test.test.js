import {
  fetchArtists, fetchReleases
} from './musicBrainz';

describe('musicBrainz routes', () => {
  it('fetches Korn', async () => {
    const Korn = (await fetchArtists('Korn')).artists;

    expect(Korn[0].id).toEqual('ac865b2e-bba8-4f5a-8756-dd40d5e39f46');
  });

  it('fetches releases by korn', async () => {
    const id = 'ac865b2e-bba8-4f5a-8756-dd40d5e39f46';
    const releases = await fetchReleases(id);

    expect(releases[0].id).toEqual('01217f30-c009-45cc-847c-43fc3ef8c883');
  });

});
