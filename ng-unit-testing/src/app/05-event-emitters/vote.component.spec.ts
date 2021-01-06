import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise vote changed event when upvoted', () => {
    let totalVotes: number = 0;
    component.voteChanged.subscribe((tv: number) => (totalVotes = tv));

    component.upVote();

    expect(totalVotes).toBe(1);
    expect(component.totalVotes).toBe(1);
  });
});
