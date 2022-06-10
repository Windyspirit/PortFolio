import Loading from '../../components/Loading';

const DetailsArticle = (props) => {
  if (!props.saleAddIsLoading || props.detailsNotMatching) {
    // console.log(props.saleId);
    props.getSaleDetails(props.saleId);
    props.setOnLoadingSale();
  }
  return (
    <div className='main-container'>
      <h2 className='title search-title'>Trouve ton Matos</h2>
      <div className='detailarticle-block'>
        <img className='detailarticle-image' alt='' src={props.image} />
        <div className='detailarticle-resume'>
          <h2 className='detailarticle-title' type='text'>
            {props.title}
          </h2>
          <h3 className='detailarticle-adress'>{props.place}</h3>
          <h4 className='detailarticle-price'>{props.price}€</h4>

          <div
            className='detailarticle-description'
            dangerouslySetInnerHTML={{ __html: props.story }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsArticle;
