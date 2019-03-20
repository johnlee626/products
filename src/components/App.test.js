import React from 'react';
import { shallow } from 'enzyme';
import ListingCards from './listing_cards/listing_cards.component';

describe('Render list cards', () => {
  it('should create a list of cards', () => {
    const listings = ['one', 'two', 'three'];
    const wrapper = shallow(<ListingCards listings={listings} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('Avatar')).toBeDefined();
  });
});
