import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-hover.png';

const ArticleList = (list) => {
  // console.log('test' + list.itemList);
  // console.log('isLogged:' + list.userLogged);

  const mappingArticles = list.itemList.map((item) => {
    const getImageURL = () => {
      // Vérification : l'annonce a-t-elle une image
      //call api wordpress
      // if (
      //   item._embedded['wp:featuredmedia'] &&
      //   item._embedded['wp:featuredmedia'][0] &&
      //   item._embedded['wp:featuredmedia'][0].media_details &&
      //   item._embedded['wp:featuredmedia'][0].media_details.sizes
      // ) {
      //   if (item._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
      //     return item._embedded['wp:featuredmedia'][0].media_details.sizes.large
      //       .source_url;
      //   } else if (
      //     item._embedded['wp:featuredmedia'][0].media_details.sizes.full
      //   ) {
      //     return item._embedded['wp:featuredmedia'][0].media_details.sizes.full
      //       .source_url;
      //   } else {
      //     return item._embedded['wp:featuredmedia'][0].source_url;
      //   }
      // } else {
      //   return logo;
      // }
      return logo;
    };
    const urlDetailSale = '/trouve-ton-matos/' + item.id;
    return (
      <article key={item.id} className='marketplace-list-item'>
        <h2 className='article-list-title'>
          {/* {item.title.rendered} */}
          {item.title}
        </h2>
        {/* <p>{item.meta.price}€</p> */}
        <p>{item.price}€</p>
        {/* <p>{item.meta.place}</p> */}
        <p>{item.place}</p>
        <div className='item-image'>
          <img src={getImageURL()} alt='' />
        </div>
        <div>
          {list.userLogged && (
            <Link to={urlDetailSale}>
              <button className='button' type='button'>
                Voir
              </button>
            </Link>
          )}
          {!list.userLogged && (
            <Link to='/connexion'>
              <button className='button' type='button'>
                Voir
              </button>
            </Link>
          )}
        </div>
      </article>
    );
  });
  return (
    <>
      <div className='article-list'>{mappingArticles}</div>
    </>
  );
};
export default ArticleList;
