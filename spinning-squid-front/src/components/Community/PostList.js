import { Link } from 'react-router-dom';
import logo2 from '../../assets/img/logo2.png';

const PostList = (list) => {
  // console.log('test' + list.itemList);
  const mappingPosts = list.itemList.map((item) => {
    const getImageURL = () => {
      // Vérification : l'article a-t-il une image
      // if (item._embedded['wp:featuredmedia']) {
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
      //   return { logo2 };
      // }
      return logo2;
    };
    const urlDetailPost = '/communaute/' + item.id;
    return (
      <article
        key={item.id}
        id={'post' + item.id}
        className='community-eventList'
      >
        <div className='eventList-item'>
          <div>
            <img
              id='community-img'
              className='item-image'
              alt=''
              src={getImageURL()}
            />
          </div>
          <div className='item-description'>
            <div>
              <h2 className='item-title'>
                {/* {item.title.rendered} */}
                {item.title}
              </h2>
              {/* <p>{item.meta.place}</p> */}
              <p>{item.place}</p>
              {/* <p>{item.meta.date}</p> */}
              <p>{item.date}</p>
              <div className='description-resume'>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
            <div className='description-link'>
              <Link to={urlDetailPost}>
                <button type='button' className='button'>
                  lire plus <span>&#10148;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  });
  return <div className='community-list-article'>{mappingPosts}</div>;
};

export default PostList;
