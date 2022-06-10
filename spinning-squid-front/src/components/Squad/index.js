import './squad.scss';
import thomas from '../../assets/img/thomas.png';
import clara from '../../assets/img/clara.png';
import lucas from '../../assets/img/lucas.png';
import romain from '../../assets/img/romain.png';
import geoffrey from '../../assets/img/geoffrey.png';

const Squad = () => (
  <div className='main-container'>
    <h1 className='title'>Spinning SQUAD</h1>
    <div className='squad-container'>
      <div className='item-container'>
        <img className='item-image' alt='' src={geoffrey} />
        <h3 className='item-name'>Geoffrey</h3>
        <h3 className='item-role'>Led Dev Front</h3>
      </div>
      <div className='item-container'>
        <img className='item-image' alt='' src={clara} />
        <h3 className='item-name'>Clara</h3>
        <h3 className='item-role'>Product Owner</h3>
      </div>
      <div className='item-container'>
        <img className='item-image' alt='' src={thomas} />
        <h3 className='item-name'>Thomas</h3>
        <h3 className='item-role'>Ref Tech</h3>
      </div>
      <div className='item-container'>
        <img className='item-image' alt='' src={romain} />
        <h3 className='item-name'>Romain</h3>
        <h3 className='item-role'>
          Scrum Master <br></br> Led Dev Back
        </h3>
      </div>
      <div className='item-container'>
        <img className='item-image' alt='' src={lucas} />
        <h3 className='item-name'>Lucas</h3>
        <h3 className='item-role'>Git Master</h3>
      </div>
    </div>
  </div>
);

export default Squad;
