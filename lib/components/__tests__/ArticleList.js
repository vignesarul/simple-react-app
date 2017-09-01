import React from 'react';
import ArticleList from '../ArticleList';
import 'babel-polyfill';

import renderer from 'react-test-renderer';

describe('Article List', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    },
    articlesAction: {
      lookupAuthor: jest.fn(() => ({})),
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toEqual(2);
  });
});