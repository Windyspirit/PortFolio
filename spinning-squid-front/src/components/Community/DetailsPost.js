import './detailpost.scss';

const DetailsPost = (props) => {
  if (!props.postAddIsLoading || props.detailsNotMatching) {
    props.getArticleDetails(props.articleId);
    props.setOnLoading();
  }

  return (
    <div id="detailpost" className="main-container">
      <h2 className="title community-title">Whassup ?!</h2>
      <div className="detailpost-block">
        <img className="detailpost-image" alt="" src={props.image} />
        <div className="detailpost-resume">
          <div>
            <h2 className="title detailpost-title" type="text">
              {props.title}
            </h2>
          </div>
          <div>
            <h2 className="detailpost-adress">{props.place}</h2>
          </div>
          <div>
            <h2 className="detailpost-date">{props.date}</h2>
          </div>
        </div>
      </div>
      <div className="detailpost-description">
        <h2>Description</h2>
        <div dangerouslySetInnerHTML={{ __html: props.story }} />
      </div>
    </div>
  );
};
export default DetailsPost;
