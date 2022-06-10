import SearchList from './SearchList';
import MapAndMarkers from './MapAndMarkers';

const BlockMap = (props) => {
  return (
    <>
      <div id='search-list' className='search-list'>
        <SearchList
          itemList={props.responseAPI}
          moveLocationOnMap={props.moveLocationOnMap}
        />
      </div>
      <div className='search-map'>
        <MapAndMarkers
          responseAPI={props.responseAPI}
          locationOnMap={props.locationOnMap}
        />
      </div>
    </>
  );
};
export default BlockMap;
