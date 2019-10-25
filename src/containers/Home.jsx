import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';

const Home = (state) => {
  console.log(state);
  return (
    <>
      <Search />
    </>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, null)(Home);
