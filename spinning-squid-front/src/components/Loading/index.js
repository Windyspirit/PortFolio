import ReactLoading from 'react-loading';

const Loading = (props) => {
  return (
    <ReactLoading
      type={'spin'}
      color={props.color}
      height={'100%'}
      width={'100%'}
    />
  );
};
export default Loading;
